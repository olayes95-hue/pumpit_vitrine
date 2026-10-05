export default function SaisieDuJour() {
  return (
    <section style={{ background: 'var(--vert-pump)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '100px 28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 64, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22, color: 'var(--nuit)' }}>
          <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Saisie du jour</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(38px, 4.6vw, 60px)', letterSpacing: '-0.03em', lineHeight: 1, margin: 0 }}>La saisie du chef de piste, en 3 moments.</h2>
          <p style={{ fontSize: 19, lineHeight: 1.6, margin: 0, maxWidth: '44ch' }}>
            Matin : stock et compteurs. 16 h : ventes et compteurs. Soir : réceptions, dépenses et versements. Chaque index et chaque bordereau est photographié, et la direction voit tout en temps réel.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
            <div style={{ background: 'var(--nuit)', color: '#fff', borderRadius: 20, padding: 18, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: 'var(--vert-pump)' }}>Simple</span>
              <span style={{ fontSize: 15, color: 'var(--sauge-claire)' }}>On n'affiche que ce qu'il faut remplir</span>
            </div>
            <div style={{ background: 'var(--nuit)', color: '#fff', borderRadius: 20, padding: 18, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: 'var(--vert-pump)' }}>Par rôle</span>
              <span style={{ fontSize: 15, color: 'var(--sauge-claire)' }}>Chef de piste, pompiste, vendeuse, direction</span>
            </div>
          </div>
        </div>
        <div className="phone-wrap" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div className="hide-mobile phone-photo" style={{ position: 'absolute', right: 0, top: 40, width: '62%', height: 440 }}>
            <img src="/photos/pompe.jpg" alt="Ravitaillement en carburant dans une station PumpIT" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 32 }} />
          </div>
          <div className="phone-frame" style={{ position: 'relative', width: 280, background: 'var(--nuit)', borderRadius: 44, padding: 12, boxShadow: '0 40px 70px -30px rgba(11,31,23,0.7)', alignSelf: 'flex-start' }}>
            <div style={{ background: 'var(--brume)', borderRadius: 34, padding: '22px 16px', display: 'flex', flexDirection: 'column', gap: 10, minHeight: 500 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <img src="/logo/pumpit-logo-principal.png" alt="PumpIT" style={{ height: 16, width: 'auto' }} />
                <span style={{ fontSize: 12, color: 'var(--ardoise)' }}>19:05</span>
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, marginTop: 4 }}>Saisie du jour</span>
              <div style={{ display: 'flex', background: '#fff', borderRadius: 999, padding: 4 }}>
                {['Matin', '16 h', 'Soir'].map((m, i) => (
                  <span key={m} style={{ flex: 1, textAlign: 'center', fontSize: 12, fontWeight: 700, padding: '8px 0', borderRadius: 999, color: i === 2 ? '#fff' : 'var(--ardoise)', background: i === 2 ? 'var(--nuit)' : 'transparent' }}>{m}</span>
                ))}
              </div>
              <div style={{ background: '#fff', borderRadius: 14, padding: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontSize: 13, fontWeight: 700 }}>Versement en banque</span>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}><span style={{ color: 'var(--ardoise)' }}>Pôle</span><span style={{ fontWeight: 600 }}>Carburant</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}><span style={{ color: 'var(--ardoise)' }}>Montant</span><span style={{ fontWeight: 600 }}>957 500</span></div>
                <div style={{ border: '2px dashed var(--sauge)', borderRadius: 10, padding: 10, textAlign: 'center', fontSize: 12, fontWeight: 600, color: 'var(--vert-fonce)', background: 'var(--vert-fond)' }}>Photo du bordereau ajoutée</div>
              </div>
              <div style={{ background: '#fff', borderRadius: 14, padding: 12, display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontSize: 13, fontWeight: 700 }}>Dépense · Carburant groupe</span>
                <span style={{ fontSize: 12, color: 'var(--vert-fonce)', fontWeight: 600 }}>Justificatif coché</span>
              </div>
              <div style={{ background: 'var(--nuit)', borderRadius: 14, padding: 12, display: 'flex', flexDirection: 'column', gap: 6, color: '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}><span style={{ color: 'var(--sauge)' }}>À verser</span><span style={{ fontWeight: 600 }}>962 000</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}><span style={{ color: 'var(--sauge)' }}>Versé</span><span style={{ fontWeight: 600 }}>957 500</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}><span style={{ color: 'var(--sauge)' }}>Écart</span><span style={{ fontWeight: 700, color: '#FF8A7E' }}>−4 500</span></div>
              </div>
              <span style={{ textAlign: 'center', background: 'var(--vert-pump)', fontWeight: 700, fontSize: 14, padding: 11, borderRadius: 999 }}>Envoyer (Soir)</span>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .phone-wrap { min-height: 560px; }
        .phone-frame { margin-right: 30%; }
        @media (max-width: 1100px) {
          .phone-wrap { min-height: 0; }
          .phone-frame { margin-right: 0; }
          .phone-photo { display: none; }
        }
      `}</style>
    </section>
  )
}
