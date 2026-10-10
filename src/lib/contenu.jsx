// Contenu public du site, modifiable depuis le backoffice PumpIT (Reglages.jsx) sans
// redéploiement — voir src/lib/supabase.js. Chargé UNE fois à la racine (App.jsx), exposé via
// contexte. `c` reste null pendant le chargement ET si la base n'est pas joignable : chaque
// consommateur doit prévoir un repli (texte "à compléter" déjà affiché, ou photo statique déjà
// commitée) — le site ne doit jamais dépendre de cette donnée pour fonctionner.
import { createContext, useContext, useEffect, useState } from 'react'
import { supabase, vitrinePhotoUrl } from './supabase'

const ContenuContext = createContext(null)

export function ContenuProvider({ children }) {
  const [c, setC] = useState(null)
  useEffect(() => {
    if (!supabase) return
    supabase.from('vitrine_contenu').select('*').eq('id', 1).maybeSingle()
      .then(({ data }) => setC(data || {}))
      .catch(() => {})
  }, [])
  return <ContenuContext.Provider value={c}>{children}</ContenuContext.Provider>
}

export function useContenu() {
  return useContext(ContenuContext)
}

// Photo éditable : URL publique Storage si présente, sinon le fichier statique déjà commité.
export function photoUrl(path, fallback) {
  return vitrinePhotoUrl(path) || fallback
}
