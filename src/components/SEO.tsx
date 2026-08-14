import { Head } from 'vite-react-ssg'
import { useTranslation } from '../i18n/I18nProvider'
import { locales, defaultLocale } from '../i18n/config'
import { localizedUrl, ogLocaleMap } from '../i18n/site'

interface SEOProps {
  path?: string
  title?: string
  description?: string
  name?: string
  type?: string
}

export default function SEO({
  path = '',
  title,
  description,
  name = 'Izan Carlo Celis Afonso',
  type = 'website',
}: SEOProps) {
  const { t, locale } = useTranslation()
  const resolvedTitle = title ?? t('seo.defaultTitle')
  const resolvedDescription = description ?? t('seo.defaultDescription')
  const canonical = localizedUrl(locale, path)

  return (
    <Head>
      <html lang={locale} />
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />

      <link rel="canonical" href={canonical} />
      {locales.map((l) => (
        <link key={l} rel="alternate" hrefLang={l} href={localizedUrl(l, path)} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={localizedUrl(defaultLocale, path)} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={ogLocaleMap[locale]} />
      {locales
        .filter((l) => l !== locale)
        .map((l) => (
          <meta key={l} property="og:locale:alternate" content={ogLocaleMap[l]} />
        ))}

      {/* Twitter */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
    </Head>
  )
}
