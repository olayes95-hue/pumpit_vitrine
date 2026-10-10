import { useOffres } from '../../lib/offres.jsx'

// Repli si la base n'est pas joignable ou ne renvoie rien (voir lib/offres.jsx) — le site
// ne doit jamais dépendre de cette donnée pour fonctionner.
const PLANS = [
  { name: 'Essentiel', price: '25 000', desc: 'Le carburant, sans WhatsApp ni cahier.', bg: 'var(--brume)', fg: 'var(--nuit)', badge: false,
    items: ['1 station', 'Activité : carburant', 'Saisie quotidienne (chef de piste, pompiste)', 'Alertes écart de caisse et versement manquant', 'Rapports et historique', 'Formation à la prise en main'] },
  { name: 'Pro', price: '40 000', desc: 'Carburant, lubrifiants et gaz sous contrôle.', bg: 'var(--nuit)', fg: '#fff', badge: true, lift: true,
    items: ['1 station', 'Activités : carburant, lubrifiants et gaz', "Tout l'Essentiel", 'Alertes sur téléphone', 'Anti-coulage cuve et écart compteur', 'Prévision de commande', 'Formation sur place'] },
  { name: 'Complet', price: '75 000', desc: 'Toute la station, toutes les activités.', bg: 'var(--brume)', fg: 'var(--nuit)', badge: false,
    items: ['1 station', 'Toutes les activités : carburant, lubrifiants, gaz, supérette et lavage', 'Tout le Pro', 'Gestion du stock supérette', 'Point financier mensuel'] },
]

export default function Tarifs() {
  const offres = useOffres()
  const plans = offres?.length
    ? offres.map(o => ({
        name: o.label, price: Number(o.prix_mensuel).toLocaleString('fr-FR'), desc: o.description || '',
        bg: o.mise_en_avant_vitrine ? 'var(--nuit)' : 'var(--brume)', fg: o.mise_en_avant_vitrine ? '#fff' : 'var(--nuit)',
        badge: o.mise_en_avant_vitrine, lift: o.mise_en_avant_vitrine,
        items: o.points_forts_vitrine?.length ? o.points_forts_vitrine : PLANS.find(p => p.name === o.label)?.items || [],
      }))
    : PLANS
  return (
    <section id="tarifs" style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '110px 28px', display: 'flex', flexDirection: 'column', gap: 36 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 680 }}>
          <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--vert-texte)' }}>Tarifs</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px, 4.4vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.02, margin: 0 }}>Une offre adaptée à votre station.</h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--foret)', margin: 0 }}>Abonnement mensuel, sans engagement, payable par Mobile Money. Tarifs par station. Plusieurs stations : tarif réseau sur demande.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, alignItems: 'stretch' }}>
          {plans.map(p => (
            <div key={p.name} style={{ background: p.bg, color: p.fg, borderRadius: 32, padding: 32, display: 'flex', flexDirection: 'column', gap: 18, transform: p.lift ? 'translateY(-12px)' : 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30 }}>{p.name}</span>
                {p.badge && <span style={{ fontSize: 12, fontWeight: 700, background: 'var(--citron)', color: 'var(--nuit)', padding: '5px 11px', borderRadius: 999 }}>Le plus choisi</span>}
              </div>
              <span style={{ fontSize: 15, lineHeight: 1.5, opacity: 0.85 }}>{p.desc}</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 40, letterSpacing: '-0.03em' }}>{p.price}</span>
                <span style={{ fontSize: 15, opacity: 0.8 }}>F / mois</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                {p.items.map(it => (
                  <span key={it} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15 }}><span style={{ color: 'var(--vert-pump)', fontWeight: 700 }}>✓</span>{it}</span>
                ))}
              </div>
              <a href="#demo" className="btn-primary" style={{ textAlign: 'center', background: 'var(--vert-pump)', color: 'var(--nuit)', fontWeight: 700, fontSize: 15, padding: '14px 20px', borderRadius: 999 }}>Demander une démo</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
