import type { IconType } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import type { TranslationKey } from '../i18n/config';

export interface SocialLink {
  href: string;
  labelKey: TranslationKey;
  Icon: IconType;
}

/** Single source of truth for social links, shared by Contacto and Footer. */
export const socials: SocialLink[] = [
  { href: 'https://github.com/IzanKing2', labelKey: 'contact.githubLabel', Icon: FaGithub },
  {
    href: 'https://www.linkedin.com/in/izan-celis-afonso/',
    labelKey: 'contact.linkedinLabel',
    Icon: FaLinkedin,
  },
  { href: 'mailto:izanwork2@gmail.com', labelKey: 'contact.emailLabel', Icon: MdEmail },
];
