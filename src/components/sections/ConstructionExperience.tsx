import { Btn, Reveal, Section, SectionHeading } from "@/components/site/kit";
import { spaceFeatures } from "@/content/cravent";
import tower from "@/assets/construction-tower.jpg";

export function ConstructionExperience() {
  return (
    <Section id="construction" className="relative overflow-hidden border-t border-border">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Cravent Space"
            index="[ construction technology ]"
            title={
              <>
                Your project.
                <br />
                <span className="italic text-primary-bright">Experienced</span> before built.
              </>
            }
            lead="Pre-construction 3D experiences and digital sales infrastructure for construction and real-estate businesses."
          />
          <Reveal delay={0.15}>
            <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2">
              {spaceFeatures.map((f) => (
                <div
                  key={f}
                  className="group flex items-center gap-3 bg-background px-5 py-4 transition-colors hover:bg-surface"
                >
                  <span className="h-1.5 w-1.5 shrink-0 bg-primary transition-transform duration-300 group-hover:scale-150" />
                  <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Btn to="/contact" size="lg">
                See What We Build
              </Btn>
              <Btn href="#space" variant="outline" size="lg">
                Explore the prototype
              </Btn>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="clip-angle relative aspect-4/5 overflow-hidden border border-border">
            <img
              src={tower}
              alt="Dark architectural render of an unbuilt tower lit with electric blue"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/40" />
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border border-border-strong bg-background/70 px-5 py-4 backdrop-blur-md">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-bright">
                Pre-construction render
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                India-native
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
