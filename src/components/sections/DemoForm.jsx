import { useState } from 'react'

const inputStyle = {
  fontFamily: 'var(--font-ui)', fontSize: 16, padding: '13px 18px', borderRadius: 999,
  border: '2px solid var(--filet)', background: 'var(--brume)', color: 'var(--nuit)', outlineColor: 'var(--vert-pump)',
}

export default function DemoForm() {
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')

  async function submit(e) {
    e.preventDefault()
    setErr('')
    const data = Object.fromEntries(new FormData(e.target))
    setBusy(true)
    try {
      // TODO : pas encore relié à un vrai service d'envoi (email/CRM) — voir README du projet
      // pour brancher ça avant l'ouverture publique du site, sinon les demandes de démo ne vont
      // nulle part. Le formulaire fonctionne déjà visuellement (état "envoyé" ci-dessous).
      await new Promise(r => setTimeout(r, 400))
      console.info('Demande de démo (à envoyer réellement) :', data)
      setSent(true)
    } catch {
      setErr("L'envoi a échoué. Réessaie, ou contacte-nous directement.")
    } finally {
      setBusy(false)
    }
  }

  return (
    <section id="demo" style={{ background: 'var(--nuit)', color: '#fff' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '110px 28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 64, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <img src="/logo/pumpit-logo-inverse.png" alt="PumpIT" style={{ height: 'clamp(48px, 9vw, 96px)', width: 'auto', alignSelf: 'flex-start' }} />
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px, 3.6vw, 44px)', letterSpacing: '-0.02em', lineHeight: 1.1, margin: 0 }}>Voyez PumpIT sur votre propre station.</h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--sauge-claire)', margin: 0, maxWidth: '40ch' }}>Démo gratuite de 30 minutes, en station ou en visio. Nous vous rappelons sous 24 h.</p>
        </div>
        <div style={{ background: '#fff', color: 'var(--nuit)', borderRadius: 32, padding: 32 }}>
          {sent ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start', padding: '20px 0' }}>
              <span style={{ width: 56, height: 56, borderRadius: 999, background: 'var(--vert-fond)', color: 'var(--vert-fonce)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 700 }}>✓</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28 }}>Demande envoyée.</span>
              <span style={{ fontSize: 16, color: 'var(--foret)' }}>Merci {name}, nous vous rappelons sous 24 h.</span>
              <button onClick={() => { setSent(false); setName('') }} style={{ marginTop: 8, background: 'transparent', border: '2px solid var(--nuit)', borderRadius: 999, padding: '10px 18px', fontWeight: 600, fontSize: 15, cursor: 'pointer', color: 'var(--nuit)' }} className="btn-outline-dark">
                Nouvelle demande
              </button>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, fontWeight: 600 }}>
                Nom et prénom
                <input name="name" required value={name} onChange={e => setName(e.target.value)} style={inputStyle} />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, fontWeight: 600 }}>
                Nom de la station
                <input name="station" required style={inputStyle} />
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 14 }}>
                <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, fontWeight: 600 }}>
                  Téléphone
                  <input name="tel" type="tel" required style={inputStyle} />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, fontWeight: 600 }}>
                  Nombre de stations
                  <input name="nb" type="number" min="1" style={inputStyle} />
                </label>
              </div>
              {err && <span style={{ color: 'var(--rouge-texte)', fontSize: 14, fontWeight: 600 }}>{err}</span>}
              <button type="submit" disabled={busy} className="btn-primary" style={{ marginTop: 6, background: 'var(--vert-pump)', color: 'var(--nuit)', border: 0, borderRadius: 999, padding: '16px 20px', fontWeight: 700, fontSize: 16, cursor: busy ? 'default' : 'pointer', opacity: busy ? 0.7 : 1 }}>
                {busy ? 'Envoi…' : 'Demander ma démo'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
