import { Link } from 'react-router-dom'
import { Award, ChevronRight, FileText, Plane, Stethoscope, Hotel, HeartPulse, Home } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const steps = [
  {
    key: 'consultation',
    icon: FileText,
    img: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&h=400&fit=crop',
  },
  {
    key: 'travel',
    icon: Plane,
    img: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=600&h=400&fit=crop',
  },
  {
    key: 'medical',
    icon: Stethoscope,
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop',
  },
  {
    key: 'recovery',
    icon: Hotel,
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
  },
  {
    key: 'support',
    icon: HeartPulse,
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
  },
  {
    key: 'homecoming',
    icon: Home,
    img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
  },
]

export default function Process() {
  const { t } = useTranslation()

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#071B4A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#E0B04B]/20 border border-[#E0B04B]/40 rounded-full px-4 py-1.5 mb-6">
            <Award size={14} className="text-[#E0B04B]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#E0B04B]">{t('process.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {t('process.titleStart')}<br />
            <span className="italic text-[#E0B04B]">{t('process.titleHighlight')}</span>
          </h1>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, i) => (
              <div key={step.key} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                <div className="lg:w-1/2">
                  <img
                    src={step.img}
                    alt={t(`process.steps.${step.key}.title`)}
                    className="rounded-2xl shadow-lg w-full h-72 object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/600x400/071B4A/E0B04B/png?text=${encodeURIComponent(t(`process.steps.${step.key}.title`))}` }}
                  />
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#071B4A] p-2.5 rounded-lg">
                      <step.icon size={24} className="text-[#E0B04B]" />
                    </div>
                    <div className="bg-[#E0B04B]/10 px-3 py-1 rounded-full">
                      <span className="text-[#E0B04B] text-xs font-semibold uppercase tracking-wider">{t(`process.steps.${step.key}.phase`)}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#071B4A] mb-3">{t(`process.steps.${step.key}.title`)}</h3>
                  <p className="text-[#06122F]/70">{t(`process.steps.${step.key}.desc`)}</p>
                </div>

                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-px h-8 bg-[#E0B04B]/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#071B4A] text-center">
        <Link to="/contact" className="inline-flex items-center gap-2 bg-[#E0B04B] text-[#06122F] px-8 py-3 rounded font-bold text-sm tracking-wider uppercase hover:bg-[#C9972E] transition-colors">
          {t('common.startYourJourney')} <ChevronRight size={16} className="rtl:rotate-180" />
        </Link>
      </section>
    </div>
  )
}
