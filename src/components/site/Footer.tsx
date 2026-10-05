import { Link } from "@tanstack/react-router";

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
      <div className="pointer-events-none absolute -right-16 -top-12 w-80 md:w-96 opacity-10">
        <img src="/cravent-logo.png" alt="" className="w-full h-auto object-contain" />
      </div>
      <div className="mx-auto w-full max-w-[1400px] px-6 py-20 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-block">
              <img
                src="/cravent-logo.png"
                alt="Cravent"
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 hover:scale-[1.03]"
              />
            </Link>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-bright">
              Design. Marketing. Strategy. Technology.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A growth partner for businesses building what comes next.
            </p>
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
                  href="tel:8778345901"
                  className="transition-colors hover:text-primary-bright font-mono text-xs"
                >
                  +91 87783 45901
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@cravent.in"
                  className="transition-colors hover:text-primary-bright font-mono text-xs"
                >
                  info@cravent.in
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918778345901?text=Hello%20Cravent"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-primary-bright"
                >
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
