const { loadSeedContent, saveContent, hasKvConfig } = require('../api/_lib/store');

async function main() {
  const seed = loadSeedContent();
  await saveContent(seed);

  if (hasKvConfig()) {
    console.log('Seeded content to Vercel KV.');
  } else {
    console.log('Seeded content to local data/content.runtime.json fallback.');
  }
}

main().catch((error) => {
  console.error('Failed to seed content:', error.message);
  process.exit(1);
});
