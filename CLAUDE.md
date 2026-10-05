# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Language

Respond to the user in Spanish (español). Code, identifiers, and comments stay in English as the rest of the codebase does.

## Commands

```bash
npm run dev       # Vite dev server
npm run build     # vite-react-ssg build (SSG, prerenders es/en) + scripts/gen-sitemap.mjs
npm run preview   # Serve the built dist/ locally
npm run test      # Vitest (watch mode)
npm run test -- --run             # Vitest single run (what CI uses)
npm run test -- --run Navbar      # Run a single test file/pattern
npm run lint       # Oxlint (despite the npm script name "lint" invoking eslint, the only lint devDependency is `oxlint`, not eslint)
```

CI (`.github/workflows/ci.yml`) runs on push/PR to `main`/`master`: `npm ci` → `npm run test -- --run` → `npm run build`. No lint step in CI.

## Architecture

This is a **statically pre-rendered** (SSG) bilingual portfolio, not a plain SPA — built with `vite-react-ssg`, not `react-dom` directly.

- `src/main.tsx` calls `ViteReactSSG({ routes })` from `src/App.tsx`.
- Routes (`src/App.tsx`): `/:lang` → `Home`, statically generated for each locale via `getStaticPaths: () => [...locales]`; `/` → `RootRedirect`, a client-only component that reads `localStorage('lang')` / `navigator.language` and redirects to `/es` or `/en`.
- `src/pages/Home.tsx` reads `lang` from the route, wraps everything in `I18nProvider`, and composes the page: `Navbar`, `Hero` are eager; everything below the fold (`Proyectos`, `Method`, `Tecnologias`, `Experiencia`, `SobreMi`, `Contacto`) is `lazy()`-loaded inside one `Suspense`.
- `npm run build` outputs prerendered `dist/es/index.html` and `dist/en/index.html`, then `scripts/gen-sitemap.mjs` writes `dist/sitemap.xml` with hreflang alternates for both locales (`VITE_SITE_URL` env var overrides the canonical origin, default `https://izancarlo.dev`).

### i18n

- `src/i18n/config.ts` defines `locales = ['es', 'en']`, `defaultLocale = 'es'`, and derives `TranslationKey` from the keys of `locales/es/common.json` — so the two locale JSON files (`src/i18n/locales/{es,en}/common.json`) **must stay in sync key-for-key**, or TypeScript will flag missing keys when the dictionaries are typed against `TranslationKey`. `src/i18n/__tests__/translations.test.ts` also checks this.
- `I18nProvider` (`src/i18n/I18nProvider.tsx`) provides `{ locale, t }` via context; components call `useTranslation()` for simple string lookups.
- Larger, structured content (projects, experience, method steps, tech groups) is **not** stored as flat translation strings. Instead it follows a `*Base` / `*I18n` split merged by `mergeLocalized()` (`src/i18n/utils.ts`):
  - A locale-agnostic `Record<Id, Base>` (stack, links, flags, numbers — same across languages).
  - A `Record<Locale, Record<Id, Translated>>` (titles/descriptions per language).
  - `mergeLocalized` zips them into an ordered array keyed by `id`, using the **insertion order of the base record's keys** as the display order (e.g. `getProjects()` in `src/data/projects.ts` — the first key in `projectsBase` is the one that gets the "featured" card treatment in `Proyectos.tsx`, since that component styles `index === 0` specially).
  - This pattern is used in `src/data/projects.ts`, `src/data/technologies.ts`, `src/data/experience.ts`, `src/data/method.ts`. When adding an entry (e.g. a new project), add it to both the `*Base` record and every locale's `*I18n` record with matching `id`.

### Styling

- One global stylesheet (`src/index.css`) defines CSS custom properties as the design-token source of truth: `--color-*` (dark theme by default, `[data-theme='light']` override), `--font-main`/`--font-mono`, `--radius`, `--shadow-card`, `--max-width`. See `DESIGN.md` for the fuller rationale.
- Every component has a co-located CSS Module in `src/styles/<Component>.module.css` — no UI framework/library is used.
- `ProjectPreview.tsx` renders a fake "browser chrome" mockup whose inner content shape is driven by a `variant` prop (`grid` | `list` | `api` | `mobile`) declared per-project in `src/data/projects.ts`; used for projects without a real screenshot (`project.imagen` takes priority when present and is imported as a bundled asset, not a path string).

### SEO

`src/components/SEO.tsx` + `src/i18n/site.ts` build per-locale `<title>`, meta description, canonical URL, hreflang alternates, and `og:image`/`twitter:image` from `SITE_URL`/`OG_IMAGE_URL`/`ogLocaleMap`.
