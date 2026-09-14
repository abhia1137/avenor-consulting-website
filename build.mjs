import {
  readFile,
  writeFile,
  mkdir,
  readdir,
  copyFile,
  rm,
  stat,
} from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

// The repository is the source directory. Generated files belong only in dist/.
const root = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(root, "dist");
const origin = new URL(
  process.env.SITE_URL || "https://avenor-consulting-website.vercel.app/",
);
if (
  !["https:", "http:"].includes(origin.protocol) ||
  origin.pathname !== "/" ||
  origin.search ||
  origin.hash
) {
  throw new Error(
    "SITE_URL must be an HTTP(S) origin, for example https://example.com/",
  );
}
const siteUrl = origin.origin;
const checkMode = process.argv.includes("--check");
const escapeHtml = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
const decodeHtml = (value) =>
  String(value).replace(
    /&(?:amp|quot|apos|lt|gt|#\d+|#x[\da-f]+);/gi,
    (entity) => {
      const named = {
        "&amp;": "&",
        "&quot;": '"',
        "&apos;": "'",
        "&lt;": "<",
        "&gt;": ">",
      };
      if (named[entity.toLowerCase()]) return named[entity.toLowerCase()];
      const code = entity.slice(2, -1);
      return String.fromCodePoint(
        code[0].toLowerCase() === "x"
          ? parseInt(code.slice(1), 16)
          : parseInt(code, 10),
      );
    },
  );
const routePrefixes = {
  service: "services",
  industry: "industries",
  solution: "solutions",
  insight: "insights",
  company: "company",
};
const categoryNames = {
  service: "Services",
  industry: "Industries",
  solution: "Solution blueprints",
  insight: "Perspectives",
  company: "Company",
  legal: "Website information",
};
const categoryPaths = {
  service: "/#services",
  industry: "/#industries",
  solution: "/#solutions",
  insight: "/#insights",
  company: "/company/about/",
  legal: "/privacy/",
};
const routeFor = (slug, page) =>
  page.type === "legal" ? `/${slug}/` : `/${routePrefixes[page.type]}/${slug}/`;
const imageNames = new Set([
  "banking",
  "architecture",
  "team",
  "data",
  "retail",
]);
const imageDescriptions = {
  banking: "Architecture in a financial district",
  architecture: "Glass towers rising into an open sky",
  team: "People collaborating around a laptop",
  data: "Data center infrastructure",
  retail: "A contemporary retail environment",
};
const relatedChoices = {
  "core-banking": [
    "connected-banking",
    "enterprise-integration",
    "core-banking-roadmap",
  ],
  "enterprise-integration": [
    "api-led-connectivity",
    "modern-enterprise",
    "core-banking",
  ],
  payments: ["connected-banking", "banking", "quality-engineering"],
  "data-analytics": [
    "data-foundations",
    "intelligent-operations",
    "financial-services",
  ],
  "cloud-modernization": [
    "modern-enterprise",
    "enterprise-integration",
    "application-development",
  ],
  "quality-engineering": [
    "core-banking",
    "payments",
    "application-development",
  ],
  "application-development": [
    "enterprise-integration",
    "cloud-modernization",
    "quality-engineering",
  ],
  banking: ["core-banking", "payments", "connected-banking"],
  "financial-services": [
    "enterprise-integration",
    "data-analytics",
    "intelligent-operations",
  ],
  insurance: [
    "enterprise-integration",
    "application-development",
    "data-analytics",
  ],
  retail: ["application-development", "payments", "data-analytics"],
  "connected-banking": ["core-banking", "enterprise-integration", "banking"],
  "intelligent-operations": [
    "data-analytics",
    "data-foundations",
    "application-development",
  ],
  "modern-enterprise": [
    "cloud-modernization",
    "enterprise-integration",
    "application-development",
  ],
  "core-banking-roadmap": ["core-banking", "connected-banking", "banking"],
  "api-led-connectivity": [
    "enterprise-integration",
    "modern-enterprise",
    "connected-banking",
  ],
  "data-foundations": [
    "data-analytics",
    "intelligent-operations",
    "financial-services",
  ],
  about: ["core-banking", "enterprise-integration", "data-analytics"],
  privacy: ["about", "application-development", "data-analytics"],
};

async function copyDirectory(from, to) {
  await mkdir(to, { recursive: true });
  for (const entry of await readdir(from, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    if (entry.isDirectory())
      await copyDirectory(
        path.join(from, entry.name),
        path.join(to, entry.name),
      );
    else if (entry.isFile())
      await copyFile(path.join(from, entry.name), path.join(to, entry.name));
    else
      throw new Error(`Unsupported asset type: ${path.join(from, entry.name)}`);
  }
}

function validateContent(content) {
  if (!content || typeof content !== "object" || Array.isArray(content))
    throw new Error("content.js must define window.AVENOR_CONTENT.");
  const usedRoutes = new Set();
  for (const [slug, page] of Object.entries(content)) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))
      throw new Error(`Invalid content slug: ${slug}`);
    if (!Object.hasOwnProperty.call(categoryNames, page.type))
      throw new Error(`Unknown page type for ${slug}`);
    for (const field of ["eyebrow", "title", "intro"]) {
      if (typeof page[field] !== "string" || !page[field].trim())
        throw new Error(`Missing ${field} for ${slug}`);
    }
    if (!imageNames.has(page.image))
      throw new Error(`Unknown image for ${slug}: ${page.image}`);
    if (
      !Array.isArray(page.highlights) ||
      page.highlights.length !== 3 ||
      page.highlights.some((item) => typeof item !== "string" || !item.trim())
    )
      throw new Error(`Invalid highlights for ${slug}`);
    if (
      !Array.isArray(page.sections) ||
      page.sections.length < 3 ||
      page.sections.length > 5
    )
      throw new Error(`Expected 3–5 sections for ${slug}`);
    for (const section of page.sections) {
      if (
        typeof section.heading !== "string" ||
        !section.heading.trim() ||
        typeof section.body !== "string" ||
        !section.body.trim()
      )
        throw new Error(`Invalid section in ${slug}`);
      if (
        section.items &&
        (!Array.isArray(section.items) ||
          section.items.some(
            (item) => typeof item !== "string" || !item.trim(),
          ))
      )
        throw new Error(`Invalid list in ${slug}`);
    }
    const route = routeFor(slug, page);
    if (usedRoutes.has(route)) throw new Error(`Duplicate route: ${route}`);
    usedRoutes.add(route);
    if (!relatedChoices[slug] || relatedChoices[slug].length !== 3)
      throw new Error(`Three related pages are required for ${slug}`);
    for (const relatedSlug of relatedChoices[slug]) {
      if (!content[relatedSlug] || relatedSlug === slug)
        throw new Error(`Invalid related page ${relatedSlug} in ${slug}`);
    }
  }
}

