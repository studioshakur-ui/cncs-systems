import { ArrowRight, MessageCircle } from 'lucide-react';
import { Language } from '../i18n/translations';
import { translate } from '../i18n/config';

interface CtaSectionProps {
  language: Language;
}

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL ?? 'contact@shakurstudio.com';
const WHATSAPP_URL = import.meta.env.VITE_WHATSAPP_URL;

export function CtaSection({ language }: CtaSectionProps) {
  const t = (key: Parameters<typeof translate>[1]) => translate(language, key);

  return (
    <section className="cta-section" id="contact">
      <div className="cta-section__body">
        <h2>{t('final.title')}</h2>
        <p>{t('final.copy')}</p>
      </div>
      <div className="cta-section__actions">
        {WHATSAPP_URL && (
          <a className="button button--secondary" href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener">
            <MessageCircle size={17} aria-hidden="true" /> {t('cta.whatsapp')}
          </a>
        )}
        <a className="button button--primary" href={`mailto:${CONTACT_EMAIL}`}>
          {t('cta.build')} <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
