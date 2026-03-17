const { createToken, setSessionCookie } = require('../_lib/auth');

const DEFAULT_USERNAME = 'kmarafatislam@gmail.com';
const DEFAULT_PASSWORD = '1234';

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, message: 'Method not allowed' });
    return;
  }

  const expectedUsername = process.env.ADMIN_USERNAME || DEFAULT_USERNAME;
  const expectedPassword = process.env.ADMIN_PASSWORD || DEFAULT_PASSWORD;

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
