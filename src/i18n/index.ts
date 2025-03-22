import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en.json';
import heTranslation from './locales/he.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: enTranslation,
      },
      he: {
        translation: heTranslation,
      },
    },
    detection: {
      order: ['querystring', 'navigator'],
      lookupQuerystring: 'lang',
      caches: ['localStorage'],
    },
  });

export default i18n;