function metaTags(
  title,
  description,
  route,
  image,
  type = "website",
  noindex = false,
) {
  const canonical = `${siteUrl}${route}`;
  const imageUrl = `${siteUrl}/assets/${image}.jpg`;
  return `<title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${escapeHtml(canonical)}">
  <meta property="og:site_name" content="Avenor Consulting">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:type" content="${type}">
  <meta property="og:url" content="${escapeHtml(canonical)}">
  <meta property="og:image" content="${escapeHtml(imageUrl)}">
  <meta property="og:image:alt" content="${escapeHtml(imageDescriptions[image])}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="${escapeHtml(imageUrl)}">${noindex ? '\n  <meta name="robots" content="noindex">' : ""}`;
}

function documentHtml({
  title,
  description,
  route,
  image = "architecture",
  type = "website",
  body,
  noindex = false,
}) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ${metaTags(title, description, route, image, type, noindex)}
  <meta name="theme-color" content="#1646ed">
  <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">
  <link rel="preload" as="image" href="/assets/${image}.jpg" fetchpriority="high">
  <link rel="stylesheet" href="/styles.css">
  <script src="/script.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  ${header}
  ${body}
  ${footer}
</body>
</html>
`;
}

function detailHtml(slug, page, content) {
  const route = routeFor(slug, page);
  const category = categoryNames[page.type];
  const breadcrumbLabel =
    page.eyebrow.split("/").slice(1).join("/").trim() || page.title;
  const breadcrumbs = `<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span>${page.type === "legal" || page.type === "company" ? "" : `<a href="${categoryPaths[page.type]}">${escapeHtml(category)}</a><span aria-hidden="true">/</span>`}<span aria-current="page">${escapeHtml(breadcrumbLabel)}</span></nav>`;
  const sectionLinks = page.sections
    .map(
      (section, index) =>
        `<a href="#section-${index + 1}">${escapeHtml(section.heading)}</a>`,
    )
    .join("\n          ");
  const sections = page.sections
    .map(
      (
        section,
        index,
      ) => `<section id="section-${index + 1}" aria-labelledby="heading-${index + 1}">
          <h2 id="heading-${index + 1}">${escapeHtml(section.heading)}</h2>
          <p>${escapeHtml(section.body)}</p>${section.items ? `\n          <ul>${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}
        </section>`,
    )
    .join("\n        ");
  const related = relatedChoices[slug]
    .map((relatedSlug) => {
      const other = content[relatedSlug];
      return `<a href="${routeFor(relatedSlug, other)}"><span><small>${escapeHtml(categoryNames[other.type])}</small>${escapeHtml(other.title)}</span><span aria-hidden="true">↗</span></a>`;
    })
    .join("\n        ");
  return documentHtml({
    title: `${page.title} | Avenor Consulting`,
    description: page.intro,
    route,
    image: page.image,
    type: page.type === "insight" ? "article" : "website",
    body: `<main id="main">
    <section class="detail-hero" aria-labelledby="detail-title">
      <img class="detail-hero-image" src="/assets/${page.image}.jpg" alt="" aria-hidden="true" fetchpriority="high">
      <div class="container">
        ${breadcrumbs}
        <p class="eyebrow light">${escapeHtml(page.eyebrow)}</p>
        <h1 id="detail-title">${escapeHtml(page.title)}</h1>
        <p class="detail-intro">${escapeHtml(page.intro)}</p>
        <div class="detail-highlights">${page.highlights.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
      </div>
    </section>
    <div class="section container detail-layout">
      <aside class="detail-sidebar" aria-label="Article navigation">
        <p class="eyebrow">ON THIS PAGE</p>
        <nav aria-label="On this page">
          ${sectionLinks}
        </nav>
        <a class="text-link" href="/#contact">Prepare a project brief <span aria-hidden="true">↗</span></a>
      </aside>
      <article class="article-content" aria-label="${escapeHtml(page.title)}">
        ${sections}
      </article>
    </div>
    <section class="detail-cta container" aria-labelledby="detail-cta-title">
      <div><p class="eyebrow">LET’S MOVE FORWARD</p><h2 id="detail-cta-title">Make your next move a clear one.</h2><p>Define the challenge, connect the priorities, and put your next step into words.</p></div>
      <a class="button button-blue" href="/#contact">Prepare a project brief <span aria-hidden="true">↗</span></a>
    </section>
    <section class="related-section container" aria-labelledby="related-title">
      <p class="eyebrow">CONTINUE EXPLORING</p><h2 id="related-title">Connected thinking.</h2>
      <div class="related-links">
        ${related}
      </div>
    </section>
  </main>`,
  });
}

