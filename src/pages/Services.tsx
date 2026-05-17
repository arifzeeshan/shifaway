import { Link, useParams } from 'react-router-dom'
import { Star, Heart, Stethoscope, Shield, Plane, Car, Hotel, FileCheck, Languages, MapPin, ChevronRight, Clock, Award, Eye } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { CareDetailPage } from '../components/DetailPages'
import { liveDetails } from '../data/liveDetails'

const highlights = [
  { icon: Star, key: 'fiveStar' },
  { icon: Heart, key: 'concierge' },
  { icon: Stethoscope, key: 'coordination' },
  { icon: Shield, key: 'privacy' },
]

const services = [
  {
    icon: Plane,
    key: 'travel',
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop&auto=format&q=70',
    path: '/services/travel',
  },
  {
    icon: Car,
    key: 'luxuryTransport',
    img: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&h=400&fit=crop&auto=format&q=70',
    path: '/services/luxury-transport',
  },
  {
    icon: Hotel,
    key: 'accommodation',
    img: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop&auto=format&q=70',
    path: '/services/accommodation',
  },
  {
    icon: FileCheck,
    key: 'attestationApostille',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
    path: '/services/attestation-apostille',
  },
  {
    icon: Languages,
    key: 'languageSupport',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop',
    path: '/services/language-support',
  },
  {
    icon: MapPin,
    key: 'leisureTours',
    img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop',
    path: '/services/leisure-tours',
  },
]

const shifawayStandard = [
  { icon: Clock, key: 'access' },
  { icon: Award, key: 'partners' },
  { icon: Eye, key: 'transparent' },
]

export default function Services() {
  const { t } = useTranslation()
  const { slug } = useParams()
  const detail = slug ? liveDetails.serviceDetails[slug as keyof typeof liveDetails.serviceDetails] : undefined

  if (detail) {
    return (
      <CareDetailPage
        detail={detail}
        backTo="/services"
        overviewTitle="Service Overview"
        featuresTitle="Service Features"
        bookingType="service"
      />
    )
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#047857] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#f4c542]/20 border border-[#f4c542]/40 rounded-full px-4 py-1.5 mb-6">
            <Star size={14} className="text-[#f4c542]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#f4c542]">{t('services.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {t('services.titleStart')} <span className="italic text-[#f4c542]">{t('services.titleHighlight')}</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-12">
            {t('services.subtitle')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {highlights.map((h) => (
              <div key={h.key} className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                <h.icon size={24} className="text-[#f4c542] mx-auto mb-2" />
                <h3 className="font-bold text-sm">{t(`services.highlights.${h.key}.title`)}</h3>
                <p className="text-gray-300 text-xs mt-1">{t(`services.highlights.${h.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link key={s.key} to={s.path} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100">
                <div className="h-52 overflow-hidden">
                  <img
                    src={s.img}
                    alt={t(`services.items.${s.key}.title`)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/600x400/047857/f4c542/png?text=${encodeURIComponent(t(`services.items.${s.key}.title`))}` }}
                  />
                </div>
                <div className="p-6">
                  <div className="bg-[#047857] w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                    <s.icon size={20} className="text-[#f4c542]" />
                  </div>
                  <h3 className="font-bold text-lg text-[#047857] group-hover:text-[#f4c542] transition-colors mb-2">{t(`services.items.${s.key}.title`)}</h3>
                  <p className="text-gray-500 text-sm mb-4">{t(`services.items.${s.key}.desc`)}</p>
                  <span className="text-[#f4c542] font-semibold text-sm inline-flex items-center gap-1">
                    {t('common.learnMore')} <ChevronRight size={14} className="rtl:rotate-180" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Shifaway Standard */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=500&fit=crop"
                alt="Shifaway Standard of care"
                className="rounded-2xl shadow-xl w-full object-cover h-96"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/600x500/047857/f4c542/png?text=Shifaway+Standard' }}
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-[#f4c542] text-xs font-semibold tracking-widest uppercase mb-4">
                <Award size={14} />
                {t('services.standardBadge')}
              </div>
              <h2 className="text-4xl font-bold text-[#047857] mb-4">{t('services.standardTitle')}</h2>
              <p className="text-gray-600 mb-8">
                {t('services.standardText')}
              </p>
              <div className="space-y-6">
                {shifawayStandard.map((item) => (
                  <div key={item.key} className="flex items-start gap-4">
                    <div className="bg-[#047857] p-2.5 rounded-lg shrink-0">
                      <item.icon size={20} className="text-[#f4c542]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#047857]">{t(`services.standard.${item.key}.title`)}</h4>
                      <p className="text-gray-500 text-sm">{t(`services.standard.${item.key}.desc`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#047857] text-center">
        <Link to="/contact" className="inline-flex items-center gap-2 bg-[#f4c542] text-[#064e3b] px-8 py-3 rounded font-bold text-sm tracking-wider uppercase hover:bg-[#d9a520] transition-colors">
          {t('common.estimateYourCost')} <ChevronRight size={16} className="rtl:rotate-180" />
        </Link>
      </section>
    </div>
  )
}
