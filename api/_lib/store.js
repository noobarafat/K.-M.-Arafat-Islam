const fs = require('fs');
const path = require('path');

let kvClient = null;
try {
  // Optional dependency usage in environments where KV is configured.
  // eslint-disable-next-line global-require
  kvClient = require('@vercel/kv').kv;
} catch (error) {
  kvClient = null;
}

const ROOT = path.resolve(__dirname, '..', '..');
const SEED_FILE = path.join(ROOT, 'data', 'content.seed.json');
const RUNTIME_FILE = path.join(ROOT, 'data', 'content.runtime.json');
const CONTENT_KEY = process.env.CONTENT_KV_KEY || 'portfolio:content';

function hasKvConfig() {
  return Boolean(
    kvClient &&
      (process.env.KV_REST_API_URL || process.env.KV_URL || process.env.KV_REST_API_TOKEN)
  );
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function normalizeContent(seedPayload) {
  if (!seedPayload || typeof seedPayload !== 'object') {
    throw new Error('Invalid seed payload');
  }

  return {
    index: seedPayload.index || { static: {}, datasets: {} },
    search: seedPayload.search || { searchIndex: [] },
    buildsign: seedPayload.buildsign || { static: {}, datasets: {} },
    certificates: seedPayload.certificates || { certificateFiles: [] }
  };
}

function readJsonSync(filePath) {
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJsonSync(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

function loadSeedContent() {
  const seed = readJsonSync(SEED_FILE);
  if (!seed) {
    throw new Error('Seed file not found at data/content.seed.json');
  }
  return normalizeContent(seed);
}

async function getContent() {
  if (hasKvConfig()) {
    const existing = await kvClient.get(CONTENT_KEY);
    if (existing) {
      return clone(existing);
    }

    const seed = loadSeedContent();
    await kvClient.set(CONTENT_KEY, seed);
    return clone(seed);
  }

  const runtime = readJsonSync(RUNTIME_FILE);
  if (runtime) return normalizeContent(runtime);

  const seed = loadSeedContent();
  writeJsonSync(RUNTIME_FILE, seed);
  return clone(seed);
}

async function saveContent(content) {
  const normalized = normalizeContent(content);

  if (hasKvConfig()) {
    await kvClient.set(CONTENT_KEY, normalized);
    return clone(normalized);
  }

  writeJsonSync(RUNTIME_FILE, normalized);
  return clone(normalized);
}

module.exports = {
  getContent,
  saveContent,
  loadSeedContent,
  hasKvConfig
};
