async function apiFetch(url, options = {}) {
  const res = await fetch(url, options);
  const data = await res.json().catch(() => ({}));
  if (!res.ok || (data && data.ok === false)) {
    throw new Error(data.message || 'Request failed');
  }
  return data;
}

async function checkSessionAndRedirect() {
  try {
    const session = await apiFetch('/api/admin/session');
    if (session && session.authenticated) {
      window.location.replace('/admin');
    }
  } catch (_) {
    // Let user attempt login.
  }
}

function setLoading(isLoading) {
  const button = document.getElementById('login-submit');
  const text = document.getElementById('login-btn-text');
  button.disabled = isLoading;
  text.textContent = isLoading ? 'Logging in...' : 'Login';
}

function setError(message) {
  document.getElementById('login-error').textContent = message || '';
}

document.getElementById('admin-login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const password = document.getElementById('password-input').value;
  setError('');

  if (!password) {
    setError('Password is required.');
    return;
  }

  setLoading(true);
  try {
    await apiFetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    });
    window.location.replace('/admin');
  } catch (error) {
    setError(error.message || 'Invalid password.');
  } finally {
    setLoading(false);
  }
});

checkSessionAndRedirect();
