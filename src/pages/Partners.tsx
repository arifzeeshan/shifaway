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
  },
  {
    name: 'Apollo Hospitals',
    key: 'apollo',
    path: '/partners/apollo-hospitals',
  },
  {
    name: 'Fortis Healthcare',
    key: 'fortis',
    path: '/partners/fortis-healthcare',
  },
  {
    name: 'Aster CMI',
    key: 'aster',
    path: '/partners/aster-cmi',
  },
  {
    name: 'Cytecare Hospitals',
    key: 'cytecare',
    path: '/partners/cytecare-hospitals',
  },
  {
    name: 'IVF Access',
    key: 'ivfAccess',
    path: '/partners/ivf-access',
  },
  {
    name: 'Shishu IVF',
    key: 'shishuIvf',
    path: '/partners/shishu-ivf',
  },
]

const hotelPartners = [
  { name: 'The Leela Palace', key: 'leela', path: '/partners/the-leela-palace' },
  { name: 'Taj Bengaluru', key: 'taj', path: '/partners/taj-bengaluru' },
  { name: 'JW Marriott', key: 'jw', path: '/partners/jw-marriott' },
  { name: 'ITC Gardenia', key: 'itc', path: '/partners/itc-gardenia' },
  { name: 'The Ritz-Carlton', key: 'ritz', path: '/partners/the-ritz-carlton' },
  { name: 'Conrad Bengaluru', key: 'conrad', path: '/partners/conrad-bengaluru' },
  { name: 'Shathayu Retreat', key: 'shathayu', path: '/partners/shathayu-retreat' },
  { name: 'Ayurvedagram', key: 'ayurvedagram', path: '/partners/ayurvedagram' },
  { name: 'Lemon Tree Hotels', key: 'lemonTree', path: '/partners/lemon-tree-hotels' },
  { name: 'Four Seasons Hotels', key: 'fourSeasons', path: '/partners/four-seasons-hotels' },
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
      <section className="bg-[#047857] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#f4c542]/20 border border-[#f4c542]/40 rounded-full px-4 py-1.5 mb-6">
            <Award size={14} className="text-[#f4c542]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#f4c542]">{t('partners.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {t('partners.titleStart')} <span className="italic text-[#f4c542]">{t('partners.titleHighlight')}</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            {t('partners.subtitle')}
          </p>
        </div>
      </section>

      {/* Medical Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-[#047857] p-2.5 rounded-lg">
              <Building size={24} className="text-[#f4c542]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#047857]">{t('partners.medicalExcellence')}</h2>
              <p className="text-gray-500 text-sm uppercase tracking-wider">{t('partners.leadingHospitals')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {medicalPartners.map((p) => (
              <Link key={p.name} to={p.path} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl transition-all group">
                <div className="w-20 h-20 bg-gray-50 rounded-xl flex items-center justify-center mb-4 border border-gray-100">
                  <span className="text-[#047857] font-bold text-sm text-center">{p.name}</span>
                </div>
                <h3 className="font-bold text-lg text-[#047857] group-hover:text-[#f4c542] transition-colors">{p.name}</h3>
                <p className="text-[#f4c542] text-xs font-semibold uppercase tracking-wider mb-3">{t(`partners.medical.${p.key}.subtitle`)}</p>
                <p className="text-gray-500 text-sm mb-4">{t(`partners.medical.${p.key}.desc`)}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['one', 'two', 'three'].map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded font-medium uppercase tracking-wider">{t(`partners.medical.${p.key}.tags.${tag}`)}</span>
                  ))}
                </div>
                <div className="flex items-start gap-2 text-gray-400 italic text-xs border-t border-gray-100 pt-4">
                  <Quote size={14} className="text-[#f4c542] shrink-0 mt-0.5" />
                  <p>{t(`partners.medical.${p.key}.quote`)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-[#047857] p-2.5 rounded-lg">
              <Hotel size={24} className="text-[#f4c542]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#047857]">{t('partners.luxuryHospitality')}</h2>
              <p className="text-gray-500 text-sm uppercase tracking-wider">{t('partners.recoverySanctuaries')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {hotelPartners.map((h) => (
              <Link key={h.name} to={h.path} className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#047857]/5 rounded-lg flex items-center justify-center mb-3">
                  <Hotel size={20} className="text-[#f4c542]" />
                </div>
                <h3 className="font-bold text-[#047857] text-sm">{h.name}</h3>
                <p className="text-[#f4c542] text-xs font-medium mb-2">{t(`partners.hotels.${h.key}.tag`)}</p>
                <p className="text-gray-500 text-xs">{t(`partners.hotels.${h.key}.desc`)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#047857] text-center">
        <Link to="/contact" className="inline-flex items-center gap-2 bg-[#f4c542] text-[#064e3b] px-8 py-3 rounded font-bold text-sm tracking-wider uppercase hover:bg-[#d9a520] transition-colors">
          {t('common.planYourJourney')} <ChevronRight size={16} className="rtl:rotate-180" />
        </Link>
      </section>
    </div>
  )
}
