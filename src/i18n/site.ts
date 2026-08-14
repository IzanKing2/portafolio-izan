import { locales, type Locale } from './config';

/**
 * Canonical production origin, no trailing slash.
 * Override with VITE_SITE_URL at build time once the real domain is known.
 */
export const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined) ?? 'https://izancarlo.dev';

export function localizedUrl(locale: Locale, path = ''): string {
  return `${SITE_URL}/${locale}${path}`;
}

export const ogLocaleMap: Record<Locale, string> = {
  es: 'es_ES',
  en: 'en_US',
};

export { locales };
