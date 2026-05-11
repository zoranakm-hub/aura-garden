import { Award, Eye, Sliders, Volume2, Palette } from "lucide-react";
import { ParticleField } from "../ParticleField";
import { useState } from "react";

export function MeScreen() {
  const [sensory, setSensory] = useState(false);
  const [lowMotion, setLowMotion] = useState(false);

  return (
    <div className="relative h-full w-full overflow-y-auto pb-28 pt-14">
      <ParticleField count={10} />
      <div className="px-5">
        {/* Avatar */}
        <div className="glass-strong relative overflow-hidden rounded-3xl p-5">
          <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full opacity-60 blur-3xl" style={{ background: "var(--gradient-sage)" }} />
          <div className="absolute -right-10 -bottom-10 h-44 w-44 rounded-full opacity-50 blur-3xl" style={{ background: "var(--gradient-warmth)" }} />
          <div className="relative flex items-center gap-4">
            <div className="relative h-20 w-20 shrink-0">
              <div className="absolute inset-0 rounded-full animate-breathe" style={{ background: "var(--gradient-aurora)" }} />
              <div
                className="absolute inset-2 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 35% 30%, oklch(0.95 0.04 90), oklch(0.55 0.07 200))",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center font-display text-2xl" style={{ color: "oklch(0.2 0.03 240)" }}>
                R
              </div>
            </div>
            <div>
              <p className="font-display text-2xl">Riley</p>
              <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                Companion: a small glowing fox · Vibe: dusk sage
              </p>
              <button
                className="mt-2 rounded-full px-3 py-1 text-xs font-medium"
                style={{ background: "oklch(1 0 0 / 0.1)", border: "1px solid oklch(1 0 0 / 0.12)" }}
              >
                Customize
              </button>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="mt-5">
          <div className="mb-2 flex items-baseline justify-between">
            <h3 className="font-display text-xl">Growth I'm proud of</h3>
            <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
              12 unlocked
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "First breath", g: "var(--gradient-sage)" },
              { label: "Body check", g: "var(--gradient-warmth)" },
              { label: "Soft no", g: "linear-gradient(135deg, oklch(0.7 0.12 30), oklch(0.5 0.1 350))" },
              { label: "Rest day", g: "linear-gradient(135deg, oklch(0.6 0.09 270), oklch(0.4 0.08 230))" },
            ].map((b) => (
              <div key={b.label} className="flex flex-col items-center gap-1">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-soft"
                  style={{ background: b.g }}
                >
                  <Award className="h-6 w-6" style={{ color: "oklch(0.18 0.03 240)" }} />
                </div>
                <span className="text-center text-[10px]" style={{ color: "var(--muted-foreground)" }}>
                  {b.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Accessibility */}
        <div className="mt-5 glass rounded-3xl p-4">
          <h3 className="font-display text-lg">Make it feel right</h3>
          <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
            Sensory-safe options for your nervous system.
          </p>
          <div className="mt-3 space-y-2">
            <Toggle
              icon={Eye}
              label="Low stimulation mode"
              sub="Softer colors, fewer particles"
              on={sensory}
              onChange={setSensory}
            />
            <Toggle
              icon={Sliders}
              label="Reduce motion"
              sub="Calm animations, no surprises"
              on={lowMotion}
              onChange={setLowMotion}
            />
            <Row icon={Volume2} label="Soundscape" value="Soft rain" />
            <Row icon={Palette} label="World theme" value="Forest sanctuary" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Toggle({
  icon: Icon,
  label,
  sub,
  on,
  onChange,
}: {
  icon: typeof Eye;
  label: string;
  sub: string;
  on: boolean;
  onChange: (b: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!on)}
      className="flex w-full items-center gap-3 rounded-2xl p-3 text-left transition-colors"
      style={{ background: "oklch(1 0 0 / 0.04)", border: "1px solid oklch(1 0 0 / 0.08)" }}
    >
      <div
        className="flex h-9 w-9 items-center justify-center rounded-xl"
        style={{ background: on ? "var(--gradient-sage)" : "oklch(1 0 0 / 0.06)" }}
      >
        <Icon className="h-4 w-4" style={{ color: on ? "oklch(0.2 0.03 240)" : "var(--foreground)" }} />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-[11px]" style={{ color: "var(--muted-foreground)" }}>
          {sub}
        </p>
      </div>
      <span
        className="relative h-6 w-10 rounded-full transition-colors"
        style={{ background: on ? "var(--sage)" : "oklch(1 0 0 / 0.15)" }}
      >
        <span
          className="absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all"
          style={{ left: on ? "calc(100% - 22px)" : 2 }}
        />
      </span>
    </button>
  );
}

function Row({ icon: Icon, label, value }: { icon: typeof Eye; label: string; value: string }) {
  return (
    <div
      className="flex w-full items-center gap-3 rounded-2xl p-3"
      style={{ background: "oklch(1 0 0 / 0.04)", border: "1px solid oklch(1 0 0 / 0.08)" }}
    >
      <div
        className="flex h-9 w-9 items-center justify-center rounded-xl"
        style={{ background: "oklch(1 0 0 / 0.06)" }}
      >
        <Icon className="h-4 w-4" />
      </div>
      <p className="flex-1 text-sm font-medium">{label}</p>
      <span className="text-xs" style={{ color: "var(--gold)" }}>
        {value}
      </span>
    </div>
  );
}
