import { createContext, useContext, type ReactNode } from 'react';
import type { Locale, TranslationKey } from './config';
import es from './locales/es/common.json';
import en from './locales/en/common.json';

const dictionaries: Record<Locale, Record<TranslationKey, string>> = { es, en };

interface I18nContextValue {
  locale: Locale;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

interface I18nProviderProps {
  locale: Locale;
  children: ReactNode;
}

export function I18nProvider({ locale, children }: I18nProviderProps) {
  const t = (key: TranslationKey) => dictionaries[locale][key];
  return <I18nContext.Provider value={{ locale, t }}>{children}</I18nContext.Provider>;
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useTranslation must be used within an I18nProvider');
  return ctx;
}
