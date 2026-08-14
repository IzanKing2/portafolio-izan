import { writeFile } from 'node:fs/promises'
import path from 'node:path'

const SITE_URL = process.env.VITE_SITE_URL ?? 'https://izancarlo.dev'
const LOCALES = ['es', 'en']
const DEFAULT_LOCALE = 'es'
// Routes relative to a locale, e.g. '' for /:lang, '/projects' for /:lang/projects.
const ROUTES = ['']

const distDir = path.resolve(process.cwd(), 'dist')

function alternateLinks(routePath) {
  return LOCALES.map(
    (locale) => `    <xhtml:link rel="alternate" hreflang="${locale}" href="${SITE_URL}/${locale}${routePath}" />`
  ).join('\n') + `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/${DEFAULT_LOCALE}${routePath}" />`
}

function urlEntry(locale, routePath) {
  return [
    '  <url>',
    `    <loc>${SITE_URL}/${locale}${routePath}</loc>`,
    alternateLinks(routePath),
    '  </url>',
  ].join('\n')
}

const entries = ROUTES.flatMap((routePath) => LOCALES.map((locale) => urlEntry(locale, routePath)))

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...entries,
  '</urlset>',
  '',
].join('\n')

await writeFile(path.join(distDir, 'sitemap.xml'), xml, 'utf-8')
console.log(`sitemap.xml written with ${entries.length} entries`)
