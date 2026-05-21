import { useEffect, useMemo, useState } from 'react';
import { getStoredLanguage, translate } from './i18n/config';
import { Language, TranslationKey } from './i18n/translations';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AgentsSection } from './components/AgentsSection';
import { SystemsSection } from './components/SystemsSection';
import { ProcessSection } from './components/ProcessSection';
import { CtaSection } from './components/CtaSection';

type Theme = 'dark' | 'light';

function getStoredTheme(): Theme {
  const stored = window.localStorage.getItem('shakur-theme');
  if (stored === 'dark' || stored === 'light') return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export default function App() {
  const [language, setLanguage] = useState<Language>(() => getStoredLanguage());
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme());

  useEffect(() => {
    window.localStorage.setItem('shakur-language', language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    window.localStorage.setItem('shakur-theme', theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const t = useMemo(() => (key: TranslationKey) => translate(language, key), [language]);

  return (
    <div className="app-shell">
      <Header
        language={language}
        theme={theme}
        onLanguageChange={setLanguage}
        onThemeToggle={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
      />
      <main>
        <Hero language={language} />
        <AgentsSection language={language} />
        <ProcessSection language={language} />
        <SystemsSection language={language} />
        <CtaSection language={language} />
      </main>
      <footer className="site-footer">
        <div className="site-footer__brand">
          <strong>SHAKUR STUDIO</strong>
          <span>{t('footer.signature')}</span>
        </div>
        <p>{t('footer.tagline')}</p>
      </footer>
    </div>
  );
}
