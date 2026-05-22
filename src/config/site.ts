/**
 * SHAKUR STUDIO — centralized site configuration.
 *
 * Build-time constants and env-driven values that the UI consumes.
 * Never imports anything that touches the network or the DOM.
 */
import { Language } from '../i18n/translations';

export interface SiteConfig {
  brandName: string;
  domain: string;
  contactEmail: string;
  whatsappUrl: string | null;
  whatsappPrefillBase: string | null;
  defaultLanguage: Language;
  defaultTheme: 'dark' | 'light';
}

const envEmail = (import.meta.env.VITE_CONTACT_EMAIL as string | undefined)?.trim();
const envWhatsApp = (import.meta.env.VITE_WHATSAPP_URL as string | undefined)?.trim();

export const site: SiteConfig = {
  brandName: 'SHAKUR STUDIO',
  domain: 'shakurstudio.com',
  contactEmail: envEmail && envEmail.length > 0 ? envEmail : 'contact@shakurstudio.com',
  whatsappUrl: envWhatsApp && envWhatsApp.length > 0 ? envWhatsApp : null,
  whatsappPrefillBase: envWhatsApp && envWhatsApp.length > 0 ? envWhatsApp : null,
  defaultLanguage: 'en',
  defaultTheme: 'dark'
};
