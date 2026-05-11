import { useState } from "react";
import { ParticleField } from "../ParticleField";

const EMOTIONS = [
  { id: "calm", label: "Calm", color: "oklch(0.74 0.07 155)", emoji: "🌿" },
  { id: "soft", label: "Soft", color: "oklch(0.82 0.06 75)", emoji: "🌅" },
  { id: "tender", label: "Tender", color: "oklch(0.75 0.09 30)", emoji: "🫧" },
  { id: "foggy", label: "Foggy", color: "oklch(0.65 0.04 240)", emoji: "🌫️" },
  { id: "anxious", label: "Anxious", color: "oklch(0.6 0.12 290)", emoji: "⚡" },
  { id: "sad", label: "Tender-sad", color: "oklch(0.55 0.09 250)", emoji: "💧" },
  { id: "spark", label: "Sparkly", color: "oklch(0.85 0.13 85)", emoji: "✨" },
  { id: "tired", label: "Tired", color: "oklch(0.55 0.05 280)", emoji: "🌙" },
  { id: "open", label: "Open", color: "oklch(0.78 0.08 180)", emoji: "🪞" },
];

const BODY_POINTS = [
  { id: "head", label: "Head", x: 50, y: 8 },
  { id: "chest", label: "Chest", x: 50, y: 32 },
  { id: "belly", label: "Belly", x: 50, y: 50 },
  { id: "shoulders", label: "Shoulders", x: 26, y: 24 },
  { id: "hands", label: "Hands", x: 16, y: 50 },
];

export function MoodScreen() {
  const [selected, setSelected] = useState<string[]>(["calm"]);
  const [bodyActive, setBodyActive] = useState<string[]>(["chest"]);
  const [energy, setEnergy] = useState(60);

  const toggle = (id: string, set: typeof setSelected, current: string[]) => {
    set(current.includes(id) ? current.filter((x) => x !== id) : [...current, id]);
  };

  return (
    <div className="relative h-full w-full overflow-y-auto pb-28 pt-14">
      <ParticleField count={14} />
      <div className="relative px-5">
        <p className="text-[11px] uppercase tracking-[0.3em]" style={{ color: "var(--mist)" }}>
          Inner weather
        </p>
        <h2 className="mt-1 font-display text-3xl leading-tight">
          How does <span className="text-gradient-aurora">your weather</span> feel?
        </h2>
        <p className="mt-1 text-sm" style={{ color: "var(--muted-foreground)" }}>
          No wrong answers — just curious noticing.
        </p>

        {/* Emotion orbs */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          {EMOTIONS.map((e) => {
            const on = selected.includes(e.id);
            return (
              <button
                key={e.id}
                onClick={() => toggle(e.id, setSelected, selected)}
                className="relative aspect-square overflow-hidden rounded-2xl transition-all duration-300"
                style={{
                  background: on
                    ? `radial-gradient(circle at 35% 30%, ${e.color}, oklch(0.25 0.03 250) 110%)`
                    : "oklch(1 0 0 / 0.05)",
                  border: "1px solid oklch(1 0 0 / 0.1)",
                  boxShadow: on ? `0 0 30px -4px ${e.color}` : "none",
                  transform: on ? "scale(1.02)" : "scale(1)",
                }}
              >
                <div
                  className="absolute -right-3 -top-3 h-14 w-14 rounded-full opacity-60 blur-2xl"
                  style={{ background: e.color }}
                />
                <div className="relative flex h-full flex-col items-center justify-center gap-1">
                  <span className="text-2xl">{e.emoji}</span>
                  <span className="text-xs font-medium">{e.label}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Body map */}
        <div className="mt-6 glass rounded-3xl p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-widest" style={{ color: "var(--mist)" }}>
                Body map
              </p>
              <p className="mt-1 font-display text-lg">Where do you feel it?</p>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-[1fr_1.4fr] gap-3">
            <div className="relative aspect-[3/5] rounded-2xl" style={{ background: "oklch(1 0 0 / 0.04)" }}>
              <svg viewBox="0 0 100 160" className="absolute inset-0 h-full w-full">
                <path
                  d="M50,8 c8,0 12,8 12,15 c0,7 -3,11 -3,14 c4,2 14,4 14,16 l-4,28 c-1,4 -3,7 -3,12 l3,40 c0,4 -3,6 -6,6 c-3,0 -5,-3 -5,-7 l-3,-26 h-10 l-3,26 c0,4 -2,7 -5,7 c-3,0 -6,-2 -6,-6 l3,-40 c0,-5 -2,-8 -3,-12 l-4,-28 c0,-12 10,-14 14,-16 c0,-3 -3,-7 -3,-14 c0,-7 4,-15 12,-15 z"
                  fill="oklch(0.32 0.03 240)"
                  stroke="oklch(1 0 0 / 0.15)"
                />
              </svg>
              {BODY_POINTS.map((p) => {
                const on = bodyActive.includes(p.id);
                return (
                  <button
                    key={p.id}
                    onClick={() => toggle(p.id, setBodyActive, bodyActive)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-all"
                    style={{
                      left: `${p.x}%`,
                      top: `${p.y}%`,
                      width: on ? 22 : 14,
                      height: on ? 22 : 14,
                      background: on ? "var(--gradient-gold)" : "oklch(1 0 0 / 0.2)",
                      boxShadow: on ? "var(--glow-gold)" : "none",
                    }}
                    aria-label={p.label}
                  />
                );
              })}
            </div>
            <div className="flex flex-col gap-2">
              {BODY_POINTS.map((p) => {
                const on = bodyActive.includes(p.id);
                return (
                  <button
                    key={p.id}
                    onClick={() => toggle(p.id, setBodyActive, bodyActive)}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-sm transition-all"
                    style={{
                      background: on ? "oklch(1 0 0 / 0.1)" : "oklch(1 0 0 / 0.04)",
                      border: "1px solid oklch(1 0 0 / 0.08)",
                    }}
                  >
                    <span>{p.label}</span>
                    <span className="text-xs" style={{ color: on ? "var(--gold)" : "var(--muted-foreground)" }}>
                      {on ? "noticed" : "—"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Energy slider */}
        <div className="mt-5 glass rounded-3xl p-4">
          <div className="flex justify-between text-xs" style={{ color: "var(--muted-foreground)" }}>
            <span>Quiet · low energy</span>
            <span>Buzzy · high energy</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={energy}
            onChange={(e) => setEnergy(parseInt(e.target.value))}
            className="mt-2 w-full accent-sage"
            style={{ accentColor: "oklch(0.74 0.07 155)" }}
          />
          <p className="mt-2 text-center font-display text-lg">{energy}%</p>
        </div>
      </div>
    </div>
  );
}
