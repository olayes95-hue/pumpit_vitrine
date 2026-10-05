export default function Hero() {
  return (
    <header id="top" style={{ background: 'var(--nuit)', color: '#fff', overflow: 'hidden', paddingTop: 64 }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '72px 28px 110px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))', gap: 64, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
          <span style={{ alignSelf: 'flex-start', fontSize: 13, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--nuit)', background: 'var(--citron)', padding: '7px 14px', borderRadius: 999 }}>
            Logiciel de gestion de station-service
          </span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(38px, 4.8vw, 62px)', letterSpacing: '-0.035em', lineHeight: 1.02, margin: 0, textWrap: 'balance' }}>
            Pilotez votre station, <span style={{ color: 'var(--vert-pump)' }}>où que vous soyez.</span>
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--sauge-claire)', margin: 0, maxWidth: '52ch' }}>
            Fini le point du jour sur WhatsApp ou sur papier. Ventes, compteurs, stocks, dépenses et versements sont saisis depuis le téléphone du chef de piste, et vous êtes alerté dès qu'il manque de l'argent.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#demo" className="btn-primary" style={{ background: 'var(--vert-pump)', color: 'var(--nuit)', fontWeight: 700, fontSize: 17, padding: '16px 28px', borderRadius: 999 }}>Demander une démo gratuite</a>
            <a href="#produit" className="btn-ghost" style={{ border: '2px solid var(--foret)', color: '#fff', fontWeight: 600, fontSize: 17, padding: '14px 26px', borderRadius: 999 }}>Découvrir le produit</a>
          </div>
          <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap', fontSize: 14, color: 'var(--sauge)' }}>
            {['Saisie depuis le téléphone', 'Photos-preuves', 'Alertes automatiques'].map(t => (
              <span key={t} style={{ display: 'flex', gap: 8, alignItems: 'center' }}><span style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--vert-pump)' }} />{t}</span>
            ))}
          </div>
        </div>
        <div className="hide-mobile" style={{ position: 'relative', minHeight: 520 }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '86%', height: 430 }}>
            <img src="/photos/pompiste.jpg" alt="Pompiste PumpIT en station, souriant, prêt à servir un client" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 36 }} />
          </div>
          <div style={{ position: 'absolute', left: 0, top: 70, width: 250, background: '#fff', color: 'var(--nuit)', borderRadius: 22, padding: 18, display: 'flex', flexDirection: 'column', gap: 10, boxShadow: '0 30px 60px -24px rgba(0,0,0,0.6)', animation: 'pumpFloat 6s ease-in-out infinite' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ fontSize: 14, fontWeight: 600 }}>Cuve Super</span><span style={{ fontSize: 13, fontWeight: 700, color: 'var(--vert-fonce)' }}>78 %</span></div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, letterSpacing: '-0.02em' }}>12 400 L</span>
            <div style={{ height: 12, borderRadius: 999, background: 'var(--filet)', overflow: 'hidden' }}><div style={{ width: '78%', height: '100%', borderRadius: 999, background: 'var(--vert-pump)' }} /></div>
          </div>
          <div style={{ position: 'absolute', right: 24, bottom: 0, width: 300, background: 'var(--brume)', color: 'var(--nuit)', borderRadius: 22, padding: 18, display: 'flex', flexDirection: 'column', gap: 12, boxShadow: '0 30px 60px -24px rgba(0,0,0,0.6)' }}>
            <span style={{ fontSize: 14, fontWeight: 600 }}>Chiffre d'affaires du jour</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, letterSpacing: '-0.02em' }}>2 184 500</span>
            <div style={{ display: 'flex', height: 12, borderRadius: 999, overflow: 'hidden', gap: 3 }}>
              <span style={{ flex: 44, background: 'var(--act-carburants)' }} /><span style={{ flex: 12, background: 'var(--act-lubrifiants)' }} /><span style={{ flex: 14, background: 'var(--act-gaz)' }} /><span style={{ flex: 20, background: 'var(--act-superette)' }} /><span style={{ flex: 10, background: 'var(--act-lavage)' }} />
            </div>
            <div style={{ background: 'var(--citron-fond)', borderRadius: 12, padding: '10px 12px', fontSize: 13, fontWeight: 600 }}>Cuve Gasoil à 21 %. Commandez avant jeudi.</div>
          </div>
        </div>
        <div className="hide-desktop" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ height: 240, borderRadius: 28, overflow: 'hidden' }}><img src="/photos/pompiste.jpg" alt="Pompiste PumpIT en station, souriant, prêt à servir un client" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
          <div style={{ background: '#fff', color: 'var(--nuit)', borderRadius: 20, padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontSize: 14, fontWeight: 600 }}>Cuve Super</span><span style={{ fontSize: 13, fontWeight: 700, color: 'var(--vert-fonce)' }}>78 %</span></div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26 }}>12 400 L</span>
            <div style={{ height: 10, borderRadius: 999, background: 'var(--filet)', overflow: 'hidden' }}><div style={{ width: '78%', height: '100%', borderRadius: 999, background: 'var(--vert-pump)' }} /></div>
          </div>
          <div style={{ background: 'var(--citron-fond)', color: 'var(--nuit)', borderRadius: 16, padding: '12px 14px', fontSize: 14, fontWeight: 600 }}>Cuve Gasoil à 21 %. Commandez avant jeudi.</div>
        </div>
      </div>
    </header>
  )
}
