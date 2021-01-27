import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const useLocale = () => {
  i18n
    .use(initReactI18next)
    .init({
      react: {
        useSuspense: false
      },
      resources: {
        en: {
          translation: {
            'Welcome to React': 'Welcome to React and react-i18next',
            'key': '{{what}} is {{how}}'
          }
        }
      },
      lng: 'en',
      fallbackLng: 'en',

      interpolation: {
        escapeValue: false
      }
    });
}
