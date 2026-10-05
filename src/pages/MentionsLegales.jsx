import LegalLayout from '../components/LegalLayout.jsx'

export default function MentionsLegales() {
  return (
    <LegalLayout title="Mentions légales" updated="[à compléter à la publication]">
      <p style={{ margin: 0 }}>
        <span className="todo">À compléter</span> — cette page est une structure standard, pas encore valide juridiquement : les champs ci-dessous doivent être remplis avec les informations officielles avant toute publication du site.
      </p>

      <section>
        <h2>Éditeur du site</h2>
        <p style={{ margin: 0 }}>
          Raison sociale : <span className="todo">à compléter</span><br />
          Forme juridique : <span className="todo">à compléter</span><br />
          Capital social : <span className="todo">à compléter</span><br />
          Siège social : <span className="todo">à compléter</span><br />
          Numéro d'immatriculation (RCCM / SIRET) : <span className="todo">à compléter</span><br />
          Numéro de TVA intracommunautaire (le cas échéant) : <span className="todo">à compléter</span><br />
          Directeur de la publication : <span className="todo">à compléter</span><br />
          Email : <span className="todo">à compléter</span><br />
          Téléphone : <span className="todo">à compléter</span>
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
          L'ensemble des éléments de ce site (textes, logos, charte graphique, éléments visuels) est la propriété de <span className="todo">[raison sociale]</span>, sauf mention contraire. Toute reproduction ou représentation, totale ou partielle, sans autorisation préalable, est interdite.
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
          Pour toute question relative à ce site ou à ces mentions légales : <span className="todo">email à compléter</span>.
        </p>
      </section>
    </LegalLayout>
  )
}
