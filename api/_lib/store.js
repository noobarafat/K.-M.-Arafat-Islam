const fs = require('fs');
const path = require('path');

let kvClient = null;
try {
  // eslint-disable-next-line global-require
  kvClient = require('@vercel/kv').kv;
} catch (error) {
  kvClient = null;
}

const ROOT = path.resolve(__dirname, '..', '..');
const SEED_FILE = path.join(ROOT, 'data', 'content.seed.json');
const RUNTIME_FILE = path.join(ROOT, 'data', 'content.runtime.json');
const CONTENT_KEY = process.env.CONTENT_KV_KEY || 'portfolio:content';

// In-memory cache used when filesystem is read-only (e.g. Vercel serverless)
let memoryCache = null;

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
  try {
    if (!fs.existsSync(filePath)) return null;
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    return null;
  }
}

function writeJsonSync(filePath, data) {
  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    // Read-only filesystem (e.g. Vercel) — fall through to memory cache
    return false;
  }
}

function loadSeedContent() {
  const seed = readJsonSync(SEED_FILE);
  if (!seed) {
    // Return empty but valid structure if seed file not present (e.g. first deploy)
    return normalizeContent({
      index: { static: {}, datasets: {} },
      search: { searchIndex: [] },
      buildsign: { static: {}, datasets: {} },
      certificates: { certificateFiles: [] }
    });
  }
  return normalizeContent(seed);
}

async function getContent() {
  if (hasKvConfig()) {
    const existing = await kvClient.get(CONTENT_KEY);
    if (existing) return clone(existing);
    const seed = loadSeedContent();
    await kvClient.set(CONTENT_KEY, seed);
    return clone(seed);
  }

  // In-memory cache (survives within same serverless instance)
  if (memoryCache) return clone(memoryCache);

  // Try writable runtime file (local dev)
  const runtime = readJsonSync(RUNTIME_FILE);
  if (runtime) {
    memoryCache = normalizeContent(runtime);
    return clone(memoryCache);
  }

  // Fall back to seed file (always present in repo, readable on Vercel)
  const seed = loadSeedContent();
  memoryCache = seed;
  writeJsonSync(RUNTIME_FILE, seed); // succeeds locally, silently skipped on Vercel
  return clone(seed);
}

async function saveContent(content) {
  const normalized = normalizeContent(content);

  if (hasKvConfig()) {
    await kvClient.set(CONTENT_KEY, normalized);
    memoryCache = clone(normalized);
    return clone(normalized);
  }

  // Always update memory cache so changes persist within the same instance
  memoryCache = clone(normalized);
  writeJsonSync(RUNTIME_FILE, normalized); // silently skipped if read-only
  return clone(normalized);
}

module.exports = {
  getContent,
  saveContent,
  loadSeedContent,
  hasKvConfig
};
