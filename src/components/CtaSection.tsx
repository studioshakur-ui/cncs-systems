import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import { Language, TranslationKey } from '../i18n/translations';
import { translate } from '../i18n/config';

interface CtaSectionProps {
  language: Language;
}

const CONTACT_EMAIL = (import.meta.env.VITE_CONTACT_EMAIL as string | undefined) ?? 'contact@shakurstudio.com';
const WHATSAPP_URL = import.meta.env.VITE_WHATSAPP_URL as string | undefined;

export function CtaSection({ language }: CtaSectionProps) {
  const t = (key: TranslationKey) => translate(language, key);

  return (
    <section className="cta-section" id="contact">
      <div className="cta-section__body">
        <span className="cta-section__eyebrow">{t('contact.kicker')}</span>
        <h2>{t('final.title')}</h2>
        <p>{t('final.copy')}</p>
      </div>
      <div className="cta-section__actions">
        {WHATSAPP_URL && (
          <a className="button button--secondary" href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener">
            <MessageCircle size={17} aria-hidden="true" /> {t('contact.action.whatsapp')}
          </a>
        )}
        <a className="button button--primary" href={`mailto:${CONTACT_EMAIL}`}>
          <Mail size={17} aria-hidden="true" /> {t('contact.action.email')} <ArrowRight size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