async function save(relative, data) {
  const destination = path.join(out, relative);
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, data, "utf8");
}

function attributes(html, names) {
  const values = [];
  const expression = new RegExp(
    `\\b(?:${names.join("|")})\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`,
    "gi",
  );
  for (const match of html.matchAll(expression))
    values.push(decodeHtml(match[1] ?? match[2] ?? match[3]));
  return values;
}

async function validateOutput(pages) {
  const allFiles = new Set();
  async function walk(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const full = path.join(directory, entry.name);
      if (entry.isDirectory()) await walk(full);
      else if (entry.isFile())
        allFiles.add(path.relative(out, full).split(path.sep).join("/"));
    }
  }
  await walk(out);
  const htmlByFile = new Map();
  const idsByFile = new Map();
  const problems = [];
  for (const [route, html] of pages) {
    const file =
      route === "/404.html" ? "404.html" : `${route.slice(1)}index.html`;
    htmlByFile.set(file, html);
    const ids = attributes(html, ["id"]);
    const idSet = new Set(ids);
    if (ids.length !== idSet.size) problems.push(`${route}: duplicate HTML id`);
    idsByFile.set(file, idSet);
    if ((html.match(/<h1\b/gi) || []).length !== 1)
      problems.push(`${route}: expected one h1`);
    if (!/<title>[^<]+<\/title>/i.test(html))
      problems.push(`${route}: missing page title`);
    if (!/<link\b[^>]*rel="canonical"/i.test(html))
      problems.push(`${route}: missing canonical URL`);
  }
  let checkedReferences = 0;
  function inspectReference(reference, sourceRoute) {
    if (
      !reference ||
      /^(?:mailto:|tel:|data:|blob:|javascript:)/i.test(reference)
    )
      return;
    let resolved;
    try {
      resolved = new URL(reference, `${siteUrl}${sourceRoute}`);
    } catch {
      problems.push(`${sourceRoute}: invalid URL ${reference}`);
      return;
    }
    if (resolved.origin !== siteUrl) return;
    checkedReferences += 1;
    let pathname;
    try {
      pathname = decodeURIComponent(resolved.pathname);
    } catch {
      problems.push(`${sourceRoute}: invalid URL encoding ${reference}`);
      return;
    }
    let file = pathname.replace(/^\//, "");
    if (!file || file.endsWith("/")) file += "index.html";
    else if (!allFiles.has(file) && allFiles.has(`${file}/index.html`))
      file += "/index.html";
    if (!allFiles.has(file)) {
      problems.push(`${sourceRoute}: missing local target ${reference}`);
      return;
    }
    if (resolved.hash && idsByFile.has(file)) {
      let anchor;
      try {
        anchor = decodeURIComponent(resolved.hash.slice(1));
      } catch {
        problems.push(`${sourceRoute}: invalid fragment encoding ${reference}`);
        return;
      }
      if (anchor && !idsByFile.get(file).has(anchor))
        problems.push(`${sourceRoute}: missing anchor ${reference}`);
    }
  }
  for (const [route, html] of pages) {
    for (const reference of attributes(html, ["href", "src"]))
      inspectReference(reference, route);
    for (const srcset of attributes(html, ["srcset"])) {
      for (const candidate of srcset.split(","))
        inspectReference(candidate.trim().split(/\s+/)[0], route);
    }
  }
  const css = await readFile(path.join(out, "styles.css"), "utf8");
  for (const match of css.matchAll(
    /url\(\s*(?:"([^"]*)"|'([^']*)'|([^\s)]+))\s*\)/gi,
  ))
    inspectReference(match[1] ?? match[2] ?? match[3], "/styles.css");
  if (
    allFiles.has("content.js") ||
    allFiles.has("build.mjs") ||
    allFiles.has("package.json")
  )
    problems.push("Build-only source files must not be published.");
  if (problems.length)
    throw new Error(
      `Build validation failed:\n${problems.map((problem) => `- ${problem}`).join("\n")}`,
    );
  return { checkedReferences, files: allFiles.size };
}

