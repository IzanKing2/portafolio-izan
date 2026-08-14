import type { RouteRecord } from 'vite-react-ssg'
import Home from './pages/Home'
import RootRedirect from './components/RootRedirect'
import { locales } from './i18n/config'

export const routes: RouteRecord[] = [
  {
    path: '/:lang',
    Component: Home,
    getStaticPaths: () => [...locales],
  },
  {
    path: '/',
    Component: RootRedirect,
  },
]
