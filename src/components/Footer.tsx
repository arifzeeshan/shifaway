import { Link } from 'react-router-dom'
import { Instagram, Twitter, Linkedin, Facebook, Ghost, MapPin, Phone, Mail, Globe, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const navigationLinks = [
  { labelKey: 'nav.home', path: '/' },
  { labelKey: 'footer.aboutUs', path: '/about' },
  { labelKey: 'nav.services', path: '/services' },
  { labelKey: 'nav.partners', path: '/partners' },
  { labelKey: 'footer.contactUs', path: '/contact' },
]

const serviceLinks = [
  { labelKey: 'services.items.travel.title', path: '/services/travel' },
  { labelKey: 'services.items.luxuryTransport.title', path: '/services/luxury-transport' },
  { labelKey: 'services.items.accommodation.title', path: '/services/accommodation' },
  { labelKey: 'services.items.attestationApostille.title', path: '/services/attestation-apostille' },
  { labelKey: 'services.items.languageSupport.title', path: '/services/language-support' },
  { labelKey: 'services.items.leisureTours.title', path: '/services/leisure-tours' },
]

const treatmentLinks = [
  'cardiacCare', 'oncology', 'orthopedics', 'neuroSurgery',
  'maternityIvf', 'ophthalmology', 'cosmeticSurgery', 'dentalCare',
  'organTransplant', 'bariatricSurgery',
]

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-[#1a3a2a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 text-[#c9a84c] text-sm mb-4">
              <Globe size={16} />
              <span>{t('footer.established')}</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/shifaway.png" alt="Shifaway" width={44} height={44} className="h-11 w-11 rounded bg-white object-contain p-1" />
              <div className="ml-1">
                <div className="text-sm font-semibold tracking-wider uppercase">{t('footer.wellnessTourism')}</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm italic mb-6 max-w-md">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/shifaway.blr" target="_blank" rel="noopener noreferrer" aria-label="Shifaway on Instagram" className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Shifaway on X" className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Shifaway on LinkedIn" className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://www.facebook.com/Shafiway.Blr" target="_blank" rel="noopener noreferrer" aria-label="Shifaway on Facebook" className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://snapchat.com/t/lTmWj5CR" target="_blank" rel="noopener noreferrer" aria-label="Shifaway on Snapchat" className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
                <Ghost size={18} />
              </a>
            </div>
          </div>

          <div className="bg-[#2a5a3a] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Send size={20} className="text-[#c9a84c]" />
              <h3 className="text-lg font-semibold">{t('footer.newsletterTitle')}</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              {t('footer.newsletterText')}
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="flex-1 bg-[#1a3a2a] border border-gray-600 rounded px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#c9a84c]"
              />
              <button type="submit" className="bg-[#c9a84c] text-[#1a3a2a] px-6 py-2 rounded font-semibold text-sm hover:bg-[#b8963e] transition-colors">
                {t('footer.subscribe')}
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[#2a5a3a]">
          <div>
            <h4 className="text-[#c9a84c] font-semibold text-sm uppercase tracking-wider mb-4">{t('footer.navigation')}</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-300 text-sm hover:text-[#c9a84c] transition-colors">
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#c9a84c] font-semibold text-sm uppercase tracking-wider mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-300 text-sm hover:text-[#c9a84c] transition-colors">
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#c9a84c] font-semibold text-sm uppercase tracking-wider mb-4">{t('footer.treatments')}</h4>
            <ul className="space-y-2">
              {treatmentLinks.map((treatment) => (
                <li key={treatment}>
                  <Link to="/treatments" className="text-gray-300 text-sm hover:text-[#c9a84c] transition-colors">
                    {t(`treatments.items.${treatment}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#c9a84c] font-semibold text-sm uppercase tracking-wider mb-4">{t('footer.reachUs')}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#c9a84c] mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-semibold">{t('footer.headquarters')}</div>
                  <p className="text-gray-300 text-sm">{t('footer.address')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe size={16} className="text-[#c9a84c] mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-semibold">{t('footer.globalSupport')}</div>
                  <p className="text-gray-300 text-sm">{t('footer.supportText')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-[#c9a84c] mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-semibold">{t('footer.directLines')}</div>
                  <a href="tel:+919986879931" className="block text-gray-300 text-sm hover:text-[#c9a84c] transition-colors">+91 99868 79931</a>
                  <a href="tel:+9188925366694" className="block text-gray-300 text-sm hover:text-[#c9a84c] transition-colors">+91 88925366694</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-[#c9a84c] mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-semibold">{t('footer.email')}</div>
                  <p className="text-gray-300 text-sm">info@shifaway.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#2a5a3a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-xs">
            {t('footer.copyright')}
          </div>
          <div className="flex gap-4 text-gray-400 text-xs">
            <Link to="/privacy-policy" className="hover:text-[#c9a84c]">{t('footer.privacyPolicy')}</Link>
            <Link to="/terms-of-service" className="hover:text-[#c9a84c]">{t('footer.termsOfService')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
