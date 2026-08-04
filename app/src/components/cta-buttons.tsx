import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Bespoke CTA chrome (design-recipe.md §7): one component per CTA intent,
 * each with its own interaction identity — no shared button utility class.
 */

export function PrimaryCta({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 rounded-full bg-brand-accent py-3 pr-4 pl-5 font-medium text-brand-accent-ink transition-transform duration-200 active:scale-[0.98]"
    >
      {children}
      <ArrowRight
        className="size-4 transition-transform duration-200 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </a>
  );
}

export function OutlineCta({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="hover:-translate-y-0.5 inline-flex items-center gap-2 rounded-full border border-brand-border px-6 py-3 font-medium text-brand-ink transition-all duration-200 hover:border-brand-accent active:translate-y-0 active:scale-[0.98]"
    >
      {children}
    </a>
  );
}

export function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="relative py-1 text-sm text-brand-muted transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-brand-accent after:transition-transform after:duration-200 hover:text-brand-ink hover:after:scale-x-100"
    >
      {children}
    </a>
  );
}
