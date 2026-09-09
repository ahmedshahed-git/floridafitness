import { useCallback, useEffect, useRef, useState } from "react";
import { gallery } from "./data";

/**
 * 3D rotating ring of gym photos. Slow auto spin, pointer drag to scrub,
 * pauses while dragging or hovering. One transform update per frame.
 */
export function GymShowcase() {
  const [rotation, setRotation] = useState(0);
  const rot = useRef(0);
  const paused = useRef(false);
  const drag = useRef<{ x: number; start: number } | null>(null);
  const [radius, setRadius] = useState(520);

  const count = gallery.length;
  const step = 360 / count;

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      setRadius(w < 480 ? 280 : w < 768 ? 360 : w < 1200 ? 450 : 520);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const loop = (t: number) => {
      const dt = t - last;
      last = t;
      if (!paused.current) {
        rot.current += dt * 0.006;
        setRotation(rot.current);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    drag.current = { x: e.clientX, start: rot.current };
    paused.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!drag.current) return;
    rot.current = drag.current.start + (e.clientX - drag.current.x) * 0.25;
    setRotation(rot.current);
  }, []);

  const endDrag = useCallback(() => {
    drag.current = null;
    paused.current = false;
  }, []);

  return (
    <section
      id="showcase"
      className="relative overflow-hidden border-y border-border bg-charcoal-deep py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,oklch(0.87_0.235_128/0.14),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8">
        <div className="reveal flex flex-col items-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.28em] text-primary uppercase">
            <span className="h-px w-8 bg-primary" />
            Inside The Gym
          </span>
          <h2 className="mt-5 text-4xl leading-[0.95] sm:text-6xl">
            The Florida Fitness <span className="text-primary">Experience</span>
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Drag, scroll or just watch — the training floor, the equipment and the energy that keeps
            members coming back.
          </p>
        </div>
      </div>

      <div className="reveal mt-14">
        <div
          className="relative w-full cursor-grab touch-pan-y overflow-hidden select-none active:cursor-grabbing"
          style={{ height: 520, perspective: 1400 }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => !drag.current && (paused.current = false)}
        >
          <div
            className="absolute top-1/2 left-1/2 h-0 w-0"
            style={{ transformStyle: "preserve-3d", transform: `rotateY(${rotation}deg)` }}
          >
            {gallery.map((item, i) => {
              const angle = i * step;
              const rel = ((angle + rotation) % 360 + 360) % 360;
              const front = Math.cos((rel * Math.PI) / 180);
              const opacity = Math.max(0.25, (front + 1) / 2);
              const active = front > 0.86;
              return (
                <div
                  key={item.title}
                  className="absolute"
                  style={{
                    width: 260,
                    height: 340,
                    left: -130,
                    top: -170,
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    transformStyle: "preserve-3d",
                    opacity,
                    transition: "opacity 0.35s ease",
                  }}
                >
                  <div
                    className={`group relative h-full w-full overflow-hidden rounded-2xl border transition-all duration-500 ${
                      active
                        ? "border-primary/70 shadow-[0_30px_70px_-25px_oklch(0.87_0.235_128/0.45)]"
                        : "border-border shadow-[0_25px_60px_-30px_oklch(0.1_0_0/0.9)]"
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      draggable={false}
                      width={640}
                      height={840}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <span className="inline-block h-0.5 w-8 bg-primary" />
                      <h3 className="mt-2 text-sm leading-tight tracking-wide sm:text-base">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[11px] tracking-wide text-muted-foreground uppercase sm:text-xs">
                        {item.tag}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
