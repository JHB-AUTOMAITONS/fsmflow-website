import './styles/index.css'
import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App'
import { matchPage } from './routes'

/** Warm a page's chunk when the visitor shows intent (hover / focus / touch). */
function prefetchOnIntent() {
  const warm = (e: Event) => {
    const a = (e.target as Element | null)?.closest?.('a[href^="/"]') as HTMLAnchorElement | null
    if (!a || a.target === '_blank') return
    void matchPage(a.pathname)?.load()
  }
  document.addEventListener('pointerover', warm, { passive: true })
  document.addEventListener('focusin', warm)
  document.addEventListener('touchstart', warm, { passive: true })
}

async function start() {
  const container = document.getElementById('root')
  if (!container) return

  // Load the current page's chunk first so hydration doesn't hit a Suspense fallback.
  await matchPage(window.location.pathname)?.load()

  const app = (
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  )

  if (container.firstElementChild) hydrateRoot(container, app)
  else createRoot(container).render(app)

  prefetchOnIntent()
}

void start()
