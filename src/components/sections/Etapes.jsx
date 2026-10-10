const ETAPES = [
  { n: '01', title: 'Démo gratuite', text: 'PumpIT présenté sur vos propres activités.', dark: false },
  { n: '02', title: 'Installation et formation', text: 'Cuves, produits et équipes paramétrés ; personnel formé sur place.', dark: false },
  { n: '03', title: 'Vous pilotez', text: 'Tout en temps réel, avec une équipe disponible pour vous.', dark: true },
]

export default function Etapes() {
  return (
    <section id="etapes" style={{ maxWidth: 1240, margin: '0 auto', padding: '110px 28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 56, alignItems: 'stretch' }}>
      <div className="hide-mobile" style={{ minHeight: 460, borderRadius: 36, overflow: 'hidden' }}><img src="/photos/pompe.jpg" alt="Équipe PumpIT en station, ravitaillement en carburant" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 26, justifyContent: 'center' }}>
        <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--vert-texte)' }}>Démarrer</span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px, 4.4vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.02, margin: 0 }}>Opérationnel en quelques jours.</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {ETAPES.map(e => (
            <div key={e.n} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', background: e.dark ? 'var(--nuit)' : '#fff', color: e.dark ? '#fff' : 'var(--nuit)', borderRadius: 24, padding: '20px 22px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 40, lineHeight: 1.1, color: 'var(--vert-pump)', flex: 'none' }}>{e.n}</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 21 }}>{e.title}</span>
                <span style={{ fontSize: 15, lineHeight: 1.55, color: e.dark ? 'var(--sauge-claire)' : 'var(--foret)' }}>{e.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
