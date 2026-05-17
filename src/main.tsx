import './index.css'

const rootElement = document.getElementById('root')
let appStarted = false

function shouldStartImmediately() {
  const language = window.localStorage.getItem('kma-lang') || window.navigator.languages?.[0] || window.navigator.language

  return Boolean(window.location.hash && window.location.hash !== '#/' && window.location.hash !== '#') || language?.toLowerCase().startsWith('ar')
}

async function startApp() {
  if (appStarted || !rootElement) {
    return
  }

  appStarted = true

  const [{ StrictMode, createElement }, { createRoot }, { i18nReady }, { default: App }] = await Promise.all([
    import('react'),
    import('react-dom/client'),
    import('./i18n'),
    import('./App.tsx'),
  ])

  await i18nReady

  createRoot(rootElement).render(createElement(StrictMode, null, createElement(App)))
}

if (shouldStartImmediately()) {
  void startApp()
} else {
  const startFromLink = (event: MouseEvent) => {
    const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="#/"]') : null

    if (!target) {
      return
    }

    event.preventDefault()
    window.location.hash = new URL(target.href).hash
    void startApp()
  }

  document.addEventListener('click', startFromLink)
  window.addEventListener('hashchange', () => { void startApp() }, { once: true })
  window.addEventListener('scroll', () => { void startApp() }, { once: true, passive: true })
  window.addEventListener('pointermove', () => { void startApp() }, { once: true, passive: true })
  window.addEventListener('touchstart', () => { void startApp() }, { once: true, passive: true })
  window.addEventListener('keydown', () => { void startApp() }, { once: true })
}
