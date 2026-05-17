import { Link } from 'react-router-dom'
import { Award, ChevronRight, Microscope, Brain, Baby, HeartPulse, Ribbon, Bone, Scissors, Eye, Stethoscope, Smile, Syringe, Activity } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const treatments = [
  {
    icon: Microscope,
    key: 'stemCellTherapy',
    img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=400&fit=crop',
    path: '/treatments/stem-cell-therapy',
  },
  {
    icon: Brain,
    key: 'neurology',
    img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop',
    path: '/treatments/neurology',
  },
  {
    icon: Baby,
    key: 'infertility',
    img: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop',
    path: '/treatments/infertility',
  },
  {
    icon: HeartPulse,
    key: 'cardiacCare',
    img: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&h=400&fit=crop',
    path: '/treatments/cardiac-care',
  },
  {
    icon: Ribbon,
    key: 'oncology',
    img: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=600&h=400&fit=crop',
    path: '/treatments/oncology',
  },
  {
    icon: Bone,
    key: 'orthopedics',
    img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop',
    path: '/treatments/orthopedics',
  },
  {
    icon: Activity,
    key: 'neuroSurgery',
    img: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop',
    path: '/treatments/neuro-surgery',
  },
  {
    icon: Syringe,
    key: 'maternityIvf',
    img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop',
    path: '/treatments/maternity-ivf',
  },
  {
    icon: Eye,
    key: 'ophthalmology',
    img: 'https://images.unsplash.com/photo-1577401132921-cb39bb0adcff?w=600&h=400&fit=crop',
    path: '/treatments/ophthalmology',
  },
  {
    icon: Scissors,
    key: 'cosmeticSurgery',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop',
    path: '/treatments/cosmetic-surgery',
  },
  {
    icon: Smile,
    key: 'dentalCare',
    img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop',
    path: '/treatments/dental-care',
  },
  {
    icon: Stethoscope,
    key: 'organTransplant',
    img: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&h=400&fit=crop',
    path: '/treatments/organ-transplant',
  },
  {
    icon: Activity,
    key: 'bariatricSurgery',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
    path: '/treatments/bariatric-surgery',
  },
]

export default function Treatments() {
  const { t } = useTranslation()

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1a3a2a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#c9a84c]/20 border border-[#c9a84c]/40 rounded-full px-4 py-1.5 mb-6">
            <Award size={14} className="text-[#c9a84c]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#c9a84c]">{t('treatments.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {t('treatments.titleStart')} <span className="italic text-[#c9a84c]">{t('treatments.titleHighlight')}</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            {t('treatments.subtitle')}
          </p>
        </div>
      </section>

      {/* Treatment Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment) => (
              <Link key={treatment.key} to={treatment.path} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100">
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img
                    src={treatment.img}
                    alt={t(`treatments.items.${treatment.key}.title`)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/600x400/1a3a2a/c9a84c/png?text=${encodeURIComponent(t(`treatments.items.${treatment.key}.title`))}` }}
                  />
                </div>
                <div className="p-6">
                  <div className="bg-[#1a3a2a]/5 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                    <treatment.icon size={20} className="text-[#1a3a2a]" />
                  </div>
                  <h3 className="font-bold text-lg text-[#1a3a2a] group-hover:text-[#c9a84c] transition-colors mb-2">{t(`treatments.items.${treatment.key}.title`)}</h3>
                  <p className="text-gray-500 text-sm mb-4">{t(`treatments.items.${treatment.key}.desc`)}</p>
                  <span className="text-[#c9a84c] font-semibold text-sm inline-flex items-center gap-1">
                    {t('common.inquireNow')} <ChevronRight size={14} className="rtl:rotate-180" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
