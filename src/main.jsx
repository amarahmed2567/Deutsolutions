import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { setupScrollAnimations } from './scroll-animate.js'

function Root() {
  useEffect(() => {
    setupScrollAnimations()
    // Listen for route changes to re-trigger animations
    const handleRouteChange = () => setTimeout(setupScrollAnimations, 100)
    window.addEventListener('popstate', handleRouteChange)
    return () => window.removeEventListener('popstate', handleRouteChange)
  }, [])
  return <App />
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>
)
