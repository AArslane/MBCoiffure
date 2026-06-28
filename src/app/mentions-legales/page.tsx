import type { Metadata } from "next";
import Link from "next/link";
import { BRAND, PHONE, PHONE_HREF, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales — Coiffeur MB 31",
  description:
    "Mentions légales du site Coiffeur MB 31, coiffeur barbier à Toulouse.",
  alternates: { canonical: "/mentions-legales" },
};

// NOTE pour l'exploitant : les informations ci-dessous reposent sur les données
// publiques (SIRET, adresse). À compléter / confirmer avant exploitation
// commerciale : nom du responsable de publication, forme juridique, capital
// social, e-mail de contact. Voir le rapport SEO pour le détail.
function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 border-b border-border py-4 sm:grid-cols-[200px_1fr]">
      <dt className="text-sm font-medium text-muted-foreground">{label}</dt>
      <dd className="text-sm">{children}</dd>
    </div>
  );
}

export default function MentionsLegales() {
  return (
    <div className="flex flex-1 flex-col bg-background text-foreground font-sans">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 w-full max-w-3xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            {BRAND.name}
          </Link>
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-16 sm:px-8 sm:py-24">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Mentions légales
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance
          dans l&apos;économie numérique (LCEN).
        </p>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">Éditeur du site</h2>
          <dl className="mt-4">
            <Row label="Dénomination">{BRAND.name}</Row>
            <Row label="Adresse">2 Chemin de Nicol, 31200 Toulouse, France</Row>
            <Row label="Téléphone">
              <a href={PHONE_HREF} className="hover:text-brand">
                {PHONE}
              </a>
            </Row>
            <Row label="SIRET">930 406 988 00012</Row>
            <Row label="Responsable de la publication">
              Le représentant légal de {BRAND.name}
            </Row>
          </dl>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">Hébergement</h2>
          <dl className="mt-4">
            <Row label="Hébergeur">Vercel Inc.</Row>
            <Row label="Adresse">
              340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
            </Row>
            <Row label="Site web">
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand"
              >
                vercel.com
              </a>
            </Row>
          </dl>
        </section>

        <section className="mt-12 space-y-4 text-sm leading-relaxed text-muted-foreground">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Propriété intellectuelle
          </h2>
          <p>
            L&apos;ensemble des contenus présents sur le site{" "}
            {SITE_URL.replace("https://", "")} (textes, visuels, mise en page)
            est protégé par le droit d&apos;auteur. Toute reproduction ou
            représentation, totale ou partielle, sans autorisation préalable est
            interdite.
          </p>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Données personnelles
          </h2>
          <p>
            Les informations transmises lors d&apos;une réservation en ligne sont
            utilisées uniquement pour la gestion du rendez-vous. Conformément au
            RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et
            de suppression de vos données en contactant le salon par téléphone.
          </p>
        </section>
      </main>
    </div>
  );
}
