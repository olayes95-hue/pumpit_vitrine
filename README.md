# PumpIT — Site vitrine

Site public (pumpits.fr), séparé de l'application PumpIT Pro (pro.pumpits.fr / repo `pumpit-app`).
Construit à partir de la maquette `PumpIT Site vitrine v3.dc.html`, avec la charte graphique réelle
(`PumpIT Charte graphique.dc.html` — vert-pump `#00C26A`, nuit `#0B1F17`, polices Outfit/Rubik).

## Lancer en local

```bash
npm install
npm run dev
```

## Formulaire de démo → Brevo

`api/demo.js` (fonction serverless Vercel) envoie un email via Brevo à chaque soumission —
même service que `pumpit-app` (voir `supabase/functions/send-notification` dans ce repo-là),
appelé ici directement en REST puisque ce projet n'a pas de backend Supabase propre.

**À faire une seule fois**, dans le projet Vercel de ce site (Settings → Environment Variables) :

| Variable | Valeur |
|---|---|
| `BREVO_API_KEY` | Une clé API Brevo (app.brevo.com → Settings → SMTP & API → API Keys). Peut être la même clé que celle de `pumpit-app`, ou une clé dédiée — au choix. |
| `BREVO_SENDER_EMAIL` | Adresse expéditeur **vérifiée** dans Brevo (ex. `notifications@pumpit.app`, déjà vérifiée côté `pumpit-app`). |
| `BREVO_SENDER_NOM` | Nom affiché comme expéditeur, ex. `PumpIT — Site vitrine`. |
| `DEMO_RECIPIENT_EMAIL` | L'adresse qui doit recevoir chaque demande de démo. |

Ne fonctionne pas avec `npm run dev` seul (les routes `/api` sont servies par Vercel, pas par
Vite) — pour tester en local, utiliser `vercel dev` (CLI Vercel) après avoir renseigné ces
variables dans `.env.local`, ou tester directement sur un déploiement Preview une fois poussé.

## Avant de publier — ce qui reste à faire

Ce ne sont pas des bugs : tout fonctionne et s'affiche correctement, mais ces points doivent
être réglés avant d'ouvrir le site au public.

1. **Photos** — hero, "Saisie du jour" et "Démarrer" utilisent déjà de vraies photos
   (`public/photos/pompiste.jpg`, `public/photos/pompe.jpg` — cette dernière réutilisée deux fois,
   faute d'une photo dédiée pour chaque emplacement). Il reste les 2 portraits de témoignage
   (`Avis.jsx`) en placeholder (composant `ImageSlot`). Remplacer `<ImageSlot .../>` par
   `<img src="..." />` dès que ces photos existent.

2. **Contenu à vérifier avant publication** (marqué `TODO` dans le code) :
   - `src/pages/MentionsLegales.jsx` et `src/pages/Confidentialite.jsx` — structure juridique
     standard, mais tous les champs `[à compléter]` (raison sociale, RCCM/SIRET, adresse, email)
     doivent être remplis avec les vraies informations.
   - `src/components/Footer.jsx` — numéro de téléphone encore en placeholder.
   - `src/components/sections/Avis.jsx` — chiffres ("20 stations", "400+ jours de points suivis")
     confirmés réels, rien à changer. Les 2 citations clients restent à recueillir : remplacer le
     texte "Citation ... à recueillir" et "Prénom Nom" par la vraie citation une fois obtenue.

## Déploiement

Projet séparé de `pumpit-app` (pas de nameservers/projet Vercel partagé). Pour publier sur
`pumpits.fr` : créer un nouveau projet Vercel pointant sur ce repo, puis déplacer les domaines
`pumpits.fr` / `www.pumpits.fr` depuis le projet `pumpit-app` vers ce nouveau projet (`pro.pumpits.fr`
reste sur `pumpit-app`). `vercel.json` est déjà configuré pour le rewrite SPA.
