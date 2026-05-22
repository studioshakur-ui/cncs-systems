import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, Lightbulb, Mail, MessageCircle, Sparkles } from 'lucide-react';
import { Language, TranslationKey } from '../i18n/translations';
import { translate } from '../i18n/config';

interface ShakurFlowProps {
  language: Language;
}

interface FlowStep {
  id: 'idea' | 'agent' | 'system' | 'contact';
  labelKey: TranslationKey;
}

const STEPS: FlowStep[] = [
  { id: 'idea', labelKey: 'flow.step.idea' },
  { id: 'agent', labelKey: 'flow.step.agent' },
  { id: 'system', labelKey: 'flow.step.system' },
  { id: 'contact', labelKey: 'flow.step.contact' }
];

const AUTO_ADVANCE_MS = 3600;
const MANUAL_PAUSE_MS = 9000;

const CONTACT_EMAIL = (import.meta.env.VITE_CONTACT_EMAIL as string | undefined) ?? 'contact@shakurstudio.com';
const WHATSAPP_URL = import.meta.env.VITE_WHATSAPP_URL as string | undefined;

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined'
    && typeof window.matchMedia === 'function'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function ShakurFlow({ language }: ShakurFlowProps) {
  const t = (key: TranslationKey) => translate(language, key);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => prefersReducedMotion());
  const manualPauseUntilRef = useRef<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = () => setReducedMotion(mql.matches);
    mql.addEventListener?.('change', handler);
    return () => mql.removeEventListener?.('change', handler);
  }, []);

  // When reduced motion is on, jump to the final state immediately.
  useEffect(() => {
    if (reducedMotion) setActiveIndex(STEPS.length - 1);
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    const id = window.setInterval(() => {
      if (Date.now() < manualPauseUntilRef.current) return;
      setActiveIndex((current) => (current + 1) % STEPS.length);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  const focusStep = useCallback((index: number) => {
    setActiveIndex(((index % STEPS.length) + STEPS.length) % STEPS.length);
    manualPauseUntilRef.current = Date.now() + MANUAL_PAUSE_MS;
  }, []);

  const onStepKey = useCallback((event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      focusStep(index + 1);
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      focusStep(index - 1);
    } else if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      focusStep(index);
    }
  }, [focusStep]);

  // Visibility predicates
  const showUserBubble = activeIndex >= 0;
  const showAgentBubble = activeIndex >= 1;
  const showPlan = activeIndex >= 2;
  const showContact = activeIndex >= 3;
  const typing = !reducedMotion && activeIndex === 1;

  const mailtoHref = `mailto:${CONTACT_EMAIL}`;
  // Light pre-fill for the flow's terminal contact action — uses the flow narrative, not an agent run.
  const prefillBody = `${t('flow.bubble.user')}\n\n${t('flow.contact.body')}\n\n${t('contact.prefill.footer')}`;
  const whatsappHref = WHATSAPP_URL
    ? `${WHATSAPP_URL}${WHATSAPP_URL.includes('?') ? '&' : '?'}text=${encodeURIComponent(prefillBody)}`
    : null;

  return (
    <section className="section section--flow" id="flow">
      <div className="section-heading">
        <span>{t('flow.eyebrow')}</span>
        <h2>{t('flow.title')}</h2>
        <p>{t('flow.copy')}</p>
      </div>

      <article className="shakur-flow" aria-label={t('flow.title')}>
        <ol className="shakur-flow__steps" role="tablist" aria-label={t('flow.eyebrow')}>
          {STEPS.map((step, index) => {
            const isActive = index === activeIndex;
            const isDone = index < activeIndex;
            return (
              <li key={step.id} className="shakur-flow__step-wrap">
                <button
                  type="button"
                  className={`shakur-flow__step${isActive ? ' is-active' : ''}${isDone ? ' is-done' : ''}`}
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => focusStep(index)}
                  onKeyDown={(e) => onStepKey(e, index)}
                >
                  <span className="shakur-flow__step-ordinal">0{index + 1}</span>
                  <span className="shakur-flow__step-label">{t(step.labelKey)}</span>
                </button>
                {index < STEPS.length - 1 && (
                  <span
                    className={`shakur-flow__connector${isDone ? ' is-done' : ''}`}
                    aria-hidden="true"
                  />
                )}
              </li>
            );
          })}
        </ol>

        <div className="shakur-flow__stage">
          {showUserBubble && (
            <div className="shakur-flow__bubble shakur-flow__bubble--user">
              <span className="shakur-flow__bubble-avatar" aria-hidden="true">
                <Lightbulb size={14} />
              </span>
              <p>{t('flow.bubble.user')}</p>
            </div>
          )}

          {(showAgentBubble || typing) && (
            <div className="shakur-flow__bubble shakur-flow__bubble--agent">
              <span className="shakur-flow__bubble-avatar shakur-flow__bubble-avatar--accent" aria-hidden="true">
                <Sparkles size={14} />
              </span>
              {typing && !showPlan ? (
                <p className="shakur-flow__typing" aria-label={t('agents.loading')}>
                  <span className="shakur-flow__typing-dot" />
                  <span className="shakur-flow__typing-dot" />
                  <span className="shakur-flow__typing-dot" />
                </p>
              ) : (
                <p>{t('flow.bubble.agent')}</p>
              )}
            </div>
          )}

          {showPlan && (
            <div className="shakur-flow__plan">
              <div className="shakur-flow__plan-head">
                <span className="shakur-flow__plan-eyebrow">{t('flow.plan.title')}</span>
              </div>
              <ul className="shakur-flow__plan-list">
                <li><CheckCircle2 size={14} aria-hidden="true" /> {t('flow.plan.item1')}</li>
                <li><CheckCircle2 size={14} aria-hidden="true" /> {t('flow.plan.item2')}</li>
                <li><CheckCircle2 size={14} aria-hidden="true" /> {t('flow.plan.item3')}</li>
                <li><CheckCircle2 size={14} aria-hidden="true" /> {t('flow.plan.item4')}</li>
              </ul>
            </div>
          )}

          {showContact && (
            <div className="shakur-flow__contact">
              <div className="shakur-flow__contact-copy">
                <h3>{t('flow.contact.title')}</h3>
                <p>{t('flow.contact.body')}</p>
              </div>
              <div className="shakur-flow__contact-actions">
                {whatsappHref && (
                  <a
                    className="shakur-flow__action shakur-flow__action--whatsapp"
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <MessageCircle size={16} aria-hidden="true" /> {t('contact.action.whatsapp')}
                  </a>
                )}
                <a className="shakur-flow__action shakur-flow__action--email" href={mailtoHref}>
                  <Mail size={16} aria-hidden="true" /> {t('contact.action.email')}
                </a>
                <a className="shakur-flow__action shakur-flow__action--scroll" href="#contact">
                  {t('cta.startProject')} <ArrowRight size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
          )}
        </div>
      </article>
    </section>
  );
}
