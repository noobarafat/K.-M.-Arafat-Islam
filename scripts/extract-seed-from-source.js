const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

function read(relPath) {
  return fs.readFileSync(path.join(ROOT, relPath), 'utf8');
}

function write(relPath, content) {
  const target = path.join(ROOT, relPath);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content, 'utf8');
}

function extractConstExpression(source, constName) {
  const marker = `const ${constName} =`;
  const start = source.indexOf(marker);
  if (start === -1) {
    throw new Error(`Could not find const: ${constName}`);
  }

  let i = start + marker.length;
  while (i < source.length && /\s/.test(source[i])) i += 1;

  const first = source[i];
  if (first !== '[' && first !== '{') {
    throw new Error(`Unsupported const expression for ${constName}. Starts with: ${first}`);
  }

  const stack = [first];
  let j = i + 1;
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let inLineComment = false;
  let inBlockComment = false;
  let escaped = false;

  while (j < source.length && stack.length) {
    const ch = source[j];
    const next = source[j + 1];

    if (inLineComment) {
      if (ch === '\n') inLineComment = false;
      j += 1;
      continue;
    }

    if (inBlockComment) {
      if (ch === '*' && next === '/') {
        inBlockComment = false;
        j += 2;
      } else {
        j += 1;
      }
      continue;
    }

    if (inSingle) {
      if (!escaped && ch === "'") inSingle = false;
      escaped = !escaped && ch === '\\';
      j += 1;
      continue;
    }

    if (inDouble) {
      if (!escaped && ch === '"') inDouble = false;
      escaped = !escaped && ch === '\\';
      j += 1;
      continue;
    }

    if (inTemplate) {
      if (!escaped && ch === '`') {
        inTemplate = false;
        j += 1;
        continue;
      }
      if (!escaped && ch === '$' && next === '{') {
        stack.push('{');
        j += 2;
        continue;
      }
      escaped = !escaped && ch === '\\';
      j += 1;
      continue;
    }

    if (ch === '/' && next === '/') {
      inLineComment = true;
      j += 2;
      continue;
    }

    if (ch === '/' && next === '*') {
      inBlockComment = true;
      j += 2;
      continue;
    }

    if (ch === "'") {
      inSingle = true;
      escaped = false;
      j += 1;
      continue;
    }

    if (ch === '"') {
      inDouble = true;
      escaped = false;
      j += 1;
      continue;
    }

    if (ch === '`') {
      inTemplate = true;
      escaped = false;
      j += 1;
      continue;
    }

    if (ch === '[' || ch === '{') {
      stack.push(ch);
      j += 1;
      continue;
    }

    if (ch === ']') {
      if (stack[stack.length - 1] === '[') stack.pop();
      j += 1;
      continue;
    }

    if (ch === '}') {
      if (stack[stack.length - 1] === '{') stack.pop();
      j += 1;
      continue;
    }

    j += 1;
  }

  if (stack.length) {
    throw new Error(`Unbalanced expression while parsing ${constName}`);
  }

  return source.slice(i, j);
}

function evaluateExpression(expression) {
  // Existing source content only; expression was extracted from this repository.
  return Function(`"use strict"; return (${expression});`)();
}

function firstMatch(text, regex, label) {
  const match = text.match(regex);
  if (!match) {
    throw new Error(`Could not parse ${label}`);
  }
  return match[1].trim();
}

function extractIndexStatic(indexHtml) {
  const metaDescription = firstMatch(indexHtml, /<meta\s+name="description"\s+content="([^"]+)"/i, 'index meta description');
  const title = firstMatch(indexHtml, /<title>([^<]+)<\/title>/i, 'index title');

  const heroName = firstMatch(indexHtml, /<h1 class="hero-name">([\s\S]*?)<\/h1>/i, 'hero name');
  const heroDescription = firstMatch(indexHtml, /<p class="hero-description">([\s\S]*?)<\/p>/i, 'hero description');
  const heroSubtitlePrimary = firstMatch(indexHtml, /<span class="subtitle-text">([\s\S]*?)<\/span>/i, 'hero subtitle primary');

  const subtitleMatches = [...indexHtml.matchAll(/<span class="subtitle-text">([\s\S]*?)<\/span>/gi)];
  const heroSubtitleSecondary = subtitleMatches[1] ? subtitleMatches[1][1].trim() : '';

  const contactEmailHref = firstMatch(indexHtml, /<a href="(mailto:[^"]+)" class="contact-method-value">/i, 'contact email href');
  const contactEmailText = firstMatch(indexHtml, /<a href="mailto:[^"]+" class="contact-method-value">([\s\S]*?)<\/a>/i, 'contact email text');
  const linkedinHref = firstMatch(indexHtml, /<a href="([^"]+)" target="_blank" class="contact-method-value">k-m-arafat-islam<\/a>/i, 'contact linkedin href');
  const location = firstMatch(indexHtml, /<span class="contact-method-label">Location<\/span>\s*<span class="contact-method-value">([\s\S]*?)<\/span>/i, 'contact location');

  const footerCopyright = firstMatch(indexHtml, /<footer class="footer">[\s\S]*?<p>(&copy;[\s\S]*?)<\/p>/i, 'footer copyright');
  const footerDeveloped = firstMatch(indexHtml, /<footer class="footer">[\s\S]*?<p>&copy;[\s\S]*?<\/p>\s*<p>([\s\S]*?)<\/p>/i, 'footer developed');

  return {
    seo: {
      title,
      description: metaDescription
    },
    hero: {
      name: heroName,
      subtitlePrimary: heroSubtitlePrimary,
      subtitleSecondary: heroSubtitleSecondary,
      description: heroDescription
    },
    contact: {
      emailHref: contactEmailHref,
      emailText: contactEmailText,
      linkedinHref,
      linkedinText: 'k-m-arafat-islam',
      location
    },
    footer: {
      copyright: footerCopyright,
      developedText: footerDeveloped
    }
  };
}

