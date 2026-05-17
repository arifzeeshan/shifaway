import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'

type SupportedLanguage = 'en' | 'ar'

const localeLoaders = {
  ar: () => import('./locales/ar.json'),
} satisfies Record<Exclude<SupportedLanguage, 'en'>, () => Promise<{ default: Record<string, unknown> }>>

function normalizeLanguage(language?: string | null): SupportedLanguage {
  return language?.toLowerCase().startsWith('ar') ? 'ar' : 'en'
}

function detectInitialLanguage(): SupportedLanguage {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const storedLanguage = window.localStorage.getItem('shifaway-lang')

  if (storedLanguage) {
    return normalizeLanguage(storedLanguage)
  }

  return normalizeLanguage(window.navigator.languages?.[0] || window.navigator.language)
}

async function loadTranslation(language: SupportedLanguage) {
  if (language === 'en') {
    return en
  }

  const module = await localeLoaders[language]()
  return module.default
}

export async function loadLanguage(language: string) {
  const resolvedLanguage = normalizeLanguage(language)

  if (!i18n.hasResourceBundle(resolvedLanguage, 'translation')) {
    i18n.addResourceBundle(resolvedLanguage, 'translation', await loadTranslation(resolvedLanguage), true, true)
  }

  return resolvedLanguage
}

export async function changeLanguage(language: string) {
  const resolvedLanguage = await loadLanguage(language)

  if (typeof window !== 'undefined') {
    window.localStorage.setItem('shifaway-lang', resolvedLanguage)
  }

  return i18n.changeLanguage(resolvedLanguage)
}

export const initialLanguage = detectInitialLanguage()

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
    },
    lng: initialLanguage,
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar'],
    interpolation: {
      escapeValue: false,
    },
  })

export const i18nReady = initialLanguage === 'ar' ? loadLanguage(initialLanguage) : Promise.resolve(initialLanguage)

export default i18n
