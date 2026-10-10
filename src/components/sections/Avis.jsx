import ImageSlot from '../ImageSlot.jsx'
import { useContenu, photoUrl } from '../../lib/contenu.jsx'

export default function Avis() {
  const c = useContenu()
  return (
    <section id="avis" style={{ maxWidth: 1240, margin: '0 auto', padding: '20px 28px 110px', display: 'flex', flexDirection: 'column', gap: 36 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: 40, alignItems: 'end' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--vert-texte)' }}>Ils nous font confiance</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px, 4.4vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.02, margin: 0 }}>Déjà en service, chaque jour.</h2>
        </div>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <div className="avis-stat" style={{ flex: 1, minWidth: 160, background: 'var(--nuit)', color: '#fff', borderRadius: 24, padding: 22, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span className="avis-stat-n" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 52, lineHeight: 1.1, color: 'var(--vert-pump)', alignSelf: 'flex-start' }}>20</span>
            <span style={{ fontSize: 15, color: 'var(--sauge-claire)' }}>stations déjà en service</span>
          </div>
          <div className="avis-stat" style={{ flex: 1, minWidth: 160, background: '#fff', borderRadius: 24, padding: 22, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span className="avis-stat-n" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 52, lineHeight: 1.1, color: 'var(--vert-pump)', alignSelf: 'flex-start' }}>400+</span>
            <span style={{ fontSize: 15, color: 'var(--foret)' }}>jours de points suivis</span>
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 16 }}>
        <div className="avis-card" style={{ background: '#fff', borderRadius: 32, padding: 32, display: 'flex', flexDirection: 'column', gap: 22 }}>
          <span className="avis-quote-mark" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 64, lineHeight: 0.6, color: 'var(--vert-pump)' }}>&ldquo;</span>
          <p className="avis-quote-text" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24, lineHeight: 1.35, margin: 0, textWrap: 'pretty' }}>{c?.avis1_citation || 'Citation du propriétaire à recueillir : ce que PumpIT a changé dans le suivi de sa station.'}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 52, height: 52, flex: 'none', borderRadius: '50%', overflow: 'hidden' }}>
              {photoUrl(c?.avis1_photo, null) ? <img src={photoUrl(c?.avis1_photo, null)} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <ImageSlot placeholder="Photo" radius={999} />}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}><span style={{ fontWeight: 700, fontSize: 16 }}>{c?.avis1_nom || 'Prénom Nom'}</span><span style={{ fontSize: 14, color: 'var(--ardoise)' }}>{c?.avis1_role || 'Propriétaire · Station 1'}</span></div>
          </div>
        </div>
        <div className="avis-card" style={{ background: 'var(--vert-pump)', borderRadius: 32, padding: 32, display: 'flex', flexDirection: 'column', gap: 22 }}>
          <span className="avis-quote-mark" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 64, lineHeight: 0.6, color: 'var(--nuit)' }}>&ldquo;</span>
          <p className="avis-quote-text" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24, lineHeight: 1.35, margin: 0, color: 'var(--nuit)', textWrap: 'pretty' }}>{c?.avis2_citation || 'Citation du chef de piste à recueillir : sa routine quotidienne avant et avec PumpIT.'}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 52, height: 52, flex: 'none', borderRadius: '50%', overflow: 'hidden' }}>
              {photoUrl(c?.avis2_photo, null) ? <img src={photoUrl(c?.avis2_photo, null)} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <ImageSlot placeholder="Photo" radius={999} />}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', color: 'var(--nuit)' }}><span style={{ fontWeight: 700, fontSize: 16 }}>{c?.avis2_nom || 'Prénom Nom'}</span><span style={{ fontSize: 14 }}>{c?.avis2_role || 'Chef de piste · Station 2'}</span></div>
          </div>
        </div>
      </div>
      <style>{`
        /* Section "Ils nous font confiance" trop volumineuse sur petit écran : cartes de
           stats et témoignages gardaient leur padding/police desktop, empilés en colonne —
           beaucoup de hauteur pour peu d'info utile sur téléphone. */
        @media (max-width: 600px) {
          .avis-stat { padding: 16px !important; }
          .avis-stat-n { font-size: 36px !important; }
          .avis-card { padding: 20px !important; gap: 14px !important; }
          .avis-quote-mark { font-size: 40px !important; }
          .avis-quote-text { font-size: 18px !important; }
        }
      `}</style>
    </section>
  )
}
