const { getContent } = require('./_lib/store');

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ ok: false, message: 'Method not allowed' });
    return;
  }

  try {
    const content = await getContent();
    res.status(200).json({ ok: true, content });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message || 'Failed to load content' });
  }
};
