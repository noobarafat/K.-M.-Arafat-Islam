const { createToken, setSessionCookie } = require('../_lib/auth');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, message: 'Method not allowed' });
    return;
  }

  const expectedPassword = process.env.ADMIN_PASSWORD;
  if (!expectedPassword) {
    res.status(500).json({ ok: false, message: 'Admin password is not configured on server.' });
    return;
  }

  const { password } = req.body || {};

  if (!password || password !== expectedPassword) {
    res.status(401).json({ ok: false, message: 'Invalid password' });
    return;
  }

  try {
    const token = createToken('admin');
    setSessionCookie(res, token);
    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message || 'Failed to create session' });
  }
};
