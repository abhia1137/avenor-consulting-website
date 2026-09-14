# Avenor Consulting Website

An enterprise consulting website with 25 fully rendered content pages: a responsive homepage, four overview pages, a standalone contact page and 19 detail pages (seven services, four industries, three illustrative solution blueprints, three perspectives, About and Privacy). All page content is present in the generated HTML and remains readable without JavaScript.

Primary navigation opens dedicated URLs: `/services/`, `/industries/`, `/solutions/`, `/insights/`, `/company/about/` and `/contact/`. Overview cards open the corresponding detail pages, and detail breadcrumbs return to their overview. The homepage retains its sections for browsing and existing bookmarked fragments; primary navigation no longer jumps to those sections.

## Build and check

Use Node.js 16 or newer. There are no dependencies to install.

```sh
npm run build
npm test
```

Both commands generate `dist/` and validate local HTML links, image and script references, stylesheet resources, fragment anchors, page titles and unique HTML IDs. Every category overview must link each matching detail page exactly once, and primary navigation cannot link back to homepage fragments. A missing route, asset or anchor fails the build. The output includes `sitemap.xml`, `robots.txt` and a helpful `404.html`.

Serve `dist/` as the root of any static web server. For example, if Python 3 is available:

```sh
python3 -m http.server 4173 --directory dist
```

Then open `http://localhost:4173/`. Opening source files directly with `file://` does not provide the root-relative routing used by the site.

## Source organization

- `index.html` contains the homepage and the shared header/footer.
- `content.js` contains the original detail-page copy, structured by route slug.
- `hub-content.js` contains the four overview introductions and directory cards.
- `styles.css` and `script.js` provide the shared responsive design and interactions.
- `assets/` contains the photographs and favicon served locally with the website.
- `ASSET_CREDITS.md` records the photograph source references.
- `build.mjs` generates complete static pages and validates the output.
- `vercel.json` tells Vercel to run the build and serve `dist/`.

The generator extracts the homepage header and footer for consistent navigation on every page, the contact section for the standalone project-brief page, and the technology strip for the services overview. Current-page navigation is marked in generated HTML. Content data and build files are not copied into the public output. Generated files in `dist/` are ignored by Git; edit the source files and rebuild.

## Hosting and metadata

The default canonical origin is `https://avenor-consulting-website.vercel.app`. Set `SITE_URL` to a different HTTP(S) origin when adopting a verified custom domain. This updates canonical URLs, social-preview URLs, the sitemap and the robots sitemap reference during the build.

Vercel uses the repository root as the project root, `node build.mjs` as its build command and `dist` as its output directory. The site does not need a server runtime, third-party package or client-side routing fallback. Directory routes use trailing slashes.

## Content and launch decisions

`Avenor Consulting` is the working company identity inherited from the supplied source; its final business name and branding still need owner confirmation. The design uses original copy and locally served stock photography. Stock imagery illustrates the subject matter and is not evidence of Avenor offices, employees or client projects. The website contains no invented client names, testimonials, delivery metrics, offices, awards or partnership badges. Solution pages are expressly illustrative blueprints. Mentioned technology names describe focus areas and do not establish vendor affiliation or certification.

The project-brief builder validates entries, creates a browser-local preview and lets the visitor copy or download the text. It does **not** send an email or deliver an enquiry. A verified contact destination and an implemented submission service are required before adding a sending workflow. Update the interface and privacy notice together if that behavior changes.

The privacy page describes local brief preparation and standard requests involved in hosting and loading resources. Images in this build are served from `assets/`, and their original source references are retained in the asset credits. Review the notice against any analytics, remote resources or contact backend added in the future.
