const STATS = [
  ['En service', 'chaque jour, dans des stations au Bénin'],
  ['Temps réel', 'stocks et ventes à la minute'],
  ['Photos-preuves', 'compteurs et bordereaux'],
  ['Multi-stations', 'un compte pour tout le réseau'],
]

export default function StatsBar() {
  return (
    <section style={{ background: 'var(--vert-pump)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '30px 28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
        {STATS.map(([title, sub]) => (
          <div key={title} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 34, letterSpacing: '-0.02em', color: 'var(--nuit)' }}>{title}</span>
            <span style={{ fontSize: 15, fontWeight: 500, color: 'var(--nuit)' }}>{sub}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
