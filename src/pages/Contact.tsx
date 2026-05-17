import { useState } from 'react'
import { Award, Phone, Mail, MapPin, Instagram, Twitter, Linkedin, Facebook, Ghost, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', country: '', treatmentType: '', message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = [
      'New Shifaway enquiry',
      `Name: ${formData.fullName}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Country: ${formData.country}`,
      `Treatment Type: ${formData.treatmentType}`,
      `Message: ${formData.message}`,
    ].join('\n')

    window.open(`https://wa.me/919986879931?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1a3a2a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#c9a84c]/20 border border-[#c9a84c]/40 rounded-full px-4 py-1.5 mb-6">
            <Award size={14} className="text-[#c9a84c]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#c9a84c]">{t('contact.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {t('contact.titleStart')}<br />
            <span className="italic text-[#c9a84c]">{t('contact.titleHighlight')}</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#1a3a2a] mb-2">{t('contact.reachOut')}</h2>
              <h2 className="text-3xl font-bold italic text-[#c9a84c] mb-6">{t('contact.conciergeTeam')}</h2>
              <p className="text-gray-600 mb-8">
                {t('contact.intro')}
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#c9a84c]/10 p-3 rounded-lg shrink-0">
                    <Phone size={20} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a3a2a] text-sm uppercase tracking-wider">{t('contact.directLines')}</h3>
                    <p className="text-gray-600">+91 99868 79931</p>
                    <p className="text-gray-600">+91 88925366694</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#c9a84c]/10 p-3 rounded-lg shrink-0">
                    <Mail size={20} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a3a2a] text-sm uppercase tracking-wider">{t('contact.emailUs')}</h3>
                    <p className="text-gray-600">info@shifaway.com</p>
                    <p className="text-gray-400 text-sm">{t('contact.responseTime')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#c9a84c]/10 p-3 rounded-lg shrink-0">
                    <MapPin size={20} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a3a2a] text-sm uppercase tracking-wider">{t('contact.headquarters')}</h3>
                    <p className="text-gray-600">{t('contact.city')}</p>
                    <p className="text-gray-600">{t('contact.countryPostal')}</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-[#1a3a2a] text-sm uppercase tracking-wider mb-3">{t('contact.connectWithUs')}</h3>
                <div className="flex gap-3">
                  <a href="https://www.instagram.com/shifaway.blr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#c9a84c] hover:text-[#c9a84c] text-gray-500 transition-colors">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#c9a84c] hover:text-[#c9a84c] text-gray-500 transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#c9a84c] hover:text-[#c9a84c] text-gray-500 transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="https://www.facebook.com/Shafiway.Blr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#c9a84c] hover:text-[#c9a84c] text-gray-500 transition-colors">
                    <Facebook size={18} />
                  </a>
                  <a href="https://snapchat.com/t/lTmWj5CR" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#c9a84c] hover:text-[#c9a84c] text-gray-500 transition-colors">
                    <Ghost size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#1a3a2a]">{t('contact.formTitleStart')} <span className="italic text-[#c9a84c]">{t('contact.formTitleHighlight')}</span></h3>
                <p className="text-gray-500 text-sm">{t('contact.formIntro')}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{t('contact.fullName')}</label>
                    <input
                      type="text"
                      placeholder={t('contact.fullNamePlaceholder')}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{t('contact.emailAddress')}</label>
                    <input
                      type="email"
                      placeholder={t('contact.emailPlaceholder')}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{t('contact.phoneNumber')}</label>
                    <input
                      type="tel"
                      placeholder={t('contact.phonePlaceholder')}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{t('contact.country')}</label>
                    <input
                      type="text"
                      placeholder={t('contact.countryPlaceholder')}
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{t('contact.treatmentType')}</label>
                  <select
                    value={formData.treatmentType}
                    onChange={(e) => setFormData({ ...formData, treatmentType: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors bg-white"
                    required
                  >
                    <option value="">{t('contact.selectTreatmentType')}</option>
                    <option value="Cardiovascular Surgery">{t('contact.options.cardiovascular')}</option>
                    <option value="Oncology">{t('contact.options.oncology')}</option>
                    <option value="Neuro-Sciences">{t('contact.options.neuro')}</option>
                    <option value="Orthopedics">{t('contact.options.orthopedics')}</option>
                    <option value="Maternity/IVF">{t('contact.options.maternity')}</option>
                    <option value="Ophthalmology">{t('contact.options.ophthalmology')}</option>
                    <option value="General Consultation">{t('contact.options.consultation')}</option>
                    <option value="Others">{t('contact.options.others')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{t('contact.yourMessage')}</label>
                  <textarea
                    placeholder={t('contact.messagePlaceholder')}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c9a84c] text-[#1a3a2a] py-3 rounded-lg font-bold text-sm tracking-wider uppercase hover:bg-[#b8963e] transition-colors flex items-center justify-center gap-2"
                >
                  {t('contact.connectWithUs')} <Send size={16} />
                </button>

                <p className="text-gray-400 text-xs text-center">
                  {t('contact.privacyAgreement')}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 bg-[#1a3a2a] text-center">
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Instagram size={28} className="text-white" />
        </div>
        <h3 className="text-white text-xl font-bold mb-2">{t('contact.joinCommunity')}</h3>
        <p className="text-gray-300 text-sm mb-4 max-w-md mx-auto">
          {t('contact.instagramText')}
        </p>
        <a
          href="https://www.instagram.com/shifaway.blr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#c9a84c] font-semibold hover:underline"
        >
          <Instagram size={16} /> @shifaway.blr
        </a>
      </section>
    </div>
  )
}
