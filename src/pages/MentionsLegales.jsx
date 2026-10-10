import LegalLayout from '../components/LegalLayout.jsx'
import { useContenu } from '../lib/contenu.jsx'

const Todo = () => <span className="todo">à compléter</span>

export default function MentionsLegales() {
  const c = useContenu()
  return (
    <LegalLayout title="Mentions légales" updated="[à compléter à la publication]">
      <p style={{ margin: 0 }}>
        <span className="todo">À compléter</span> — cette page est une structure standard, pas encore valide juridiquement : les champs ci-dessous doivent être remplis avec les informations officielles avant toute publication du site.
      </p>

      <section>
        <h2>Éditeur du site</h2>
        <p style={{ margin: 0 }}>
          Raison sociale : {c?.raison_sociale || <Todo />}<br />
          Forme juridique : {c?.forme_juridique || <Todo />}<br />
          Capital social : {c?.capital_social || <Todo />}<br />
          Siège social : {c?.siege_social || <Todo />}<br />
          Numéro d'immatriculation (RCCM / SIRET) : {c?.rccm_siret || <Todo />}<br />
          Numéro de TVA intracommunautaire (le cas échéant) : {c?.tva_intracom || <Todo />}<br />
          Directeur de la publication : {c?.directeur_publication || <Todo />}<br />
          Email : {c?.email_contact || <Todo />}<br />
          Téléphone : {c?.telephone_contact || <Todo />}
        </p>
      </section>

      <section>
        <h2>Hébergement</h2>
        <p style={{ margin: 0 }}>
          Ce site est hébergé par <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis — <a href="https://vercel.com">vercel.com</a>.
          <br />
          L'application PumpIT Pro et ses données sont hébergées par <strong>Supabase</strong> (infrastructure Supabase Inc.) — <a href="https://supabase.com">supabase.com</a>.
        </p>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p style={{ margin: 0 }}>
          L'ensemble des éléments de ce site (textes, logos, charte graphique, éléments visuels) est la propriété de {c?.raison_sociale || <Todo />}, sauf mention contraire. Toute reproduction ou représentation, totale ou partielle, sans autorisation préalable, est interdite.
        </p>
      </section>

      <section>
        <h2>Données personnelles</h2>
        <p style={{ margin: 0 }}>
          Le traitement des données personnelles collectées sur ce site (formulaire de demande de démo) et dans l'application PumpIT Pro est décrit dans notre <a href="/confidentialite">politique de confidentialité</a>.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p style={{ margin: 0 }}>
          Pour toute question relative à ce site ou à ces mentions légales : {c?.email_contact || <Todo />}.
        </p>
      </section>
    </LegalLayout>
  )
}
