import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './widgets/Header.tsx'
import App from './App.tsx'
import Footer from './widgets/Footer'

function Root() {
  const [actualTab, setActualTab] = useState<any>(null)

  return (
    <StrictMode>
      <Header actualTab={actualTab} onTabChange={setActualTab} />
      <App />
      <Footer />
    </StrictMode>
  )
}

createRoot(document.getElementById('root')!).render(<Root />)

