import { Link } from 'react-router-dom'
import Footer from './Footer.jsx'

export default function LegalLayout({ title, updated, children }) {
  return (
    <>
      <nav style={{ background: 'var(--nuit)', padding: '16px 28px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Link to="/" aria-label="PumpIT, accueil"><img src="/logo/pumpit-logo-inverse.png" alt="PumpIT" className="wordmark" /></Link>
        </div>
      </nav>
      <main style={{ maxWidth: 820, margin: '0 auto', padding: '64px 28px 100px' }}>
        <Link to="/" style={{ fontSize: 14, fontWeight: 600, color: 'var(--vert-texte)' }}>&larr; Retour à l'accueil</Link>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px, 4vw, 42px)', letterSpacing: '-0.02em', margin: '18px 0 6px' }}>{title}</h1>
        <p style={{ fontSize: 14, color: 'var(--ardoise)', margin: '0 0 40px' }}>Dernière mise à jour : {updated}</p>
        <div className="legal-body" style={{ display: 'flex', flexDirection: 'column', gap: 28, fontSize: 16, lineHeight: 1.65, color: 'var(--foret)' }}>
          {children}
        </div>
      </main>
      <Footer />
      <style>{`
        .legal-body h2 { font-family: var(--font-display); font-weight: 700; font-size: 20px; color: var(--nuit); margin: 0 0 10px; }
        .legal-body .todo { background: var(--citron-fond); color: var(--citron-texte); border-radius: 10px; padding: 2px 8px; font-weight: 700; font-size: 14px; }
        .legal-body ul { margin: 0; padding-left: 22px; display: flex; flex-direction: column; gap: 6px; }
      `}</style>
    </>
  )
}
