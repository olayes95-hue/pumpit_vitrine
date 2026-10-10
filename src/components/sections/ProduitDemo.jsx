import { useState, useEffect } from 'react'

const ACTIVITES = [
  { name: 'Carburants', color: 'var(--act-carburants)', tint: 'var(--act-carburants-fond)',
    kpis: [['Litres vendus', '8 920 L'], ['Cuve Super', '78 %'], ['Cuve Gasoil', '21 %']],
    listTitle: 'Ventes par pompe',
    rows: [['Pompe 1 · Super', '2 340 L', 82], ['Pompe 2 · Super', '1 980 L', 70], ['Pompe 3 · Gasoil', '2 870 L', 100], ['Pompe 4 · Gasoil', '1 730 L', 60]],
    alertTitle: 'Stock bas', alert: 'Cuve Gasoil à 21 %. Commandez avant jeudi.', alertBg: 'var(--citron-fond)', alertFg: 'var(--nuit)',
    pitch: "Relevés d'index matin et 16 h avec photo, écart compteur, stock en cuve, commandes et réceptions (cuve avant / après)." },
  { name: 'Lubrifiants', color: 'var(--act-lubrifiants)', tint: 'var(--act-lubrifiants-fond)',
    kpis: [['Unités vendues', '46'], ['Références', '38'], ['En rupture', '3']],
    listTitle: 'Stock par référence',
    rows: [['Huile 5W30 · 1 L', '6', 30], ['Huile 15W40 · 5 L', '14', 70], ['Liquide de frein', '2', 10], ['Liquide de refroidissement', '9', 45]],
    alertTitle: 'Réassort', alert: 'Liquide de frein : 2 unités restantes.', alertBg: 'var(--act-lubrifiants-fond)', alertFg: 'var(--act-lubrifiants-texte)',
    pitch: 'Stock par référence, ventes du jour et liste de réassort prête à envoyer au fournisseur.' },
  { name: 'Gaz', color: 'var(--act-gaz)', tint: 'var(--act-gaz-fond)',
    kpis: [['Bouteilles vendues', '32'], ['Pleines', '58'], ['Vides consignées', '41']],
    listTitle: 'Bouteilles pleines',
    rows: [['6 kg', '24', 60], ['12 kg', '4', 12], ['35 kg', '18', 45], ['50 kg', '12', 30]],
    alertTitle: 'Stock bas', alert: 'Bouteilles 12 kg : 4 restantes.', alertBg: 'var(--act-gaz-fond)', alertFg: 'var(--act-gaz-texte)',
    pitch: 'Pleines, vides et consignes suivies séparément. Les échanges sont enregistrés en un geste.' },
  { name: 'Supérette', color: 'var(--act-superette)', tint: 'var(--act-superette-fond)',
    kpis: [['Ventes', '312'], ['Panier moyen', '2 450'], ['Articles', '1 240']],
    listTitle: 'Meilleures ventes',
    rows: [['Eau 1,5 L', '96', 100], ['Boissons fraîches', '74', 77], ['Biscuits', '51', 53], ['Recharges téléphone', '38', 40]],
    alertTitle: 'À prévoir', alert: 'Eau 1,5 L : 2 jours de stock.', alertBg: 'var(--act-superette-fond)', alertFg: 'var(--act-superette-texte)',
    pitch: "Caisse, inventaire et meilleures ventes. Vous savez ce qui part et ce qu'il faut commander." },
  { name: 'Lavage', color: 'var(--act-lavage)', tint: 'var(--act-lavage-fond)',
    kpis: [['Véhicules', '18'], ['Lavages complets', '6'], ['Extérieurs', '12']],
    listTitle: 'Passages par créneau',
    rows: [['08 h – 10 h', '3', 30], ['10 h – 12 h', '5', 50], ['14 h – 16 h', '8', 80], ['16 h – 18 h', '2', 20]],
    alertTitle: 'Affluence', alert: 'Pic habituel samedi entre 14 h et 16 h.', alertBg: 'var(--act-lavage-fond)', alertFg: 'var(--act-lavage-texte)',
    pitch: "Prestations, passages et encaissements du jour, pour organiser votre équipe au bon moment." },
]

