import { Link, useParams } from 'react-router-dom'
import { Award, ChevronRight, Building, Hotel, Quote } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { PartnerDetailPage } from '../components/DetailPages'
import { liveDetails } from '../data/liveDetails'

const medicalPartners = [
  {
    name: 'Manipal Hospitals',
    key: 'manipal',
    path: '/partners/manipal-hospitals',
    logo: '/images/partners/manipal-hospitals.png',
  },
  {
    name: 'Apollo Hospitals',
    key: 'apollo',
    path: '/partners/apollo-hospitals',
    logo: '/images/partners/apollo-hospitals.png',
  },
  {
    name: 'Fortis Healthcare',
    key: 'fortis',
    path: '/partners/fortis-healthcare',
    logo: '/images/partners/fortis-healthcare.png',
  },
  {
    name: 'Aster CMI',
    key: 'aster',
    path: '/partners/aster-cmi',
    logo: '/images/partners/aster-cmi.ico',
  },
  {
    name: 'Cytecare Hospitals',
    key: 'cytecare',
    path: '/partners/cytecare-hospitals',
    logo: '/images/partners/cytecare-hospitals.png',
  },
  {
    name: 'IVF Access',
    key: 'ivfAccess',
    path: '/partners/ivf-access',
    logo: '/images/partners/ivf-access.png',
  },
  {
    name: 'Shishu IVF',
    key: 'shishuIvf',
    path: '/partners/shishu-ivf',
    logo: '/images/partners/shishu-ivf.png',
  },
]

const hotelPartners = [
  { name: 'The Leela Palace', key: 'leela', path: '/partners/the-leela-palace', logo: '/images/partners/the-leela-palace.ico' },
  { name: 'Taj Bengaluru', key: 'taj', path: '/partners/taj-bengaluru', logo: '/images/partners/taj-bengaluru.png' },
  { name: 'JW Marriott', key: 'jw', path: '/partners/jw-marriott', logo: '/images/partners/jw-marriott.png' },
  { name: 'ITC Gardenia', key: 'itc', path: '/partners/itc-gardenia', logo: '/images/partners/itc-gardenia.svg' },
  { name: 'The Ritz-Carlton', key: 'ritz', path: '/partners/the-ritz-carlton', logo: '/images/partners/the-ritz-carlton.png' },
  { name: 'Conrad Bengaluru', key: 'conrad', path: '/partners/conrad-bengaluru', logo: '/images/partners/conrad-bengaluru.png' },
  { name: 'Shathayu Retreat', key: 'shathayu', path: '/partners/shathayu-retreat', logo: '/images/partners/shathayu-retreat.png' },
  { name: 'Ayurvedagram', key: 'ayurvedagram', path: '/partners/ayurvedagram', logo: '/images/partners/ayurvedagram.png' },
  { name: 'Lemon Tree Hotels', key: 'lemonTree', path: '/partners/lemon-tree-hotels', logo: '/images/partners/lemon-tree-hotels.png' },
  { name: 'Four Seasons Hotels', key: 'fourSeasons', path: '/partners/four-seasons-hotels', logo: '/images/partners/four-seasons-hotels.png' },
]

export default function Partners() {
  const { t } = useTranslation()
  const { slug } = useParams()
  const detail = slug ? liveDetails.partnerDetails[slug as keyof typeof liveDetails.partnerDetails] : undefined

  if (detail) {
    return <PartnerDetailPage detail={detail} backTo="/partners" />
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#071B4A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#E0B04B]/20 border border-[#E0B04B]/40 rounded-full px-4 py-1.5 mb-6">
            <Award size={14} className="text-[#E0B04B]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#E0B04B]">{t('partners.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {t('partners.titleStart')} <span className="italic text-[#E0B04B]">{t('partners.titleHighlight')}</span>
          </h1>
          <p className="text-[#D6D6D6] max-w-2xl mx-auto text-lg">
            {t('partners.subtitle')}
          </p>
        </div>
      </section>

      {/* Medical Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-[#071B4A] p-2.5 rounded-lg">
              <Building size={24} className="text-[#E0B04B]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#071B4A]">{t('partners.medicalExcellence')}</h2>
              <p className="text-[#06122F]/60 text-sm uppercase tracking-wider">{t('partners.leadingHospitals')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {medicalPartners.map((p) => (
              <Link key={p.name} to={p.path} className="bg-white rounded-2xl border border-[#D6D6D6]/50 p-6 hover:shadow-xl transition-all group">
                <div className="relative w-20 h-20 bg-[#F5F5F5] rounded-xl flex items-center justify-center mb-4 border border-[#D6D6D6]/50 p-2">
                  <Building size={28} className="text-[#E0B04B]" />
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-2 h-16 w-16 object-contain"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                  />
                </div>
                <h3 className="font-bold text-lg text-[#071B4A] group-hover:text-[#E0B04B] transition-colors">{p.name}</h3>
                <p className="text-[#E0B04B] text-xs font-semibold uppercase tracking-wider mb-3">{t(`partners.medical.${p.key}.subtitle`)}</p>
                <p className="text-[#06122F]/60 text-sm mb-4">{t(`partners.medical.${p.key}.desc`)}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['one', 'two', 'three'].map((tag) => (
                    <span key={tag} className="bg-[#D6D6D6] text-[#06122F]/70 text-xs px-2 py-1 rounded font-medium uppercase tracking-wider">{t(`partners.medical.${p.key}.tags.${tag}`)}</span>
                  ))}
                </div>
                <div className="flex items-start gap-2 text-[#D6D6D6]/70 italic text-xs border-t border-[#D6D6D6]/50 pt-4">
                  <Quote size={14} className="text-[#E0B04B] shrink-0 mt-0.5" />
                  <p>{t(`partners.medical.${p.key}.quote`)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Partners */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-[#071B4A] p-2.5 rounded-lg">
              <Hotel size={24} className="text-[#E0B04B]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#071B4A]">{t('partners.luxuryHospitality')}</h2>
              <p className="text-[#06122F]/60 text-sm uppercase tracking-wider">{t('partners.recoverySanctuaries')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {hotelPartners.map((h) => (
              <Link key={h.name} to={h.path} className="bg-white rounded-xl p-5 border border-[#D6D6D6]/50 hover:shadow-lg transition-shadow">
                <div className="relative w-14 h-14 bg-[#071B4A]/5 rounded-lg flex items-center justify-center mb-3 p-2">
                  <Hotel size={20} className="text-[#E0B04B]" />
                  <img
                    src={h.logo}
                    alt={`${h.name} logo`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-2 h-10 w-10 object-contain"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                  />
                </div>
                <h3 className="font-bold text-[#071B4A] text-sm">{h.name}</h3>
                <p className="text-[#E0B04B] text-xs font-medium mb-2">{t(`partners.hotels.${h.key}.tag`)}</p>
                <p className="text-[#06122F]/60 text-xs">{t(`partners.hotels.${h.key}.desc`)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#071B4A] text-center">
        <Link to="/contact" className="inline-flex items-center gap-2 bg-[#E0B04B] text-[#06122F] px-8 py-3 rounded font-bold text-sm tracking-wider uppercase hover:bg-[#C9972E] transition-colors">
          {t('common.planYourJourney')} <ChevronRight size={16} className="rtl:rotate-180" />
        </Link>
      </section>
    </div>
  )
}
