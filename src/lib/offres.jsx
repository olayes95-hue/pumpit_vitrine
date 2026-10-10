// Offres (prix + contenu marketing) réglées dans le back-office PumpIT (Offres.jsx) et
// lues ici en lecture publique, même principe que lib/contenu.jsx — voir
// supabase/migration_v136_offres_vitrine.sql (repo pumpit-app) pour la vue
// v_formules_publiques. `offres` reste `null` si la base n'est pas joignable ou ne renvoie
// rien : Tarifs.jsx doit alors retomber sur sa liste figée (le site ne doit jamais
// dépendre de cette donnée pour fonctionner).
import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from './supabase'

const OffresContext = createContext(null)

export function OffresProvider({ children }) {
  const [offres, setOffres] = useState(null)
  useEffect(() => {
    if (!supabase) return
    supabase.from('v_formules_publiques').select('*').order('ordre')
      .then(({ data }) => { if (data?.length) setOffres(data) })
      .catch(() => {})
  }, [])
  return <OffresContext.Provider value={offres}>{children}</OffresContext.Provider>
}

export function useOffres() {
  return useContext(OffresContext)
}
