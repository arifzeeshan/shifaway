import { Link } from 'react-router-dom'
import { Award, Heart, Stethoscope, Shield, Users, Star, Clock, ChevronRight, Plane, Car, Hotel, FileCheck, Languages, MapPin, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const stats = [
  { value: '15,000+', labelKey: 'home.stats.happyPatients' },
  { value: '9.8/10', labelKey: 'home.stats.satisfactionRate' },
  { value: '100%', labelKey: 'home.stats.transparent' },
  { value: '24/7', labelKey: 'home.stats.bestSupport' },
]

const whyChooseUs = [
  { icon: Users, key: 'professionalStaff' },
  { icon: Shield, key: 'transparentPricing' },
  { icon: Stethoscope, key: 'qualifiedDoctors' },
  { icon: Heart, key: 'seamlessCare' },
]

const services = [
  { icon: Plane, key: 'travel', path: '/services/travel' },
  { icon: Car, key: 'luxuryTransport', path: '/services/luxury-transport' },
  { icon: Hotel, key: 'accommodation', path: '/services/accommodation' },
  { icon: FileCheck, key: 'attestationApostille', path: '/services/attestation-apostille' },
  { icon: Languages, key: 'languageSupport', path: '/services/language-support' },
  { icon: MapPin, key: 'leisureTours', path: '/services/leisure-tours' },
]

const treatments = [
  { key: 'stemCellTherapy', path: '/treatments/stem-cell-therapy', img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=300&fit=crop' },
  { key: 'neurology', path: '/treatments/neurology', img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop' },
  { key: 'infertility', path: '/treatments/infertility', img: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400&h=300&fit=crop' },
  { key: 'cardiacCare', path: '/treatments/cardiac-care', img: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&h=300&fit=crop' },
  { key: 'oncology', path: '/treatments/oncology', img: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=400&h=300&fit=crop' },
  { key: 'orthopedics', path: '/treatments/orthopedics', img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop' },
  { key: 'neuroSurgery', path: '/treatments/neuro-surgery', img: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop' },
  { key: 'maternityIvf', path: '/treatments/maternity-ivf', img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop' },
  { key: 'ophthalmology', path: '/treatments/ophthalmology', img: 'https://images.unsplash.com/photo-1577401132921-cb39bb0adcff?w=400&h=300&fit=crop' },
]

const medicalPartners = [
  { name: 'Manipal Hospitals', tagKey: 'home.partners.clinicalExcellence', path: '/partners/manipal-hospitals' },
  { name: 'Apollo Hospitals', tagKey: 'home.partners.advancedHealthcare', path: '/partners/apollo-hospitals' },
  { name: 'Fortis Healthcare', tagKey: 'home.partners.multiSpeciality', path: '/partners/fortis-healthcare' },
  { name: 'Aster CMI', tagKey: 'home.partners.roboticSurgery', path: '/partners/aster-cmi' },
  { name: 'Cytecare Hospitals', tagKey: 'home.partners.specializedCancerCare', path: '/partners/cytecare-hospitals' },
]

const hotelPartners = [
  { name: 'The Leela Palace', tagKey: 'home.partners.royalStay', path: '/partners/the-leela-palace' },
  { name: 'Taj Bengaluru', tagKey: 'home.partners.heritageLuxury', path: '/partners/taj-bengaluru' },
  { name: 'JW Marriott', tagKey: 'home.partners.eliteSuites', path: '/partners/jw-marriott' },
  { name: 'ITC Gardenia', tagKey: 'home.partners.ecoLuxury', path: '/partners/itc-gardenia' },
  { name: 'The Ritz-Carlton', tagKey: 'home.partners.vipRecovery', path: '/partners/the-ritz-carlton' },
  { name: 'Conrad Bengaluru', tagKey: 'home.partners.modernOpulence', path: '/partners/conrad-bengaluru' },
]

const priceMatchSteps = [
  { num: '01', key: 'upload' },
  { num: '02', key: 'analyze' },
  { num: '03', key: 'upgrade' },
]

export default function Home() {
  const { t } = useTranslation()

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#1a3a2a] text-white min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a2a] via-[#1a3a2a]/90 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&h=1200&fit=crop&auto=format&q=35"
          alt="Earth from space"
          width={900}
          height={1200}
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/1920x1080/1a3a2a/c9a84c/png?text=Shifaway' }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-flex items-center gap-2 bg-[#c9a84c]/20 border border-[#c9a84c]/40 rounded-full px-4 py-1.5 mb-8">
            <Award size={14} className="text-[#c9a84c]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#c9a84c]">{t('home.heroBadge')}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            {t('home.heroTitleLuxury')}<br />
            <span className="italic text-[#c9a84c]">{t('home.heroTitleHealing')}</span><br />
            {t('home.heroTitleRedefined')}
          </h1>
          <p className="text-gray-300 max-w-lg mb-8 text-lg">
            {t('home.heroSubtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="bg-[#c9a84c] text-[#1a3a2a] px-8 py-3 rounded font-bold text-sm tracking-wider uppercase hover:bg-[#b8963e] transition-colors inline-flex items-center gap-2">
              {t('common.getYourEstimate')} <ChevronRight size={16} className="rtl:rotate-180" />
            </Link>
            <Link to="/contact" className="border border-white/30 text-white px-8 py-3 rounded font-bold text-sm tracking-wider uppercase hover:bg-white/10 transition-colors">
              {t('common.contactUs')}
            </Link>
          </div>
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-4 inline-flex items-center gap-3 max-w-sm">
            <Award size={24} className="text-[#c9a84c]" />
            <div>
              <div className="text-xs text-[#c9a84c] font-semibold uppercase tracking-wider">{t('home.excellenceLabel')}</div>
              <div className="font-bold text-sm">{t('home.jciAccredited')}</div>
              <div className="text-xs text-gray-300">{t('home.jciDesc')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Founder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://api.dicebear.com/9.x/initials/svg?seed=Abu%20Danish&backgroundColor=1a3a2a&fontWeight=700&fontSize=40"
                alt="Shifaway"
                width={420}
                height={490}
                loading="lazy"
                decoding="async"
                className="rounded-2xl shadow-xl w-full max-w-md object-cover"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/600x700/1a3a2a/c9a84c/png?text=Founder' }}
              />
              <div className="absolute bottom-0 left-0 right-0 max-w-md bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl p-6">
                <div className="text-white text-xl font-bold">{t('brand.founderName')}</div>
                <p className="text-[#c9a84c] text-sm font-semibold uppercase">{t('brand.founderTitle')}</p>
                <p className="text-gray-300 text-xs">{t('brand.founderRole')}</p>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-[#7a5c12] text-xs font-semibold tracking-widest uppercase mb-4">
                <Star size={14} />
                {t('home.leadership')}
              </div>
              <h2 className="text-4xl font-bold text-[#1a3a2a] mb-6">{t('home.founderHeading')}</h2>
              <blockquote className="text-gray-600 text-lg italic border-l-4 border-[#c9a84c] pl-4 mb-6">
                {t('home.founderQuote')}
              </blockquote>
              <Link to="/about" className="inline-flex items-center gap-2 text-[#7a5c12] font-semibold hover:underline">
                {t('common.readOurStory')} <ChevronRight size={16} className="rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 text-[#7a5c12] text-xs font-semibold tracking-widest uppercase mb-4">
                <Award size={14} />
                {t('home.whyChooseUs')}
              </div>
              <h2 className="text-4xl font-bold text-[#1a3a2a] mb-6">{t('home.unmatchedStandards')}</h2>
              <p className="text-gray-600 mb-8">{t('home.differenceText')}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item) => (
                  <div key={item.key} className="flex items-start gap-3">
                    <div className="bg-[#1a3a2a] p-2 rounded-lg shrink-0">
                      <item.icon size={20} className="text-[#c9a84c]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#1a3a2a] text-sm">{t(`home.why.${item.key}.title`)}</div>
                      <p className="text-gray-500 text-sm">{t(`home.why.${item.key}.desc`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=420&h=425&fit=crop&auto=format&q=45"
                alt="Medical excellence"
                width={420}
                height={425}
                loading="lazy"
                decoding="async"
                className="rounded-2xl shadow-xl w-full object-cover h-96"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/600x500/1a3a2a/c9a84c/png?text=Medical+Excellence' }}
              />
              <div className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-sm font-bold text-[#1a3a2a]">{t('home.qualifiedDoctors')}</div>
                <div className="text-xs text-gray-500">{t('home.qualifiedDoctorsDesc')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Stats */}
      <section className="py-20 bg-[#1a3a2a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-4">
            <Clock size={14} />
            {t('home.ourLegacy')}
          </div>
          <h2 className="text-4xl font-bold mb-12">{t('home.legacyHeading')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {stats.map((stat) => (
              <div key={stat.labelKey}>
                <h3 className="text-4xl font-bold text-[#c9a84c]">{stat.value}</h3>
                <p className="text-gray-300 text-sm mt-1">{t(stat.labelKey)}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-300 italic max-w-lg mx-auto">
            {t('home.legacyQuote')}
          </p>
        </div>
      </section>

      {/* Beyond Borders */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=420&h=425&fit=crop&auto=format&q=45"
                alt="Beyond Borders healthcare"
                width={420}
                height={425}
                loading="lazy"
                decoding="async"
                className="rounded-2xl shadow-xl w-full object-cover h-96"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/600x500/1a3a2a/c9a84c/png?text=Beyond+Borders' }}
              />
              <div className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-xs text-[#7a5c12] font-semibold uppercase">{t('home.ourHeritage')}</div>
                <div className="text-sm text-gray-600">{t('home.heritageDesc')}</div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#1a3a2a] mb-6">{t('home.beyondBorders')}</h2>
              <p className="text-gray-600 mb-6">
                {t('home.beyondBordersText')}
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Star size={20} className="text-[#c9a84c] mt-1 shrink-0" />
                  <div>
                    <div className="font-bold text-[#1a3a2a]">{t('home.ourVision')}</div>
                    <p className="text-gray-500 text-sm">{t('home.visionDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart size={20} className="text-[#c9a84c] mt-1 shrink-0" />
                  <div>
                    <div className="font-bold text-[#1a3a2a]">{t('home.ourMission')}</div>
                    <p className="text-gray-500 text-sm">{t('home.missionDesc')}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <Link to="/services" className="bg-[#1a3a2a] text-white px-6 py-3 rounded font-semibold text-sm hover:bg-[#2a5a3a] transition-colors">
                  {t('home.explore')}
                </Link>
                <a href="tel:+918892536694" dir="ltr" className="flex items-center gap-2 text-gray-600 text-sm hover:text-[#c9a84c] transition-colors">
                  <Phone size={14} className="text-[#c9a84c]" />
                  +91 8892536694
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-[#1a3a2a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-4">
              <Award size={14} />
              {t('home.eliteNetwork')}
            </div>
            <h2 className="text-4xl font-bold mb-4">{t('home.worldClassPartners')}</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {t('home.partnersDesc')}
            </p>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Stethoscope size={20} className="text-[#c9a84c]" />
              <div>
                <h3 className="font-bold">{t('home.medicalExcellence')}</h3>
                <p className="text-gray-400 text-sm">{t('home.eliteHospitalNetwork')}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {medicalPartners.map((p) => (
                <Link key={p.name} to={p.path} className="bg-white/10 backdrop-blur rounded-xl p-4 text-center hover:bg-white/20 transition-colors">
                  <div className="w-16 h-16 bg-white rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-[#1a3a2a] font-bold text-xs">{p.name.split(' ')[0]}</span>
                  </div>
                  <div className="font-semibold text-sm">{p.name}</div>
                  <div className="text-[#e4c76a] text-xs">{t(p.tagKey)}</div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Hotel size={20} className="text-[#c9a84c]" />
              <div>
                <h3 className="font-bold">{t('home.luxuryHospitality')}</h3>
                <p className="text-gray-400 text-sm">{t('home.premiumRecoveryStays')}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {hotelPartners.map((p) => (
                <Link key={p.name} to={p.path} className="bg-white/10 backdrop-blur rounded-xl p-4 text-center hover:bg-white/20 transition-colors">
                  <div className="w-14 h-14 bg-white rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-[#1a3a2a] font-bold text-xs text-center leading-tight">{p.name.split(' ').slice(0, 2).join(' ')}</span>
                  </div>
                  <div className="font-semibold text-xs">{p.name}</div>
                  <div className="text-[#e4c76a] text-xs">{t(p.tagKey)}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Price Match */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 text-[#7a5c12] text-xs font-semibold tracking-widest uppercase mb-4">
                <Shield size={14} />
                {t('home.officialGuarantee')}
              </div>
              <h2 className="text-4xl font-bold text-[#1a3a2a] mb-6">{t('home.bestPriceMatched')}</h2>
              <p className="text-gray-600 mb-6">
                {t('home.priceMatchDesc')}
              </p>
              <div className="flex items-center gap-4">
                <Link to="/contact" className="bg-[#c9a84c] text-[#1a3a2a] px-6 py-3 rounded font-bold text-sm inline-flex items-center gap-2 hover:bg-[#b8963e] transition-colors">
                  {t('common.uploadQuote')} <ChevronRight size={16} className="rtl:rotate-180" />
                </Link>
                <span className="text-sm text-gray-500">{t('home.response24h')}</span>
              </div>
            </div>
            <div className="space-y-4">
              {priceMatchSteps.map((step) => (
                <div key={step.num} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex gap-4">
                  <div className="text-3xl font-bold text-[#7a5c12]">{step.num}</div>
                  <div>
                    <div className="font-bold text-[#1a3a2a]">{t(`home.priceSteps.${step.key}.title`)}</div>
                    <p className="text-gray-500 text-sm">{t(`home.priceSteps.${step.key}.desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1a3a2a] mb-4">{t('home.ourServices')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('home.servicesDesc')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.key} to={s.path} className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow group">
                <div className="bg-[#1a3a2a] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <s.icon size={24} className="text-[#c9a84c]" />
                </div>
                <h3 className="font-bold text-[#1a3a2a] mb-2 group-hover:text-[#c9a84c] transition-colors">{t(`home.services.${s.key}.title`)}</h3>
                <p className="text-gray-500 text-sm">{t(`home.services.${s.key}.desc`)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1a3a2a] mb-4">{t('home.medicalTreatments')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('home.treatmentsDesc')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment) => (
              <Link key={treatment.key} to={treatment.path} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={treatment.img}
                    alt={t(`treatments.items.${treatment.key}.title`)}
                    width={400}
                    height={300}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/400x300/1a3a2a/c9a84c/png?text=${encodeURIComponent(t(`treatments.items.${treatment.key}.title`))}` }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#1a3a2a] group-hover:text-[#c9a84c] transition-colors">{t(`treatments.items.${treatment.key}.title`)}</h3>
                  <span className="text-[#7a5c12] text-sm inline-flex items-center gap-1 mt-1">
                    {t('common.inquireNow')} <ChevronRight size={14} className="rtl:rotate-180" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/treatments" className="inline-flex items-center gap-2 bg-[#1a3a2a] text-white px-6 py-3 rounded font-semibold text-sm hover:bg-[#2a5a3a] transition-colors">
              {t('common.viewAllTreatments')} <ChevronRight size={16} className="rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
