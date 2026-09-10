import { testimonials } from "./data";

type Review = (typeof testimonials)[number];

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
}

function ReviewCard({ r }: { r: Review }) {
  return (
    <figure className="surface-card w-64 rounded-xl p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_20px_50px_-20px_oklch(0.87_0.235_128/0.4)] sm:w-72">
      <div className="flex items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground ring-2 ring-primary/60">
          {initials(r.name)}
        </span>
        <div className="min-w-0">
          <figcaption className="truncate text-sm font-semibold text-foreground">
            {r.name}
          </figcaption>
          <p className="truncate text-xs text-muted-foreground">{r.role}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
        &ldquo;{r.quote}&rdquo;
      </blockquote>
    </figure>
  );
}

function Column({ items, duration }: { items: Review[]; duration: string }) {
  return (
    <div
      className="group flex flex-col overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]"
      style={{ ["--duration" as string]: duration }}
    >
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1}
          className="flex shrink-0 animate-marquee-vertical flex-col justify-around [gap:var(--gap)] group-hover:[animation-play-state:paused]"
        >
          {items.map((r) => (
            <ReviewCard key={r.name} r={r} />
          ))}
        </div>
      ))}
    </div>
  );
}

export function Stories() {
  const colA: Review[] = testimonials.slice(0, 4);
  const colB: Review[] = testimonials.slice(4, 8);
  const colC: Review[] = testimonials.slice(8, 12);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-y border-border py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.225_0.006_260/0.9),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.28em] text-primary uppercase">
            <span className="h-px w-8 bg-primary" />
            Member Stories
          </span>
          <h2 className="mt-5 text-4xl leading-[0.95] sm:text-6xl">
            Real People. <span className="text-primary">Real Progress.</span>
          </h2>
        </div>

        <div className="reveal mt-10">
          <div className="relative flex h-[520px] w-full flex-row items-center justify-center gap-3 overflow-hidden sm:h-[620px]">
            <div
              className="flex flex-row items-center gap-3"
              style={{
                transform:
                  "translateX(-40px) translateZ(-90px) rotateX(14deg) rotateY(-8deg) rotateZ(16deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <Column items={cols[0]} duration="34s" />
              <Column items={cols[1]} duration="44s" />
              <div className="hidden md:block">
                <Column items={cols[2]} duration="38s" />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-background to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
