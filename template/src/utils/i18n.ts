import i18n from 'i18next'
import { en } from '@Locales/en'
import { vi } from '@Locales/vi'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  fallbackLng: 'vi',
  lng: 'vi',

  resources: {
    en,
    vi,
  },

  ns: ['common'],
  defaultNS: 'common',

  debug: false,
})

export default i18n
