import type { ReactNode } from "react";

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto" style={{ width: "min(390px, 92vw)" }}>
      <div
        className="absolute -inset-10 rounded-[60px] opacity-70 blur-3xl"
        style={{ background: "var(--gradient-aurora)" }}
        aria-hidden
      />
      <div
        className="relative rounded-[48px] p-[6px] shadow-elevated"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.5 0.04 240 / 0.6), oklch(0.2 0.02 260 / 0.8))",
          border: "1px solid oklch(1 0 0 / 0.12)",
        }}
      >
        <div
          className="relative overflow-hidden rounded-[42px]"
          style={{
            height: "min(780px, 84vh)",
            background: "var(--gradient-twilight)",
          }}
        >
          {/* Notch */}
          <div className="pointer-events-none absolute left-1/2 top-2 z-50 h-7 w-32 -translate-x-1/2 rounded-full bg-black/80" />
          {children}
        </div>
      </div>
    </div>
  );
}
