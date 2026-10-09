import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Btn } from "./kit";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Work", to: "/work" },
  /*{ label: "Space", to: "/space" },*/
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 bg-primary",
          scrolled
            ? "border-b border-border bg-primary/85 py-3 backdrop-blur-xl"
            : "border-b border-transparent py-6",
        )}
      >
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 md:px-10 text-white">
          <Link to="/" className="group flex items-center" onClick={() => setOpen(false)}>
            <img
              src="/cravent-logo-2.png"
              alt="Cravent"
              className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:text-muted-links"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <Btn to="/contact" size="md" className="bg-white text-primary hover:bg-muted hover:shadow-[0_0_18px_-6px_var(--muted-foreground)]">
                Book a Growth Audit
              </Btn>
            </div>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-border transition-colors hover:border-background lg:hidden"
            >
              <span
                className={cn(
                  "h-px w-5 bg-background transition-transform",
                  open && "translate-y-[3.5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-px w-5 bg-foreground transition-transform",
                  open && "-translate-y-[3.5px] -rotate-45",
                )}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 grid-bg bg-background transition-all duration-500 lg:hidden overflow-y-auto",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex min-h-full flex-col justify-center px-6 pb-12 pt-24 max-w-lg mx-auto">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="border-b border-border py-3 sm:py-4 font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider transition-colors hover:text-primary-bright"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-8 sm:mt-10">
            <Btn to="/contact" size="lg" className="w-full">
              Book a Growth Audit
            </Btn>
          </div>
        </div>
      </div>
    </>
  );
}
