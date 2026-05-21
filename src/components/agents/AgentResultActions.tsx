import { ArrowRight, MessageCircle, Mail } from 'lucide-react';
import { AgentKind } from '../../lib/agents/types';
import { Language, TranslationKey } from '../../i18n/translations';
import { translate } from '../../i18n/config';
import { buildPrefillTargets } from '../../lib/contact/prefill';

interface AgentResultActionsProps {
  kind: AgentKind;
  primaryInput: string;
  language: Language;
}

export function AgentResultActions({ kind, primaryInput, language }: AgentResultActionsProps) {
  const t = (key: TranslationKey) => translate(language, key);
  const { whatsappHref, mailtoHref } = buildPrefillTargets(kind, primaryInput, language);

  return (
    <div className="agent-result__actions" aria-label={t('contact.kicker')}>
      {whatsappHref && (
        <a
          className="agent-result__action agent-result__action--whatsapp"
          href={whatsappHref}
          target="_blank"
          rel="noreferrer noopener"
        >
          <MessageCircle size={16} aria-hidden="true" />
          {t('contact.action.whatsapp')}
        </a>
      )}
      <a
        className="agent-result__action agent-result__action--email"
        href={mailtoHref}
      >
        <Mail size={16} aria-hidden="true" />
        {t('contact.action.email')}
      </a>
      <a
        className="agent-result__action agent-result__action--scroll"
        href="#contact"
      >
        {t('agents.turnIntoSystem')} <ArrowRight size={15} aria-hidden="true" />
      </a>
    </div>
  );
}
