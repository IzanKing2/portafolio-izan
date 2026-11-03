import { useLocation } from 'react-router-dom'
import { useTranslation } from '../i18n/I18nProvider'

/**
 * Returns a builder for in-page anchors that also work from other pages:
 * on the home page `#projects` stays local, elsewhere it becomes `/es#projects`.
 */
export function useSectionHref() {
  const { pathname } = useLocation()
  const { locale } = useTranslation()
  const onHome = pathname.replace(/\/+$/, '') === `/${locale}`
  return (id: string) => (onHome ? `#${id}` : `/${locale}#${id}`)
}
