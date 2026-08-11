import { Link } from "@tanstack/react-router";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ---------------- Button ---------------- */

type BtnProps = {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  to?: string;
  href?: string;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const btnBase =
  "group relative inline-flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-all duration-300 clip-corner";

const btnVariants = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-bright hover:shadow-[0_0_36px_-6px_var(--primary)]",
  outline:
    "border border-border-strong text-foreground hover:border-primary hover:text-primary-bright hover:bg-primary/5",
  ghost: "text-muted-foreground hover:text-primary-bright",
};

const btnSizes = { md: "px-5 py-3", lg: "px-7 py-4 text-xs" };

export function Btn({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  className,
  type = "button",
  onClick,
}: BtnProps) {
  const cls = cn(btnBase, btnVariants[variant], btnSizes[size], className);
  const inner = (
    <>
      <span>{children}</span>
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </>
  );
  if (to)
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  if (href)
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  return (
    <button type={type} onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}

/* ---------------- Reveal ---------------- */

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Section shell ---------------- */

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative px-6 py-24 md:px-10 md:py-32", className)}>
      <div className="mx-auto w-full max-w-[1400px]">{children}</div>
    </section>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  lead,
  className,
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-4xl", className)}>
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-primary" />
          <span className="eyebrow">{eyebrow}</span>
          {index && <span className="font-mono text-[11px] text-muted-foreground">{index}</span>}
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-6 text-4xl font-bold uppercase md:text-6xl lg:text-7xl">{title}</h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.14}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------------- Tag ---------------- */

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:border-primary hover:text-primary-bright">
      {children}
    </span>
  );
}

/* ---------------- X motif ---------------- */

export function XMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={cn("text-primary", className)} aria-hidden="true">
      <path d="M4 4 L96 96" stroke="currentColor" strokeWidth="2" />
      <path d="M96 4 L4 96" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

/* ---------------- Marquee ---------------- */

export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden border-y border-border bg-surface/40 py-5">
      <div className="animate-marquee flex min-w-max items-center gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-2xl font-semibold uppercase tracking-tight text-foreground/80 md:text-3xl">
              {t}
            </span>
            <XMark className="h-3 w-3 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Counter ---------------- */

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1400, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

/* ---------------- Panel ---------------- */

export function Panel({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "clip-angle relative border border-border bg-surface/50 backdrop-blur-sm transition-all duration-500",
        hover && "hover:border-border-strong hover:bg-surface",
        className,
      )}
    >
      {children}
    </div>
  );
}
