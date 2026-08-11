import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Btn, XMark } from "@/components/site/kit";
import heroImg from "@/assets/hero-structure.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPointer({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div ref={ref} className="relative min-h-[100svh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Futuristic architectural structure with an electric blue X motif"
          width={1600}
          height={1200}
          className="h-full w-full object-cover opacity-70"
          style={{
            transform: `scale(1.08) translate(${pointer.x * -14}px, ${pointer.y * -14}px)`,
            transition: "transform 500ms cubic-bezier(0.16,1,0.3,1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-background" />
        <div className="absolute inset-0 grid-bg opacity-60" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative mx-auto flex min-h-[100svh] w-full max-w-[1400px] flex-col justify-end px-6 pb-20 pt-40 md:px-10 md:pb-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-12 bg-primary" />
          <span className="eyebrow">Design. Marketing. Strategy. Technology.</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-[clamp(3rem,11vw,11rem)] font-bold uppercase text-glow"
        >
          Build what
          <br />
          comes <span className="italic text-primary-bright">next.</span>
        </motion.h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_auto] lg:items-end">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Cravent is a growth partner combining branding, marketing, business strategy, business
            development, and technology to help ambitious organisations move forward with clarity
            and confidence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap gap-3"
          >
            <Btn to="/contact" size="lg">
              Start a Conversation
            </Btn>
            <Btn to="/work" variant="outline" size="lg">
              Explore Our Work
            </Btn>
          </motion.div>
        </div>
      </motion.div>

      <XMark className="animate-float-slow pointer-events-none absolute right-8 top-1/3 hidden h-24 w-24 opacity-30 xl:block" />
    </div>
  );
}