export default function ProduitDemo() {
  const [tab, setTab] = useState(0)
  const [ready, setReady] = useState(false)
  useEffect(() => { const t = setTimeout(() => setReady(true), 250); return () => clearTimeout(t) }, [])
  const cur = ACTIVITES[tab]

  return (
    <section id="produit" style={{ maxWidth: 1240, margin: '0 auto', padding: '110px 28px 90px', display: 'flex', flexDirection: 'column', gap: 36 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 28, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 640 }}>
          <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--vert-texte)' }}>Le produit</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px, 4.4vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.02, margin: 0 }}>Toute votre station, un seul écran.</h2>
        </div>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--foret)', margin: 0, maxWidth: '40ch' }}>Choisissez une activité pour voir ce que PumpIT suit pour vous.</p>
      </div>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {ACTIVITES.map((t, i) => {
          const on = i === tab
          return (
            <button key={t.name} className="tab-btn activity-tab" onClick={() => setTab(i)} style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '10px 18px 10px 10px', borderRadius: 999,
              border: `2px solid ${on ? 'var(--nuit)' : 'var(--filet)'}`, background: on ? 'var(--nuit)' : '#fff', color: on ? '#fff' : 'var(--nuit)',
              fontSize: 16, fontWeight: 600, cursor: 'pointer', transition: 'all .2s',
            }}>
              <span className="activity-tab-dot" style={{ width: 34, height: 34, borderRadius: 999, background: on ? '#fff' : t.tint, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                <span style={{ width: 12, height: 12, borderRadius: 999, background: t.color }} />
              </span>
              {t.name}
            </button>
          )
        })}
      </div>

      <div style={{ background: 'var(--nuit)', borderRadius: 36, padding: 14, boxShadow: '0 50px 90px -40px rgba(11,31,23,0.55)' }}>
        <div className="demo-grid" style={{ background: 'var(--brume)', borderRadius: 26, overflow: 'hidden', display: 'grid' }}>
          <div className="hide-mobile" style={{ background: '#fff', padding: '22px 16px', display: 'flex', flexDirection: 'column', gap: 6, borderRight: '1px solid var(--gris-fond)' }}>
            <img src="/logo/pumpit-logo-principal.png" alt="PumpIT" style={{ height: 20, width: 'auto', padding: '0 10px 14px' }} />
            {ACTIVITES.map((t, i) => (
              <button key={t.name} className="side-tab" onClick={() => setTab(i)} style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 14, border: 0,
                background: i === tab ? t.tint : 'transparent', fontSize: 15, fontWeight: 500, color: 'var(--nuit)', cursor: 'pointer', textAlign: 'left',
              }}>
                <span style={{ width: 10, height: 10, borderRadius: 999, background: t.color }} />{t.name}
              </button>
            ))}
            <div style={{ flex: 1 }} />
            <span style={{ fontSize: 12, color: 'var(--ardoise)', padding: '0 12px' }}>Station Centre · Poste du matin</span>
          </div>
          <div className="demo-main" style={{ display: 'flex', flexDirection: 'column', gap: 18, minHeight: 440 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 44, height: 44, borderRadius: 14, background: cur.tint, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ width: 16, height: 16, borderRadius: 999, background: cur.color }} /></span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, letterSpacing: '-0.02em' }}>{cur.name}</span>
              </div>
              <span style={{ fontSize: 14, color: 'var(--ardoise)' }}>Aujourd'hui · mis à jour il y a 2 min</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 12 }}>
              {cur.kpis.map(([label, value]) => (
                <div key={label} style={{ background: '#fff', borderRadius: 18, padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span style={{ fontSize: 14, color: 'var(--ardoise)' }}>{label}</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, letterSpacing: '-0.02em' }}>{value}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12, flex: 1 }}>
              <div style={{ background: '#fff', borderRadius: 18, padding: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ fontSize: 15, fontWeight: 600 }}>{cur.listTitle}</span>
                {cur.rows.map(([label, value, w]) => (
                  <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}><span>{label}</span><span style={{ fontWeight: 600 }}>{value}</span></div>
                    <div style={{ height: 8, borderRadius: 999, background: 'var(--gris-fond)', overflow: 'hidden' }}>
                      <div style={{ width: (ready ? w : 0) + '%', height: '100%', borderRadius: 999, background: cur.color, transition: 'width .8s cubic-bezier(.2,.8,.2,1)' }} />
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ background: cur.alertBg, borderRadius: 18, padding: 18, display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: cur.alertFg }}>{cur.alertTitle}</span>
                  <span style={{ fontSize: 17, fontWeight: 600, color: cur.alertFg }}>{cur.alert}</span>
                </div>
                <div style={{ background: 'var(--nuit)', borderRadius: 18, padding: 18, display: 'flex', flexDirection: 'column', gap: 8, flex: 1, color: '#fff' }}>
                  <span style={{ fontSize: 14, color: 'var(--sauge)' }}>Ce que PumpIT fait ici</span>
                  <span style={{ fontSize: 16, lineHeight: 1.55 }}>{cur.pitch}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .demo-grid { grid-template-columns: minmax(0,220px) minmax(0,1fr); }
        .demo-main { padding: 26px; }
        @media (max-width: 1100px) {
          .demo-grid { grid-template-columns: minmax(0,1fr); }
          .demo-main { padding: 18px; }
        }
        /* Boutons d'activité (Carburants, Lubrifiants…) : trop grands sur petit écran — 5
           pills avec icône + libellé long ("Lubrifiants") se retrouvaient sur plusieurs lignes,
           chacune disproportionnée par rapport à la largeur de l'écran. */
        @media (max-width: 600px) {
          .activity-tab { padding: 8px 14px 8px 8px !important; font-size: 14px !important; gap: 8px !important; }
          .activity-tab-dot { width: 26px !important; height: 26px !important; }
        }
      `}</style>
    </section>
  )
}
