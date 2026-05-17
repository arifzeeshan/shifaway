import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()
  const navLinks = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.services'), path: '/services' },
    { label: t('nav.treatments'), path: '/treatments' },
    { label: t('nav.partners'), path: '/partners' },
    { label: t('nav.process'), path: '/process' },
    { label: t('nav.contact'), path: '/contact' },
  ]

  return (
    <nav className="bg-[#1a3a2a] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <img src="/images/shifaway.png" alt="Shifaway" width={40} height={40} className="h-10 w-10 rounded bg-white object-contain p-1" />
              <div className="ml-2 hidden sm:block">
                <div className="text-xs font-semibold tracking-wider uppercase">{t('brand.founderName')}</div>
                <div className="text-[10px] tracking-widest uppercase text-gray-300">{t('brand.wellnessTourism')}</div>
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-semibold tracking-wider uppercase transition-colors hover:text-[#c9a84c] ${
                  location.pathname === link.path ? 'text-[#c9a84c] underline underline-offset-4' : 'text-white'
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
              className="bg-[#c9a84c] text-[#1a3a2a] px-5 py-2 rounded text-xs font-bold tracking-wider uppercase hover:bg-[#b8963e] transition-colors"
            >
              {t('nav.estimate')}
            </Link>
          </div>

          <button
            className="lg:hidden text-white"
            type="button"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#1a3a2a] border-t border-[#2a5a3a] px-4 pb-4">
          <div className="py-3">
            <LanguageSwitcher />
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm font-semibold tracking-wider uppercase transition-colors hover:text-[#c9a84c] ${
                location.pathname === link.path ? 'text-[#c9a84c]' : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block mt-3 bg-[#c9a84c] text-[#1a3a2a] px-5 py-2 rounded text-xs font-bold tracking-wider uppercase text-center"
          >
            {t('nav.estimate')}
          </Link>
        </div>
      )}
    </nav>
  )
}
