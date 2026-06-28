import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { Services } from "@/components/services";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/ui/hero-section-4";
import {
  BRAND,
  GALLERY,
  LOCATIONS,
  PHONE,
  PHONE_HREF,
  TESTIMONIALS,
} from "@/lib/site";

function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden className={className} fill="currentColor">
      <path d="M10 1.5l2.47 5.27 5.78.62-4.32 3.9 1.2 5.71L10 14.9l-5.13 3.0 1.2-5.71-4.32-3.9 5.78-.62L10 1.5z" />
    </svg>
  );
}

function Pin({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 21s7-5.7 7-11a7 7 0 10-14 0c0 5.3 7 11 7 11z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const totalReviews = LOCATIONS.reduce((n, l) => n + l.reviews, 0);

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background text-foreground font-sans">
      {/* Header */}
      <SiteHeader />

      <main id="top" className="flex flex-1 flex-col">
        {/* Hero */}
        <HeroSection
          title="La coupe et la barbe, sans rendez-vous."
          subtitle="Deux salons à Toulouse, ouverts tous les jours. Dégradés nets, barbe au cordeau, finitions soignées — par des barbiers qui aiment leur métier."
          primaryButtonText={`Réserver au ${PHONE}`}
          primaryButtonHref={PHONE_HREF}
          secondaryButtonText="Voir les salons"
          secondaryButtonHref="#salons"
          imageUrl="https://picsum.photos/seed/am-mb-hero/2000/1300?grayscale"
        />

        {/* Stats strip */}
        <section className="border-y border-border bg-secondary/40">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-2 divide-x divide-border px-5 sm:px-8 md:grid-cols-4">
            {[
              { k: "2", v: "salons à Toulouse" },
              { k: "7j/7", v: "ouverts tous les jours" },
              { k: `${totalReviews}`, v: "avis Google" },
              { k: "Sans RDV", v: "passez quand vous voulez" },
            ].map((s, i) => (
              <div key={i} className="px-4 py-8 text-center">
                <div className="text-2xl font-semibold tracking-tight sm:text-3xl">{s.k}</div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Salons */}
        <section id="salons" className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">Nos salons</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Deux adresses, le même soin du détail.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {LOCATIONS.map((loc, i) => (
              <Reveal key={loc.id} delay={i * 100}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={loc.image}
                      alt={`Salon ${loc.name} à Toulouse`}
                      fill
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-semibold tracking-tight">{loc.name}</h3>
                      <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium">
                        <Star className="size-3 text-brand" />
                        {loc.rating.toLocaleString("fr-FR")}
                        <span className="text-muted-foreground">({loc.reviews})</span>
                      </span>
                    </div>

                    <div className="mt-5 flex items-start gap-2.5 text-sm">
                      <Pin className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                      <span>
                        {loc.street}
                        <br />
                        {loc.city}
                      </span>
                    </div>

                    <div className="mt-4 flex items-baseline justify-between border-t border-border pt-4 text-sm">
                      <span className="text-muted-foreground">{loc.hoursNote}</span>
                      <span className="font-medium">{loc.hours}</span>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3 pt-1">
                      <a
                        href={PHONE_HREF}
                        className="inline-flex h-10 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-transform active:scale-[0.98]"
                      >
                        Réserver
                      </a>
                      <a
                        href={loc.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 items-center gap-1.5 rounded-md border border-border px-4 text-sm font-medium transition-colors hover:bg-secondary"
                      >
                        Itinéraire
                        <ArrowUpRight className="size-4" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Services */}
        <Services />

        {/* Avis */}
        <section id="avis" className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">Avis clients</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Ils ressortent satisfaits.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.author} delay={i * 80}>
                <figure className="flex h-full flex-col rounded-xl border border-border bg-card p-7">
                  <div className="flex items-center gap-1 text-brand">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} className="size-4" />
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 font-serif text-xl leading-relaxed">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center justify-between border-t border-border pt-4 text-sm">
                    <span className="font-medium">{t.author}</span>
                    <span className="text-muted-foreground">{t.salon}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Galerie */}
        <section className="mx-auto w-full max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32">
          <Reveal>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {GALLERY.map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border"
                >
                  <Image
                    src={src}
                    alt={`Réalisation ${i + 1} — coupe et barbe`}
                    fill
                    sizes="(min-width: 640px) 22vw, 45vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* CTA band */}
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-8 px-5 py-20 sm:px-8 sm:py-24 lg:flex-row lg:items-center lg:justify-between">
            <Reveal>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Pas besoin de rendez-vous.
                <br />
                <span className="font-serif italic font-normal opacity-80">Passez nous voir.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <a
                href={PHONE_HREF}
                className="inline-flex h-12 items-center rounded-md bg-background px-6 text-sm font-medium text-foreground transition-transform active:scale-[0.98]"
              >
                Appeler le {PHONE}
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t border-border">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1fr_auto]">
          <div>
            <div className="text-lg font-semibold tracking-tight">{BRAND.name}</div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Coiffeur barbier à Toulouse. Deux salons, ouverts tous les jours,
              sans rendez-vous.
            </p>
            <a href={PHONE_HREF} className="mt-4 inline-block text-sm font-medium hover:text-brand">
              {PHONE}
            </a>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {LOCATIONS.map((loc) => (
              <div key={loc.id} className="text-sm">
                <div className="font-medium">{loc.name}</div>
                <p className="mt-2 text-muted-foreground">
                  {loc.street}
                  <br />
                  {loc.city}
                </p>
                <p className="mt-2 text-muted-foreground">{loc.hoursNote}</p>
                <p className="text-muted-foreground">{loc.hours}</p>
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 font-medium hover:text-brand"
                >
                  Itinéraire
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-8">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} {BRAND.name} — Toulouse. Site de démonstration.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
