const { getContent, saveContent } = require('../_lib/store');
const { requireAuth } = require('../_lib/auth');

module.exports = async function handler(req, res) {
  const session = requireAuth(req, res);
  if (!session) return;

  if (req.method === 'GET') {
    try {
      const content = await getContent();
      res.status(200).json({ ok: true, content });
    } catch (error) {
      res.status(500).json({ ok: false, message: error.message || 'Failed to load content' });
    }
    return;
  }

  if (req.method === 'PUT') {
    try {
      const { content } = req.body || {};
      if (!content || typeof content !== 'object') {
        res.status(400).json({ ok: false, message: 'Invalid content payload' });
        return;
      }

      const saved = await saveContent(content);
      res.status(200).json({ ok: true, content: saved });
    } catch (error) {
      res.status(500).json({ ok: false, message: error.message || 'Failed to save content' });
    }
    return;
  }

  res.status(405).json({ ok: false, message: 'Method not allowed' });
};
