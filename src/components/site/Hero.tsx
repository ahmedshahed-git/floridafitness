import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { business } from "./data";

const stats = [
  { value: "24/7", label: "Member Access" },
  { value: "5.0", label: "Google Rating" },
  { value: "New", label: "Latest Equipment" },
  { value: "1:1", label: "Coaching" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <img
        src={hero}
        alt="Member lifting a heavy barbell at Florida Fitness in Trenton, Florida"
        width={1600}
        height={1104}
        className="hero-zoom absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-charcoal-deep/70" />
      <div
        className="animate-float-slow pointer-events-none absolute -right-24 bottom-10 hidden size-80 rounded-full bg-primary/20 blur-[110px] lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-20 sm:px-8">
        <div className="max-w-3xl">
          <div className="hero-mask" style={{ animationDelay: "80ms" }}>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.28em] text-primary uppercase">
              <span className="h-px w-8 bg-primary" />
              {business.city}
            </span>
          </div>

          <h1 className="mt-6 text-5xl leading-[0.92] sm:text-7xl lg:text-8xl">
            <span className="hero-mask block" style={{ animationDelay: "180ms" }}>
              Florida Fitness.
            </span>
            <span
              className="hero-mask text-gradient-lime block"
              style={{ animationDelay: "320ms" }}
            >
              Stronger Every Day.
            </span>
          </h1>

          <p
            className="hero-mask mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: "460ms" }}
          >
            {business.goal} Clean floors, the latest equipment and coaches who know your name — in
            the heart of Trenton, Florida.
          </p>

          <div
            className="hero-mask mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "580ms" }}
          >
            <a
              href="#contact"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-md bg-primary px-9 text-sm font-semibold tracking-wide text-primary-foreground uppercase shadow-[var(--shadow-lime)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Start Training <ArrowRight className="size-4" />
            </a>
            <a
              href="#programs"
              className="inline-flex h-13 items-center justify-center rounded-md border border-border bg-foreground/5 px-9 text-sm font-semibold tracking-wide text-foreground uppercase backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/10"
            >
              What We Do
            </a>
          </div>

          <div
            className="hero-mask mt-14 grid max-w-2xl grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4"
            style={{ animationDelay: "700ms" }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl text-foreground sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
