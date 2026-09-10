import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { business } from "./data";

export function Contact() {
  const cards = [
    {
      icon: Phone,
      label: "Call Us",
      value: business.phone,
      href: business.phoneHref,
    },
    {
      icon: Mail,
      label: "Email Us",
      value: business.email,
      href: `mailto:${business.email}`,
    },
    {
      icon: MessageCircle,
      label: "Messenger",
      value: "Chat with Florida Fitness",
      href: business.messenger,
    },
    {
      icon: MapPin,
      label: "Find Us",
      value: business.city,
      href: "https://maps.google.com/?q=Florida+Fitness+Trenton+Florida",
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.28em] text-primary uppercase">
            <span className="h-px w-8 bg-primary" />
            Visit Us
          </span>
          <h2 className="mt-5 text-4xl leading-[0.95] sm:text-6xl">
            Come Train <span className="text-primary">With Us</span>
          </h2>
          <p className="mt-5 text-muted-foreground">{business.goal}</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              className="reveal surface-card group flex flex-col items-start gap-4 rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <c.icon className="size-5" />
              </span>
              <p className="text-[11px] font-bold tracking-[0.22em] text-primary uppercase">
                {c.label}
              </p>
              <p className="text-sm break-words text-muted-foreground">{c.value}</p>
            </a>
          ))}
        </div>

        <div className="reveal surface-card mt-8 flex flex-col items-center gap-6 rounded-2xl p-10 text-center">
          <h3 className="text-3xl sm:text-4xl">Ready When You Are</h3>
          <p className="max-w-xl text-muted-foreground">
            Call for current pricing, class times and a walkthrough of the floor. No pressure, no
            confusing contracts.
          </p>
          <a
            href={business.phoneHref}
            className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-9 text-sm font-semibold tracking-wide text-primary-foreground uppercase shadow-[var(--shadow-lime)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            <Phone className="size-4" /> {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
