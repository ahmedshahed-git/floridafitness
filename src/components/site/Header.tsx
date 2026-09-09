import { useEffect, useState } from "react";
import { Dumbbell, Menu, X } from "lucide-react";

const links = [
  { href: "#programs", label: "What We Do" },
  { href: "#showcase", label: "Inside" },
  { href: "#membership", label: "Membership" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#reels", label: "Reels" },
  { href: "#coaches", label: "Coaches" },
  { href: "#contact", label: "Visit" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-charcoal-deep/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-md bg-primary">
            <Dumbbell className="size-5 text-primary-foreground" aria-hidden="true" />
          </span>
          <span className="font-display text-lg leading-none tracking-wider">
            Florida<span className="text-primary"> Fitness</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-foreground hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden h-10 items-center rounded-md bg-primary px-7 text-sm font-semibold tracking-wide text-primary-foreground uppercase shadow-[var(--shadow-lime)] transition-all duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            Join Now
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-border p-2 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-charcoal-deep/95 px-5 pb-5 backdrop-blur-md lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-3 text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-md bg-primary text-sm font-semibold tracking-wide text-primary-foreground uppercase"
          >
            Join Now
          </a>
        </nav>
      )}
    </header>
  );
}
