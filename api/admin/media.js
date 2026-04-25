const fs = require('fs');
const path = require('path');
const { formidable } = require('formidable');
const { put } = require('@vercel/blob');
const { kv } = require('@vercel/kv');
const { requireAuth } = require('../_lib/auth');

const ALLOWED_TYPES = new Set([
  'application/pdf',
  'image/png',
  'image/jpeg',
  'image/webp'
]);

const MEDIA_KV_PREFIX = process.env.MEDIA_KV_PREFIX || 'portfolio:media:';

function hasKvConfig() {
  return Boolean(process.env.KV_REST_API_URL || process.env.KV_URL || process.env.KV_REST_API_TOKEN);
}

function hasBlobConfig() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

function ensureBlobConfigured() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error('Vercel Blob is not configured. Add BLOB_READ_WRITE_TOKEN before uploading media.');
  }
}

function generateMediaId(originalName) {
  const rand = Math.random().toString(36).slice(2, 10);
  return `${Date.now()}-${rand}-${sanitizeFileName(originalName || 'file')}`;
}

function parseForm(req) {
  const form = formidable({
    multiples: false,
    maxFiles: 1,
    maxFileSize: 50 * 1024 * 1024,
    keepExtensions: true
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (error, fields, files) => {
      if (error) {
        reject(error);
        return;
      }
      resolve({ fields, files });
    });
  });
}

function getSingleValue(value, fallback = '') {
  if (Array.isArray(value)) return value[0] || fallback;
  return value || fallback;
}

function sanitizeFileName(fileName) {
  return fileName.replace(/[^a-zA-Z0-9._-]/g, '-');
}

module.exports = async function handler(req, res) {
  const session = requireAuth(req, res);
  if (!session) return;

  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, message: 'Method not allowed' });
    return;
  }

  try {
    const { fields, files } = await parseForm(req);
    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    const folder = getSingleValue(fields.folder, 'certificates');

    if (!file) {
      res.status(400).json({ ok: false, message: 'No file uploaded' });
      return;
    }

    const mimeType = file.mimetype || 'application/octet-stream';
    if (!ALLOWED_TYPES.has(mimeType)) {
      res.status(400).json({ ok: false, message: 'Unsupported file type. Use PDF, PNG, JPG, or WEBP.' });
      return;
    }

    const fileBuffer = await fs.promises.readFile(file.filepath);
    const originalName = sanitizeFileName(file.originalFilename || path.basename(file.filepath));

    if (hasBlobConfig()) {
      ensureBlobConfigured();
      const blobPath = `${folder}/${Date.now()}-${originalName}`;
      const blob = await put(blobPath, fileBuffer, {
        access: 'public',
        contentType: mimeType,
        addRandomSuffix: false
      });

      res.status(200).json({
        ok: true,
        storage: 'blob',
        file: {
          url: blob.url,
          pathname: blob.pathname,
          contentType: mimeType,
          size: file.size || fileBuffer.length
        }
      });
      return;
    }

    if (!hasKvConfig()) {
      res.status(500).json({ ok: false, message: 'No shared media storage configured. Connect Blob or KV.' });
      return;
    }

    const mediaId = generateMediaId(originalName);
    const kvKey = `${MEDIA_KV_PREFIX}${mediaId}`;
    await kv.set(kvKey, {
      id: mediaId,
      folder,
      originalName,
      contentType: mimeType,
      size: file.size || fileBuffer.length,
      dataBase64: fileBuffer.toString('base64'),
      uploadedAt: new Date().toISOString()
    });

    res.status(200).json({
      ok: true,
      storage: 'kv',
      file: {
        url: `/api/media/${encodeURIComponent(mediaId)}`,
        pathname: `media/${mediaId}`,
        contentType: mimeType,
        size: file.size || fileBuffer.length
      }
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message || 'Failed to upload media' });
  }
};

module.exports.config = {
  api: {
    bodyParser: false
  }
};