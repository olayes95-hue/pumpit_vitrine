import { useContenu } from '../lib/contenu.jsx'

export default function Footer() {
  const c = useContenu()
  return (
    <footer style={{ background: 'var(--nuit)', borderTop: '1px solid var(--nuit-2)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '40px 28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 28, color: 'var(--sauge)', fontSize: 14 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <img src="/logo/pumpit-logo-inverse.png" alt="PumpIT" style={{ height: 20, width: 'auto', alignSelf: 'flex-start' }} />
          <span>Pilotez votre station, où que vous soyez.</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ color: '#fff', fontWeight: 600 }}>Produit</span>
          <a href="#produit" style={{ color: 'var(--sauge)' }}>Fonctionnalités</a>
          <a href="#tarifs" style={{ color: 'var(--sauge)' }}>Tarifs</a>
          <a href="#faq" style={{ color: 'var(--sauge)' }}>FAQ</a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ color: '#fff', fontWeight: 600 }}>Contact</span>
          <span>{c?.email_contact || 'contact@pumpit-solutions.com'}</span>
          <span>{c?.telephone_contact || '[À compléter — téléphone]'}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ color: '#fff', fontWeight: 600 }}>Légal</span>
          <a href="/mentions-legales" style={{ color: 'var(--sauge)' }}>Mentions légales</a>
          <a href="/confidentialite" style={{ color: 'var(--sauge)' }}>Politique de confidentialité</a>
        </div>
      </div>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 28px 28px', color: 'var(--sauge)', fontSize: 13 }}>
        © 2026 {c?.raison_sociale || 'PumpIT Solutions'}
      </div>
    </footer>
  )
}
