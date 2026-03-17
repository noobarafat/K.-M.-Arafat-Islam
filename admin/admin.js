/* ============================================================
   PORTFOLIO CMS — ADMIN PANEL CONTROLLER
   World-class CMS built on existing content architecture.
   ============================================================ */

/* ── State ── */
const state = {
  content: null,
  view: 'dashboard',
  dirty: false,
  drawerMeta: null,   // { collection, index }  or null for new
  persistence: null
};

/* ── DOM refs ── */
const adminContent    = document.getElementById('admin-content');
const topbarTitle     = document.getElementById('topbar-title');
const topbarActions   = document.getElementById('topbar-actions');
const unsavedBar      = document.getElementById('unsaved-bar');
const editorOverlay   = document.getElementById('editor-overlay');
const editorDrawer    = document.getElementById('editor-drawer');
const drawerTitle     = document.getElementById('drawer-title');
const drawerBody      = document.getElementById('drawer-body');
const drawerSave      = document.getElementById('drawer-save');
const drawerDelete    = document.getElementById('drawer-delete');
const drawerCancel    = document.getElementById('drawer-cancel');
const drawerClose     = document.getElementById('drawer-close');
const sidebarNav      = document.getElementById('sidebar-nav');
const toastContainer  = document.getElementById('toast-container');
const confirmOverlay  = document.getElementById('confirm-overlay');
const mobileSaveFab   = document.getElementById('mobile-save-fab');

/* ── Toast ── */
function toast(msg, type = 'info') {
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle' };
  el.innerHTML = `<i class="fas ${icons[type] || icons.info} toast-icon"></i><span>${msg}</span>`;
  toastContainer.appendChild(el);
  setTimeout(() => {
    el.style.animation = 'toast-out .3s ease forwards';
    setTimeout(() => el.remove(), 310);
  }, 3200);
}

/* ── Confirm dialog ── */
function confirm(title, message) {
  const resolvedTitle = message ? title : 'Please confirm';
  const resolvedMessage = message || title;
  return new Promise(resolve => {
    document.getElementById('confirm-title').textContent = resolvedTitle;
    document.getElementById('confirm-message').textContent = resolvedMessage;
    document.body.classList.add('confirm-open');
    confirmOverlay.classList.add('open');
    const ok = document.getElementById('confirm-ok');
    const cancel = document.getElementById('confirm-cancel');
    const close = (v) => {
      confirmOverlay.classList.remove('open');
      document.body.classList.remove('confirm-open');
      resolve(v);
    };
    ok.onclick     = () => close(true);
    cancel.onclick = () => close(false);
  });
}

/* ── Unsaved changes ── */
function markDirty() {
  state.dirty = true;
  document.body.classList.add('is-dirty');
  unsavedBar.classList.add('visible');
}
function clearDirty() {
  state.dirty = false;
  document.body.classList.remove('is-dirty');
  unsavedBar.classList.remove('visible');
}

/* ── API ── */
async function apiFetch(url, options = {}) {
  let res;
  try {
    res = await fetch(url, options);
  } catch (e) {
    throw new Error('Network error — check connection.');
  }
  const ct = res.headers.get('content-type') || '';
  const data = ct.includes('json') ? await res.json() : await res.text();
  if (!res.ok || (data && data.ok === false)) throw new Error(data.message || `HTTP ${res.status}`);
  return data;
}

async function loadContent() {
  const data = await apiFetch('/api/admin/content');
  state.content = data.content;
  state.persistence = data.persistence || null;
}

async function saveContent() {
  const data = await apiFetch('/api/admin/content', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: state.content })
  });
  state.content = data.content;
  state.persistence = data.persistence || state.persistence;
  clearDirty();
  updateBadges();
}

async function uploadMediaFile(file, folder = 'certificates') {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('folder', folder);

  const data = await apiFetch('/api/admin/media', {
    method: 'POST',
    body: formData
  });

  return data.file;
}

function isLivePersistenceEnabled() {
  return Boolean(state.persistence && state.persistence.live);
}

function renderPersistenceBadge() {
  if (!state.persistence) return '';

  const live = isLivePersistenceEnabled();
  const label = live ? 'Live storage: Vercel KV' : 'Local fallback active';
  const detail = live
    ? 'Admin saves and public reads use the shared backend.'
    : 'Production should use Vercel KV. Local fallback is only suitable for development.';

  return `
    <div class="persistence-banner ${live ? 'live' : 'warning'}">
      <div>
        <strong>${label}</strong>
        <span>${detail}</span>
      </div>
    </div>
  `;
}

/* ── Path helpers ── */
function getAt(obj, path) {
  return path.split('.').reduce((a, k) => (a == null ? undefined : a[k]), obj);
}
function setAt(obj, path, value) {
  const keys = path.split('.');
  const last = keys.pop();
  let cur = obj;
  for (const k of keys) {
    if (typeof cur[k] !== 'object' || cur[k] === null) cur[k] = {};
    cur = cur[k];
  }
  cur[last] = value;
}

/* ── Nav / routing ── */
const VIEW_META = {
  'dashboard':          { title: 'Dashboard',          group: 'Overview' },
  'homepage-settings':  { title: 'Homepage Settings',  group: 'Portfolio' },
  'publications':       { title: 'Publications',        group: 'Portfolio' },
  'activities':         { title: 'Activities / ECA',    group: 'Portfolio' },
  'skills':             { title: 'Skills & Certs',      group: 'Portfolio' },
  'about-highlights':   { title: 'About Highlights',    group: 'Portfolio' },
  'events':             { title: "Int'l Events",         group: 'Portfolio' },
  'buildsign-settings': { title: 'BuildSign Settings',  group: 'BuildSign' },
  'bs-services':        { title: 'Services',             group: 'BuildSign' },
  'bs-process':         { title: 'Process Steps',        group: 'BuildSign' },
  'bs-why':             { title: 'Why Us',               group: 'BuildSign' },
  'bs-faqs':            { title: 'FAQs',                 group: 'BuildSign' },
  'search-index':       { title: 'Search Index',         group: 'System' },
  'certificate-files':  { title: 'Certificate Files',    group: 'System' },
};

function navigate(view) {
  state.view = view;
  const meta = VIEW_META[view] || { title: view };
  topbarTitle.textContent = meta.title;

  sidebarNav.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === view);
  });

  closeSidebar();
  renderView(view);
}

sidebarNav.addEventListener('click', e => {
  const btn = e.target.closest('[data-view]');
  if (btn) navigate(btn.dataset.view);
});

/* ── Badges ── */
const BADGE_PATHS = {
  'publications':       'index.datasets.publications',
  'activities':         'index.datasets.activities',
  'skills':             'index.datasets.skills',
  'about-highlights':   'index.datasets.aboutHighlights',
  'events':             'index.datasets.internationalEvents',
  'bs-services':        'buildsign.datasets.buildsignServices',
  'bs-process':         'buildsign.datasets.buildsignProcess',
  'bs-why':             'buildsign.datasets.buildsignWhy',
  'bs-faqs':            'buildsign.datasets.buildsignFAQs',
  'search-index':       'search.searchIndex',
  'certificate-files':  'certificates.certificateFiles',
};

function updateBadges() {
  if (!state.content) return;
  for (const [view, path] of Object.entries(BADGE_PATHS)) {
    const arr = getAt(state.content, path);
    const el = document.getElementById(`badge-${view}`);
    if (el) el.textContent = Array.isArray(arr) ? arr.length : '?';
  }
}

/* ── Mobile sidebar ── */
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
  document.getElementById('admin-sidebar').classList.toggle('mobile-open');
  document.getElementById('mobile-backdrop').classList.toggle('open');
});
document.getElementById('mobile-backdrop').addEventListener('click', closeSidebar);
function closeSidebar() {
  document.getElementById('admin-sidebar').classList.remove('mobile-open');
  document.getElementById('mobile-backdrop').classList.remove('open');
}

/* ── Unsaved save shortcut ── */
document.getElementById('unsaved-save-topbtn').addEventListener('click', async () => {
  try {
    await saveContent();
    toast('Saved successfully!', 'success');
    renderView(state.view);
  } catch (e) { toast(e.message, 'error'); }
});

