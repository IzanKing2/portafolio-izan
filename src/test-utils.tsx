import { render } from '@testing-library/react'
import type { ReactElement } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { I18nProvider } from './i18n/I18nProvider'
import type { Locale } from './i18n/config'

interface RenderOptions {
  locale?: Locale
  route?: string
}

export function renderWithProviders(ui: ReactElement, { locale = 'en', route = '/' }: RenderOptions = {}) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nProvider locale={locale}>{ui}</I18nProvider>
    </MemoryRouter>
  )
}
