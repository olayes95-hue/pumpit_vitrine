import ImageSlot from '../ImageSlot.jsx'

export default function Avis() {
  return (
    <section id="avis" style={{ maxWidth: 1240, margin: '0 auto', padding: '20px 28px 110px', display: 'flex', flexDirection: 'column', gap: 36 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: 40, alignItems: 'end' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--vert-texte)' }}>Ils nous font confiance</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px, 4.4vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.02, margin: 0 }}>Déjà en service, chaque jour.</h2>
        </div>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          {/* TODO : chiffres à confirmer avant publication (nombre réel de stations / jours de points suivis) */}
          <div style={{ flex: 1, minWidth: 160, background: 'var(--nuit)', color: '#fff', borderRadius: 24, padding: 22, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 52, lineHeight: 1.1, color: 'var(--vert-pump)', alignSelf: 'flex-start' }}>20</span>
            <span style={{ fontSize: 15, color: 'var(--sauge-claire)' }}>stations déjà en service</span>
          </div>
          <div style={{ flex: 1, minWidth: 160, background: '#fff', borderRadius: 24, padding: 22, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 52, lineHeight: 1.1, color: 'var(--vert-pump)', alignSelf: 'flex-start' }}>400+</span>
            <span style={{ fontSize: 15, color: 'var(--foret)' }}>jours de points suivis</span>
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 16 }}>
        <div style={{ background: '#fff', borderRadius: 32, padding: 32, display: 'flex', flexDirection: 'column', gap: 22 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 64, lineHeight: 0.6, color: 'var(--vert-pump)' }}>&ldquo;</span>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24, lineHeight: 1.35, margin: 0, textWrap: 'pretty' }}>Citation du propriétaire à recueillir : ce que PumpIT a changé dans le suivi de sa station.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 52, height: 52, flex: 'none', borderRadius: '50%', overflow: 'hidden' }}><ImageSlot placeholder="Photo" radius={999} /></div>
            <div style={{ display: 'flex', flexDirection: 'column' }}><span style={{ fontWeight: 700, fontSize: 16 }}>Prénom Nom</span><span style={{ fontSize: 14, color: 'var(--ardoise)' }}>Propriétaire · Station 1</span></div>
          </div>
        </div>
        <div style={{ background: 'var(--vert-pump)', borderRadius: 32, padding: 32, display: 'flex', flexDirection: 'column', gap: 22 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 64, lineHeight: 0.6, color: 'var(--nuit)' }}>&ldquo;</span>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24, lineHeight: 1.35, margin: 0, color: 'var(--nuit)', textWrap: 'pretty' }}>Citation du chef de piste à recueillir : sa routine quotidienne avant et avec PumpIT.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 52, height: 52, flex: 'none', borderRadius: '50%', overflow: 'hidden' }}><ImageSlot placeholder="Photo" radius={999} /></div>
            <div style={{ display: 'flex', flexDirection: 'column', color: 'var(--nuit)' }}><span style={{ fontWeight: 700, fontSize: 16 }}>Prénom Nom</span><span style={{ fontSize: 14 }}>Chef de piste · Station 2</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
