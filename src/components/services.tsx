'use client';

import { motion } from 'framer-motion';
import { Plus, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BorderTrail } from '@/components/ui/border-trail';
import { cn } from '@/lib/utils';
import { PHONE_HREF, SERVICES } from '@/lib/site';

// Prestations section — inspired by the single-pricing-card layout (framed block,
// "+" corners, quadrille background, animated BorderTrail on the featured item,
// badges, shield trust line). Adapted for the barbershop: no prices.
export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-y border-border bg-secondary/40 py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-6xl space-y-12 px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl space-y-5 text-center"
        >
          <div className="flex justify-center">
            <div className="rounded-lg border border-border px-4 py-1 font-mono text-xs uppercase tracking-[0.18em] text-brand">
              Prestations
            </div>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Ce qu&apos;on fait, on le fait bien.
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Coupe, barbe, finitions — le même savoir-faire dans nos deux salons.
            Sans rendez-vous, paiement en salon.
          </p>
        </motion.div>

        <div className="relative">
          {/* Quadrille background */}
          <div
            className={cn(
              'pointer-events-none absolute inset-0 -z-10 size-full',
              'bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)]',
              'bg-[size:32px_32px]',
              '[mask-image:radial-gradient(ellipse_at_center,var(--background)_10%,transparent)]',
            )}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mx-auto w-full max-w-4xl space-y-4"
          >
            <div className="relative grid border border-border bg-background md:grid-cols-3">
              <Plus className="absolute -top-3 -left-3 size-6 text-foreground" />
              <Plus className="absolute -top-3 -right-3 size-6 text-foreground" />
              <Plus className="absolute -bottom-3 -left-3 size-6 text-foreground" />
              <Plus className="absolute -right-3 -bottom-3 size-6 text-foreground" />

              {SERVICES.map((service, i) => {
                const featured = i === 0;
                return (
                  <div
                    key={service.title}
                    className={cn(
                      'relative flex flex-col p-6',
                      i > 0 && 'border-t border-border md:border-t-0 md:border-l',
                    )}
                  >
                    {featured && (
                      <BorderTrail
                        size={80}
                        className="bg-brand"
                        style={{
                          boxShadow:
                            '0 0 40px 14px color-mix(in oklch, var(--brand), transparent 45%)',
                        }}
                      />
                    )}

                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-sm text-muted-foreground">
                        0{i + 1}
                      </span>
                      {featured ? (
                        <Badge>Le + demandé</Badge>
                      ) : i === 2 ? (
                        <Badge variant="secondary">Étudiants</Badge>
                      ) : null}
                    </div>

                    <h3 className="mt-4 text-xl font-semibold tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>

                    <Button
                      className="mt-6 w-full"
                      variant={featured ? 'default' : 'outline'}
                      asChild
                    >
                      <a href={PHONE_HREF}>Réserver</a>
                    </Button>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-center gap-x-2 text-sm text-muted-foreground">
              <ShieldCheck className="size-4 text-brand" />
              <span>Sans rendez-vous · Tarifs communiqués en salon</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
