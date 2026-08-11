import { Link } from "@tanstack/react-router";
import { Btn, XMark } from "./kit";

const nav = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Work", to: "/work" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface/30">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 opacity-10">
        <XMark className="h-full w-full" />
      </div>
      <div className="mx-auto w-full max-w-[1400px] px-6 py-20 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <XMark className="h-5 w-5" />
              <span className="font-display text-2xl font-bold uppercase tracking-[0.3em]">
                Cravent
              </span>
            </div>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-bright">
              Design. Marketing. Strategy. Technology.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A growth partner for businesses building what comes next.
            </p>
            <div className="mt-8">
              <Btn to="/contact">Book a Growth Audit</Btn>
            </div>
          </div>

          <div>
            <p className="eyebrow">Navigate</p>
            <ul className="mt-6 space-y-3">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary-bright"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li>Puducherry, India</li>
              <li>
                <a
                  href="https://www.cravent.in"
                  className="transition-colors hover:text-primary-bright"
                >
                  www.cravent.in
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@cravent.in"
                  className="transition-colors hover:text-primary-bright"
                >
                  Email Us
                </a>
              </li>
              <li>
                <a href="https://wa.me/" className="transition-colors hover:text-primary-bright">
                  Connect on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Cravent</span>
          <div className="flex gap-6">
            <Link to="/privacy" className="transition-colors hover:text-primary-bright">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-primary-bright">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
