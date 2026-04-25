const { getSessionFromRequest } = require('../_lib/auth');

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ ok: false, message: 'Method not allowed' });
    return;
  }

  try {
    const session = getSessionFromRequest(req);
    if (!session) {
      res.status(200).json({ ok: true, authenticated: false });
      return;
    }

    res.status(200).json({ ok: true, authenticated: true, username: session.username });
  } catch (error) {
    res.status(200).json({ ok: true, authenticated: false });
  }
};
