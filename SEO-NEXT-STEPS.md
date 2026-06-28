# SEO — Next Steps

Backlog après l'implémentation de l'audit SEO du **2026-06-28**.
Tout ce qui suit la première section est **encore à faire**. Le reste de l'audit
(JSON-LD, robots/sitemap, canonical, OG, hero LCP, FAQ, llms.txt, headers,
mentions légales, retrait du "site de démonstration") est **fait** dans le code —
build + lint OK, mais **pas encore commité ni déployé**.

---

## 0. Déployer ce qui est déjà fait
- [ ] Commit + push (`AArslane/MBCoiffure`), puis laisser Vercel déployer.
- [ ] Après déploiement : tester l'URL avec le [Rich Results Test](https://search.google.com/test/rich-results) (doit voir HairSalon + FAQPage) et vérifier que `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/opengraph-image`, `/mentions-legales` répondent en 200.

## 1. Décisions proprio — tranchées le 2026-06-28
- ✅ **Téléphone = 07 69 63 23 77** (le 06 24 29 58 40 des registres/Planity est obsolète, ne pas l'utiliser).
- ⏸️ **Nom du barbier / bio (item 18)** : NE PAS publier pour l'instant. Quand prêt → ajouter prénom + 2 phrases dans une section "L'équipe" (meilleur gain E-E-A-T, le moins cher). Donnée registre publique : Mohsen Obadi.
- ⏸️ **Mentions légales** : on attend. À compléter dans `src/app/mentions-legales/page.tsx` : directeur de publication (nom), e-mail de contact, forme juridique + capital social. (Déjà remplis : dénomination, adresse, SIRET 930 406 988 00012, hébergeur Vercel.)

## 2. À faire par le proprio (hors code) — fort impact
- [ ] **Revendiquer le Google Business Profile** (google.com/business). C'est le **#1 facteur local**. Débloque : étoiles dans Maps, panneau de connaissance, éligibilité AI Overview, et le vrai lien d'avis.
  - [ ] Une fois fait, récupérer le `query_place_id` et remplacer `mapsUrl` dans `src/lib/site.ts` (actuellement une recherche par nom).
  - [ ] Remplacer le lien "Laisser un avis Google" par l'URL directe d'avis (`...&placeid=...` ou lien court GBP).
- [ ] **Vraies photos** (remplacent les placeholders picsum) :
  - `src/lib/site.ts` → `LOCATIONS[0].image`, `GALLERY[]`, et l'`imageUrl` du hero dans `src/app/page.tsx`.
  - Puis **retirer `picsum.photos`** de `remotePatterns` dans `next.config.ts`.
  - Bonus : une fois de vraies photos en place, l'image hero devient un vrai LCP optimisé (déjà câblé en `next/image priority`).
- [ ] **Annuaires NAP-cohérents** (nom exact "Coiffeur MB 31", tél 07 69 63 23 77) : vérifier/compléter PagesJaunes, puis Yelp France, Booksy (barbier), Treatwell, Tripadvisor.
- [ ] **Planity** : la fiche existe mais **n'est pas encore réservable en ligne**. L'activer → 2ᵉ listing organique + citation DA élevée. Si activée, décider si on bascule le CTA "Réserver" de Cal.com vers Planity.

## 3. Tech / contenu — quand on y revient
- [ ] **Search Console** : soumettre le sitemap après déploiement, suivre l'indexation.
- [ ] **Domaine custom** `mb-coiffure.fr` : achète l'autorité de domaine + cohérence NAP. Après bascule, mettre à jour `SITE_URL` dans `src/lib/site.ts` (un seul endroit — propage à metadata, robots, sitemap, JSON-LD, OG).
- [ ] Section "L'équipe" / bio (lié à l'item 18 ci-dessus).
- [ ] Embed Maps (iframe) avec le Place ID confirmé, en complément du lien itinéraire.

---

### Repères dans le code
- Source unique de vérité : `src/lib/site.ts` (URL, géo, horaires, prix, FAQ, quartier).
- JSON-LD : `src/components/structured-data.tsx`.
- OG image : `src/app/opengraph-image.tsx`.
- Métadonnées : `src/app/layout.tsx`.
