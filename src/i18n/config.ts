import { Language, translations, TranslationKey } from './translations';

export const languages: Language[] = ['fr', 'it', 'en'];

export function getStoredLanguage(): Language {
  const stored = window.localStorage.getItem('shakur-language');
  if (stored === 'fr' || stored === 'it' || stored === 'en') {
    return stored;
  }

  const browser = window.navigator.language.toLowerCase();
  if (browser.startsWith('it')) return 'it';
  if (browser.startsWith('fr')) return 'fr';
  return 'en';
}

export function translate(language: Language, key: TranslationKey): string {
  return translations[language][key];
}
