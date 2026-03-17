const fs = require('fs');
const path = require('path');
const { formidable } = require('formidable');
const { put } = require('@vercel/blob');
const { requireAuth } = require('../_lib/auth');

const ALLOWED_TYPES = new Set([
  'application/pdf',
  'image/png',
  'image/jpeg',
  'image/webp'
]);

function ensureBlobConfigured() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error('Vercel Blob is not configured. Add BLOB_READ_WRITE_TOKEN before uploading media.');
  }
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
    ensureBlobConfigured();

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
    const blobPath = `${folder}/${Date.now()}-${originalName}`;
    const blob = await put(blobPath, fileBuffer, {
      access: 'public',
      contentType: mimeType,
      addRandomSuffix: false
    });

    res.status(200).json({
      ok: true,
      file: {
        url: blob.url,
        pathname: blob.pathname,
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