if (mobileSaveFab) {
  mobileSaveFab.addEventListener('click', async () => {
    try {
      await saveContent();
      toast('Saved successfully!', 'success');
      renderView(state.view);
    } catch (e) {
      toast(e.message, 'error');
    }
  });
}

/* ── Logout ── */
document.getElementById('logout-btn').addEventListener('click', async () => {
  try { await apiFetch('/api/admin/logout', { method: 'POST' }); } catch (_) {}
  window.location.replace('/admin/login');
});


/* ============================================================
   DRAWER (ITEM EDITOR)
   ============================================================ */
function openDrawer(title, bodyHtml, onSave, onDelete = null) {
  drawerTitle.textContent = title;
  drawerBody.innerHTML = bodyHtml;
  drawerSave.onclick = onSave;
  drawerDelete.style.display = onDelete ? '' : 'none';
  drawerDelete.onclick = onDelete || null;
  editorOverlay.classList.add('open');
  editorDrawer.classList.add('open');
}

function closeDrawer() {
  editorOverlay.classList.remove('open');
  editorDrawer.classList.remove('open');
  document.body.classList.remove('drawer-open');
  drawerBody.innerHTML = '';
}

editorOverlay.addEventListener('click', closeDrawer);
drawerClose.addEventListener('click', closeDrawer);
drawerCancel.addEventListener('click', closeDrawer);

/* ── Helper: get drawer field value ── */
function dVal(id) {
  const el = document.getElementById(id);
  if (!el) return '';
  return el.value.trim();
}

function dChecked(id) {
  const el = document.getElementById(id);
  return el ? el.checked : false;
}

/* Array-chip builder (tags) */
function buildArrayChips(containerId, items = []) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = '';

  items.forEach(val => addChip(el, val));

  const input = document.createElement('input');
  input.dataset.chipInput = '1';
  input.placeholder = 'Add, press Enter…';
  const commitChipValue = () => {
    const v = input.value.trim().replace(/,$/, '');
    if (!v) return;
    addChip(el, v);
    input.value = '';
  };

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      commitChipValue();
    }
    if (e.key === 'Backspace' && !input.value) {
      const chips = el.querySelectorAll('.array-chip');
      if (chips.length) chips[chips.length - 1].remove();
    }
  });

  input.addEventListener('blur', () => {
    // On mobile, users often tap away instead of pressing Enter.
    commitChipValue();
  });

  const addBtn = document.createElement('button');
  addBtn.type = 'button';
  addBtn.className = 'array-chip-add';
  addBtn.setAttribute('aria-label', 'Add value');
  addBtn.innerHTML = '<i class="fas fa-plus"></i>';
  addBtn.addEventListener('click', () => {
    commitChipValue();
    input.focus();
  });

  el.appendChild(input);
  el.appendChild(addBtn);
}

function addChip(container, value) {
  const chip = document.createElement('span');
  chip.className = 'array-chip';
  chip.dataset.val = value;
  chip.innerHTML = `${esc(value)}<button class="array-chip-del" type="button" aria-label="Remove"><i class="fas fa-times"></i></button>`;
  chip.querySelector('.array-chip-del').addEventListener('click', () => chip.remove());
  const input = container.querySelector('input[data-chip-input="1"]');
  if (input) {
    container.insertBefore(chip, input);
  } else {
    container.appendChild(chip);
  }
}

function getChips(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return [];
  return Array.from(el.querySelectorAll('.array-chip')).map(c => c.dataset.val);
}

