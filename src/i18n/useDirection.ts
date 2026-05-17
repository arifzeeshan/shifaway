import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export function useDirection() {
  const { i18n } = useTranslation()

  useEffect(() => {
    const applyDirection = (language: string) => {
      const resolvedLanguage = language.startsWith('ar') ? 'ar' : 'en'
      document.documentElement.lang = resolvedLanguage
      document.documentElement.dir = resolvedLanguage === 'ar' ? 'rtl' : 'ltr'
    }

    applyDirection(i18n.resolvedLanguage || i18n.language)
    i18n.on('languageChanged', applyDirection)

    return () => {
      i18n.off('languageChanged', applyDirection)
    }
  }, [i18n])
}
