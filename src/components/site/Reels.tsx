import { Play } from "lucide-react";

const slots = [
  { label: "Reel One", note: "Paste your Facebook Reel link here" },
  { label: "Reel Two", note: "Paste your Facebook Reel link here" },
  { label: "Reel Three", note: "Paste your Facebook Reel link here" },
];

export function Reels() {
  return (
    <section id="reels" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.28em] text-primary uppercase">
            <span className="h-px w-8 bg-primary" />
            Facebook Reels
          </span>
          <h2 className="mt-5 text-4xl leading-[0.95] sm:text-6xl">
            Watch The <span className="text-primary">Floor</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Short clips straight from the gym — classes, lifts and the crew in action.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {slots.map((s, i) => (
            <div
              key={s.label}
              className="reveal surface-card group relative flex aspect-[9/16] items-center justify-center overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,oklch(0.87_0.235_128/0.12),transparent_65%)]" />
              <div className="relative flex flex-col items-center gap-4 px-8 text-center">
                <span className="pulse-ring flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 group-hover:scale-110">
                  <Play className="size-6 translate-x-0.5" />
                </span>
                <p className="text-sm font-semibold tracking-[0.2em] text-foreground uppercase">
                  {s.label}
                </p>
                <p className="text-xs text-muted-foreground">{s.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
