import type { Locale } from './config';

/**
 * Merges a locale-agnostic base record with its per-locale translations
 * into an ordered array, keyed by the shared id. Used so translatable
 * "big content" (projects, experience, method, tech groups) is split
 * from non-translatable fields without duplicating whole entries per locale.
 */
export function mergeLocalized<Id extends string, Base extends object, Translated extends object>(
  base: Record<Id, Base>,
  i18n: Record<Locale, Record<Id, Translated>>,
  locale: Locale
): (Base & Translated & { id: Id })[] {
  return (Object.keys(base) as Id[]).map((id) => ({
    id,
    ...base[id],
    ...i18n[locale][id],
  }));
}
