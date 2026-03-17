const { createToken, setSessionCookie } = require('../_lib/auth');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, message: 'Method not allowed' });
    return;
  }

  const expectedUsername = process.env.ADMIN_USERNAME;
  const expectedPassword = process.env.ADMIN_PASSWORD;

  if (!expectedUsername || !expectedPassword) {
    res.status(500).json({ ok: false, message: 'Admin credentials are not configured' });
    return;
  }

  const { username, password } = req.body || {};

  if (username !== expectedUsername || password !== expectedPassword) {
    res.status(401).json({ ok: false, message: 'Invalid credentials' });
    return;
  }

  try {
    const token = createToken(username);
    setSessionCookie(res, token);
    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message || 'Failed to create session' });
  }
};
