import { Link } from 'react-router-dom'
import { ArrowLeft, FileText } from 'lucide-react'

type LegalPageProps = {
  type: 'privacy' | 'terms'
}

const policies = {
  privacy: {
    badge: 'Legal',
    titleStart: 'Privacy',
    titleHighlight: 'Policy.',
    updated: 'Last updated: February 2026',
    sections: [
      {
        title: '1. Introduction',
        body: 'Shifaway is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and medical tourism facilitation services.',
      },
      {
        title: '2. Information We Collect',
        body: 'We may collect personal identification information, contact details, medical records, travel preferences, passport and visa information, payment information, and communications you share with our team while planning your medical journey.',
      },
      {
        title: '3. How We Use Your Information',
        body: 'Your information is used to coordinate medical consultations, arrange travel and accommodation, process documentation, communicate with partner hospitals, provide translation and concierge support, improve our services, and comply with legal obligations.',
      },
      {
        title: '4. Sharing of Information',
        body: 'We share information only with trusted partner hospitals, hotels, transport providers, visa/documentation providers, insurance partners, and professional advisors as required to deliver our services. We do not sell your personal information.',
      },
      {
        title: '5. Data Security',
        body: 'We implement industry-standard security measures to protect your personal and medical data, including encrypted data transmission, secure storage systems, access controls, and regular security reviews. No electronic method is completely secure, but we work to protect your data responsibly.',
      },
      {
        title: '6. Data Retention',
        body: 'We retain your personal information for as long as necessary to fulfill the purposes described in this policy or as required by applicable law. Medical records shared with us may be retained for follow-up care and legal compliance.',
      },
      {
        title: '7. Your Rights',
        body: 'You may request access, correction, deletion, withdrawal of consent, or object to processing of your personal data, subject to legal and contractual obligations.',
      },
      {
        title: '8. Cookies',
        body: 'Our website may use cookies and similar tracking technologies to enhance browsing, analyze traffic, and support translation services. You can manage cookie preferences through your browser settings.',
      },
      {
        title: '9. Third-Party Links',
        body: 'Our website may link to third-party websites such as partner hospitals and hotels. We are not responsible for their privacy practices and encourage you to review their policies independently.',
      },
      {
        title: '10. Contact Us',
        body: 'For questions about this Privacy Policy or your data rights, contact Shifaway at info@shifaway.com, +91 99868 79931 / +91 88925366694, Bengaluru, Karnataka, India - 5600005.',
      },
    ],
  },
  terms: {
    badge: 'Legal',
    titleStart: 'Terms of',
    titleHighlight: 'Service.',
    updated: 'Last updated: February 2026',
    sections: [
      {
        title: '1. Agreement to Terms',
        body: 'By accessing and using the Shifaway website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access or use our services.',
      },
      {
        title: '2. Our Services',
        body: 'Shifaway acts as a medical tourism facilitator. We coordinate medical consultations, hospital referrals, travel arrangements, accommodation, transport, documentation assistance, interpretation, and leisure arrangements. We do not directly provide medical treatment.',
      },
      {
        title: '3. Cost Estimates & Pricing',
        body: 'Cost estimates provided through the website or our team are approximate and for informational purposes only. Final pricing depends on the patient condition, treatment complexity, hospital selection, and medical evaluation.',
      },
      {
        title: '4. Price Match Guarantee',
        body: 'Our Best Price Guarantee applies to official written quotes from comparable accredited facilitators and equivalent-quality hospitals, subject to verification before booking confirmation.',
      },
      {
        title: '5. Medical Disclaimer',
        body: 'Shifaway does not provide medical advice, diagnosis, or treatment. Medical decisions are made between patients and licensed professionals at partner hospitals.',
      },
      {
        title: '6. User Responsibilities',
        body: 'You agree to provide accurate personal and medical information, disclose relevant medical history, obtain required travel documents and insurance, comply with hospital and Indian law requirements, and make timely payments.',
      },
      {
        title: '7. Booking & Cancellation',
        body: 'Bookings are confirmed upon receipt of required deposits or advance payments. Cancellation and refund policies vary depending on hospitals, hotels, flights, and other partner terms.',
      },
      {
        title: '8. Limitation of Liability',
        body: 'Shifaway is not liable for medical outcomes, travel disruptions, visa rejections, indirect damages, or circumstances beyond reasonable control. Our role is limited to facilitation services.',
      },
      {
        title: '9. Intellectual Property',
        body: 'All website content, including text, graphics, logos, images, and software, is the property of Shifaway or its suppliers and may not be reproduced without permission.',
      },
      {
        title: '10. Governing Law',
        body: 'These Terms are governed by the laws of India. Disputes are subject to the jurisdiction of courts in Bengaluru, Karnataka, India.',
      },
      {
        title: '11. Changes to Terms',
        body: 'We may modify these Terms at any time. Continued use of our services after changes are posted constitutes acceptance of the revised terms.',
      },
      {
        title: '12. Contact Us',
        body: 'For questions about these Terms, contact Shifaway at info@shifaway.com, +91 99868 79931 / +91 88925366694, Bengaluru, Karnataka, India - 5600005.',
      },
    ],
  },
}

export default function Legal({ type }: LegalPageProps) {
  const page = policies[type]

  return (
    <div className="bg-[#fdfcf7] text-[#1a3a2a]">
      <section className="bg-[#1a3a2a] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link to="/" className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70 transition-colors hover:text-[#c9a84c]">
            <ArrowLeft size={16} className="rtl:rotate-180" />
            Back to Home
          </Link>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c9a84c]/40 bg-[#c9a84c]/20 px-4 py-1.5">
            <FileText size={14} className="text-[#c9a84c]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c]">{page.badge}</span>
          </div>
          <h1 className="mb-4 text-5xl font-bold md:text-6xl">
            {page.titleStart} <span className="italic text-[#c9a84c]">{page.titleHighlight}</span>
          </h1>
          <p className="text-white/70">{page.updated}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm md:p-10">
          <div className="space-y-8">
            {page.sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-3 text-xl font-bold">{section.title}</h2>
                <p className="leading-relaxed text-gray-600">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
