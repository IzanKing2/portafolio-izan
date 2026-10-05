import type { IconType } from 'react-icons';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiOpenjdk,
  SiSpringboot,
  SiPython,
  SiSupabase,
  SiDocker,
  SiUbuntu,
  SiNginx,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithubactions,
  SiVercel,
  SiClaudecode,
} from 'react-icons/si';

/**
 * Maps a tech-item label (as used verbatim in src/data/technologies.ts)
 * to its brand icon. Items with no official mark (e.g. "REST APIs", or
 * process names like "Context Engineering") are intentionally absent and
 * render as text-only pills.
 */
export const techIcons: Record<string, IconType> = {
  HTML5: SiHtml5,
  CSS3: SiCss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  'Next.js': SiNextdotjs,
  Angular: SiAngular,
  TailwindCSS: SiTailwindcss,
  PHP: SiPhp,
  Laravel: SiLaravel,
  Java: SiOpenjdk,
  'Spring Boot': SiSpringboot,
  Python: SiPython,
  Supabase: SiSupabase,
  Docker: SiDocker,
  Ubuntu: SiUbuntu,
  Nginx: SiNginx,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  Git: SiGit,
  'GitHub Actions': SiGithubactions,
  Vercel: SiVercel,
  'Claude Code': SiClaudecode,
};