function extractBuildsignStatic(buildsignHtml) {
  const title = firstMatch(buildsignHtml, /<title>([^<]+)<\/title>/i, 'buildsign title');
  const heroTitle = firstMatch(buildsignHtml, /<h1 class="buildsign-hero-title">([\s\S]*?)<\/h1>/i, 'buildsign hero title');
  const heroSubtitle = firstMatch(buildsignHtml, /<p class="buildsign-hero-subtitle">([\s\S]*?)<\/p>/i, 'buildsign hero subtitle');
  const websiteHref = firstMatch(buildsignHtml, /<a href="([^"]+)" target="_blank" rel="noopener" class="buildsign-link">\s*<i class="fas fa-link"><\/i>/i, 'buildsign website href');
  const linkedinHref = firstMatch(buildsignHtml, /<a href="([^"]+)" target="_blank" rel="noopener" class="buildsign-link">\s*<i class="fab fa-linkedin"><\/i>/i, 'buildsign linkedin href');
  const emailHref = firstMatch(buildsignHtml, /<a href="(mailto:[^"]+)" class="buildsign-link">\s*<i class="fas fa-envelope"><\/i>/i, 'buildsign email href');

  return {
    seo: { title },
    hero: {
      title: heroTitle,
      subtitle: heroSubtitle,
      links: {
        websiteHref,
        linkedinHref,
        emailHref
      }
    }
  };
}

function main() {
  const scriptJs = read('script.js');
  const searchJs = read('search.js');
  const buildsignJs = read('buildsign.js');
  const certificatesJs = read('certificates.js');
  const indexHtml = read('index.html');
  const buildsignHtml = read('buildsign.html');

  const seed = {
    generatedAt: new Date().toISOString(),
    source: {
      script: 'script.js',
      search: 'search.js',
      buildsign: 'buildsign.js',
      certificates: 'certificates.js',
      index: 'index.html',
      buildsignHtml: 'buildsign.html'
    },
    index: {
      static: extractIndexStatic(indexHtml),
      datasets: {
        publications: evaluateExpression(extractConstExpression(scriptJs, 'publications')),
        activities: evaluateExpression(extractConstExpression(scriptJs, 'activities')),
        skills: evaluateExpression(extractConstExpression(scriptJs, 'skills')),
        aboutHighlights: evaluateExpression(extractConstExpression(scriptJs, 'aboutHighlights')),
        internationalEvents: evaluateExpression(extractConstExpression(scriptJs, 'internationalEvents'))
      }
    },
    search: {
      searchIndex: evaluateExpression(extractConstExpression(searchJs, 'searchIndex'))
    },
    buildsign: {
      static: extractBuildsignStatic(buildsignHtml),
      datasets: {
        buildsignServices: evaluateExpression(extractConstExpression(buildsignJs, 'buildsignServices')),
        buildsignServicesDetails: evaluateExpression(extractConstExpression(buildsignJs, 'buildsignServicesDetails')),
        buildsignProcess: evaluateExpression(extractConstExpression(buildsignJs, 'buildsignProcess')),
        buildsignWhy: evaluateExpression(extractConstExpression(buildsignJs, 'buildsignWhy')),
        buildsignFAQs: evaluateExpression(extractConstExpression(buildsignJs, 'buildsignFAQs'))
      }
    },
    certificates: {
      certificateFiles: evaluateExpression(extractConstExpression(certificatesJs, 'certificateFiles'))
    }
  };

  write('data/content.seed.json', JSON.stringify(seed, null, 2));
  console.log('Created data/content.seed.json from existing source content.');
}

main();
