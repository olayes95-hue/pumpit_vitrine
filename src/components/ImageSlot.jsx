// Emplacement pour une vraie photo, pas encore disponible. Affiche la légende de ce qu'il faut
// photographier plutôt qu'une fausse image de stock — à remplacer par <img src="..."/> dès que
// la photo existe (voir README du projet).
export default function ImageSlot({ placeholder, radius = 24, tone = 'light', style }) {
  const dark = tone === 'dark'
  return (
    <div style={{
      width: '100%', height: '100%', borderRadius: radius,
      background: dark ? 'var(--nuit-2)' : 'var(--sauge-claire)',
      border: `1px dashed ${dark ? 'var(--sauge)' : 'var(--filet-fonce)'}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 24, textAlign: 'center',
      color: dark ? 'var(--sauge)' : 'var(--ardoise)',
      font: '500 14px/1.5 var(--font-ui)',
      ...style,
    }}>
      {placeholder}
    </div>
  )
}
