import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Btn, XMark } from "./kit";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "Industries", to: "/industries" },
  { label: "Space", to: "/space" },
  { label: "Insights", to: "/insights" },
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
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-border bg-background/85 py-3 backdrop-blur-xl"
            : "border-b border-transparent py-6",
        )}
      >
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 md:px-10">
          <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <XMark className="h-4 w-4 transition-transform duration-500 group-hover:rotate-90" />
            <span className="font-display text-lg font-bold uppercase tracking-[0.28em]">
              Cravent
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary-bright"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <Btn to="/contact" size="md">
                Book a Growth Audit
              </Btn>
            </div>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-border transition-colors hover:border-primary lg:hidden"
            >
              <span
                className={cn(
                  "h-px w-5 bg-foreground transition-transform",
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
          "fixed inset-0 z-40 grid-bg bg-background transition-all duration-500 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-full flex-col justify-center px-6 pb-16 pt-24">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="border-b border-border py-4 font-display text-3xl font-bold uppercase tracking-tight transition-colors hover:text-primary-bright"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-10">
            <Btn to="/contact" size="lg" className="w-full">
              Book a Growth Audit
            </Btn>
          </div>
        </div>
      </div>
    </>
  );
}
