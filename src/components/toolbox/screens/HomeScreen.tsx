import { Cloud, Moon, Sun, Sparkles, TreePine, Waves } from "lucide-react";
import { ParticleField } from "../ParticleField";

export function HomeScreen() {
  return (
    <div className="relative h-full w-full overflow-y-auto pb-28">
      {/* Sky / horizon */}
      <div className="relative h-72 w-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 110%, oklch(0.55 0.08 155) 0%, oklch(0.42 0.07 220) 40%, oklch(0.28 0.05 270) 75%)",
          }}
        />
        {/* Sun/moon */}
        <div
          className="absolute left-1/2 top-12 h-24 w-24 -translate-x-1/2 rounded-full animate-pulse-glow"
          style={{
            background: "var(--gradient-gold)",
            boxShadow:
              "0 0 80px 10px oklch(0.85 0.13 85 / 0.6), 0 0 180px 40px oklch(0.7 0.12 60 / 0.35)",
          }}
        />
        {/* Distant mountains */}
        <svg viewBox="0 0 400 200" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path
            d="M0,140 L60,80 L110,120 L160,60 L220,110 L280,70 L340,120 L400,90 L400,200 L0,200 Z"
            fill="oklch(0.3 0.04 200)"
            opacity="0.7"
          />
          <path
            d="M0,170 L50,130 L100,160 L170,110 L230,150 L300,120 L360,150 L400,130 L400,200 L0,200 Z"
            fill="oklch(0.24 0.04 220)"
          />
        </svg>
        <ParticleField count={18} />
      </div>

      {/* Greeting */}
      <div className="relative -mt-12 px-5">
        <div className="glass-strong rounded-3xl p-5 shadow-soft animate-fade-up">
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--mist)" }}>
            Tuesday · soft evening
          </p>
          <h1 className="mt-2 font-display text-3xl leading-tight">
            <span className="text-gradient-aurora">Welcome back,</span>
            <br />
            <span style={{ color: "var(--foreground)" }}>Riley</span>
          </h1>
          <p className="mt-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
            Your sanctuary missed you. Take a breath — you're safe here.
          </p>
        </div>
      </div>

      {/* Nervous system meter */}
      <div className="mt-4 px-5">
        <div className="glass rounded-3xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-widest" style={{ color: "var(--mist)" }}>
                Nervous system
              </p>
              <p className="mt-1 font-display text-lg">Gently settling</p>
            </div>
            <div className="relative h-14 w-14">
              <div className="absolute inset-0 rounded-full animate-breathe" style={{ background: "var(--gradient-sage)" }} />
              <Waves className="absolute inset-0 m-auto h-6 w-6" style={{ color: "var(--primary-foreground)" }} />
            </div>
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full"
              style={{ width: "62%", background: "var(--gradient-aurora)" }}
            />
          </div>
        </div>
      </div>

      {/* World tiles */}
      <div className="mt-5 px-5">
        <div className="mb-2 flex items-baseline justify-between">
          <h2 className="font-display text-xl">Your world</h2>
          <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
            Lvl 4 · Forest sanctuary
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <WorldTile icon={TreePine} label="Mossy grove" sub="Unlocked" gradient="var(--gradient-sage)" />
          <WorldTile icon={Moon} label="Quiet lake" sub="Tap to visit" gradient="linear-gradient(135deg, oklch(0.5 0.07 240), oklch(0.35 0.06 280))" />
          <WorldTile icon={Sun} label="Warm clearing" sub="New" gradient="var(--gradient-warmth)" glow />
          <WorldTile icon={Cloud} label="Cloud retreat" sub="3 more rituals" gradient="linear-gradient(135deg, oklch(0.75 0.04 220), oklch(0.55 0.05 250))" locked />
        </div>
      </div>

      {/* Daily ritual */}
      <div className="mt-5 px-5">
        <div
          className="relative overflow-hidden rounded-3xl p-5 shadow-soft"
          style={{ background: "var(--gradient-warmth)" }}
        >
          <ParticleField count={10} />
          <div className="relative">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-black/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider" style={{ color: "var(--primary-foreground)" }}>
              <Sparkles className="h-3 w-3" /> Today's ritual
            </div>
            <h3 className="mt-3 font-display text-2xl leading-tight" style={{ color: "oklch(0.2 0.03 240)" }}>
              A soft landing
            </h3>
            <p className="mt-1 text-sm" style={{ color: "oklch(0.25 0.04 250)" }}>
              4 minutes of grounding · butterfly tapping · firefly breath
            </p>
            <button className="mt-4 rounded-full bg-foreground/90 px-4 py-2 text-sm font-medium" style={{ color: "var(--background)" }}>
              Begin gently →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorldTile({
  icon: Icon,
  label,
  sub,
  gradient,
  locked,
  glow,
}: {
  icon: typeof TreePine;
  label: string;
  sub: string;
  gradient: string;
  locked?: boolean;
  glow?: boolean;
}) {
  return (
    <button
      className="group relative overflow-hidden rounded-2xl p-3 text-left transition-transform duration-500 hover:-translate-y-0.5"
      style={{
        background: gradient,
        boxShadow: glow ? "var(--glow-gold)" : "var(--shadow-soft)",
        opacity: locked ? 0.55 : 1,
      }}
    >
      <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-white/15 blur-2xl" />
      <Icon className="h-5 w-5" style={{ color: "oklch(0.2 0.03 240)" }} />
      <p className="mt-6 font-display text-base leading-tight" style={{ color: "oklch(0.18 0.03 240)" }}>
        {label}
      </p>
      <p className="text-[11px]" style={{ color: "oklch(0.3 0.04 250)" }}>
        {locked ? "Keep going 🌱" : sub}
      </p>
    </button>
  );
}
