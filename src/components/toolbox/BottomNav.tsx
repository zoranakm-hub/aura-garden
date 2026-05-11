import { Home, Wind, Heart, Compass, Sparkles } from "lucide-react";
import type { Screen } from "./screens";

const items: { id: Screen; label: string; icon: typeof Home }[] = [
  { id: "home", label: "World", icon: Home },
  { id: "breathe", label: "Breathe", icon: Wind },
  { id: "mood", label: "Feel", icon: Heart },
  { id: "quests", label: "Quests", icon: Compass },
  { id: "me", label: "Me", icon: Sparkles },
];

export function BottomNav({
  active,
  onChange,
}: {
  active: Screen;
  onChange: (s: Screen) => void;
}) {
  return (
    <div className="absolute inset-x-3 bottom-3 z-40">
      <div className="glass-strong flex items-center justify-between rounded-3xl px-2 py-2 shadow-soft">
        {items.map(({ id, label, icon: Icon }) => {
          const isActive = id === active;
          return (
            <button
              key={id}
              onClick={() => onChange(id)}
              className="relative flex flex-1 flex-col items-center gap-0.5 rounded-2xl px-2 py-2 transition-all duration-300"
              style={{
                background: isActive ? "var(--gradient-aurora)" : "transparent",
                boxShadow: isActive ? "var(--glow-sage)" : "none",
              }}
            >
              <Icon
                className="h-[18px] w-[18px] transition-colors"
                style={{
                  color: isActive
                    ? "var(--primary-foreground)"
                    : "oklch(0.85 0.02 240)",
                }}
                strokeWidth={isActive ? 2.4 : 1.8}
              />
              <span
                className="text-[10px] font-medium tracking-wide"
                style={{
                  color: isActive
                    ? "var(--primary-foreground)"
                    : "oklch(0.75 0.02 240)",
                }}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
