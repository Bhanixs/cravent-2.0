import { useState } from "react";
import { Btn, Reveal, Section, SectionHeading } from "@/components/site/kit";
import { cn } from "@/lib/utils";

const floors = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

type Unit = { id: string; type: string; area: string; price: string; status: "Available" | "Held" | "Sold" };

const unitsByFloor = (floor: number): Unit[] => [
  {
    id: `${floor}A`,
    type: "2 BHK",
    area: "1,180 sq.ft",
    price: "₹ 82.6 L",
    status: floor % 4 === 0 ? "Sold" : "Available",
  },
  {
    id: `${floor}B`,
    type: "3 BHK",
    area: "1,540 sq.ft",
    price: "₹ 1.08 Cr",
    status: floor % 3 === 0 ? "Held" : "Available",
  },
  {
    id: `${floor}C`,
    type: "3 BHK + Study",
    area: "1,820 sq.ft",
    price: "₹ 1.32 Cr",
    status: floor % 5 === 0 ? "Sold" : "Available",
  },
];

const statusColor: Record<Unit["status"], string> = {
  Available: "text-primary-bright border-primary/50",
  Held: "text-foreground border-border-strong",
  Sold: "text-muted-foreground border-border",
};

export function SpacePrototype() {
  const [floor, setFloor] = useState(9);
  const [unitIdx, setUnitIdx] = useState(1);
  const units = unitsByFloor(floor);
  const unit = units[unitIdx] ?? units[0]!;

  return (
    <Section id="space" className="border-t border-border bg-surface/20">
      <SectionHeading
        eyebrow="3D experience prototype"
        index="[ cravent space ]"
        title={<>An immersive sales floor.</>}
        lead="A simulated interface showing how buyers can explore an unbuilt project — floor by floor, unit by unit — and act on it immediately."
      />

      <Reveal delay={0.1}>
        <div className="mt-14 grid gap-px border border-border bg-border lg:grid-cols-[auto_1.6fr_1fr]">
          {/* Floor selector */}
          <div className="bg-background p-6">
            <p className="eyebrow">Floor</p>
            <div className="mt-5 flex flex-wrap gap-2 lg:flex-col">
              {floors.map((f) => (
                <button
                  key={f}
                  onClick={() => setFloor(f)}
                  className={cn(
                    "w-12 border px-2 py-2 font-mono text-[11px] transition-all duration-300",
                    floor === f
                      ? "border-primary bg-primary/10 text-primary-bright"
                      : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground",
                  )}
                >
                  {String(f).padStart(2, "0")}
                </button>
              ))}
            </div>
          </div>

          {/* Building visual */}
          <div className="relative min-h-[460px] overflow-hidden bg-background p-6">
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="relative flex h-full items-center justify-center">
              <div
                className="relative"
                style={{ perspective: "1200px" }}
                aria-label="Simulated 3D building"
              >
                <div
                  className="relative h-[300px] w-56"
                  style={{
                    transform: "rotateX(64deg) rotateZ(-42deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {floors.map((f, i) => (
                    <button
                      key={f}
                      onClick={() => setFloor(f)}
                      className={cn(
                        "absolute inset-x-0 top-1/2 h-24 w-56 border transition-all duration-500",
                        floor === f
                          ? "border-primary bg-primary/25 shadow-[0_0_60px_-6px_var(--primary)]"
                          : "border-border-strong/70 bg-surface-2/50 hover:bg-surface-2",
                      )}
                      style={{
                        transform: `translateZ(${(floors.length - i) * 22}px) translateY(-50%)`,
                      }}
                      aria-label={`Floor ${f}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Tower A · Simulated view
            </div>
          </div>

          {/* Unit panel */}
          <div className="bg-background p-6">
            <p className="eyebrow">Units on floor {String(floor).padStart(2, "0")}</p>
            <div className="mt-5 space-y-2">
              {units.map((u, i) => (
                <button
                  key={u.id}
                  onClick={() => setUnitIdx(i)}
                  className={cn(
                    "flex w-full items-center justify-between border px-4 py-3 text-left transition-all duration-300",
                    unitIdx === i
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-border-strong",
                  )}
                >
                  <span className="font-mono text-xs">{u.id}</span>
                  <span className="text-xs text-muted-foreground">{u.type}</span>
                  <span
                    className={cn(
                      "border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em]",
                      statusColor[u.status],
                    )}
                  >
                    {u.status}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <div className="flex items-baseline justify-between">
                <h3 className="text-3xl font-bold uppercase">{unit.id}</h3>
                <span className="font-mono text-sm text-primary-bright">{unit.price}</span>
              </div>
              <dl className="mt-5 space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <dt>Configuration</dt>
                  <dd className="text-foreground">{unit.type}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Carpet area</dt>
                  <dd className="text-foreground">{unit.area}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Availability</dt>
                  <dd className="text-foreground">{unit.status}</dd>
                </div>
              </dl>
              <div className="mt-7 flex flex-col gap-2">
                <Btn>Explore in 3D</Btn>
                <Btn variant="outline">Book Site Visit</Btn>
                <Btn variant="outline">Chat with Sales</Btn>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
