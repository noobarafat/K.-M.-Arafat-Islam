const state = {
  content: null,
  sectionKey: 'indexStatic',
  sections: []
};

const sectionDefinitions = [
  {
    key: 'indexStatic',
    title: 'Index Static',
    description: 'SEO, hero, contact, and footer text from the homepage.',
    mode: 'fields',
    fields: [
      { path: 'index.static.seo.title', label: 'SEO Title' },
      { path: 'index.static.seo.description', label: 'SEO Description' },
      { path: 'index.static.hero.name', label: 'Hero Name' },
      { path: 'index.static.hero.subtitlePrimary', label: 'Hero Subtitle Primary' },
      { path: 'index.static.hero.subtitleSecondary', label: 'Hero Subtitle Secondary' },
      { path: 'index.static.hero.description', label: 'Hero Description' },
      { path: 'index.static.contact.emailHref', label: 'Contact Email Href' },
      { path: 'index.static.contact.emailText', label: 'Contact Email Text' },
      { path: 'index.static.contact.linkedinHref', label: 'Contact LinkedIn Href' },
      { path: 'index.static.contact.linkedinText', label: 'Contact LinkedIn Text' },
      { path: 'index.static.contact.location', label: 'Contact Location' },
      { path: 'index.static.footer.copyright', label: 'Footer Copyright' },
      { path: 'index.static.footer.developedText', label: 'Footer Developed Text (HTML allowed)' }
    ]
  },
  { key: 'about', title: 'About Highlights', description: 'Homepage about cards dataset.', mode: 'json', path: 'index.datasets.aboutHighlights', expectedType: 'array' },
  { key: 'publications', title: 'Publications', description: 'Homepage publications dataset.', mode: 'json', path: 'index.datasets.publications', expectedType: 'array' },
  { key: 'activities', title: 'Activities', description: 'Homepage extracurricular dataset.', mode: 'json', path: 'index.datasets.activities', expectedType: 'array' },
  { key: 'skills', title: 'Skills', description: 'Homepage skills and certifications dataset.', mode: 'json', path: 'index.datasets.skills', expectedType: 'array' },
  { key: 'events', title: 'International Events', description: 'Homepage events dataset.', mode: 'json', path: 'index.datasets.internationalEvents', expectedType: 'array' },
  { key: 'search', title: 'Search Index', description: 'Search records from the main overlay.', mode: 'json', path: 'search.searchIndex', expectedType: 'array' },
  { key: 'certificates', title: 'Certificate Files', description: 'All other certificate file names list.', mode: 'json', path: 'certificates.certificateFiles', expectedType: 'array' },
  { key: 'buildsignStatic', title: 'BuildSign Static', description: 'BuildSign hero and SEO static values.', mode: 'fields', fields: [
      { path: 'buildsign.static.seo.title', label: 'BuildSign SEO Title' },
      { path: 'buildsign.static.hero.title', label: 'BuildSign Hero Title' },
      { path: 'buildsign.static.hero.subtitle', label: 'BuildSign Hero Subtitle' },
      { path: 'buildsign.static.hero.links.websiteHref', label: 'BuildSign Website Href' },
      { path: 'buildsign.static.hero.links.linkedinHref', label: 'BuildSign LinkedIn Href' },
      { path: 'buildsign.static.hero.links.emailHref', label: 'BuildSign Email Href' }
    ]
  },
  { key: 'buildsignServices', title: 'BuildSign Services', description: 'BuildSign services cards.', mode: 'json', path: 'buildsign.datasets.buildsignServices', expectedType: 'array' },
  { key: 'buildsignServiceDetails', title: 'BuildSign Service Details', description: 'BuildSign service detail map.', mode: 'json', path: 'buildsign.datasets.buildsignServicesDetails', expectedType: 'object' },
  { key: 'buildsignProcess', title: 'BuildSign Process', description: 'BuildSign process steps.', mode: 'json', path: 'buildsign.datasets.buildsignProcess', expectedType: 'array' },
  { key: 'buildsignWhy', title: 'BuildSign Why', description: 'BuildSign why-us cards.', mode: 'json', path: 'buildsign.datasets.buildsignWhy', expectedType: 'array' },
  { key: 'buildsignFaqs', title: 'BuildSign FAQs', description: 'BuildSign FAQ records.', mode: 'json', path: 'buildsign.datasets.buildsignFAQs', expectedType: 'array' }
];

const loginView = document.getElementById('login-view');
const dashboardView = document.getElementById('dashboard-view');
const sectionNav = document.getElementById('section-nav');
const formRoot = document.getElementById('form-root');
const panelTitle = document.getElementById('panel-title');
const sectionDescription = document.getElementById('section-description');
const saveStatus = document.getElementById('save-status');

function getAtPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
}

function setAtPath(obj, path, value) {
  const keys = path.split('.');
  const last = keys.pop();
  let cursor = obj;
  keys.forEach((key) => {
    if (!Object.prototype.hasOwnProperty.call(cursor, key) || typeof cursor[key] !== 'object' || cursor[key] === null) {
      cursor[key] = {};
    }
    cursor = cursor[key];
  });
  cursor[last] = value;
}

function showStatus(message, type) {
  saveStatus.hidden = false;
  saveStatus.className = `status ${type}`;
  saveStatus.textContent = message;
}

function clearStatus() {
  saveStatus.hidden = true;
  saveStatus.textContent = '';
  saveStatus.className = 'status';
}

