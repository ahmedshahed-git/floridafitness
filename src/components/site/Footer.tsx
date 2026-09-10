import { Dumbbell } from "lucide-react";
import { business } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-charcoal-deep py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-md bg-primary">
            <Dumbbell className="size-5 text-primary-foreground" aria-hidden="true" />
          </span>
          <span className="font-display text-lg leading-none tracking-wider">
            Florida<span className="text-primary"> Fitness</span>
          </span>
        </a>
        <p className="max-w-md text-sm text-muted-foreground">{business.goal}</p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a href={business.phoneHref} className="transition-colors hover:text-primary">
            {business.phone}
          </a>
          <a href={`mailto:${business.email}`} className="transition-colors hover:text-primary">
            {business.email}
          </a>
          <span>{business.city}</span>
        </div>
        <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
          &copy; {new Date().getFullYear()} {business.name}
        </p>
      </div>
    </footer>
  );
}
