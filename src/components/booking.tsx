"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { CAL_USERNAME } from "@/lib/site";

export function Booking({ calSlug }: { calSlug: string }) {
  const calLink = `${CAL_USERNAME}/${calSlug}`;

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
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <Cal
        key={calLink}
        calLink={calLink}
        calOrigin="https://cal.eu"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}
