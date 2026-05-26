import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Award, Briefcase, Building2, Grid3X3, HeartPulse, Home as HomeIcon, Info, ListChecks, MessageCircle, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const [moreOpen, setMoreOpen] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()
  const moreSheetId = 'mobile-more-navigation'
  const navLinks = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.services'), path: '/services' },
    { label: t('nav.treatments'), path: '/treatments' },
    { label: t('nav.partners'), path: '/partners' },
    { label: t('nav.process'), path: '/process' },
    { label: t('nav.contact'), path: '/contact' },
  ]
  const bottomLinks = [
    { label: t('nav.home'), path: '/', icon: HomeIcon },
    { label: t('nav.services'), path: '/services', icon: Briefcase },
    { label: t('nav.treatments'), path: '/treatments', icon: HeartPulse },
    { label: t('nav.contact'), path: '/contact', icon: MessageCircle },
  ]
  const moreLinks = [
    { label: t('nav.about'), path: '/about', icon: Info },
    { label: t('nav.process'), path: '/process', icon: ListChecks },
    { label: t('nav.partners'), path: '/partners', icon: Building2 },
  ]
  const matchesRoute = (path: string) => path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)
  const isMoreActive = moreLinks.some((link) => matchesRoute(link.path))
  const estimateLabel = t('nav.estimate').split(' ')[0]

  useEffect(() => {
    if (!moreOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMoreOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [moreOpen])

  return (
    <>
      <nav className="bg-[#071B4A] text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center">
                <img src="/images/shifaway.png" alt="Shifaway" width={40} height={40} className="h-10 w-10 rounded bg-white object-contain p-1" />
                <div className="ml-2 hidden sm:block">
                  <div className="text-xs font-semibold tracking-wider uppercase">Shifaway</div>
                  <div className="text-[10px] tracking-widest uppercase text-[#D6D6D6]">{t('brand.wellnessTourism')}</div>
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs font-semibold tracking-wider uppercase transition-colors hover:text-[#E0B04B] ${
                    matchesRoute(link.path) ? 'text-[#E0B04B] underline underline-offset-4' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <LanguageSwitcher />
              <Link
                to="/contact"
                className="bg-[#E0B04B] text-[#06122F] px-5 py-2 rounded text-xs font-bold tracking-wider uppercase hover:bg-[#C9972E] transition-colors"
              >
                {t('nav.estimate')}
              </Link>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <button
                className={`flex h-9 w-9 items-center justify-center rounded-full border border-[#E0B04B]/40 transition-colors ${
                  moreOpen || isMoreActive ? 'bg-[#E0B04B] text-[#06122F]' : 'bg-white/10 text-white'
                }`}
                type="button"
                aria-label={t('footer.navigation')}
                aria-expanded={moreOpen}
                aria-controls={moreSheetId}
                onClick={() => setMoreOpen((current) => !current)}
              >
                {moreOpen ? <X size={18} /> : <Grid3X3 size={18} />}
              </button>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {moreOpen && (
        <div className="lg:hidden">
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/50"
            aria-label="Close navigation"
            onClick={() => setMoreOpen(false)}
          />
          <div
            id={moreSheetId}
            role="dialog"
            aria-modal="true"
            aria-label={t('footer.navigation')}
            className="fixed inset-x-0 bottom-20 z-[60] rounded-t-3xl border-t border-[#E0B04B]/30 bg-[#071B4A] px-4 pb-6 pt-5 text-white shadow-2xl"
          >
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-white/30" />
            <div className="space-y-2">
              {moreLinks.map((link) => {
                const Icon = link.icon
                const active = matchesRoute(link.path)

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setMoreOpen(false)}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${
                      active ? 'bg-[#E0B04B] text-[#06122F]' : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <Icon size={18} />
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      )}

      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-[#0A245F] bg-[#071B4A] px-2 pt-2 text-white shadow-[0_-8px_24px_rgba(0,0,0,0.18)] pb-[calc(0.5rem+env(safe-area-inset-bottom))] lg:hidden" aria-label={t('footer.navigation')}>
        <div className="mx-auto grid max-w-lg grid-cols-5 items-end gap-1">
          {bottomLinks.slice(0, 2).map((link) => {
            const Icon = link.icon
            const active = matchesRoute(link.path)

            return (
              <Link
                key={link.path}
                to={link.path}
                aria-current={active ? 'page' : undefined}
                className={`relative flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl px-1 text-[10px] font-bold uppercase tracking-wide transition-colors ${
                  active ? 'text-[#E0B04B]' : 'text-white/80 hover:text-white'
                }`}
              >
                {active && <span className="absolute top-0 h-0.5 w-8 rounded-full bg-[#E0B04B]" />}
                <Icon size={19} />
                <span className="max-w-full truncate">{link.label}</span>
              </Link>
            )
          })}

          <Link to="/contact" className="flex min-h-14 flex-col items-center justify-end gap-1 text-[10px] font-black uppercase tracking-wide text-[#E0B04B]">
            <span className="flex h-14 w-14 -translate-y-3 items-center justify-center rounded-full border-4 border-[#071B4A] bg-[#E0B04B] text-[#06122F] shadow-lg shadow-black/20">
              <Award size={24} />
            </span>
            <span className="-mt-3 max-w-full truncate">{estimateLabel}</span>
          </Link>

          {bottomLinks.slice(2).map((link) => {
            const Icon = link.icon
            const active = matchesRoute(link.path)

            return (
              <Link
                key={link.path}
                to={link.path}
                aria-current={active ? 'page' : undefined}
                className={`relative flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl px-1 text-[10px] font-bold uppercase tracking-wide transition-colors ${
                  active ? 'text-[#E0B04B]' : 'text-white/80 hover:text-white'
                }`}
              >
                {active && <span className="absolute top-0 h-0.5 w-8 rounded-full bg-[#E0B04B]" />}
                <Icon size={19} />
                <span className="max-w-full truncate">{link.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