const sourceHtml = await readFile(path.join(root, "index.html"), "utf8");
const header = sourceHtml.match(/<header\b[\s\S]*?<\/header>/i)?.[0];
const footer = sourceHtml.match(/<footer\b[\s\S]*?<\/footer>/i)?.[0];
const homeMain = sourceHtml.match(/<main\b[\s\S]*?<\/main>/i)?.[0];
if (!header || !footer || !homeMain)
  throw new Error(
    "index.html must contain a complete header, main and footer.",
  );
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(
  await readFile(path.join(root, "content.js"), "utf8"),
  sandbox,
  { filename: "content.js", timeout: 1000 },
);
const content = sandbox.window.AVENOR_CONTENT;
validateContent(content);
// Check inputs before replacing the previous generated build.
for (const file of [
  "styles.css",
  "script.js",
  "assets/favicon.svg",
  ...[...imageNames].map((name) => `assets/${name}.jpg`),
]) {
  const info = await stat(path.join(root, file));
  if (!info.isFile()) throw new Error(`Required input is not a file: ${file}`);
}
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
for (const file of ["styles.css", "script.js"])
  await copyFile(path.join(root, file), path.join(out, file));
await copyDirectory(path.join(root, "assets"), path.join(out, "assets"));

const pages = new Map();
const homeTitle = decodeHtml(
  sourceHtml.match(/<title>([^<]*)<\/title>/i)?.[1] ||
    "Avenor Consulting | Technology that moves business forward",
);
const homeDescription = decodeHtml(
  sourceHtml.match(
    /<meta\b[^>]*name="description"[^>]*content="([^"]*)"/i,
  )?.[1] ||
    "Enterprise technology consulting across banking, integration, data and application modernization.",
);
const home = documentHtml({
  title: homeTitle,
  description: homeDescription,
  route: "/",
  body: homeMain,
});
pages.set("/", home);
await save("index.html", home);
for (const [slug, page] of Object.entries(content)) {
  const route = routeFor(slug, page);
  const html = detailHtml(slug, page, content);
  pages.set(route, html);
  await save(`${route.slice(1)}index.html`, html);
}
const notFound = documentHtml({
  title: "Page not found | Avenor Consulting",
  description:
    "Find your way back to Avenor services, industry perspectives and project planning.",
  route: "/404.html",
  noindex: true,
  body: `<main id="main"><section class="section container not-found"><p class="eyebrow">404 / PAGE NOT FOUND</p><h1>Let’s get you moving<br>in the right direction.</h1><p>This page may have moved, or the address may be incomplete. Explore our expertise or return to the homepage.</p><div class="hero-actions"><a class="button button-blue" href="/">Back to Avenor <span aria-hidden="true">↗</span></a><a class="text-link" href="/#services">Explore services <span aria-hidden="true">→</span></a></div></section></main>`,
});
pages.set("/404.html", notFound);
await save("404.html", notFound);
const sitemapRoutes = [...pages.keys()].filter(
  (route) => route !== "/404.html",
);
await save(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapRoutes.map((route) => `  <url><loc>${escapeHtml(`${siteUrl}${route}`)}</loc></url>`).join("\n")}\n</urlset>\n`,
);
await save(
  "robots.txt",
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
);
const validation = await validateOutput(pages);
console.log(
  `${checkMode ? "Checked" : "Built"} ${pages.size} HTML pages (${Object.keys(content).length} detail pages), ${validation.files} output files, and ${validation.checkedReferences} local references. No missing routes, assets or anchors.`,
);
console.log(`Static output: ${out}`);
