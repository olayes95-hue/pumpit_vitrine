import LegalLayout from '../components/LegalLayout.jsx'
import { useContenu } from '../lib/contenu.jsx'

const Todo = () => <span className="todo">à compléter</span>

export default function Confidentialite() {
  const c = useContenu()
  return (
    <LegalLayout title="Politique de confidentialité" updated="[à compléter à la publication]">
      <p style={{ margin: 0 }}>
        <span className="todo">À compléter</span> — structure standard à valider (et si besoin faire relire) avant publication, notamment les champs identité/contact.
      </p>

      <section>
        <h2>Responsable du traitement</h2>
        <p style={{ margin: 0 }}>
          {c?.raison_sociale || <Todo />}, {c?.siege_social || <Todo />} — contact : {c?.email_contact || <Todo />}.
        </p>
      </section>

      <section>
        <h2>Données que nous collectons</h2>
        <ul>
          <li><strong>Sur ce site vitrine</strong> : les informations saisies dans le formulaire de demande de démo (nom, nom de la station, téléphone, nombre de stations).</li>
          <li><strong>Dans l'application PumpIT Pro</strong> : les informations de compte (nom, email, rôle), et les données métier saisies par les utilisateurs pour gérer leur station (ventes, stocks, dépenses, versements, photos-preuves).</li>
        </ul>
      </section>

      <section>
        <h2>Pourquoi nous les utilisons</h2>
        <ul>
          <li>Répondre aux demandes de démonstration et de contact.</li>
          <li>Fournir le service PumpIT Pro aux stations clientes (c'est l'objet même du produit : suivre les ventes, stocks et finances d'une station).</li>
          <li>Sécuriser les comptes et prévenir les usages frauduleux.</li>
        </ul>
      </section>

      <section>
        <h2>Durée de conservation</h2>
        <p style={{ margin: 0 }}>
          Les données d'un compte PumpIT Pro sont conservées pendant la durée de la relation contractuelle avec le client, puis archivées ou supprimées selon les obligations légales applicables. Les demandes de démo non suivies d'effet sont conservées {c?.duree_conservation_demo || <Todo />}.
        </p>
      </section>

      <section>
        <h2>Qui a accès à ces données</h2>
        <p style={{ margin: 0 }}>
          Les données sont hébergées chez <strong>Supabase</strong> (base de données et stockage des photos) et le site/l'application sont servis par <strong>Vercel</strong>. Au sein d'une même organisation cliente, chaque utilisateur ne voit que les données autorisées par son rôle (gérant, pompiste, vendeuse, administrateur). Les données d'un client ne sont jamais accessibles à un autre client de PumpIT.
        </p>
      </section>

      <section>
        <h2>Vos droits</h2>
        <p style={{ margin: 0 }}>
          Vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition concernant vos données personnelles. Pour l'exercer, contactez-nous à {c?.email_contact || <Todo />}.
        </p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p style={{ margin: 0 }}>
          Ce site vitrine n'utilise pas de cookie de mesure d'audience ni de publicité à ce jour. L'application PumpIT Pro utilise un cookie technique strictement nécessaire à la connexion (session).
        </p>
      </section>
    </LegalLayout>
  )
}
