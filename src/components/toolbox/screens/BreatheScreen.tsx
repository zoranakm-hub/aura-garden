import { useEffect, useState } from "react";
import { ParticleField } from "../ParticleField";

const PHASES = [
  { label: "Breathe in", duration: 4000 },
  { label: "Hold softly", duration: 4000 },
  { label: "Breathe out", duration: 6000 },
  { label: "Rest", duration: 2000 },
];

export function BreatheScreen() {
  const [phaseIdx, setPhaseIdx] = useState(0);
  const phase = PHASES[phaseIdx];

  useEffect(() => {
    const t = setTimeout(() => setPhaseIdx((i) => (i + 1) % PHASES.length), phase.duration);
    return () => clearTimeout(t);
  }, [phaseIdx, phase.duration]);

  const expanding = phaseIdx === 0 || phaseIdx === 1;
  const scale = phaseIdx === 1 ? 1.35 : phaseIdx === 3 ? 0.7 : expanding ? 1.35 : 0.7;

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-between overflow-hidden pb-28 pt-16">
      <ParticleField count={26} />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 40% at 50% 50%, oklch(0.55 0.09 180 / 0.35), transparent 70%), radial-gradient(80% 60% at 50% 100%, oklch(0.4 0.08 280 / 0.5), transparent 70%)",
        }}
      />

      <div className="relative z-10 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em]" style={{ color: "var(--mist)" }}>
          Firefly breath
        </p>
        <h2 className="mt-1 font-display text-2xl">A quiet, soft reset</h2>
      </div>

      {/* Orb */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative h-64 w-64">
          {/* outer halo */}
          <div
            className="absolute inset-0 rounded-full transition-transform duration-[4000ms] ease-in-out"
            style={{
              transform: `scale(${scale})`,
              background:
                "radial-gradient(circle, oklch(0.85 0.13 85 / 0.35), transparent 60%)",
              filter: "blur(20px)",
            }}
          />
          {/* main orb */}
          <div
            className="absolute inset-6 rounded-full transition-transform ease-in-out"
            style={{
              transform: `scale(${scale})`,
              transitionDuration: `${phase.duration}ms`,
              background:
                "radial-gradient(circle at 35% 30%, oklch(0.95 0.05 90) 0%, oklch(0.74 0.07 155) 45%, oklch(0.4 0.08 260) 100%)",
              boxShadow:
                "0 0 60px 10px oklch(0.74 0.07 155 / 0.5), inset 0 0 40px oklch(1 0 0 / 0.2)",
            }}
          />
          {/* shimmer ring */}
          <div
            className="absolute inset-0 rounded-full border"
            style={{
              borderColor: "oklch(1 0 0 / 0.15)",
              transform: `scale(${scale * 1.1})`,
              transition: `transform ${phase.duration}ms ease-in-out`,
            }}
          />
        </div>
        <p className="mt-8 font-display text-3xl tracking-tight">{phase.label}</p>
        <div className="mt-4 flex gap-1.5">
          {PHASES.map((_, i) => (
            <span
              key={i}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: i === phaseIdx ? 24 : 6,
                background: i === phaseIdx ? "var(--gold)" : "oklch(1 0 0 / 0.2)",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 flex gap-2 px-5">
        <Chip label="Box breath" active />
        <Chip label="4-7-8" />
        <Chip label="Butterfly tap" />
        <Chip label="Ocean" />
      </div>
    </div>
  );
}

function Chip({ label, active }: { label: string; active?: boolean }) {
  return (
    <button
      className="rounded-full px-3.5 py-1.5 text-xs font-medium transition-all"
      style={{
        background: active ? "var(--gradient-aurora)" : "oklch(1 0 0 / 0.08)",
        color: active ? "var(--primary-foreground)" : "var(--foreground)",
        border: "1px solid oklch(1 0 0 / 0.12)",
        boxShadow: active ? "var(--glow-sage)" : "none",
      }}
    >
      {label}
    </button>
  );
}
