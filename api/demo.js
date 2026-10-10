// Fonction serverless Vercel : reçoit une demande de démo du formulaire (DemoForm.jsx) et
// l'envoie par email via Brevo — même service que pumpit-app (voir
// supabase/functions/send-notification dans ce repo-là), appelé ici directement en REST
// puisque ce projet est volontairement séparé, sans backend Supabase propre.
//
// Configuration requise (Vercel → Settings → Environment Variables, sur CE projet) :
//   BREVO_API_KEY       clé API Brevo (Transactional → API Keys sur app.brevo.com)
//   BREVO_SENDER_EMAIL   adresse expéditeur vérifiée dans Brevo (ex. notifications@pumpit.app)
//   BREVO_SENDER_NOM     nom affiché comme expéditeur (ex. "PumpIT")
//   DEMO_RECIPIENT_EMAIL adresse qui doit recevoir les demandes de démo

const LOGO_URL = 'https://pumpits.fr/logo/pumpit-logo-principal.png'

function enveloppeEmail(corpsHtml) {
  return `
<div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#0B1F17;line-height:1.5">
  <div style="margin-bottom:24px"><img src="${LOGO_URL}" alt="PumpIT" style="height:32px;display:block"></div>
  <div style="margin:0 0 20px">${corpsHtml}</div>
  <hr style="border:none;border-top:1px solid #DCE5E0;margin:24px 0">
  <p style="font-size:12px;color:#6b7a72;margin:0">Demande envoyée depuis le formulaire de démo de pumpits.fr.</p>
</div>`.trim()
}

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

export default async function handler(req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ error: 'Méthode non autorisée' }) }

  const { name, email, station, tel, nb } = req.body || {}
  if (!name || !email || !station || !tel) return res.status(400).json({ error: 'Nom, e-mail, station et téléphone sont requis.' })

  const apiKey = process.env.BREVO_API_KEY
  const recipient = process.env.DEMO_RECIPIENT_EMAIL
  if (!apiKey || !recipient) {
    console.error('BREVO_API_KEY ou DEMO_RECIPIENT_EMAIL manquant dans les variables d\'environnement Vercel.')
    return res.status(500).json({ error: "Configuration serveur incomplète — contactez l'équipe PumpIT." })
  }

  const corps = `
    <p style="margin:0 0 16px"><strong>Nouvelle demande de démo</strong></p>
    <table style="border-collapse:collapse;width:100%">
      <tr><td style="padding:4px 12px 4px 0;color:#4A5E55">Nom</td><td style="padding:4px 0;font-weight:600">${esc(name)}</td></tr>
      ${email ? `<tr><td style="padding:4px 12px 4px 0;color:#4A5E55">E-mail</td><td style="padding:4px 0;font-weight:600">${esc(email)}</td></tr>` : ''}
      <tr><td style="padding:4px 12px 4px 0;color:#4A5E55">Station</td><td style="padding:4px 0;font-weight:600">${esc(station)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#4A5E55">Téléphone</td><td style="padding:4px 0;font-weight:600">${esc(tel)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#4A5E55">Nombre de stations</td><td style="padding:4px 0;font-weight:600">${esc(nb || '1')}</td></tr>
    </table>`

  try {
    const resp = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': apiKey, 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({
        sender: { email: process.env.BREVO_SENDER_EMAIL || 'notifications@pumpit.app', name: process.env.BREVO_SENDER_NOM || 'PumpIT — Site vitrine' },
        to: [{ email: recipient }],
        replyTo: { email: email || recipient },
        subject: `Demande de démo — ${name} (${station})`,
        htmlContent: enveloppeEmail(corps),
      }),
    })
    const body = await resp.json().catch(() => ({}))
    if (!resp.ok) { console.error('Brevo error', body); return res.status(502).json({ error: "L'envoi a échoué côté fournisseur d'email." }) }
    return res.status(200).json({ ok: true })
  } catch (e) {
    console.error(e)
    return res.status(500).json({ error: 'Erreur réseau lors de l\'envoi.' })
  }
}
