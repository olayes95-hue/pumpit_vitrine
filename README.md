# PumpIT — Site vitrine

Site public (pumpits.fr), séparé de l'application PumpIT Pro (pro.pumpits.fr / repo `pumpit-app`).
Construit à partir de la maquette `PumpIT Site vitrine v3.dc.html`, avec la charte graphique réelle
(`PumpIT Charte graphique.dc.html` — vert-pump `#00C26A`, nuit `#0B1F17`, polices Outfit/Rubik).

## Lancer en local

```bash
npm install
npm run dev
```

## Avant de publier — ce qui reste à faire

Ce ne sont pas des bugs : tout fonctionne et s'affiche correctement, mais trois choses listées
ci-dessous doivent être réglées avant d'ouvrir le site au public.

1. **Formulaire de démo non branché** (`src/components/sections/DemoForm.jsx`) — le formulaire
   fonctionne visuellement (état "envoyé") mais n'envoie nulle part pour l'instant. Il faut le
   relier à un vrai service (email via Brevo — déjà utilisé côté `pumpit-app` — ou un CRM) sinon
   les demandes de démo se perdent silencieusement.

2. **Photos manquantes** — 5 emplacements affichent un encadré avec la légende de la photo
   attendue plutôt qu'une vraie image (composant `ImageSlot`) : photo hero, photo "saisie sur le
   terrain", photo formation d'équipe, et 2 photos de témoignage. Remplacer `<ImageSlot .../>`
   par `<img src="..." />` au fur et à mesure que les photos arrivent.

3. **Contenu à vérifier avant publication** (marqué `TODO` dans le code) :
   - `src/pages/MentionsLegales.jsx` et `src/pages/Confidentialite.jsx` — structure juridique
     standard, mais tous les champs `[à compléter]` (raison sociale, RCCM/SIRET, adresse, email)
     doivent être remplis avec les vraies informations.
   - `src/components/Footer.jsx` — numéro de téléphone encore en placeholder.
   - `src/components/sections/Avis.jsx` — les deux citations clients et les chiffres "20 stations"
     / "400+ jours de points suivis" : à confirmer que ce sont de vrais chiffres avant publication,
     ou à ajuster.

## Déploiement

Projet séparé de `pumpit-app` (pas de nameservers/projet Vercel partagé). Pour publier sur
`pumpits.fr` : créer un nouveau projet Vercel pointant sur ce repo, puis déplacer les domaines
`pumpits.fr` / `www.pumpits.fr` depuis le projet `pumpit-app` vers ce nouveau projet (`pro.pumpits.fr`
reste sur `pumpit-app`). `vercel.json` est déjà configuré pour le rewrite SPA.
