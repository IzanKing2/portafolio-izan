import type { IconType } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import type { TranslationKey } from '../i18n/config';

export interface SocialLink {
  href: string;
  /** Short brand name, used for visible button labels. */
  name: string;
  labelKey: TranslationKey;
  Icon: IconType;
}

/** Single source of truth for social links, shared by Contacto and Footer. */
export const socials: SocialLink[] = [
  { href: 'https://github.com/IzanKing2', name: 'GitHub', labelKey: 'contact.githubLabel', Icon: FaGithub },
  {
    href: 'https://www.linkedin.com/in/izan-celis-afonso/',
    name: 'LinkedIn',
    labelKey: 'contact.linkedinLabel',
    Icon: FaLinkedin,
  },
  { href: 'mailto:izanwork2@gmail.com', name: 'Email', labelKey: 'contact.emailLabel', Icon: MdEmail },
];
