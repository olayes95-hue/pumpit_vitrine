import { useState } from 'react'

const FAQS = [
  ['Qui saisit les données ?', "Le chef de piste, depuis son téléphone, en 3 moments : matin, 16 h et soir. Le pompiste saisit les compteurs, le stock et les photos ; la vendeuse, la supérette. La direction voit tout en temps réel."],
  ['Quelles alertes vais-je recevoir ?', "Versement incomplet, écart compteur et perte à la livraison : vous êtes prévenu dès qu'un chiffre ne tombe pas juste."],
  ['Comment fonctionne le suivi des versements ?', "Le chef de piste déclare chaque versement par pôle avec la photo du bordereau. PumpIT calcule ce qui devait être versé et signale aussitôt tout versement manquant ou incomplet."],
  ['Puis-je gérer plusieurs stations ?', "Oui. Un seul compte suffit pour passer d'une station à l'autre. Chaque offre s'entend par station ; pour plusieurs stations, un tarif réseau est proposé."],
  ['Quel matériel faut-il ?', "Un téléphone avec internet suffit pour la saisie. Un ordinateur est conseillé pour la direction."],
  ['Mes données sont-elles protégées ?', "Chaque rôle ne voit que ce qui le concerne, et chaque modification est tracée."],
]

export default function Faq() {
  const [open, setOpen] = useState(-1)
  return (
    <section id="faq" style={{ maxWidth: 960, margin: '0 auto', padding: '110px 28px', display: 'flex', flexDirection: 'column', gap: 28 }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px, 4.4vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.02, margin: 0 }}>Questions fréquentes</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {FAQS.map(([q, a], i) => {
          const isOpen = open === i
          return (
            <div key={q} className="faq-item" style={{ background: '#fff', borderRadius: 22, overflow: 'hidden' }}>
              <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} style={{
                width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '22px 26px',
                background: 'transparent', border: 0, cursor: 'pointer', textAlign: 'left', fontSize: 18, fontWeight: 600, color: 'var(--nuit)',
              }}>
                {q}
                <span style={{ width: 32, height: 32, borderRadius: 999, background: 'var(--nuit)', color: 'var(--vert-pump)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flex: 'none' }}>{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && <p style={{ margin: 0, padding: '0 26px 24px', fontSize: 16, lineHeight: 1.6, color: 'var(--foret)' }}>{a}</p>}
            </div>
          )
        })}
      </div>
    </section>
  )
}
