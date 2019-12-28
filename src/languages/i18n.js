import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en/example.json';
import fr from './fr/example.json';

// TODO: implement i18next-xhr-backend for separate translation distribution
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en: { example: en }, fr: { example: fr } },
    ns: 'example',
    fallbackLng: 'en',
    debug: true,
    interpolation: { escapeValue: false }
  });

export default i18n;
