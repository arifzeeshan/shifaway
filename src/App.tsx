import { lazy, Suspense, useEffect, useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import { useDirection } from './i18n/useDirection'
import Home from './pages/Home'

const Footer = lazy(() => import('./components/Footer'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Treatments = lazy(() => import('./pages/Treatments'))
const TreatmentDetail = lazy(() => import('./pages/TreatmentDetail'))
const Partners = lazy(() => import('./pages/Partners'))
const PartnerDetail = lazy(() => import('./pages/PartnerDetail'))
const Process = lazy(() => import('./pages/Process'))
const Contact = lazy(() => import('./pages/Contact'))
const Legal = lazy(() => import('./pages/Legal'))

type WindowWithIdleCallback = Window &
  typeof globalThis & {
    requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number
    cancelIdleCallback?: (id: number) => void
  }

function PageFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-[#fdfcf7] px-4 text-center text-[#047857]">
      <div>
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-2 border-[#f4c542]/30 border-t-[#f4c542]" />
        <p className="text-xs font-bold uppercase tracking-widest text-[#f4c542]">Loading</p>
      </div>
    </div>
  )
}

function DeferredFooter() {
  const [showFooter, setShowFooter] = useState(false)

  useEffect(() => {
    const browserWindow = window as WindowWithIdleCallback

    if (browserWindow.requestIdleCallback && browserWindow.cancelIdleCallback) {
      const id = browserWindow.requestIdleCallback(() => setShowFooter(true), { timeout: 2000 })

      return () => browserWindow.cancelIdleCallback?.(id)
    }

    const id = window.setTimeout(() => setShowFooter(true), 500)

    return () => window.clearTimeout(id)
  }, [])

  if (!showFooter) {
    return null
  }

  return (
    <Suspense fallback={null}>
      <Footer />
    </Suspense>
  )
}

function App() {
  useDirection()

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-white pb-20 lg:pb-0">
        <Navbar />
        <main className="flex-1 w-full max-w-full overflow-x-hidden">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/treatments" element={<Treatments />} />
              <Route path="/treatments/:slug" element={<TreatmentDetail />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/partners/:slug" element={<PartnerDetail />} />
              <Route path="/process" element={<Process />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<Legal type="privacy" />} />
              <Route path="/terms-of-service" element={<Legal type="terms" />} />
            </Routes>
          </Suspense>
        </main>
        <DeferredFooter />
      </div>
    </Router>
  )
}

export default App
