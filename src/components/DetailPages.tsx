import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle, ChevronRight, Info, MapPin, Sparkles } from 'lucide-react'

type Feature = {
  title: string
  description: string
}

type Step = {
  number: string
  title: string
  description: string
}

type CareDetail = {
  backLabel: string
  title: string
  subtitle: string
  overview: string
  benefits: readonly string[]
  features: readonly Feature[]
  steps: readonly Step[]
}

type PartnerDetail = {
  backLabel: string
  category: string
  name: string
  intro: string
  location: string
  glance: readonly Feature[]
  body: string
  specialtyLabel: string
  specialties: readonly string[]
}

type CareDetailPageProps = {
  detail: CareDetail
  backTo: string
  overviewTitle: string
  featuresTitle: string
  bookingType: 'service' | 'treatment'
}

type PartnerDetailPageProps = {
  detail: PartnerDetail
  backTo: string
}

export function CareDetailPage({ detail, backTo, overviewTitle, featuresTitle, bookingType }: CareDetailPageProps) {
  return (
    <div className="bg-[#fdfcf7] text-[#1a3a2a]">
      <section className="relative overflow-hidden rounded-b-[2rem] bg-[#1a3a2a] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a84c]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <Link to={backTo} className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70 transition-colors hover:text-[#c9a84c]">
            <ArrowLeft size={16} className="rtl:rotate-180" />
            {detail.backLabel}
          </Link>
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">{detail.title}</h1>
          <p className="max-w-2xl text-lg text-white/70">{detail.subtitle}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8">
        <aside className="lg:col-span-4">
          <div className="sticky top-24 rounded-[2rem] border border-[#c9a84c]/10 bg-white p-8 shadow-lg">
            <h2 className="mb-6 flex items-center gap-2 text-xl font-bold">
              <Info size={20} className="text-[#c9a84c]" />
              {overviewTitle}
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-gray-600 md:text-base">{detail.overview}</p>
            <div className="space-y-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-[#c9a84c]">Key Benefits</h3>
              <ul className="space-y-3">
                {detail.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle size={16} className="mt-0.5 shrink-0 text-[#c9a84c]" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 border-t border-gray-100 pt-8">
              <Link to="/contact" className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#c9a84c] px-6 py-4 text-xs font-black uppercase tracking-widest text-[#1a3a2a] shadow-lg shadow-[#c9a84c]/20 transition-colors hover:bg-[#b8963e]">
                Estimate Your Cost
                <ChevronRight size={16} className="rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </aside>

        <div className="space-y-12 lg:col-span-8">
          <section>
            <h2 className="mb-6 text-2xl font-bold">{featuresTitle}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {detail.features.map((feature) => (
                <div key={feature.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h3 className="mb-2 font-bold">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-8 text-2xl font-bold">How It Works</h2>
            <div className="relative space-y-8 border-l border-[#c9a84c]/40 pl-8 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-8">
              {detail.steps.map((step) => (
                <div key={step.number} className="relative">
                  <div className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#c9a84c] bg-[#fdfcf7] rtl:-right-[41px] rtl:left-auto">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#c9a84c]" />
                  </div>
                  <p className="mb-1 text-xs font-black uppercase tracking-widest text-[#c9a84c]">Step {step.number}</p>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="mb-2 text-2xl font-bold">Planning Your Trip?</h2>
            <p className="mb-4 text-gray-600">We recommend booking this {bookingType} at least 2 weeks in advance to ensure availability of preferred options.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-[#c9a84c] hover:underline">
              Contact support for urgent requests
              <ChevronRight size={16} className="rtl:rotate-180" />
            </Link>
          </section>
        </div>
      </section>
    </div>
  )
}

export function PartnerDetailPage({ detail, backTo }: PartnerDetailPageProps) {
  return (
    <div className="bg-[#fdfcf7] text-[#1a3a2a]">
      <section className="relative overflow-hidden rounded-b-[2rem] bg-[#1a3a2a] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a84c]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <Link to={backTo} className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70 transition-colors hover:text-[#c9a84c]">
            <ArrowLeft size={16} className="rtl:rotate-180" />
            {detail.backLabel}
          </Link>
          <p className="mb-3 text-xs font-black uppercase tracking-widest text-[#c9a84c]">{detail.category}</p>
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">{detail.name}</h1>
          <p className="max-w-2xl text-lg text-white/70">{detail.intro}</p>
          <p className="mt-5 inline-flex items-center gap-2 text-sm text-white/60">
            <MapPin size={16} className="text-[#c9a84c]" />
            {detail.location}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-[#c9a84c]/10 bg-white p-8 shadow-lg lg:col-span-1">
            <h2 className="mb-6 flex items-center gap-2 text-xl font-bold">
              <Sparkles size={20} className="text-[#c9a84c]" />
              At a Glance
            </h2>
            <div className="space-y-5">
              {detail.glance.map((item) => (
                <div key={item.title}>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold">{detail.name}</h2>
              <p className="leading-relaxed text-gray-600">{detail.body}</p>
            </div>

            <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm">
              <h2 className="mb-5 text-2xl font-bold">{detail.specialtyLabel}</h2>
              <div className="flex flex-wrap gap-3">
                {detail.specialties.map((specialty) => (
                  <span key={specialty} className="rounded-full bg-[#1a3a2a]/5 px-4 py-2 text-sm font-semibold text-[#1a3a2a]">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#1a3a2a] p-8 text-white">
              <h2 className="mb-3 text-2xl font-bold">Why {detail.name} for Your Healing?</h2>
              <p className="text-white/70">Partnering with {detail.name} ensures that you receive not just a service, but a holistic experience tailored to your recovery. Their commitment to excellence aligns perfectly with Shifaway's philosophy of care, comfort, and clinical precision.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
