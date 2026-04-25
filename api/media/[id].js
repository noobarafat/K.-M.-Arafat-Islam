const { kv } = require('@vercel/kv');

const MEDIA_KV_PREFIX = process.env.MEDIA_KV_PREFIX || 'portfolio:media:';

function hasKvConfig() {
  return Boolean(process.env.KV_REST_API_URL || process.env.KV_URL || process.env.KV_REST_API_TOKEN);
}

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ ok: false, message: 'Method not allowed' });
    return;
  }

  if (!hasKvConfig()) {
    res.status(500).json({ ok: false, message: 'KV is not configured for media fallback.' });
    return;
  }

  try {
    const mediaId = req.query && req.query.id;
    if (!mediaId || typeof mediaId !== 'string') {
      res.status(400).json({ ok: false, message: 'Missing media id' });
      return;
    }

    const record = await kv.get(`${MEDIA_KV_PREFIX}${mediaId}`);
    if (!record || !record.dataBase64) {
      res.status(404).json({ ok: false, message: 'Media not found' });
      return;
    }

    const buffer = Buffer.from(record.dataBase64, 'base64');
    res.setHeader('Content-Type', record.contentType || 'application/octet-stream');
    res.setHeader('Content-Length', String(buffer.length));
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.status(200).send(buffer);
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message || 'Failed to load media' });
  }
};
