import { useState } from 'react';
import { Search } from 'lucide-react';
import { Language, TranslationKey } from '../../i18n/translations';
import { translate } from '../../i18n/config';
import { useAgent } from './useAgent';
import { AgentShell } from './AgentShell';
import { AuditResult } from './AgentResult';
import { AgentResultActions } from './AgentResultActions';

interface AuditAgentProps {
  language: Language;
}

export function AuditAgent({ language }: AuditAgentProps) {
  const t = (key: TranslationKey) => translate(language, key);
  const [subject, setSubject] = useState('');
  const [audience, setAudience] = useState('');
  const [objective, setObjective] = useState('');
  const { status, envelope, errorMessage, run, reset } = useAgent('audit', language);

  function handleReset() {
    reset();
    setSubject('');
    setAudience('');
    setObjective('');
  }

  function loadExample() {
    setSubject(t('agents.audit.subjectExample'));
    setAudience(t('agents.audit.audienceExample'));
    setObjective(t('agents.audit.objectiveExample'));
  }

  return (
    <AgentShell
      kind="audit"
      language={language}
      icon={<Search size={22} aria-hidden="true" />}
      title={t('agents.audit.title')}
      description={t('agents.audit.copy')}
      status={status}
      mode={envelope?.mode ?? null}
      errorMessage={errorMessage}
      canSubmit={subject.trim().length >= 4}
      submitKey="agents.audit.cta"
      onSubmit={() => run({ subject, audience: audience || undefined, objective: objective || undefined, language })}
      onReset={handleReset}
      onLoadExample={loadExample}
      form={
        <>
          <label className="agent-field">
            <span>{t('agents.audit.subjectLabel')}</span>
            <textarea
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              placeholder={t('agents.audit.subjectPlaceholder')}
              maxLength={600}
              rows={3}
              required
            />
          </label>
          <div className="agent-field-grid">
            <label className="agent-field">
              <span>{t('agents.audit.audienceLabel')}</span>
              <input
                type="text"
                value={audience}
                onChange={(event) => setAudience(event.target.value)}
                placeholder={t('agents.audit.audiencePlaceholder')}
                maxLength={240}
              />
            </label>
            <label className="agent-field">
              <span>{t('agents.audit.objectiveLabel')}</span>
              <input
                type="text"
                value={objective}
                onChange={(event) => setObjective(event.target.value)}
                placeholder={t('agents.audit.objectivePlaceholder')}
                maxLength={240}
              />
            </label>
          </div>
        </>
      }
      result={envelope ? <AuditResult output={envelope.result} mode={envelope.mode} language={language} /> : null}
      resultFooter={<AgentResultActions kind="audit" primaryInput={subject} language={language} />}
    />
  );
}
