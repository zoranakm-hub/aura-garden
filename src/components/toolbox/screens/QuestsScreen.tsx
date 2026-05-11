import { Compass, Feather, Flame, Leaf, Star, Lock } from "lucide-react";
import { ParticleField } from "../ParticleField";

const quests = [
  {
    icon: Leaf,
    title: "The five senses path",
    desc: "Walk a grounding loop through what you can see, hear, touch.",
    minutes: 3,
    color: "var(--gradient-sage)",
    progress: 0.4,
  },
  {
    icon: Feather,
    title: "Letter to the overwhelm",
    desc: "Write to the part of you that's holding too much.",
    minutes: 6,
    color: "var(--gradient-warmth)",
    progress: 0,
  },
  {
    icon: Flame,
    title: "Tend the inner ember",
    desc: "Notice what's still warm and alive inside you.",
    minutes: 4,
    color: "linear-gradient(135deg, oklch(0.7 0.13 40), oklch(0.5 0.1 20))",
    progress: 0.8,
  },
  {
    icon: Star,
    title: "Trust your no",
    desc: "An interactive story about boundaries — gently.",
    minutes: 8,
    color: "linear-gradient(135deg, oklch(0.55 0.1 290), oklch(0.4 0.08 250))",
    locked: true,
  },
];

export function QuestsScreen() {
  return (
    <div className="relative h-full w-full overflow-y-auto pb-28 pt-14">
      <ParticleField count={12} />
      <div className="px-5">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em]" style={{ color: "var(--mist)" }}>
          <Compass className="h-3.5 w-3.5" /> Exploration map
        </div>
        <h2 className="mt-1 font-display text-3xl leading-tight">
          Tiny, brave <span className="text-gradient-aurora">inner journeys</span>
        </h2>

        {/* Streak panel */}
        <div className="mt-4 glass-strong relative overflow-hidden rounded-3xl p-4">
          <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full opacity-50 blur-3xl" style={{ background: "var(--gradient-gold)" }} />
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-widest" style={{ color: "var(--mist)" }}>
                Calm streak
              </p>
              <p className="font-display text-2xl">12 gentle days</p>
              <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                No pressure. Rest counts too.
              </p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="flex gap-1">
                {Array.from({ length: 7 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-6 w-2 rounded-full"
                    style={{
                      background: i < 5 ? "var(--gradient-gold)" : "oklch(1 0 0 / 0.15)",
                      boxShadow: i < 5 ? "0 0 12px oklch(0.85 0.13 85 / 0.5)" : "none",
                    }}
                  />
                ))}
              </div>
              <span className="text-[10px] uppercase tracking-widest" style={{ color: "var(--muted-foreground)" }}>
                this week
              </span>
            </div>
          </div>
        </div>

        {/* Quest list */}
        <div className="mt-5 space-y-3">
          {quests.map((q, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-3xl p-4 shadow-soft"
              style={{
                background: q.locked ? "oklch(1 0 0 / 0.04)" : q.color,
                opacity: q.locked ? 0.6 : 1,
              }}
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/15 blur-2xl" />
              <div className="relative flex items-start gap-3">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
                  style={{
                    background: q.locked ? "oklch(1 0 0 / 0.08)" : "oklch(1 0 0 / 0.2)",
                  }}
                >
                  {q.locked ? (
                    <Lock className="h-5 w-5" style={{ color: "var(--muted-foreground)" }} />
                  ) : (
                    <q.icon className="h-5 w-5" style={{ color: "oklch(0.18 0.03 240)" }} />
                  )}
                </div>
                <div className="flex-1">
                  <p
                    className="font-display text-lg leading-tight"
                    style={{ color: q.locked ? "var(--foreground)" : "oklch(0.18 0.03 240)" }}
                  >
                    {q.title}
                  </p>
                  <p
                    className="mt-0.5 text-xs"
                    style={{ color: q.locked ? "var(--muted-foreground)" : "oklch(0.28 0.04 250)" }}
                  >
                    {q.desc}
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-[11px]">
                    <span
                      className="rounded-full bg-black/15 px-2 py-0.5"
                      style={{ color: q.locked ? "var(--muted-foreground)" : "oklch(0.2 0.03 240)" }}
                    >
                      {q.minutes} min
                    </span>
                    {!q.locked && q.progress! > 0 && (
                      <span className="rounded-full bg-black/15 px-2 py-0.5" style={{ color: "oklch(0.2 0.03 240)" }}>
                        {Math.round(q.progress! * 100)}% explored
                      </span>
                    )}
                    {q.locked && (
                      <span style={{ color: "var(--muted-foreground)" }}>Unlocks at day 14</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
