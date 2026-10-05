import { useState } from 'react'

const LINKS = [
  ['#produit', 'Produit'],
  ['#fuites', 'Alertes'],
  ['#avant-apres', 'Pourquoi PumpIT'],
  ['#etapes', 'Démarrer'],
  ['#avis', 'Avis'],
  ['#tarifs', 'Tarifs'],
  ['#faq', 'FAQ'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(11,31,23,0.96)', backdropFilter: 'blur(10px)', boxShadow: '0 6px 20px -12px rgba(0,0,0,0.5)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '12px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
        <a href="#top" aria-label="PumpIT, accueil"><img src="/logo/pumpit-logo-inverse.png" alt="PumpIT" className="wordmark" /></a>
        <div className="nav-links" style={{ display: 'flex', gap: 4, alignItems: 'center', flexWrap: 'wrap' }}>
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} className="nav-link" style={{ color: 'var(--sauge-claire)', fontWeight: 500, fontSize: 15, padding: '9px 14px', borderRadius: 999 }}>{label}</a>
          ))}
          <a href="#demo" className="btn-primary" style={{ background: 'var(--vert-pump)', color: 'var(--nuit)', fontWeight: 700, fontSize: 15, padding: '10px 20px', borderRadius: 999, marginLeft: 8 }}>Demander une démo</a>
        </div>
        <button className="nav-burger" onClick={() => setOpen(o => !o)} aria-label="Menu" aria-expanded={open}
          style={{ display: 'none', width: 44, height: 44, borderRadius: 999, border: 0, background: 'var(--nuit-2)', color: '#fff', fontSize: 18, cursor: 'pointer', alignItems: 'center', justifyContent: 'center' }}>
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, padding: '8px 20px 20px', borderTop: '1px solid var(--nuit-2)' }}>
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} style={{ color: '#fff', fontWeight: 600, fontSize: 17, padding: '14px 16px', borderRadius: 14 }}>{label}</a>
          ))}
          <a href="#demo" onClick={() => setOpen(false)} style={{ color: 'var(--nuit)', background: 'var(--vert-pump)', textAlign: 'center', marginTop: 8, fontWeight: 600, fontSize: 17, padding: '14px 16px', borderRadius: 14 }}>Demander une démo</a>
        </div>
      )}
    </nav>
  )
}
