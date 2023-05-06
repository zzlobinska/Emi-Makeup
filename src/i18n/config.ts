import { InitOptions } from 'i18next';

import { languageKey } from 'src/components/layout/LanguageSwitcher';
import { getLocalStorageItem } from 'src/utils/storage';

import {
  commonEN,
  commonPL,
  errorBoundariesEN,
  errorBoundariesPL,
  formEN,
  formPL,
  landingPageEN,
  landingPagePL,
  notificationsEN,
  notificationsPL,
  validatorEN,
  validatorPL
} from './locales';

const resources = {
  pl: {
    common: commonPL,
    errorBoundaries: errorBoundariesPL,
    landingPage: landingPagePL,
    validator: validatorPL,
    notifications: notificationsPL,
    form: formPL
  },
  en: {
    common: commonEN,
    errorBoundaries: errorBoundariesEN,
    landingPage: landingPageEN,
    validator: validatorEN,
    notifications: notificationsEN,
    form: formEN
  }
};

export const ns = ['common'];

export const initOptions: InitOptions = {
  resources,
  fallbackLng: 'pl',
  lng: getLocalStorageItem(languageKey) || 'pl',
  debug: true,
  load: 'languageOnly',
  ns,
  defaultNS: 'common',
  interpolation: {
    escapeValue: true,
    formatSeparator: ','
  }
};
