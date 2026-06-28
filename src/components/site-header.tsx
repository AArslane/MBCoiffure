"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BRAND, PHONE, PHONE_HREF } from "@/lib/site";

const NAV = [
  { href: "#salons", label: "Salons" },
  { href: "#services", label: "Prestations" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="text-lg font-semibold tracking-tight"
        >
          {BRAND.name}
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PHONE_HREF}
            className="inline-flex h-11 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-transform active:scale-[0.98]"
          >
            Réserver
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="inline-flex size-11 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-secondary md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col px-5 py-2 sm:px-8">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex h-12 items-center border-b border-border text-base text-muted-foreground transition-colors last:border-b-0 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href={PHONE_HREF}
              onClick={() => setOpen(false)}
              className="mt-3 mb-3 inline-flex h-12 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground active:scale-[0.98]"
            >
              Réserver · {PHONE}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
