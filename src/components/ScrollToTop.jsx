import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Remonte en haut de page à chaque changement de route (pas pour les ancres #section de la
// page d'accueil, gérées nativement par le navigateur) — sinon une navigation vers une page
// légale depuis le bas de l'accueil arriverait au milieu de la nouvelle page.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => { if (!hash) window.scrollTo(0, 0) }, [pathname, hash])
  return null
}
