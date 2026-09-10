import coaches from "@/assets/coaches.jpg";

const points = [
  "Owners on the floor, not behind a desk",
  "Certified trainers for every level",
  "Classes scaled from first-timer to advanced",
  "A gym that feels like home, not a showroom",
];

export function Coaches() {
  return (
    <section id="coaches" className="relative border-y border-border py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div className="reveal relative">
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <img
              src={coaches}
              alt="Florida Fitness coaches on the gym floor in Trenton, Florida"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-[var(--gradient-hero)] opacity-60" />
          </div>
          <div className="animate-float-slow absolute -right-4 -bottom-6 rounded-2xl bg-primary px-6 py-5 text-primary-foreground shadow-[var(--shadow-lime)] sm:-right-8">
            <p className="font-display text-3xl leading-none">100%</p>
            <p className="mt-1 text-[11px] font-bold tracking-[0.18em] uppercase">In Your Corner</p>
          </div>
        </div>

        <div className="reveal">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.28em] text-primary uppercase">
            <span className="h-px w-8 bg-primary" />
            Our Coaches
          </span>
          <h2 className="mt-5 text-4xl leading-[0.95] sm:text-6xl">
            Coached By <span className="text-primary">People Who Care</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Shayne, Eric, Melissa and Lisa built Florida Fitness so Trenton would have a place with
            serious equipment and zero intimidation. They learn your name, your goals and your pace —
            then celebrate every step with you.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((p) => (
              <li
                key={p}
                className="surface-card rounded-xl p-4 text-sm text-muted-foreground transition-colors duration-300 hover:border-primary/60"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