function renderNav() {
  sectionNav.innerHTML = sectionDefinitions
    .map((section) => `<button type="button" data-key="${section.key}">${section.title}</button>`)
    .join('');

  sectionNav.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      state.sectionKey = button.dataset.key;
      renderSection();
      clearStatus();
    });
  });
}

function renderFieldsSection(section) {
  const rows = section.fields
    .map((field) => {
      const value = getAtPath(state.content, field.path) ?? '';
      return `
        <label>
          ${field.label}
          <input data-path="${field.path}" type="text" value="${String(value).replace(/"/g, '&quot;')}">
        </label>
      `;
    })
    .join('');

  formRoot.innerHTML = `<div class="inline-grid">${rows}</div>`;
}

function renderJsonSection(section) {
  const value = getAtPath(state.content, section.path);
  formRoot.innerHTML = `
    <label>
      JSON Editor
      <textarea id="json-editor"></textarea>
    </label>
  `;
  const editor = document.getElementById('json-editor');
  editor.value = JSON.stringify(value, null, 2);
}

function renderSection() {
  const section = sectionDefinitions.find((item) => item.key === state.sectionKey) || sectionDefinitions[0];
  state.sectionKey = section.key;

  panelTitle.textContent = section.title;
  sectionDescription.textContent = section.description;

  sectionNav.querySelectorAll('button').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.key === section.key);
  });

  if (section.mode === 'fields') {
    renderFieldsSection(section);
  } else {
    renderJsonSection(section);
  }
}

function collectSectionChange() {
  const section = sectionDefinitions.find((item) => item.key === state.sectionKey);
  if (!section) throw new Error('Section not found');

  if (section.mode === 'fields') {
    formRoot.querySelectorAll('input[data-path]').forEach((input) => {
      setAtPath(state.content, input.dataset.path, input.value);
    });
    return;
  }

  const editor = document.getElementById('json-editor');
  if (!editor) throw new Error('Editor not found');

  let parsed;
  try {
    parsed = JSON.parse(editor.value);
  } catch (error) {
    throw new Error('Invalid JSON format');
  }

  if (section.expectedType === 'array' && !Array.isArray(parsed)) {
    throw new Error('This section requires a JSON array');
  }

  if (section.expectedType === 'object' && (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed))) {
    throw new Error('This section requires a JSON object');
  }

  setAtPath(state.content, section.path, parsed);
}

async function fetchJson(url, options) {
  let response;
  try {
    response = await fetch(url, options);
  } catch (error) {
    throw new Error('Cannot reach API. Run this project with Vercel dev server (for example: npx vercel dev).');
  }

  const contentType = response.headers.get('content-type') || '';
  let data;

  if (contentType.includes('application/json')) {
    data = await response.json();
  } else {
    const text = await response.text();
    const fallbackMessage = response.status === 404
      ? 'API route not found. Start with npx vercel dev so /api routes are available.'
      : `Unexpected API response (HTTP ${response.status}).`;
    throw new Error(text ? `${fallbackMessage}` : fallbackMessage);
  }

  if (!response.ok || !data.ok) {
    throw new Error(data.message || 'Request failed');
  }
  return data;
}

async function loadContent() {
  const data = await fetchJson('/api/admin/content', { method: 'GET' });
  state.content = data.content;
  renderSection();
}

async function ensureSession() {
  const data = await fetchJson('/api/admin/session', { method: 'GET' });

  if (!data.authenticated) {
    loginView.hidden = false;
    dashboardView.hidden = true;
    return;
  }

  document.getElementById('session-user').textContent = data.username || 'admin';
  loginView.hidden = true;
  dashboardView.hidden = false;

  renderNav();

  // Load content after showing dashboard — errors shown in panel, not login
  try {
    await loadContent();
  } catch (error) {
    showStatus('Could not load content: ' + error.message, 'error');
  }
}

document.getElementById('login-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  const errorEl = document.getElementById('login-error');

  try {
    // Step 1: authenticate
    await fetchJson('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    errorEl.hidden = true;
  } catch (error) {
    errorEl.hidden = false;
    errorEl.textContent = error.message;
    return;
  }

  // Step 2: load dashboard (separate — login already succeeded)
  try {
    await ensureSession();
  } catch (error) {
    // Session/content error: show dashboard anyway, display error in panel
    loginView.hidden = true;
    dashboardView.hidden = false;
    renderNav();
    showStatus('Logged in. Content load error: ' + error.message, 'error');
  }
});

document.getElementById('save-btn').addEventListener('click', async () => {
  clearStatus();

  try {
    collectSectionChange();

    await fetchJson('/api/admin/content', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: state.content })
    });

    showStatus('Saved successfully.', 'success');
  } catch (error) {
    showStatus(error.message, 'error');
  }
});

document.getElementById('reload-btn').addEventListener('click', async () => {
  clearStatus();
  try {
    await loadContent();
    showStatus('Reloaded latest content.', 'success');
  } catch (error) {
    showStatus(error.message, 'error');
  }
});

document.getElementById('logout-btn').addEventListener('click', async () => {
  clearStatus();
  try {
    await fetchJson('/api/admin/logout', { method: 'POST' });
  } catch (error) {
    // Ignore to allow local reset.
  }

  state.content = null;
  loginView.hidden = false;
  dashboardView.hidden = true;
});

ensureSession().catch((error) => {
  const errorEl = document.getElementById('login-error');
  errorEl.hidden = false;
  errorEl.textContent = error.message;
});
