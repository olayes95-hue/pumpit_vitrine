const CARTES = [
  { badge: true, title: 'Versement incomplet', text: 'Le montant versé est inférieur au cash à verser.' },
  { badge: false, title: 'Écart compteur', text: 'Litres déclarés différents de la variation des compteurs.' },
  { badge: false, title: 'Perte à la livraison', text: 'Litres reçus inférieurs à la commande, au-delà du seuil.' },
]

export default function Alertes() {
  return (
    <section id="fuites" style={{ background: 'var(--nuit)', color: '#fff' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '100px 28px', display: 'flex', flexDirection: 'column', gap: 36 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 28, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 720 }}>
            <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--vert-pump)' }}>Alertes automatiques</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px, 4.4vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.02, margin: 0 }}>
              On détecte les fuites d'argent dans votre station.
            </h2>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--sauge-claire)', margin: 0, maxWidth: '40ch' }}>
            Vous n'avez plus à tout vérifier vous-même : PumpIT vous prévient dès qu'un chiffre ne tombe pas juste.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 14 }}>
          {CARTES.map(c => (
            <div key={c.title} style={{ background: 'var(--nuit-3)', borderRadius: 24, padding: 22, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: 8, background: 'var(--rouge-fond)', color: 'var(--rouge-texte)', fontSize: 13, fontWeight: 700, padding: '6px 12px', borderRadius: 999 }}>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--rouge)' }} />Alerte
              </span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22 }}>{c.title}</span>
              <span style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--sauge-claire)' }}>{c.text}</span>
            </div>
          ))}
          <div style={{ background: 'var(--vert-pump)', color: 'var(--nuit)', borderRadius: 24, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 12 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22 }}>Et tout est tracé.</span>
            <span style={{ fontSize: 15, lineHeight: 1.55 }}>Historique et photos-preuves : vous ne dépendez plus de la mémoire de personne.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
