import { useState } from 'react';
import { Bot } from 'lucide-react';
import { Language, TranslationKey } from '../../i18n/translations';
import { translate } from '../../i18n/config';
import { AgentTone } from '../../lib/agents/types';
import { useAgent } from './useAgent';
import { AgentShell } from './AgentShell';
import { OfferResult } from './AgentResult';
import { AgentResultActions } from './AgentResultActions';

const TONES: AgentTone[] = ['premium', 'expert', 'direct', 'friendly'];

interface OfferAgentProps {
  language: Language;
}

export function OfferAgent({ language }: OfferAgentProps) {
  const t = (key: TranslationKey) => translate(language, key);
  const [activity, setActivity] = useState('');
  const [audience, setAudience] = useState('');
  const [goal, setGoal] = useState('');
  const [tone, setTone] = useState<AgentTone>('premium');
  const { status, envelope, errorMessage, run, reset } = useAgent('offer', language);

  function handleReset() {
    reset();
    setActivity('');
    setAudience('');
    setGoal('');
    setTone('premium');
  }

  function loadExample() {
    setActivity(t('agents.offer.activityExample'));
    setAudience(t('agents.offer.audienceExample'));
    setGoal(t('agents.offer.goalExample'));
    setTone('premium');
  }

  return (
    <AgentShell
      kind="offer"
      language={language}
      icon={<Bot size={22} aria-hidden="true" />}
      title={t('agents.offer.title')}
      description={t('agents.offer.copy')}
      status={status}
      mode={envelope?.mode ?? null}
      errorMessage={errorMessage}
      canSubmit={activity.trim().length >= 4}
      submitKey="agents.offer.cta"
      onSubmit={() => run({ activity, audience: audience || undefined, goal: goal || undefined, tone, language })}
      onReset={handleReset}
      onLoadExample={loadExample}
      form={
        <>
          <label className="agent-field">
            <span>{t('agents.offer.activityLabel')}</span>
            <textarea
              value={activity}
              onChange={(event) => setActivity(event.target.value)}
              placeholder={t('agents.offer.activityPlaceholder')}
              maxLength={600}
              rows={3}
              required
            />
          </label>
          <div className="agent-field-grid">
            <label className="agent-field">
              <span>{t('agents.offer.audienceLabel')}</span>
              <input
                type="text"
                value={audience}
                onChange={(event) => setAudience(event.target.value)}
                placeholder={t('agents.offer.audiencePlaceholder')}
                maxLength={240}
              />
            </label>
            <label className="agent-field">
              <span>{t('agents.offer.goalLabel')}</span>
              <input
                type="text"
                value={goal}
                onChange={(event) => setGoal(event.target.value)}
                placeholder={t('agents.offer.goalPlaceholder')}
                maxLength={240}
              />
            </label>
          </div>
          <fieldset className="agent-tones">
            <legend>{t('agents.offer.toneLabel')}</legend>
            {TONES.map((option) => (
              <label key={option} className={option === tone ? 'is-active' : ''}>
                <input
                  type="radio"
                  name="offer-tone"
                  value={option}
                  checked={option === tone}
                  onChange={() => setTone(option)}
                />
                <span>{t(`agents.offer.tone.${option}` as TranslationKey)}</span>
              </label>
            ))}
          </fieldset>
        </>
      }
      result={envelope ? <OfferResult output={envelope.result} mode={envelope.mode} language={language} /> : null}
      resultFooter={<AgentResultActions kind="offer" primaryInput={activity} language={language} />}
    />
  );
}
