import { useState } from 'react'
import { Award, Phone, Mail, MapPin, Instagram, Twitter, Linkedin, Facebook, Ghost, Send, MessageCircle, ShieldCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', country: '', treatmentType: '', message: '',
  })
  const whatsappNumber = '919986879931'
  const whatsappIntroMessage = 'Hello Shifaway, I would like to speak with your care coordination team about medical travel support.'
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappIntroMessage)}`

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
      <section className="bg-[#071B4A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#E0B04B]/20 border border-[#E0B04B]/40 rounded-full px-4 py-1.5 mb-6">
            <Award size={14} className="text-[#E0B04B]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#E0B04B]">{t('contact.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {t('contact.titleStart')}<br />
            <span className="italic text-[#E0B04B]">{t('contact.titleHighlight')}</span>
          </h1>
          <p className="text-[#D6D6D6] max-w-2xl mx-auto text-lg">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 overflow-hidden rounded-3xl bg-[#071B4A] p-6 text-white shadow-xl sm:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#E0B04B]/40 bg-[#E0B04B]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#E0B04B]">
                  <MessageCircle size={14} />
                  WhatsApp
                </div>
                <h2 className="mb-2 text-2xl font-bold sm:text-3xl">{t('contact.whatsappCtaTitle')}</h2>
                <p className="text-sm leading-relaxed text-white/80 sm:text-base">{t('contact.whatsappCtaText')}</p>
              </div>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#E0B04B] px-6 py-3 text-sm font-black uppercase tracking-wider text-[#06122F] transition-colors hover:bg-[#C9972E]"
              >
                <MessageCircle size={18} />
                {t('contact.whatsappButton')}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#071B4A] mb-2">{t('contact.reachOut')}</h2>
              <h2 className="text-3xl font-bold italic text-[#E0B04B] mb-6">{t('contact.conciergeTeam')}</h2>
              <p className="text-[#06122F]/70 mb-8">
                {t('contact.intro')}
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#E0B04B]/10 p-3 rounded-lg shrink-0">
                    <Phone size={20} className="text-[#E0B04B]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#071B4A] text-sm uppercase tracking-wider">{t('contact.directLines')}</h3>
                    <a href="tel:+919986879931" dir="ltr" className="block text-[#06122F]/70 hover:text-[#E0B04B] transition-colors">+91 99868 79931</a>
                    <a href="tel:+918892536694" dir="ltr" className="block text-[#06122F]/70 hover:text-[#E0B04B] transition-colors">+91 8892536694</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#E0B04B]/10 p-3 rounded-lg shrink-0">
                    <Mail size={20} className="text-[#E0B04B]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#071B4A] text-sm uppercase tracking-wider">{t('contact.emailUs')}</h3>
                    <p className="text-[#06122F]/70">abudanish@shifaway.com</p>
                    <p className="text-[#D6D6D6]/70 text-sm">{t('contact.responseTime')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#E0B04B]/10 p-3 rounded-lg shrink-0">
                    <MapPin size={20} className="text-[#E0B04B]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#071B4A] text-sm uppercase tracking-wider">{t('contact.headquarters')}</h3>
                    <p className="text-[#06122F]/70">{t('contact.city')}</p>
                    <p className="text-[#06122F]/70">{t('contact.countryPostal')}</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-[#071B4A] text-sm uppercase tracking-wider mb-3">{t('contact.connectWithUs')}</h3>
                <div className="flex gap-3">
                  <a href="https://www.instagram.com/shifaway.blr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#D6D6D6] flex items-center justify-center hover:border-[#E0B04B] hover:text-[#E0B04B] text-[#06122F]/60 transition-colors">
                    <Instagram size={18} />
                  </a>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#D6D6D6] flex items-center justify-center hover:border-[#E0B04B] hover:text-[#E0B04B] text-[#06122F]/60 transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#D6D6D6] flex items-center justify-center hover:border-[#E0B04B] hover:text-[#E0B04B] text-[#06122F]/60 transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="https://www.facebook.com/Shafiway.Blr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#D6D6D6] flex items-center justify-center hover:border-[#E0B04B] hover:text-[#E0B04B] text-[#06122F]/60 transition-colors">
                    <Facebook size={18} />
                  </a>
                  <a href="https://snapchat.com/t/lTmWj5CR" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#D6D6D6] flex items-center justify-center hover:border-[#E0B04B] hover:text-[#E0B04B] text-[#06122F]/60 transition-colors">
                    <Ghost size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-white rounded-2xl border border-[#D6D6D6]/50 p-8 shadow-sm">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#071B4A]">{t('contact.formTitleStart')} <span className="italic text-[#E0B04B]">{t('contact.formTitleHighlight')}</span></h3>
                <p className="text-[#06122F]/60 text-sm">{t('contact.formIntro')}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-full-name" className="block text-xs font-semibold text-[#06122F]/60 uppercase tracking-wider mb-1">{t('contact.fullName')}</label>
                    <input
                      id="contact-full-name"
                      type="text"
                      placeholder={t('contact.fullNamePlaceholder')}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full border border-[#D6D6D6] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#E0B04B] transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-[#06122F]/60 uppercase tracking-wider mb-1">{t('contact.emailAddress')}</label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder={t('contact.emailPlaceholder')}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-[#D6D6D6] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#E0B04B] transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-[#06122F]/60 uppercase tracking-wider mb-1">{t('contact.phoneNumber')}</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder={t('contact.phonePlaceholder')}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-[#D6D6D6] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#E0B04B] transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-country" className="block text-xs font-semibold text-[#06122F]/60 uppercase tracking-wider mb-1">{t('contact.country')}</label>
                    <input
                      id="contact-country"
                      type="text"
                      placeholder={t('contact.countryPlaceholder')}
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full border border-[#D6D6D6] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#E0B04B] transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-treatment-type" className="block text-xs font-semibold text-[#06122F]/60 uppercase tracking-wider mb-1">{t('contact.treatmentType')}</label>
                  <select
                    id="contact-treatment-type"
                    value={formData.treatmentType}
                    onChange={(e) => setFormData({ ...formData, treatmentType: e.target.value })}
                    className="w-full border border-[#D6D6D6] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#E0B04B] transition-colors bg-white"
                    required
                  >
                    <option value="">{t('contact.selectTreatmentType')}</option>
                    <option value="Cardiovascular Surgery">{t('contact.options.cardiovascular')}</option>
                    <option value="Oncology">{t('contact.options.oncology')}</option>
                    <option value="Neuro-Sciences">{t('contact.options.neuro')}</option>
                    <option value="Orthopedics">{t('contact.options.orthopedics')}</option>
                    <option value="IVF & Maternity">{t('contact.options.maternity')}</option>
                    <option value="Ophthalmology">{t('contact.options.ophthalmology')}</option>
                    <option value="General Consultation">{t('contact.options.consultation')}</option>
                    <option value="Others">{t('contact.options.others')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[#06122F]/60 uppercase tracking-wider mb-1">{t('contact.yourMessage')}</label>
                  <textarea
                    id="contact-message"
                    placeholder={t('contact.messagePlaceholder')}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full border border-[#D6D6D6] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#E0B04B] transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E0B04B] text-[#06122F] py-3 rounded-lg font-bold text-sm tracking-wider uppercase hover:bg-[#C9972E] transition-colors flex items-center justify-center gap-2"
                >
                  {t('contact.connectWithUs')} <Send size={16} />
                </button>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#071B4A]/20 bg-[#071B4A]/5 py-3 text-sm font-bold uppercase tracking-wider text-[#071B4A] transition-colors hover:bg-[#071B4A] hover:text-white"
                >
                  <MessageCircle size={16} />
                  {t('contact.whatsappShort')}
                </a>

                <p className="text-[#D6D6D6]/70 text-xs text-center">
                  {t('contact.privacyAgreement')}
                </p>

                <div className="flex items-start gap-2 rounded-xl bg-[#F5F5F5] p-3 text-xs leading-relaxed text-[#06122F]/60">
                  <ShieldCheck size={16} className="mt-0.5 shrink-0 text-[#071B4A]" />
                  <span>{t('contact.confidentialityNote')}</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 bg-[#071B4A] text-center">
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Instagram size={28} className="text-white" />
        </div>
        <h3 className="text-white text-xl font-bold mb-2">{t('contact.joinCommunity')}</h3>
        <p className="text-[#D6D6D6] text-sm mb-4 max-w-md mx-auto">
          {t('contact.instagramText')}
        </p>
        <a
          href="https://www.instagram.com/shifaway.blr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#E0B04B] font-semibold hover:underline"
        >
          <Instagram size={16} /> @shifaway.blr
        </a>
      </section>
    </div>
  )
}
