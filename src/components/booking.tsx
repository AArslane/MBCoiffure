"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

// Public Cal.com booking link, e.g. "coiffeur-mb-31/coupe".
// Set NEXT_PUBLIC_CAL_LINK in .env.local (and in Vercel) once the owner's
// Cal.com account + event type exist and his Google Calendar is connected.
const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK;

export function Booking() {
  useEffect(() => {
    if (!CAL_LINK) return;
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
  }, []);

  if (!CAL_LINK) {
    return (
      <div className="flex min-h-[280px] flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card px-6 py-12 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
          Réservation — à configurer
        </p>
        <p className="mt-3 max-w-md text-sm text-muted-foreground">
          Le calendrier de réservation s&apos;affichera ici une fois le compte
          Cal.com créé et la variable <code>NEXT_PUBLIC_CAL_LINK</code> renseignée.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <Cal
        calLink={CAL_LINK}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}
