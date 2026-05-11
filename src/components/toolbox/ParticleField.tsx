import { useMemo } from "react";

export function ParticleField({ count = 22, className = "" }: { count?: number; className?: string }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        size: Math.random() * 4 + 1.5,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 8,
        opacity: 0.25 + Math.random() * 0.5,
        hue: Math.random() > 0.6 ? "var(--gold)" : "var(--sage)",
      })),
    [count]
  );

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full animate-float-medium"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: p.hue,
            opacity: p.opacity,
            filter: "blur(0.5px)",
            boxShadow: `0 0 ${p.size * 4}px ${p.hue}`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
