import { Check, Phone } from "lucide-react";
import { business, memberships } from "./data";

export function Membership() {
  return (
    <section id="membership" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.28em] text-primary uppercase">
            <span className="h-px w-8 bg-primary" />
            Membership
          </span>
          <h2 className="mt-5 text-4xl leading-[0.95] sm:text-6xl">
            Join On Your <span className="text-primary">Terms</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            No pressure and no confusing contracts. Call us and we'll match you with the option that
            fits your goals and your week.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {memberships.map((m, i) => (
            <article
              key={m.name}
              className={`reveal surface-card relative flex flex-col overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60 ${
                m.featured ? "border-primary/50 lg:-mt-4 lg:pb-12" : ""
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {m.featured && (
                <span className="absolute top-6 right-6 rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-primary-foreground uppercase">
                  Popular
                </span>
              )}
              <p className="text-[11px] font-bold tracking-[0.22em] text-primary uppercase">
                {m.price}
              </p>
              <h3 className="mt-3 text-3xl">{m.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.tagline}</p>
              <ul className="mt-7 space-y-3 border-t border-border pt-7">
                {m.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {perk}
                  </li>
                ))}
              </ul>
              <a
                href={business.phoneHref}
                className={`mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:-translate-y-0.5 ${
                  m.featured
                    ? "bg-primary text-primary-foreground shadow-[var(--shadow-lime)]"
                    : "border border-border bg-foreground/5 text-foreground hover:border-primary hover:bg-primary/10"
                }`}
              >
                <Phone className="size-4" /> Ask About This
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
