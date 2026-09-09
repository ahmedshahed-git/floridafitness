import {
  Activity,
  ArrowRight,
  Dumbbell,
  Heart,
  Sparkles,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";
import { programs } from "./data";

const icons: Record<string, LucideIcon> = {
  dumbbell: Dumbbell,
  user: User,
  heart: Heart,
  users: Users,
  activity: Activity,
  sparkles: Sparkles,
};

export function Programs() {
  return (
    <section id="programs" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.28em] text-primary uppercase">
            <span className="h-px w-8 bg-primary" />
            What We Do
          </span>
          <h2 className="mt-5 text-4xl leading-[0.95] sm:text-6xl">
            Training Built <span className="text-primary">For Real People</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Strength, cardio, classes and one-on-one coaching — every session scaled to where you
            are today.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => {
            const Icon = icons[p.icon] ?? Dumbbell;
            return (
              <article
                key={p.title}
                className="reveal surface-card group relative overflow-hidden rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="absolute -top-16 -right-16 size-32 rounded-full bg-primary/0 blur-2xl transition-all duration-500 group-hover:bg-primary/25" />
                <span className="relative flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </span>
                <h3 className="relative mt-6 text-xl tracking-wide">{p.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
                <span className="relative mt-6 inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-primary uppercase opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn more <ArrowRight className="size-3.5" />
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
