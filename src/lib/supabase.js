// Client Supabase en LECTURE PUBLIQUE uniquement (clé anon) — ce site n'a pas de compte/auth,
// il consomme juste le contenu public de la table vitrine_contenu (voir supabase/migration_v133
// dans le repo pumpit-app) pour afficher mentions légales, contact et photos modifiables depuis
// le backoffice, sans redéployer. Même projet Supabase que pumpit-app (une seule base à gérer).
import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = url && key ? createClient(url, key) : null

export function vitrinePhotoUrl(path) {
  if (!path || !supabase) return null
  return supabase.storage.from('vitrine').getPublicUrl(path).data.publicUrl
}
