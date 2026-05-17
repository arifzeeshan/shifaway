import { Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { changeLanguage } from '../i18n'

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'ع' },
]

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const currentLanguage = i18n.resolvedLanguage || i18n.language

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-[#f4c542]/40 bg-white/10 p-1" aria-label={t('language.label')}>
      <Languages size={14} className="text-[#f4c542] mx-1" />
      {languages.map((language) => {
        const active = currentLanguage.startsWith(language.code)

        return (
          <button
            key={language.code}
            type="button"
            aria-pressed={active}
            onClick={() => { void changeLanguage(language.code) }}
            className={`rounded-full px-2.5 py-1 text-xs font-bold transition-colors ${
              active
                ? 'bg-[#f4c542] text-[#064e3b]'
                : 'text-white hover:bg-white/10 hover:text-[#f4c542]'
            }`}
          >
            {language.label}
          </button>
        )
      })}
    </div>
  )
}
