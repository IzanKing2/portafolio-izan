import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { locales, defaultLocale, type Locale } from '../i18n/config'

function detectLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale

  const stored = window.localStorage.getItem('lang')
  if (stored && (locales as readonly string[]).includes(stored)) return stored as Locale

  const browserLang = window.navigator.language.slice(0, 2)
  if ((locales as readonly string[]).includes(browserLang)) return browserLang as Locale

  return defaultLocale
}

function RootRedirect() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(`/${detectLocale()}`, { replace: true })
  }, [navigate])

  return null
}

export default RootRedirect
