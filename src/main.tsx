import './index.css'

const rootElement = document.getElementById('root')
let appStarted = false

type WindowWithIdleCallback = Window &
  typeof globalThis & {
    requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number
  }

function shouldStartImmediately() {
  return Boolean(window.location.hash && window.location.hash !== '#/' && window.location.hash !== '#')
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
  const browserWindow = window as WindowWithIdleCallback
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

  if (browserWindow.requestIdleCallback) {
    browserWindow.requestIdleCallback(() => { void startApp() }, { timeout: 2500 })
  } else {
    window.setTimeout(() => { void startApp() }, 1500)
  }
}
