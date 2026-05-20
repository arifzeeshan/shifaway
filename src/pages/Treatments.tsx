import { Link } from 'react-router-dom'
import { Award, ChevronRight, Microscope, Brain, Baby, HeartPulse, Ribbon, Bone, Scissors, Eye, Stethoscope, Smile, Syringe, Activity } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const treatments = [
  {
    icon: Microscope,
    key: 'stemCellTherapy',
    img: '/images/partners/Stem%20Cell.jpeg',
    path: '/treatments/stem-cell-therapy',
  },
  {
    icon: Brain,
    key: 'neurology',
    img: '/images/partners/Nurologo.jpeg',
    path: '/treatments/neurology',
  },
  {
    icon: Baby,
    key: 'infertility',
    img: '/images/partners/iNFERTILITY%20.jpeg',
    path: '/treatments/infertility',
  },
  {
    icon: HeartPulse,
    key: 'cardiacCare',
    img: '/images/partners/Heart.jpeg',
    path: '/treatments/cardiac-care',
  },
  {
    icon: Ribbon,
    key: 'oncology',
    img: '/images/partners/tUMOR.jpeg',
    path: '/treatments/oncology',
  },
  {
    icon: Bone,
    key: 'orthopedics',
    img: '/images/partners/Ortho.jpeg',
    path: '/treatments/orthopedics',
  },
  {
    icon: Activity,
    key: 'neuroSurgery',
    img: '/images/partners/Neuro%20Surgery.jpeg',
    path: '/treatments/neuro-surgery',
  },
  {
    icon: Syringe,
    key: 'maternityIvf',
    img: '/images/partners/Maternity%20IVF.jpeg',
    path: '/treatments/maternity-ivf',
  },
  {
    icon: Eye,
    key: 'ophthalmology',
    img: '/images/partners/Opthmology.jpeg',
    path: '/treatments/ophthalmology',
  },
  {
    icon: Scissors,
    key: 'cosmeticSurgery',
    img: '/images/partners/Cosmetic%20Surgery.jpeg',
    path: '/treatments/cosmetic-surgery',
  },
  {
    icon: Smile,
    key: 'dentalCare',
    img: '/images/partners/Dental%20Care.jpeg',
    path: '/treatments/dental-care',
  },
  {
    icon: Stethoscope,
    key: 'organTransplant',
    img: '/images/partners/Organ%20Transplant.jpeg',
    path: '/treatments/organ-transplant',
  },
  {
    icon: Activity,
    key: 'bariatricSurgery',
    img: '/images/partners/Bariatric%20Surgery.jpeg',
    path: '/treatments/bariatric-surgery',
  },
]

export default function Treatments() {
  const { t } = useTranslation()

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#047857] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#f4c542]/20 border border-[#f4c542]/40 rounded-full px-4 py-1.5 mb-6">
            <Award size={14} className="text-[#f4c542]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#f4c542]">{t('treatments.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {t('treatments.titleStart')} <span className="italic text-[#f4c542]">{t('treatments.titleHighlight')}</span>
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
                    onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/600x400/047857/f4c542/png?text=${encodeURIComponent(t(`treatments.items.${treatment.key}.title`))}` }}
                  />
                </div>
                <div className="p-6">
                  <div className="bg-[#047857]/5 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                    <treatment.icon size={20} className="text-[#047857]" />
                  </div>
                  <h3 className="font-bold text-lg text-[#047857] group-hover:text-[#f4c542] transition-colors mb-2">{t(`treatments.items.${treatment.key}.title`)}</h3>
                  <p className="text-gray-500 text-sm mb-4">{t(`treatments.items.${treatment.key}.desc`)}</p>
                  <span className="text-[#f4c542] font-semibold text-sm inline-flex items-center gap-1">
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
