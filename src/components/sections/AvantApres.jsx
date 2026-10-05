const AVANT = [
  'Le point du jour envoyé sur WhatsApp, difficile à vérifier',
  'Versements jamais arrivés en banque, découverts trop tard',
  'Ruptures de gasoil ou de gaz sans prévenir',
  'Écarts de compteur et pertes à la livraison invisibles',
]
const APRES = [
  'Point du jour saisi sur le téléphone, avec photos-preuves',
  'Versements contrôlés à chaque poste, écarts repérés tout de suite',
  'Alerte avant la rupture, pour commander à temps',
  'Historique et photos-preuves toujours disponibles',
]

export default function AvantApres() {
  return (
    <section id="avant-apres" style={{ maxWidth: 1240, margin: '0 auto', padding: '40px 28px 110px', display: 'flex', flexDirection: 'column', gap: 36 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 700 }}>
        <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--vert-texte)' }}>Pourquoi PumpIT</span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px, 4.4vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.02, margin: 0 }}>Fini les cahiers, bonjour la visibilité.</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 18 }}>
        <div style={{ background: '#fff', borderRadius: 32, padding: 34, display: 'flex', flexDirection: 'column', gap: 18 }}>
          <span style={{ alignSelf: 'flex-start', fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', background: 'var(--gris-fond)', color: 'var(--ardoise)', padding: '6px 12px', borderRadius: 999 }}>Avant</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 17, color: 'var(--ardoise)' }}>
            {AVANT.map(t => (
              <span key={t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 24, height: 24, borderRadius: 999, background: 'var(--gris-fond)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, flex: 'none' }}>✕</span>{t}
              </span>
            ))}
          </div>
        </div>
        <div style={{ background: 'var(--nuit)', color: '#fff', borderRadius: 32, padding: 34, display: 'flex', flexDirection: 'column', gap: 18 }}>
          <span style={{ alignSelf: 'flex-start', fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', background: 'var(--vert-pump)', color: 'var(--nuit)', padding: '6px 12px', borderRadius: 999 }}>Avec PumpIT</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 17 }}>
            {APRES.map(t => (
              <span key={t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 24, height: 24, borderRadius: 999, background: 'var(--vert-pump)', color: 'var(--nuit)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, flex: 'none' }}>✓</span>{t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
