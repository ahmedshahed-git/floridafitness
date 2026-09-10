import { Play, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";

const reels = [
  {
    label: "Reel One",
    note: "Paste your Facebook Reel link here",
    href: undefined as string | undefined,
  },
  {
    label: "Reel Two",
    note: "Paste your Facebook Reel link here",
    href: undefined as string | undefined,
  },
  {
    label: "Reel Three",
    note: "Paste your Facebook Reel link here",
    href: undefined as string | undefined,
  },
];

export function Reels() {
  return (
    <section id="reels" className="relative overflow-hidden bg-charcoal-deep py-24 sm:py-32">
      {/* Cinematic backdrop */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 25%, oklch(0.28 0.02 260 / 0.45), transparent 55%), radial-gradient(ellipse at 50% 100%, oklch(0.1 0.004 260 / 0.95), transparent 60%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.87_0.235_128/0.03),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center gap-3 text-xs font-bold tracking-[0.28em] text-primary uppercase">
            <span className="h-px w-8 bg-primary" />
            Facebook Reels
            <span className="h-px w-8 bg-primary" />
          </span>
          <h2 className="mt-5 text-4xl leading-[0.95] sm:text-6xl">
            Watch The <span className="text-primary">Floor</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Short clips straight from the gym — classes, lifts and the crew in action.
          </p>
        </div>

        {/* Polaroid stage */}
        <div className="relative mt-16 flex min-h-[620px] items-center justify-start gap-6 overflow-x-auto px-6 pb-10 pt-4 sm:justify-center sm:overflow-visible sm:px-0 lg:gap-10">
          {reels.map((reel, i) => {
            const isLeft = i === 0;
            const isRight = i === 2;
            const isMiddle = i === 1;

            const card = (
              <div
                className={cn(
                  "reveal polaroid-card group relative flex flex-col transition-all duration-500 ease-out",
                  "hover:z-40 hover:-translate-y-3",
                  isLeft &&
                    "z-10 rotate-[-6deg] translate-y-8 scale-[0.86] hover:rotate-[-2deg] hover:scale-90 sm:rotate-[-5deg] sm:scale-[0.88] sm:hover:rotate-[-2deg]",
                  isMiddle &&
                    "z-20 rotate-0 scale-100 hover:scale-105",
                  isRight &&
                    "z-10 rotate-[6deg] translate-y-8 scale-[0.86] hover:rotate-[2deg] hover:scale-90 sm:rotate-[5deg] sm:scale-[0.88] sm:hover:rotate-[2deg]"
                )}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Polaroid frame */}
                <div className="relative flex flex-col bg-polaroid p-3 pb-6 shadow-2xl">
                  {/* Layered depth shadows */}
                  <div
                    className="pointer-events-none absolute -inset-2 -z-10 rounded-sm"
                    style={{
                      background:
                        "linear-gradient(145deg, oklch(0 0 0 / 0.35), oklch(0 0 0 / 0.15))",
                      filter: "blur(18px)",
                    }}
                  />

                  {/* Media aperture */}
                  <div className="relative aspect-[9/16] w-52 overflow-hidden rounded-sm bg-charcoal sm:w-56 lg:w-72">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

                    {/* Facebook Reel badge */}
                    <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 backdrop-blur-sm">
                      <Facebook className="size-3.5 text-[#1877F2]" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                        Reel
                      </span>
                    </div>

                    {/* Circular play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="pulse-ring flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.87_0.235_128/0.7)] transition-transform duration-300 group-hover:scale-110 sm:size-20">
                        <Play className="size-6 translate-x-0.5 fill-current sm:size-7" />
                      </span>
                    </div>

                    {/* Placeholder gradient for video area */}
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-charcoal via-charcoal-deep to-black" />
                  </div>

                  {/* Caption strip */}
                  <div className="mt-5 px-2 text-center">
                    <p className="font-display text-xl tracking-wide text-polaroid-ink uppercase">
                      {reel.label}
                    </p>
                    <p className="mt-1 text-xs font-medium text-polaroid-ink/60">
                      {reel.note}
                    </p>
                  </div>
                </div>
              </div>
            );

            return reel.href ? (
              <a
                key={reel.label}
                href={reel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 snap-center"
              >
                {card}
              </a>
            ) : (
              <div key={reel.label} className="flex-shrink-0 snap-center">
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
