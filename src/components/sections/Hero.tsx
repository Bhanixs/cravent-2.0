import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Btn, XMark } from "@/components/site/kit";
import { HeroObject } from "./HeroObject";
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
    <div ref={ref} className="relative min-h-[100svh] overflow-hidden bg-background">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Futuristic architectural structure with an electric blue X motif"
          width={1600}
          height={1200}
          className="h-full w-full object-cover opacity-35"
          style={{
            transform: `scale(1.08) translate(${pointer.x * -14}px, ${pointer.y * -14}px)`,
            transition: "transform 500ms cubic-bezier(0.16,1,0.3,1)",
            filter: "invert(1) hue-rotate(180deg)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/65 to-background" />
        <div className="absolute inset-0 grid-bg opacity-60" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto absolute -right-[34%] top-[15%] z-[1] h-[30vh] min-h-[220px] w-[72vw] opacity-50 sm:-right-[18%] sm:h-[36vh] sm:w-[66vw] md:right-[1%] md:top-[12%] md:h-[58vh] md:min-h-[320px] md:w-[54vw] md:opacity-80 lg:right-[3%] lg:w-[48vw]"
      >
        <HeroObject />
      </motion.div>

      <div className="pointer-events-none absolute right-0 top-0 z-[1] hidden h-full w-[36%] bg-foreground/[0.025] lg:block" />

      <motion.div
        style={{ opacity }}
        className="relative z-[2] mx-auto flex min-h-[100svh] w-full max-w-[1400px] flex-col justify-center px-4 pt-20 pb-12 sm:px-6 sm:pt-24 sm:pb-14 md:px-10 md:pt-28 md:pb-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-10 bg-primary" />
          <span className="eyebrow text-[9px] sm:text-[10px]">Design. Marketing. Strategy. Technology.</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-[12ch] text-[clamp(2.1rem,6vw,5.5rem)] font-bold uppercase leading-[1.02] tracking-tight md:mt-6 break-words"
        >
          Your business needs
          <br />
          <span className="italic text-primary-bright">more than an agency.</span>
        </motion.h1>

        <div className="mt-5 grid gap-6 md:mt-8 md:gap-8 lg:grid-cols-[1.1fr_auto] lg:items-end">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="max-w-2xl text-xs leading-relaxed text-muted-foreground sm:text-sm md:text-base"
          >
            Cravent is a growth partner for ambitious businesses that want their brand, marketing,
            business development, and technology to work together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-wrap gap-2.5 md:gap-3"
          >
            <Btn to="/contact" size="md">
              Book a Growth Audit
            </Btn>
            <Btn to="/services" variant="outline" size="md">
              Explore Our Services
            </Btn>
          </motion.div>
        </div>
      </motion.div>

      <XMark className="animate-float-slow pointer-events-none absolute right-8 top-1/3 hidden h-24 w-24 opacity-30 xl:block" />
    </div>
  );
}
