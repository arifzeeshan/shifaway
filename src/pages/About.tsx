import { Link } from 'react-router-dom'
import { Heart, Eye, Users, Star, ChevronRight, Clock, Building } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const stats = [
  { icon: Clock, value: '25+', labelKey: 'about.stats.years' },
  { icon: Users, value: '15,000+', labelKey: 'about.stats.patients' },
  { icon: Building, value: '13+', labelKey: 'about.stats.hospitals' },
]

const missionPoints = ['patientFirst', 'transparency', 'support']
const visionPoints = ['access', 'innovation', 'healing']

export default function About() {
  const { t } = useTranslation()

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#047857] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-[#f4c542]/20 border border-[#f4c542]/40 rounded-full px-4 py-1.5 mb-6">
            <Star size={14} className="text-[#f4c542]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#f4c542]">{t('about.story')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {t('about.titleStart')} <span className="italic text-[#f4c542]">{t('about.titleBrand')}</span>
          </h1>
          <p className="text-gray-300 max-w-xl text-lg">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md overflow-hidden rounded-2xl shadow-xl aspect-[4/5] bg-[#047857]">
              <img
                src="/images/partners/Tousif%20Ulla%20Khan-%20pic.jpeg"
                alt="Shifaway"
                className="h-full w-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/600x700/047857/f4c542/png?text=Founder' }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 sm:p-6 pt-16">
                <h3 className="text-white text-xl font-bold">{t('brand.founderName')}</h3>
                <p className="text-[#f4c542] text-sm font-semibold uppercase">{t('brand.founderTitle')}</p>
                <p className="text-gray-300 text-xs">{t('brand.founderRole')}</p>
              </div>
            </div>
            <div className="max-w-xl mx-auto lg:mx-0">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#047857] mb-2">{t('about.visionOf')}</h2>
              <h2 className="text-3xl sm:text-4xl font-bold italic text-[#f4c542] mb-6">{t('about.compassionateCare')}</h2>
              <p className="text-gray-600 mb-6">
                {t('about.founderText')}
              </p>
              <blockquote className="text-gray-600 italic mb-6">
                {t('about.founderQuote')}
              </blockquote>
              <div className="border-l-4 border-[#f4c542] pl-4 italic text-gray-700">
                {t('about.trustQuote')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.labelKey} className="text-center">
                <div className="bg-[#047857] w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={24} className="text-[#f4c542]" />
                </div>
                <h3 className="text-4xl font-bold text-[#f4c542]">{stat.value}</h3>
                <p className="text-gray-600 mt-1">{t(stat.labelKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-[#047857] mb-4">{t('about.missionTitle')}</h3>
              <p className="text-gray-600 mb-6">
                {t('about.missionText')}
              </p>
              <ul className="space-y-3">
                {missionPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <div className="bg-[#f4c542]/10 p-1 rounded">
                      <Heart size={16} className="text-[#f4c542]" />
                    </div>
                    <span className="text-[#047857] font-medium text-sm">{t(`about.missionPoints.${point}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-[#047857] mb-4">{t('about.visionTitle')}</h3>
              <p className="text-gray-600 mb-6">
                {t('about.visionText')}
              </p>
              <ul className="space-y-3">
                {visionPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <div className="bg-[#f4c542]/10 p-1 rounded">
                      <Eye size={16} className="text-[#f4c542]" />
                    </div>
                    <span className="text-[#047857] font-medium text-sm">{t(`about.visionPoints.${point}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#047857] text-center">
        <Link to="/contact" className="inline-flex items-center gap-2 bg-[#f4c542] text-[#064e3b] px-8 py-3 rounded font-bold text-sm tracking-wider uppercase hover:bg-[#d9a520] transition-colors">
          {t('common.contactUsToday')} <ChevronRight size={16} className="rtl:rotate-180" />
        </Link>
      </section>
    </div>
  )
}
