import { ArrowRight, BrainCircuit, Globe2, Mail, MessageCircle, Workflow } from 'lucide-react';
import { Language, TranslationKey } from '../i18n/translations';
import { translate } from '../i18n/config';
import { site } from '../config/site';

interface CapabilitiesContactProps {
  language: Language;
}

interface Capability {
  icon: typeof Globe2;
  titleKey: TranslationKey;
  copyKey: TranslationKey;
}

const CAPS: Capability[] = [
  { icon: Globe2, titleKey: 'caps.web.title', copyKey: 'caps.web.copy' },
  { icon: BrainCircuit, titleKey: 'caps.ai.title', copyKey: 'caps.ai.copy' },
  { icon: Workflow, titleKey: 'caps.auto.title', copyKey: 'caps.auto.copy' }
];

export function CapabilitiesContact({ language }: CapabilitiesContactProps) {
  const t = (key: TranslationKey) => translate(language, key);

  return (
    <section className="section caps-contact" id="contact">
      <div className="caps-contact__caps" id="method">
        <div className="section-heading">
          <span>{t('caps.eyebrow')}</span>
          <h2>{t('caps.title')}</h2>
        </div>
        <ul className="caps-contact__list">
          {CAPS.map(({ icon: Icon, titleKey, copyKey }) => (
            <li key={titleKey} className="caps-contact__item">
              <span className="caps-contact__icon" aria-hidden="true"><Icon size={18} /></span>
              <div>
                <h3>{t(titleKey)}</h3>
                <p>{t(copyKey)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="caps-contact__cta">
        <span className="caps-contact__eyebrow">{t('contact.kicker')}</span>
        <h2>{t('contact.title')}</h2>
        <p>{t('contact.copy')}</p>
        <div className="caps-contact__actions">
          <a className="button button--primary" href={`mailto:${site.contactEmail}`}>
            {t('cta.startProject')} <ArrowRight size={16} aria-hidden="true" />
          </a>
          {site.whatsappUrl && (
            <a className="button button--ghost" href={site.whatsappUrl} target="_blank" rel="noreferrer noopener">
              <MessageCircle size={16} aria-hidden="true" /> {t('contact.action.whatsapp')}
            </a>
          )}
          <a className="button button--ghost" href={`mailto:${site.contactEmail}`}>
            <Mail size={16} aria-hidden="true" /> {t('contact.action.email')}
          </a>
        </div>
      </div>
    </section>
  );
}
