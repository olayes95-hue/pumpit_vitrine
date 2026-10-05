import Nav from '../components/Nav.jsx'
import Hero from '../components/sections/Hero.jsx'
import StatsBar from '../components/sections/StatsBar.jsx'
import ProduitDemo from '../components/sections/ProduitDemo.jsx'
import Alertes from '../components/sections/Alertes.jsx'
import AvantApres from '../components/sections/AvantApres.jsx'
import SaisieDuJour from '../components/sections/SaisieDuJour.jsx'
import Etapes from '../components/sections/Etapes.jsx'
import Avis from '../components/sections/Avis.jsx'
import Tarifs from '../components/sections/Tarifs.jsx'
import Faq from '../components/sections/Faq.jsx'
import DemoForm from '../components/sections/DemoForm.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <StatsBar />
      <ProduitDemo />
      <Alertes />
      <AvantApres />
      <SaisieDuJour />
      <Etapes />
      <Avis />
      <Tarifs />
      <Faq />
      <DemoForm />
      <Footer />
    </>
  )
}