/* Escape HTML */
function esc(str) {
  if (typeof str !== 'string') str = String(str ?? '');
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* Attr-safe value */
function av(str) {
  if (typeof str !== 'string') str = String(str ?? '');
  return str.replace(/"/g, '&quot;');
}

/* Sub-item list (metrics, highlights, deliverables, etc.) */
function buildSubItems(containerId, items = [], fields = [{ key:'value', placeholder:'Value' }], isEditable = true) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = '';

  items.forEach((item, i) => {
    el.appendChild(makeSubItem(i, item, fields, isEditable));
  });
}

function makeSubItem(index, item, fields, isEditable) {
  const div = document.createElement('div');
  div.className = 'sub-item';
  div.dataset.idx = index;

  const content = document.createElement('div');
  content.className = 'sub-item-content';

  if (typeof item === 'string') {
    const inp = document.createElement('input');
    inp.className = 'field-input';
    inp.value = item;
    inp.dataset.key = '_str';
    inp.style.flex = '1';
    if (!isEditable) inp.readOnly = true;
    content.appendChild(inp);
  } else {
    fields.forEach(f => {
      const wrap = document.createElement('div');
      wrap.style.flex = f.flex || '1';
      const inp = document.createElement('input');
      inp.className = 'field-input';
      inp.value = item[f.key] ?? '';
      inp.placeholder = f.placeholder || f.key;
      inp.dataset.key = f.key;
      if (!isEditable) inp.readOnly = true;
      wrap.appendChild(inp);
      content.appendChild(wrap);
    });
  }

  div.appendChild(content);

  if (isEditable) {
    const del = document.createElement('button');
    del.type = 'button';
    del.className = 'sub-item-del';
    del.innerHTML = '<i class="fas fa-trash"></i>';
    del.addEventListener('click', () => div.remove());
    div.appendChild(del);
  }
  return div;
}

function getSubItems(containerId, fields = [{ key: 'value' }]) {
  const el = document.getElementById(containerId);
  if (!el) return [];
  const items = [];
  el.querySelectorAll('.sub-item').forEach(row => {
    if (fields.length === 1 && fields[0].key === '_str') {
      const inp = row.querySelector('[data-key="_str"]');
      if (inp && inp.value.trim()) items.push(inp.value.trim());
    } else {
      const obj = {};
      let hasVal = false;
      row.querySelectorAll('[data-key]').forEach(inp => {
        if (inp.dataset.key === '_str') return;
        obj[inp.dataset.key] = inp.value;
        if (inp.value.trim()) hasVal = true;
      });
      if (hasVal) items.push(obj);
    }
  });
  return items;
}

function addSubItemBtn(containerId, fields, defaultItem) {
  const el = document.getElementById(containerId);
  const nextBtn = el ? el.nextElementSibling : null;
  if (nextBtn && nextBtn.classList.contains('add-sub-btn')) {
    nextBtn.addEventListener('click', () => {
      const items = getSubItems(containerId, fields);
      const newItem = defaultItem || (fields[0].key === '_str' ? '' : {});
      items.push(newItem);
      buildSubItems(containerId, items, fields);
      addSubItemBtn(containerId, fields, defaultItem);
      const input = document.getElementById(containerId).lastChild?.querySelector('input');
      if (input) input.focus();
    });
  }
}


/* ============================================================
   VIEW ROUTER
   ============================================================ */
function renderView(view) {
  topbarActions.innerHTML = '';

  switch (view) {
    case 'dashboard':          renderDashboard(); break;
    case 'homepage-settings':  renderHomepageSettings(); break;
    case 'publications':       renderCollection('publications'); break;
    case 'activities':         renderCollection('activities'); break;
    case 'skills':             renderCollection('skills'); break;
    case 'about-highlights':   renderCollection('about-highlights'); break;
    case 'events':             renderCollection('events'); break;
    case 'buildsign-settings': renderBuildsignSettings(); break;
    case 'bs-services':        renderCollection('bs-services'); break;
    case 'bs-process':         renderCollection('bs-process'); break;
    case 'bs-why':             renderCollection('bs-why'); break;
    case 'bs-faqs':            renderCollection('bs-faqs'); break;
    case 'search-index':       renderCollection('search-index'); break;
    case 'certificate-files':  renderCertificateFiles(); break;
    default: adminContent.innerHTML = '<div class="empty-view"><i class="fas fa-question-circle"></i><h3>Unknown view</h3></div>';
  }
}

/* ============================================================
   DASHBOARD
   ============================================================ */
function renderDashboard() {
  const c = state.content;
  const pubs   = getAt(c, 'index.datasets.publications')?.length || 0;
  const acts   = getAt(c, 'index.datasets.activities')?.length || 0;
  const skills = getAt(c, 'index.datasets.skills')?.length || 0;
  const about  = getAt(c, 'index.datasets.aboutHighlights')?.length || 0;
  const events = getAt(c, 'index.datasets.internationalEvents')?.length || 0;
  const certs  = getAt(c, 'certificates.certificateFiles')?.length || 0;
  const bsSvc  = getAt(c, 'buildsign.datasets.buildsignServices')?.length || 0;
  const bsFaq  = getAt(c, 'buildsign.datasets.buildsignFAQs')?.length || 0;

  const sections = [
    { view:'homepage-settings', icon:'fas fa-sliders',        colour:'blue',   label:'Homepage Settings', desc:'Hero, SEO, contact, footer' },
    { view:'publications',       icon:'fas fa-file-alt',       colour:'teal',   label:'Publications',       desc:`${pubs} papers` },
    { view:'activities',         icon:'fas fa-bolt',           colour:'yellow', label:'Activities / ECA',   desc:`${acts} items` },
    { view:'skills',             icon:'fas fa-certificate',    colour:'green',  label:'Skills & Certs',     desc:`${skills} items` },
    { view:'about-highlights',   icon:'fas fa-user',           colour:'purple', label:'About Highlights',   desc:`${about} cards` },
    { view:'events',             icon:'fas fa-globe',          colour:'orange', label:"Int'l Events",       desc:`${events} events` },
    { view:'buildsign-settings', icon:'fas fa-building',       colour:'pink',   label:'BuildSign Settings', desc:'Hero, SEO, links' },
    { view:'bs-services',        icon:'fas fa-briefcase',      colour:'blue',   label:'Services',           desc:`${bsSvc} services` },
    { view:'bs-faqs',            icon:'fas fa-question-circle',colour:'teal',   label:'FAQs',              desc:`${bsFaq} FAQs` },
    { view:'certificate-files',  icon:'fas fa-folder-open',   colour:'yellow', label:'Certificate Files',  desc:`${certs} files` },
  ];

  adminContent.innerHTML = `
    <div class="dashboard-header">
      <h2>Welcome back</h2>
      <p>Here's a quick overview of your portfolio content.</p>
    </div>
    <div class="stats-grid">
      <div class="stat-card" onclick="navigate('publications')">
        <div class="stat-card-icon teal"><i class="fas fa-file-alt"></i></div>
        <div class="stat-card-num">${pubs}</div>
        <div class="stat-card-label">Publications</div>
      </div>
      <div class="stat-card" onclick="navigate('activities')">
        <div class="stat-card-icon yellow"><i class="fas fa-bolt"></i></div>
        <div class="stat-card-num">${acts}</div>
        <div class="stat-card-label">Activities</div>
      </div>
      <div class="stat-card" onclick="navigate('skills')">
        <div class="stat-card-icon green"><i class="fas fa-certificate"></i></div>
        <div class="stat-card-num">${skills}</div>
        <div class="stat-card-label">Skills</div>
      </div>
      <div class="stat-card" onclick="navigate('events')">
        <div class="stat-card-icon orange"><i class="fas fa-globe"></i></div>
        <div class="stat-card-num">${events}</div>
        <div class="stat-card-label">Events</div>
      </div>
      <div class="stat-card" onclick="navigate('certificate-files')">
        <div class="stat-card-icon purple"><i class="fas fa-folder-open"></i></div>
        <div class="stat-card-num">${certs}</div>
        <div class="stat-card-label">Certificates</div>
      </div>
      <div class="stat-card" onclick="navigate('bs-services')">
        <div class="stat-card-icon blue"><i class="fas fa-briefcase"></i></div>
        <div class="stat-card-num">${bsSvc}</div>
        <div class="stat-card-label">BS Services</div>
      </div>
    </div>
    <div class="dash-sections">
      ${sections.map(s => `
        <div class="dash-section-card" onclick="navigate('${s.view}')">
          <div class="dash-section-info">
            <div class="dash-section-icon stat-card-icon ${s.colour}">
              <i class="${s.icon}"></i>
            </div>
            <div class="dash-section-text">
              <h4>${s.label}</h4>
              <p>${s.desc}</p>
            </div>
          </div>
          <i class="fas fa-chevron-right dash-section-arrow"></i>
        </div>
      `).join('')}
    </div>
  `;
}


/* ============================================================
   COLLECTION MANAGER — generic list + CRUD
   ============================================================ */

const COLLECTION_CONFIG = {
  'publications': {
    path: 'index.datasets.publications',
    label: 'Publication',
    getTitle: item => item.title || 'Untitled',
    getMeta:  item => `${item.conference || ''} ${item.index ? '· ' + item.index : ''}`,
    getTag:   item => item.publisher || item.index || '',
    tagClass: item => item.publisher === 'Springer' ? 'teal' : 'blue',
    editForm: pubEditForm, newItem: () => ({ id: 'pub-' + Date.now(), title: '', conference: '', index: 'Conference Proceedings', publisher: '', link: '', desc: '' })
  },
  'activities': {
    path: 'index.datasets.activities',
    label: 'Activity',
    getTitle: item => `${item.role} @ ${item.org}`,
    getMeta:  item => (item.category || []).join(', '),
    getTag:   item => (item.metrics?.[0]?.value) ? item.metrics[0].value + ' ' + item.metrics[0].label : '',
    tagClass: () => 'yellow',
    editForm: activityEditForm, newItem: () => ({ id: 'act-' + Date.now(), role: '', org: '', category: [], metrics: [], highlights: [], desc: '' })
  },
  'skills': {
    path: 'index.datasets.skills',
    label: 'Skill',
    getTitle: item => item.name || 'Untitled',
    getMeta:  item => item.issuer || '',
    getTag:   item => (item.tags || [])[0] || '',
    tagClass: () => 'green',
    editForm: skillEditForm, newItem: () => ({ id: 'skill-' + Date.now(), name: '', issuer: '', meta: [], tags: [], certificateLink: '', short: '', details: '' })
  },
  'about-highlights': {
    path: 'index.datasets.aboutHighlights',
    label: 'Highlight',
    getTitle: item => item.title || 'Untitled',
    getMeta:  item => item.short?.substring(0, 80) + '…' || '',
    getTag:   () => '',
    tagClass: () => 'purple',
    editForm: aboutEditForm, newItem: () => ({ id: 'ab-' + Date.now(), title: '', short: '', details: '' })
  },
  'events': {
    path: 'index.datasets.internationalEvents',
    label: 'Event',
    getTitle: item => item.title || 'Untitled',
    getMeta:  item => `${item.institute || ''} · ${item.locationType || ''}`,
    getTag:   item => item.locationType || '',
    tagClass: () => 'orange',
    editForm: eventEditForm, newItem: () => ({ id: 'evt-' + Date.now(), institute: '', title: '', locationType: 'International • Virtual', certificates: [], short: '', details: '' })
  },
  'bs-services': {
    path: 'buildsign.datasets.buildsignServices',
    label: 'Service',
    getTitle: item => item.title || 'Untitled',
    getMeta:  item => item.description?.substring(0, 70) || '',
    getTag:   item => item.icon || '',
    tagClass: () => 'blue',
    editForm: bsServiceEditForm, newItem: () => ({ id: 'svc-' + Date.now(), title: '', description: '', icon: 'fas fa-star' })
  },
  'bs-process': {
    path: 'buildsign.datasets.buildsignProcess',
    label: 'Process Step',
    getTitle: item => `Step ${item.step}: ${item.title}`,
    getMeta:  item => item.description?.substring(0, 70) || '',
    getTag:   () => '',
    tagClass: () => 'teal',
    editForm: bsProcessEditForm, newItem: () => ({ step: '05', title: '', description: '' })
  },
  'bs-why': {
    path: 'buildsign.datasets.buildsignWhy',
    label: 'Why Item',
    getTitle: item => item.title || 'Untitled',
    getMeta:  item => item.description?.substring(0, 70) || '',
    getTag:   () => '',
    tagClass: () => 'teal',
    editForm: bsWhyEditForm, newItem: () => ({ title: '', description: '' })
  },
  'bs-faqs': {
    path: 'buildsign.datasets.buildsignFAQs',
    label: 'FAQ',
    getTitle: item => item.question || 'Untitled',
    getMeta:  item => item.answer?.substring(0, 70) + '…' || '',
    getTag:   () => '',
    tagClass: () => 'blue',
    editForm: bsFaqEditForm, newItem: () => ({ question: '', answer: '' })
  },
  'search-index': {
    path: 'search.searchIndex',
    label: 'Search Record',
    getTitle: item => item.title || 'Untitled',
    getMeta:  item => `${item.type || ''} · ${item.href || ''}`,
    getTag:   item => item.type || '',
    tagClass: () => 'accent',
    editForm: searchItemEditForm, newItem: () => ({ id: 'sr-' + Date.now(), title: '', subtitle: '', keywords: [], type: 'section', href: '', excerpt: '' })
  },
};

/* ── Generic collection renderer ── */
function renderCollection(view) {
  const cfg = COLLECTION_CONFIG[view];
  if (!cfg) { adminContent.innerHTML = '<div class="empty-view"><i class="fas fa-exclamation"></i><h3>No config</h3></div>'; return; }

  const arr = getAt(state.content, cfg.path);
  const items = Array.isArray(arr) ? arr : [];

  // Topbar action
  const addBtn = document.createElement('button');
  addBtn.className = 'btn btn-primary';
  addBtn.innerHTML = `<i class="fas fa-plus"></i> Add ${cfg.label}`;
  addBtn.onclick = () => openItemEditor(view, null);
  topbarActions.appendChild(addBtn);

  const saveBtn = document.createElement('button');
  saveBtn.className = 'btn btn-secondary';
  saveBtn.innerHTML = `<i class="fas fa-save"></i> Save`;
  saveBtn.onclick = async () => {
    try {
      await saveContent();
      toast('Saved!', 'success');
      renderView(view);
    } catch(e) { toast(e.message, 'error'); }
  };
  topbarActions.appendChild(saveBtn);

  let filterVal = '';

  function renderList(filter) {
    const filtered = filter
      ? items.filter(item => {
          const q = filter.toLowerCase();
          return (cfg.getTitle(item) + cfg.getMeta(item)).toLowerCase().includes(q);
        })
      : items;

    const listEl = document.getElementById('collection-list');
    if (!listEl) return;

    const countEl = document.getElementById('list-count');
    if (countEl) countEl.textContent = `${filtered.length} of ${items.length}`;

    if (filtered.length === 0) {
      listEl.innerHTML = `<div class="no-items"><i class="fas fa-inbox"></i><p>${filter ? 'No results for "' + esc(filter) + '"' : 'No items yet.'}</p></div>`;
      return;
    }

    listEl.innerHTML = filtered.map((item, fi) => {
      const realIdx = items.indexOf(item);
      const title = esc(cfg.getTitle(item));
      const meta  = esc(cfg.getMeta(item));
      const tag   = esc(cfg.getTag(item));
      const tc    = cfg.tagClass(item);
      return `
        <div class="collection-item" draggable="true" data-idx="${realIdx}">
          <i class="fas fa-grip-vertical item-drag-handle" title="Drag to reorder"></i>
          <span class="item-index">${realIdx + 1}</span>
          <div class="item-body">
            <div class="item-title">${title}</div>
            <div class="item-meta">${meta}</div>
            ${tag ? `<div class="item-tags"><span class="tag ${tc}">${tag}</span></div>` : ''}
          </div>
          <div class="item-actions">
            <button class="btn btn-ghost btn-sm btn-icon" title="Duplicate" onclick="duplicateItem('${view}',${realIdx})">
              <i class="fas fa-copy"></i>
            </button>
            <button class="btn btn-ghost btn-sm btn-icon" title="Edit" onclick="openItemEditor('${view}',${realIdx})">
              <i class="fas fa-pencil"></i>
            </button>
            <button class="btn btn-danger btn-sm btn-icon" title="Delete" onclick="deleteItem('${view}',${realIdx})">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Drag-and-drop reorder
    enableDragReorder(listEl, view, items);
  }

  adminContent.innerHTML = `
    <div class="page-header">
      <div class="page-header-text">
        <h2>${VIEW_META[view]?.title || view}</h2>
        <p>${items.length} item${items.length !== 1 ? 's' : ''} · drag to reorder</p>
      </div>
    </div>
    <div class="list-toolbar">
      <div class="search-box">
        <i class="fas fa-search"></i>
        <input type="text" id="list-search" placeholder="Search…" autocomplete="off">
      </div>
      <span class="list-count" id="list-count">${items.length} items</span>
    </div>
    <div class="collection-list" id="collection-list"></div>
  `;

  renderList('');

  document.getElementById('list-search').addEventListener('input', e => {
    filterVal = e.target.value;
    renderList(filterVal);
  });
}

/* ── Drag-and-drop reorder ── */
function enableDragReorder(listEl, view, items) {
  let dragSrc = null;

  listEl.addEventListener('dragstart', e => {
    const row = e.target.closest('.collection-item');
    if (!row) return;
    dragSrc = row;
    row.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
  });

  listEl.addEventListener('dragover', e => {
    e.preventDefault();
    const row = e.target.closest('.collection-item');
    if (!row || row === dragSrc) return;
    listEl.querySelectorAll('.drag-over').forEach(r => r.classList.remove('drag-over'));
    row.classList.add('drag-over');
  });

  listEl.addEventListener('drop', e => {
    e.preventDefault();
    const target = e.target.closest('.collection-item');
    if (!target || !dragSrc || target === dragSrc) return;

    const fromIdx = parseInt(dragSrc.dataset.idx);
    const toIdx   = parseInt(target.dataset.idx);
    const arr     = getAt(state.content, COLLECTION_CONFIG[view].path);

    const moved = arr.splice(fromIdx, 1)[0];
    arr.splice(toIdx, 0, moved);

    markDirty();
    renderView(view);
  });

  listEl.addEventListener('dragend', e => {
    listEl.querySelectorAll('.collection-item, .drag-over').forEach(r => {
      r.classList.remove('dragging', 'drag-over');
    });
  });
}

/* ── Delete item ── */
async function deleteItem(view, idx) {
  const ok = await confirm('Delete this item?', 'This will remove it from the collection. Save to make it permanent.');
  if (!ok) return;
  const arr = getAt(state.content, COLLECTION_CONFIG[view].path);
  arr.splice(idx, 1);
  markDirty();
  renderView(view);
  toast('Item deleted. Save to apply.', 'info');
}

/* ── Duplicate item ── */
function duplicateItem(view, idx) {
  const arr = getAt(state.content, COLLECTION_CONFIG[view].path);
  const copy = JSON.parse(JSON.stringify(arr[idx]));
  if (copy.id) copy.id = copy.id + '-copy';
  arr.splice(idx + 1, 0, copy);
  markDirty();
  renderView(view);
  toast('Item duplicated. Save to apply.', 'info');
}


/* ============================================================
   ITEM EDITOR — per-collection form builders
   ============================================================ */

function openItemEditor(view, idx) {
  const cfg = COLLECTION_CONFIG[view];
  if (!cfg) return;

  const arr  = getAt(state.content, cfg.path) || [];
  const isNew = idx === null || idx === undefined;
  const item  = isNew ? cfg.newItem() : JSON.parse(JSON.stringify(arr[idx]));

  const formHtml = cfg.editForm(item);
  drawerTitle.textContent = isNew ? `New ${cfg.label}` : `Edit ${cfg.label}`;
  drawerBody.innerHTML = formHtml;

  // Post-render: wire up dynamic controls
  wireSubItemAddBtns();
  wireArrayChips(item);

  drawerSave.onclick = () => {
    try {
      const updated = cfg.editForm._collect ? cfg.editForm._collect(item) : collectGenericForm(view, item);
      if (isNew) {
        arr.push(updated);
      } else {
        arr[idx] = updated;
      }
      setAt(state.content, cfg.path, arr);
      markDirty();
      closeDrawer();
      renderView(view);
      toast(isNew ? `${cfg.label} added. Save to publish.` : `${cfg.label} updated. Save to publish.`, 'success');
    } catch(e) {
      toast(e.message, 'error');
    }
  };

  drawerDelete.style.display = isNew ? 'none' : '';
  drawerDelete.onclick = async () => {
    closeDrawer();
    await deleteItem(view, idx);
  };

  editorOverlay.classList.add('open');
  editorDrawer.classList.add('open');
  document.body.classList.add('drawer-open');
}

/* Wire array-chip inputs after draw */
function wireArrayChips(item) {
  document.querySelectorAll('[data-chips]').forEach(container => {
    const key = container.dataset.chips;
    const vals = item[key] || [];
    buildArrayChips(container.id, vals);
  });
}

function wireSubItemAddBtns() {
  document.querySelectorAll('.add-sub-btn[data-target]').forEach(btn => {
    const targetId = btn.dataset.target;
    const fieldsJson = btn.dataset.fields || '[]';
    let fields;
    try { fields = JSON.parse(fieldsJson); } catch(_) { fields = [{ key: '_str', placeholder: 'Item' }]; }
    btn.addEventListener('click', () => {
      const container = document.getElementById(targetId);
      if (!container) return;
      const newItem = fields.length === 1 && fields[0].key === '_str' ? '' : {};
      const existing = getSubItems(targetId, fields);
      existing.push(newItem);
      buildSubItems(targetId, existing, fields);
      wireSubItemAddBtns();
    });
  });
}

/* Generic form collector — reads data-path inputs/textareas */
function collectGenericForm(view, originalItem) {
  const obj = JSON.parse(JSON.stringify(originalItem));
  document.querySelectorAll('[data-path]').forEach(el => {
    const path = el.dataset.path;
    if (!path) return;
    setAt(obj, path, el.value);
  });
  // Array chips
  document.querySelectorAll('[data-chips]').forEach(container => {
    const key = container.dataset.chips;
    obj[key] = getChips(container.id);
  });
  // Sub-item lists
  document.querySelectorAll('[data-sublist]').forEach(container => {
    const key    = container.dataset.sublist;
    const fields = JSON.parse(container.dataset.fields || '[{"key":"_str"}]');
    obj[key] = getSubItems(container.id, fields);
  });
  return obj;
}

/* ── Publication form ── */
function pubEditForm(item) {
  return `
    <div class="field-card">
      <div class="field-card-title">Publication Info</div>
      <div class="fields-grid">
        <div class="field-group span-2">
          <label class="field-label">Title *</label>
          <input class="field-input" data-path="title" value="${av(item.title)}">
        </div>
        <div class="field-group span-2">
          <label class="field-label">Conference / Venue</label>
          <input class="field-input" data-path="conference" value="${av(item.conference)}">
        </div>
        <div class="field-group">
          <label class="field-label">Index (e.g. IEEE Xplore)</label>
          <input class="field-input" data-path="index" value="${av(item.index)}">
        </div>
        <div class="field-group">
          <label class="field-label">Publisher</label>
          <input class="field-input" data-path="publisher" value="${av(item.publisher || '')}">
        </div>
        <div class="field-group span-2">
          <label class="field-label">Link (optional)</label>
          <input class="field-input" data-path="link" type="url" value="${av(item.link || '')}">
        </div>
        <div class="field-group span-2">
          <label class="field-label">Description</label>
          <textarea class="field-textarea" data-path="desc">${esc(item.desc || '')}</textarea>
        </div>
      </div>
    </div>
  `;
}

/* ── Activity form ── */
function activityEditForm(item) {
  const metricsJson = JSON.stringify([{key:'label',placeholder:'Label'},{key:'value',placeholder:'Value'}]);
  const highlightsJson = JSON.stringify([{key:'_str',placeholder:'Highlight text'}]);
  return `
    <div class="field-card">
      <div class="field-card-title">Role & Org</div>
      <div class="fields-grid">
        <div class="field-group">
          <label class="field-label">Role</label>
          <input class="field-input" data-path="role" value="${av(item.role)}">
        </div>
        <div class="field-group">
          <label class="field-label">Organisation</label>
          <input class="field-input" data-path="org" value="${av(item.org)}">
        </div>
      </div>
    </div>
    <div class="field-card">
      <div class="field-card-title">Categories</div>
      <div class="field-group">
        <div class="array-chips" id="chips-category" data-chips="category"></div>
        <div class="field-hint">Type a category and press Enter</div>
      </div>
    </div>
    <div class="field-card">
      <div class="field-card-title">Metrics</div>
      <div class="sub-items" id="sublist-metrics" data-sublist="metrics" data-fields='${metricsJson}'></div>
      <button class="add-sub-btn" type="button" data-target="sublist-metrics" data-fields='${metricsJson}'>
        <i class="fas fa-plus"></i> Add Metric
      </button>
    </div>
    <div class="field-card">
      <div class="field-card-title">Highlights</div>
      <div class="sub-items" id="sublist-highlights" data-sublist="highlights" data-fields='${highlightsJson}'></div>
      <button class="add-sub-btn" type="button" data-target="sublist-highlights" data-fields='${highlightsJson}'>
        <i class="fas fa-plus"></i> Add Highlight
      </button>
    </div>
    <div class="field-card">
      <div class="field-card-title">Full Description</div>
      <textarea class="field-textarea tall" data-path="desc">${esc(item.desc || '')}</textarea>
    </div>
  `;
}

/* wire sub-items after render */
function wireActivityForm(item) {
  buildSubItems('sublist-metrics',    item.metrics    || [], [{key:'label',placeholder:'Label'},{key:'value',placeholder:'Value'}]);
  buildSubItems('sublist-highlights', item.highlights || [], [{key:'_str',placeholder:'Highlight text'}]);
}

/* ── Skill form ── */
function skillEditForm(item) {
  const metaJson = JSON.stringify([{key:'_str',placeholder:'Meta tag'}]);
  return `
    <div class="field-card">
      <div class="field-card-title">Basic Info</div>
      <div class="fields-grid">
        <div class="field-group span-2">
          <label class="field-label">Skill Name</label>
          <input class="field-input" data-path="name" value="${av(item.name)}">
        </div>
        <div class="field-group span-2">
          <label class="field-label">Issuer / Institution</label>
          <input class="field-input" data-path="issuer" value="${av(item.issuer)}">
        </div>
        <div class="field-group span-2">
          <label class="field-label">Certificate Asset Path</label>
          <input class="field-input" data-path="certificateLink" value="${av(item.certificateLink || '')}">
          <div class="field-hint">e.g. assets/gpui.jpg</div>
        </div>
      </div>
    </div>
    <div class="field-card">
      <div class="field-card-title">Tags</div>
      <div class="array-chips" id="chips-tags" data-chips="tags"></div>
    </div>
    <div class="field-card">
      <div class="field-card-title">Meta Chips</div>
      <div class="sub-items" id="sublist-meta" data-sublist="meta" data-fields='${metaJson}'></div>
      <button class="add-sub-btn" type="button" data-target="sublist-meta" data-fields='${metaJson}'>
        <i class="fas fa-plus"></i> Add Meta
      </button>
    </div>
    <div class="field-card">
      <div class="field-card-title">Content</div>
      <div class="field-group">
        <label class="field-label">Short description</label>
        <textarea class="field-textarea" data-path="short">${esc(item.short || '')}</textarea>
      </div>
      <div class="field-group" style="margin-top:12px">
        <label class="field-label">Full Details</label>
        <textarea class="field-textarea tall" data-path="details">${esc(item.details || '')}</textarea>
      </div>
    </div>
  `;
}

/* ── About Highlight form ── */
function aboutEditForm(item) {
  return `
    <div class="field-card">
      <div class="field-card-title">Highlight Card</div>
      <div class="field-group">
        <label class="field-label">Title</label>
        <input class="field-input" data-path="title" value="${av(item.title)}">
      </div>
      <div class="field-group" style="margin-top:12px">
        <label class="field-label">Short (card preview)</label>
        <textarea class="field-textarea" data-path="short">${esc(item.short || '')}</textarea>
      </div>
      <div class="field-group" style="margin-top:12px">
        <label class="field-label">Full Details (HTML allowed)</label>
        <textarea class="field-textarea tall code" data-path="details">${esc(item.details || '')}</textarea>
      </div>
    </div>
  `;
}

/* ── International Event form ── */
function eventEditForm(item) {
  const certJson = JSON.stringify([{key:'_str',placeholder:'filename e.g. comtech.png'}]);
  return `
    <div class="field-card">
      <div class="field-card-title">Event Info</div>
      <div class="fields-grid">
        <div class="field-group span-2">
          <label class="field-label">Title</label>
          <input class="field-input" data-path="title" value="${av(item.title)}">
        </div>
        <div class="field-group span-2">
          <label class="field-label">Institute / Organisation</label>
          <input class="field-input" data-path="institute" value="${av(item.institute)}">
        </div>
        <div class="field-group">
          <label class="field-label">Location Type</label>
          <input class="field-input" data-path="locationType" value="${av(item.locationType || '')}">
          <div class="field-hint">e.g. International · Virtual</div>
        </div>
      </div>
    </div>
    <div class="field-card">
      <div class="field-card-title">Certificate Files</div>
      <div class="sub-items" id="sublist-certificates" data-sublist="certificates" data-fields='${certJson}'></div>
      <button class="add-sub-btn" type="button" data-target="sublist-certificates" data-fields='${certJson}'>
        <i class="fas fa-plus"></i> Add File
      </button>
    </div>
    <div class="field-card">
      <div class="field-card-title">Content</div>
      <div class="field-group">
        <label class="field-label">Short</label>
        <textarea class="field-textarea" data-path="short">${esc(item.short || '')}</textarea>
      </div>
      <div class="field-group" style="margin-top:12px">
        <label class="field-label">Full Details</label>
        <textarea class="field-textarea tall" data-path="details">${esc(item.details || '')}</textarea>
      </div>
    </div>
  `;
}

/* ── BuildSign Service form ── */
function bsServiceEditForm(item) {
  const delivJson = JSON.stringify([{key:'_str',placeholder:'Deliverable'}]);
  // service details lives in a parallel map, so we just edit the service card here
  return `
    <div class="field-card">
      <div class="field-card-title">Service Card</div>
      <div class="fields-grid">
        <div class="field-group span-2">
          <label class="field-label">Title</label>
          <input class="field-input" data-path="title" value="${av(item.title)}">
        </div>
        <div class="field-group span-2">
          <label class="field-label">Description</label>
          <textarea class="field-textarea" data-path="description">${esc(item.description)}</textarea>
        </div>
        <div class="field-group">
          <label class="field-label">Icon class (FontAwesome)</label>
          <input class="field-input" data-path="icon" value="${av(item.icon || '')}" placeholder="e.g. fas fa-mobile-alt">
        </div>
      </div>
    </div>
  `;
}

/* ── BuildSign Process form ── */
function bsProcessEditForm(item) {
  return `
    <div class="field-card">
      <div class="field-card-title">Process Step</div>
      <div class="fields-grid">
        <div class="field-group">
          <label class="field-label">Step Number</label>
          <input class="field-input" data-path="step" value="${av(item.step)}">
        </div>
        <div class="field-group">
          <label class="field-label">Title</label>
          <input class="field-input" data-path="title" value="${av(item.title)}">
        </div>
        <div class="field-group span-2">
          <label class="field-label">Description</label>
          <textarea class="field-textarea" data-path="description">${esc(item.description)}</textarea>
        </div>
      </div>
    </div>
  `;
}

/* ── BuildSign Why form ── */
function bsWhyEditForm(item) {
  return `
    <div class="field-card">
      <div class="field-card-title">Why Us Card</div>
      <div class="field-group">
        <label class="field-label">Title</label>
        <input class="field-input" data-path="title" value="${av(item.title)}">
      </div>
      <div class="field-group" style="margin-top:12px">
        <label class="field-label">Description</label>
        <textarea class="field-textarea" data-path="description">${esc(item.description)}</textarea>
      </div>
    </div>
  `;
}

/* ── BuildSign FAQ form ── */
function bsFaqEditForm(item) {
  return `
    <div class="field-card">
      <div class="field-card-title">FAQ</div>
      <div class="field-group">
        <label class="field-label">Question</label>
        <input class="field-input" data-path="question" value="${av(item.question)}">
      </div>
      <div class="field-group" style="margin-top:12px">
        <label class="field-label">Answer</label>
        <textarea class="field-textarea tall" data-path="answer">${esc(item.answer)}</textarea>
      </div>
    </div>
  `;
}

/* ── Search index form ── */
function searchItemEditForm(item) {
  return `
    <div class="field-card">
      <div class="field-card-title">Search Record</div>
      <div class="fields-grid">
        <div class="field-group span-2">
          <label class="field-label">Title</label>
          <input class="field-input" data-path="title" value="${av(item.title)}">
        </div>
        <div class="field-group">
          <label class="field-label">Subtitle</label>
          <input class="field-input" data-path="subtitle" value="${av(item.subtitle || '')}">
        </div>
        <div class="field-group">
          <label class="field-label">Type</label>
          <select class="field-select" data-path="type">
            ${['section','page','details','publication','skill'].map(t => `<option value="${t}" ${item.type===t?'selected':''}>${t}</option>`).join('')}
          </select>
        </div>
        <div class="field-group span-2">
          <label class="field-label">Href (link)</label>
          <input class="field-input" data-path="href" value="${av(item.href || '')}">
        </div>
        <div class="field-group span-2">
          <label class="field-label">Excerpt</label>
          <input class="field-input" data-path="excerpt" value="${av(item.excerpt || '')}">
        </div>
      </div>
    </div>
    <div class="field-card">
      <div class="field-card-title">Keywords</div>
      <div class="array-chips" id="chips-keywords" data-chips="keywords"></div>
    </div>
  `;
}


/* ============================================================
   POST-RENDER WIRING — called after editForm renders into drawer
   ============================================================ */
function wireFormAfterRender(view, item) {
  // wire array chips
  wireArrayChips(item);
  // wire sub-item lists (pre-populate)
  document.querySelectorAll('[data-sublist]').forEach(container => {
    const key    = container.dataset.sublist;
    const fields = JSON.parse(container.dataset.fields || '[{"key":"_str"}]');
    buildSubItems(container.id, item[key] || [], fields);
  });
  // wire add-sub-btn clicks
  wireSubItemAddBtns();
}

/* ============================================================
   SINGLETON VIEWS
   ============================================================ */

function renderHomepageSettings() {
  const s = (state.content && state.content.index && state.content.index.static) || {};
  const seo  = s.seo  || {};
  const hero = s.hero || {};
  const contact = s.contact || {};
  const footer  = s.footer  || {};

  const heroTitle = hero.title || hero.headline || '';
  const heroSubline = hero.subtitle || hero.tagline || '';
  const heroPrimary = hero.subtitlePrimary || heroSubline;
  const heroSecondary = hero.subtitleSecondary || '';
  const heroDescription = hero.description || hero.bio || '';
  const heroImage = hero.image || hero.profileImage || '';
  const heroCv = hero.cvLink || hero.resumeLink || '';

  const emailHref = contact.emailHref || contact.email || '';
  const linkedinHref = contact.linkedinHref || contact.linkedin || '';
  const footerText = footer.copyright || footer.text || '';

  topbarActions.innerHTML = '<button class="btn btn-primary" id="hp-save-top-btn"><i class="fas fa-save"></i> Save Homepage</button>';

  adminContent.innerHTML = `
    <div class="view-header">
      <h2 class="view-title">Homepage Settings</h2>
      <button class="btn btn-primary" id="hp-save-btn"><i class="fas fa-save"></i> Save All</button>
    </div>

    <div class="settings-section">
      <div class="settings-section-header">SEO</div>
      <div class="settings-section-body">
        <div class="fields-grid">
          <div class="field-group span-2">
            <label class="field-label">Page Title</label>
            <input class="field-input" id="hps-seo-title" value="${av(seo.title)}">
          </div>
          <div class="field-group span-2">
            <label class="field-label">Meta Description</label>
            <textarea class="field-textarea" id="hps-seo-desc">${esc(seo.description || '')}</textarea>
          </div>
          <div class="field-group span-2">
            <label class="field-label">OG Image URL</label>
            <input class="field-input" id="hps-seo-og" value="${av(seo.ogImage || '')}">
          </div>
        </div>
      </div>
    </div>

    <div class="settings-section">
      <div class="settings-section-header">Hero Section</div>
      <div class="settings-section-body">
        <div class="fields-grid">
          <div class="field-group span-2">
            <label class="field-label">Hero Main Heading (optional legacy)</label>
            <input class="field-input" id="hps-hero-title" value="${av(heroTitle)}">
          </div>
          <div class="field-group">
            <label class="field-label">Name</label>
            <input class="field-input" id="hps-hero-name" value="${av(hero.name)}">
          </div>
          <div class="field-group">
            <label class="field-label">Subtitle Primary</label>
            <input class="field-input" id="hps-hero-sub-primary" value="${av(heroPrimary)}">
          </div>
          <div class="field-group">
            <label class="field-label">Subtitle Secondary</label>
            <input class="field-input" id="hps-hero-sub-secondary" value="${av(heroSecondary)}">
          </div>
          <div class="field-group span-2">
            <label class="field-label">Bio / Description</label>
            <textarea class="field-textarea" id="hps-hero-bio">${esc(heroDescription)}</textarea>
          </div>
          <div class="field-group span-2">
            <label class="field-label">Profile Image path</label>
            <input class="field-input" id="hps-hero-img" value="${av(heroImage)}">
          </div>
          <div class="field-group">
            <label class="field-label">CV / Resume URL</label>
            <input class="field-input" id="hps-hero-cv" value="${av(heroCv)}">
          </div>
        </div>
      </div>
    </div>

    <div class="settings-section">
      <div class="settings-section-header">Contact</div>
      <div class="settings-section-body">
        <div class="fields-grid">
          <div class="field-group span-2">
            <label class="field-label">Email Href (mailto:)</label>
            <input class="field-input" id="hps-contact-email-href" value="${av(emailHref)}">
          </div>
          <div class="field-group span-2">
            <label class="field-label">Email Display Text</label>
            <input class="field-input" id="hps-contact-email-text" value="${av(contact.emailText || '')}">
          </div>
          <div class="field-group span-2">
            <label class="field-label">LinkedIn URL</label>
            <input class="field-input" id="hps-contact-linkedin-href" value="${av(linkedinHref)}">
          </div>
          <div class="field-group span-2">
            <label class="field-label">LinkedIn Display Text</label>
            <input class="field-input" id="hps-contact-linkedin-text" value="${av(contact.linkedinText || '')}">
          </div>
          <div class="field-group span-2">
            <label class="field-label">Location Text</label>
            <input class="field-input" id="hps-contact-location" value="${av(contact.location || '')}">
          </div>
        </div>
      </div>
    </div>

    <div class="settings-section">
      <div class="settings-section-header">Footer</div>
      <div class="settings-section-body">
        <div class="fields-grid">
          <div class="field-group span-2">
            <label class="field-label">Copyright HTML/Text</label>
            <input class="field-input" id="hps-footer-text" value="${av(footerText)}">
          </div>
          <div class="field-group span-2">
            <label class="field-label">Developed Text (HTML allowed)</label>
            <input class="field-input" id="hps-footer-developed" value="${av(footer.developedText || '')}">
          </div>
        </div>
      </div>
    </div>
  `;

  const saveHomepageSettings = () => {
    // SEO
    if (!state.content.index.static.seo) state.content.index.static.seo = {};
    state.content.index.static.seo.title       = document.getElementById('hps-seo-title').value;
    state.content.index.static.seo.description = document.getElementById('hps-seo-desc').value;
    state.content.index.static.seo.ogImage     = document.getElementById('hps-seo-og').value;
    // Hero
    if (!state.content.index.static.hero) state.content.index.static.hero = {};
    const hObj = state.content.index.static.hero;
    hObj.name = document.getElementById('hps-hero-name').value;
    hObj.title = document.getElementById('hps-hero-title').value;
    hObj.headline = document.getElementById('hps-hero-title').value;
    hObj.subtitlePrimary = document.getElementById('hps-hero-sub-primary').value;
    hObj.subtitleSecondary = document.getElementById('hps-hero-sub-secondary').value;
    hObj.subtitle = hObj.subtitlePrimary;
    hObj.tagline = hObj.subtitlePrimary;
    hObj.description = document.getElementById('hps-hero-bio').value;
    hObj.bio = hObj.description;
    hObj.image = document.getElementById('hps-hero-img').value;
    hObj.profileImage = hObj.image;
    hObj.cvLink = document.getElementById('hps-hero-cv').value;
    hObj.resumeLink = hObj.cvLink;

    // Contact
    if (!state.content.index.static.contact) state.content.index.static.contact = {};
    const cObj = state.content.index.static.contact;
    cObj.emailHref = document.getElementById('hps-contact-email-href').value;
    cObj.emailText = document.getElementById('hps-contact-email-text').value;
    cObj.linkedinHref = document.getElementById('hps-contact-linkedin-href').value;
    cObj.linkedinText = document.getElementById('hps-contact-linkedin-text').value;
    cObj.location = document.getElementById('hps-contact-location').value;
    cObj.email = cObj.emailHref;
    cObj.linkedin = cObj.linkedinHref;

    // Footer
    if (!state.content.index.static.footer) state.content.index.static.footer = {};
    const fObj = state.content.index.static.footer;
    fObj.copyright = document.getElementById('hps-footer-text').value;
    fObj.text = fObj.copyright;
    fObj.developedText = document.getElementById('hps-footer-developed').value;

    markDirty();
    saveContent().then(() => toast('Homepage settings saved!', 'success')).catch(e => toast(e.message, 'error'));
  };

  document.getElementById('hp-save-btn').addEventListener('click', saveHomepageSettings);
  document.getElementById('hp-save-top-btn').addEventListener('click', saveHomepageSettings);
}

/* ── BuildSign Settings ── */
function renderBuildsignSettings() {
  const bs = (state.content && state.content.buildsign && state.content.buildsign.static) || {};
  const bsSeo  = bs.seo  || {};
  const bsHero = bs.hero || {};
  const bsLinks = bsHero.links || {};

  adminContent.innerHTML = `
    <div class="view-header">
      <h2 class="view-title">BuildSign Settings</h2>
      <button class="btn btn-primary" id="bs-save-btn"><i class="fas fa-save"></i> Save All</button>
    </div>

    <div class="settings-section">
      <div class="settings-section-header">SEO</div>
      <div class="settings-section-body">
        <div class="fields-grid">
          <div class="field-group span-2">
            <label class="field-label">Page Title</label>
            <input class="field-input" id="bss-seo-title" value="${av(bsSeo.title)}">
          </div>
          <div class="field-group span-2">
            <label class="field-label">Meta Description</label>
            <textarea class="field-textarea" id="bss-seo-desc">${esc(bsSeo.description || '')}</textarea>
          </div>
        </div>
      </div>
    </div>

    <div class="settings-section">
      <div class="settings-section-header">Hero Section</div>
      <div class="settings-section-body">
        <div class="fields-grid">
          <div class="field-group span-2">
            <label class="field-label">Hero Title</label>
            <input class="field-input" id="bss-hero-title" value="${av(bsHero.title)}">
          </div>
          <div class="field-group span-2">
            <label class="field-label">Subtitle</label>
            <input class="field-input" id="bss-hero-sub" value="${av(bsHero.subtitle || '')}">
          </div>
        </div>
      </div>
    </div>

    <div class="settings-section">
      <div class="settings-section-header">Hero Links / CTAs</div>
      <div class="settings-section-body">
        <div class="fields-grid">
          <div class="field-group">
            <label class="field-label">Primary CTA Label</label>
            <input class="field-input" id="bss-link-primary-label" value="${av(bsLinks.primary && bsLinks.primary.label || '')}">
          </div>
          <div class="field-group">
            <label class="field-label">Primary CTA Href</label>
            <input class="field-input" id="bss-link-primary-href" value="${av(bsLinks.primary && bsLinks.primary.href || '')}">
          </div>
          <div class="field-group">
            <label class="field-label">Secondary CTA Label</label>
            <input class="field-input" id="bss-link-secondary-label" value="${av(bsLinks.secondary && bsLinks.secondary.label || '')}">
          </div>
          <div class="field-group">
            <label class="field-label">Secondary CTA Href</label>
            <input class="field-input" id="bss-link-secondary-href" value="${av(bsLinks.secondary && bsLinks.secondary.href || '')}">
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('bs-save-btn').addEventListener('click', () => {
    if (!state.content.buildsign.static.seo)  state.content.buildsign.static.seo  = {};
    if (!state.content.buildsign.static.hero) state.content.buildsign.static.hero = {};
    const seo  = state.content.buildsign.static.seo;
    const hero = state.content.buildsign.static.hero;

    seo.title       = document.getElementById('bss-seo-title').value;
    seo.description = document.getElementById('bss-seo-desc').value;
    hero.title      = document.getElementById('bss-hero-title').value;
    hero.subtitle   = document.getElementById('bss-hero-sub').value;

    if (!hero.links) hero.links = {};
    hero.links.primary   = { label: document.getElementById('bss-link-primary-label').value,   href: document.getElementById('bss-link-primary-href').value };
    hero.links.secondary = { label: document.getElementById('bss-link-secondary-label').value, href: document.getElementById('bss-link-secondary-href').value };

    markDirty();
    saveContent().then(() => toast('BuildSign settings saved!', 'success')).catch(e => toast(e.message, 'error'));
  });
}

/* ── Certificate Files ── */
function renderCertificateFiles() {
  function renderList() {
    const currentFiles = (state.content.certificates && state.content.certificates.certificateFiles) || [];
    adminContent.innerHTML = `
      <div class="view-header">
        <h2 class="view-title">Certificate Files <span class="item-count">${currentFiles.length}</span></h2>
      </div>
      ${renderPersistenceBadge()}
      <div class="settings-section">
        <div class="settings-section-header">Add New File</div>
        <div class="settings-section-body">
          <div class="fields-grid media-upload-grid">
            <div class="field-group">
              <input class="field-input" id="cert-new-input" placeholder="Paste an existing public URL or legacy filename">
              <div class="field-hint">Use this for an existing public asset. Stored value is shared in the central content store.</div>
            </div>
            <div class="field-group" style="flex:0">
              <button class="btn-primary" id="cert-add-btn"><i class="fas fa-plus"></i> Add</button>
            </div>
            <div class="field-group span-2 media-upload-inline">
              <input class="field-input" id="cert-upload-input" type="file" accept=".pdf,.png,.jpg,.jpeg,.webp,.jfif,application/pdf,image/png,image/jpeg,image/webp">
              <button class="btn-secondary" id="cert-upload-btn"><i class="fas fa-upload"></i> Upload To Shared Storage</button>
            </div>
          </div>
        </div>
      </div>
      <div class="collection-list" id="cert-list">
        ${currentFiles.map((f, i) => `
          <div class="collection-item cert-item">
            <span class="item-drag-handle"><i class="fas fa-grip-vertical"></i></span>
            <div class="item-body" style="flex:1">
              <span class="item-title"><i class="fas fa-file-image" style="margin-right:6px;opacity:.5;"></i>${esc(f)}</span>
              <span class="item-meta">${/^https?:\/\//i.test(f) ? 'Blob URL' : 'Legacy local asset reference'}</span>
            </div>
            <div class="item-actions">
              <button class="item-btn danger" data-cert-del="${i}" title="Remove"><i class="fas fa-trash"></i></button>
            </div>
          </div>
        `).join('')}
        ${currentFiles.length === 0 ? '<div class="empty-list"><i class="fas fa-images"></i><p>No certificate files listed.</p></div>' : ''}
      </div>
    `;

    document.getElementById('cert-add-btn').addEventListener('click', () => {
      const input = document.getElementById('cert-new-input');
      const val = input.value.trim();
      if (!val) { toast('Enter a filename first.', 'warning'); return; }
      if (!state.content.certificates) state.content.certificates = {};
      if (!state.content.certificates.certificateFiles) state.content.certificates.certificateFiles = [];
      state.content.certificates.certificateFiles.push(val);
      markDirty();
      renderList();
      toast('File added. Save to publish.', 'success');
    });

    document.getElementById('cert-upload-btn').addEventListener('click', async () => {
      const input = document.getElementById('cert-upload-input');
      const file = input.files && input.files[0];

      if (!file) {
        toast('Choose a file first.', 'warning');
        return;
      }

      try {
        const button = document.getElementById('cert-upload-btn');
        button.disabled = true;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Uploading...';

        const uploaded = await uploadMediaFile(file, 'certificates');
        if (!state.content.certificates) state.content.certificates = {};
        if (!state.content.certificates.certificateFiles) state.content.certificates.certificateFiles = [];
        state.content.certificates.certificateFiles.push(uploaded.url);
        markDirty();
        renderList();
        toast('Uploaded to shared storage. Click Save to publish.', 'success');
      } catch (e) {
        toast(e.message, 'error');
      }
    });

    document.querySelectorAll('[data-cert-del]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const idx = parseInt(btn.dataset.certDel);
        const ok = await confirm('Remove this file from the list?');
        if (!ok) return;
        state.content.certificates.certificateFiles.splice(idx, 1);
        markDirty();
        renderList();
        toast('File removed. Save to publish.', 'success');
      });
    });
  }

  renderList();
}


/* ============================================================
   UPDATED openItemEditor — wires editForms with post-render logic
   ============================================================ */
/* override the stub above */
function openItemEditor(view, idx) {
  const cfg = COLLECTION_CONFIG[view];
  if (!cfg) return;

  const arr   = getAt(state.content, cfg.path) || [];
  const isNew = idx === null || idx === undefined;
  const item  = isNew ? cfg.newItem() : JSON.parse(JSON.stringify(arr[idx]));

  drawerTitle.textContent = isNew ? `New ${cfg.label}` : `Edit ${cfg.label}`;
  drawerBody.innerHTML = cfg.editForm(item);

  // Post-render wiring
  wireFormAfterRender(view, item);

  drawerSave.onclick = () => {
    try {
      const arr2 = getAt(state.content, cfg.path) || [];
      const updated = collectGenericForm(view, item);
      if (isNew) {
        arr2.push(updated);
      } else {
        arr2[idx] = updated;
      }
      setAt(state.content, cfg.path, arr2);
      markDirty();
      closeDrawer();
      renderView(view);
      toast(isNew ? `${cfg.label} added. Save to publish.` : `${cfg.label} updated.`, 'success');
    } catch(e) {
      toast(e.message, 'error');
    }
  };

  drawerDelete.style.display = isNew ? 'none' : '';
  drawerDelete.onclick = async () => {
    closeDrawer();
    await deleteItem(view, idx);
  };

  editorOverlay.classList.add('open');
  editorDrawer.classList.add('open');
}

/* ============================================================
   INIT — auto-login + load + navigate
   ============================================================ */
async function init() {
  adminContent.innerHTML = `
    <div class="loading-state">
      <div class="spinner"></div>
      <span>Loading content&hellip;</span>
    </div>`;

  try {
    const session = await apiFetch('/api/admin/session');
    if (!session || !session.authenticated) {
      window.location.replace('/admin/login');
      return;
    }
  } catch (_) {
    window.location.replace('/admin/login');
    return;
  }

  // Load content
  try {
    await loadContent();
    updateBadges();
    navigate('dashboard');
  } catch (e) {
    adminContent.innerHTML = `
      <div class="empty-view">
        <i class="fas fa-exclamation-circle" style="font-size:2.5rem;color:var(--danger);margin-bottom:12px;"></i>
        <h3>Could not load content</h3>
        <p style="color:var(--text-muted)">${esc(e.message)}</p>
        <button class="btn-primary" style="margin-top:16px" onclick="init()">
          <i class="fas fa-refresh"></i> Retry
        </button>
      </div>`;
  }
}

init();
