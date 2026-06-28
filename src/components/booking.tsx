"use client";

import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { CAL_USERNAME, SERVICES, type Service } from "@/lib/site";

function ServiceCard({
  service,
  onSelect,
}: {
  service: Service;
  onSelect: () => void;
}) {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-card p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
        <span className="font-mono text-2xl font-semibold tracking-tight text-foreground">
          {service.price}
        </span>
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>
      <button
        onClick={onSelect}
        className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-foreground transition-transform active:scale-[0.98]"
      >
        Choisir cette prestation
      </button>
    </div>
  );
}

function CalEmbed({
  service,
  onBack,
}: {
  service: Service;
  onBack: () => void;
}) {
  const calLink = `${CAL_USERNAME}/${service.calSlug}`;

  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#a05a36" },
          dark: { "cal-brand": "#a05a36" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [calLink]);

  return (
    <div>
      <button
        onClick={onBack}
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Changer de prestation
      </button>
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <Cal
          key={calLink}
          calLink={calLink}
          calOrigin="https://cal.eu"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      </div>
    </div>
  );
}

export function Booking() {
  const [selected, setSelected] = useState<Service | null>(null);

  if (!CAL_USERNAME) {
    return (
      <div className="flex min-h-[280px] flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card px-6 py-12 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
          Réservation — à configurer
        </p>
        <p className="mt-3 max-w-md text-sm text-muted-foreground">
          Renseignez <code>CAL_USERNAME</code> dans <code>src/lib/site.ts</code> et
          créez les 3 types d&apos;événements sur Cal.com.
        </p>
      </div>
    );
  }

  if (selected) {
    return <CalEmbed service={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {SERVICES.map((s) => (
        <ServiceCard key={s.calSlug} service={s} onSelect={() => setSelected(s)} />
      ))}
    </div>
  );
}
