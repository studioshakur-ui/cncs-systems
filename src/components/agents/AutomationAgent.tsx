import { useState } from 'react';
import { Zap } from 'lucide-react';
import { Language, TranslationKey } from '../../i18n/translations';
import { translate } from '../../i18n/config';
import { useAgent } from './useAgent';
import { AgentShell } from './AgentShell';
import { AutomationResult } from './AgentResult';
import { AgentResultActions } from './AgentResultActions';

interface AutomationAgentProps {
  language: Language;
}

export function AutomationAgent({ language }: AutomationAgentProps) {
  const t = (key: TranslationKey) => translate(language, key);
  const [workflow, setWorkflow] = useState('');
  const [tools, setTools] = useState('');
  const [desiredResult, setDesiredResult] = useState('');
  const { status, envelope, errorMessage, run, reset } = useAgent('automation', language);

  function handleReset() {
    reset();
    setWorkflow('');
    setTools('');
    setDesiredResult('');
  }

  function loadExample() {
    setWorkflow(t('agents.auto.workflowExample'));
    setTools(t('agents.auto.toolsExample'));
    setDesiredResult(t('agents.auto.resultExample'));
  }

  return (
    <AgentShell
      kind="automation"
      language={language}
      icon={<Zap size={22} aria-hidden="true" />}
      title={t('agents.automation.title')}
      description={t('agents.automation.copy')}
      status={status}
      mode={envelope?.mode ?? null}
      errorMessage={errorMessage}
      canSubmit={workflow.trim().length >= 4}
      submitKey="agents.automation.cta"
      onSubmit={() => run({ workflow, tools: tools || undefined, desiredResult: desiredResult || undefined, language })}
      onReset={handleReset}
      onLoadExample={loadExample}
      form={
        <>
          <label className="agent-field">
            <span>{t('agents.auto.workflowLabel')}</span>
            <textarea
              value={workflow}
              onChange={(event) => setWorkflow(event.target.value)}
              placeholder={t('agents.auto.workflowPlaceholder')}
              maxLength={600}
              rows={3}
              required
            />
          </label>
          <div className="agent-field-grid">
            <label className="agent-field">
              <span>{t('agents.auto.toolsLabel')}</span>
              <input
                type="text"
                value={tools}
                onChange={(event) => setTools(event.target.value)}
                placeholder={t('agents.auto.toolsPlaceholder')}
                maxLength={240}
              />
            </label>
            <label className="agent-field">
              <span>{t('agents.auto.resultLabel')}</span>
              <input
                type="text"
                value={desiredResult}
                onChange={(event) => setDesiredResult(event.target.value)}
                placeholder={t('agents.auto.resultPlaceholder')}
                maxLength={240}
              />
            </label>
          </div>
        </>
      }
      result={envelope ? <AutomationResult output={envelope.result} mode={envelope.mode} language={language} /> : null}
      resultFooter={<AgentResultActions kind="automation" primaryInput={workflow} language={language} />}
    />
  );
}
