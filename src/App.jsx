import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import MentionsLegales from './pages/MentionsLegales.jsx'
import Confidentialite from './pages/Confidentialite.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import { ContenuProvider } from './lib/contenu.jsx'

export default function App() {
  return (
    <ContenuProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
      </Routes>
    </ContenuProvider>
  )
}
