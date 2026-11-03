import type { RouteRecord } from 'vite-react-ssg'
import Home from './pages/Home'
import ProjectsDetail from './pages/ProjectsDetail'
import RootRedirect from './components/RootRedirect'
import { locales } from './i18n/config'

export const routes: RouteRecord[] = [
  {
    path: '/:lang',
    Component: Home,
    getStaticPaths: () => [...locales],
  },
  {
    path: '/:lang/projects',
    Component: ProjectsDetail,
    getStaticPaths: () => locales.map((l) => `${l}/projects`),
  },
  {
    path: '/',
    Component: RootRedirect,
  },
]
