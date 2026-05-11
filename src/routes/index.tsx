import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, Shield, Heart, ArrowRight } from "lucide-react";
import { PhoneFrame } from "@/components/toolbox/PhoneFrame";
import { BottomNav } from "@/components/toolbox/BottomNav";
import type { Screen } from "@/components/toolbox/screens";
import { HomeScreen } from "@/components/toolbox/screens/HomeScreen";
import { BreatheScreen } from "@/components/toolbox/screens/BreatheScreen";
import { MoodScreen } from "@/components/toolbox/screens/MoodScreen";
import { QuestsScreen } from "@/components/toolbox/screens/QuestsScreen";
import { MeScreen } from "@/components/toolbox/screens/MeScreen";
import { ParticleField } from "@/components/toolbox/ParticleField";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [screen, setScreen] = useState<Screen>("home");
  const [onboarded, setOnboarded] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 10%, oklch(0.4 0.09 290 / 0.6), transparent 70%), radial-gradient(50% 40% at 90% 30%, oklch(0.45 0.07 180 / 0.5), transparent 70%), radial-gradient(70% 60% at 50% 100%, oklch(0.35 0.06 250 / 0.7), transparent 70%)",
        }}
      />
      <ParticleField count={28} className="opacity-60" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-10 lg:flex-row lg:items-center lg:gap-16 lg:py-16">
        {/* Left — pitch */}
        <section className="flex-1 lg:max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs">
            <Sparkles className="h-3.5 w-3.5" style={{ color: "var(--gold)" }} />
            <span style={{ color: "var(--mist)" }}>For teens · 10–18 · safe & sensory-aware</span>
          </div>
          <h1 className="mt-4 font-display text-5xl leading-[1.02] tracking-tight md:text-6xl">
            A <span className="text-gradient-aurora">cozy world</span> for the
            <br /> feelings nobody taught you.
          </h1>
          <p className="mt-5 max-w-md text-base" style={{ color: "var(--muted-foreground)" }}>
            My Toolbox is a calming sanctuary that turns nervous-system care into
            something you actually want to open. Breathe, map your inner weather,
            explore tiny brave quests — and grow a world that grows with you.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setOnboarded(true)}
              className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold shadow-soft transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--gradient-gold)", color: "oklch(0.2 0.03 240)" }}
            >
              Enter your sanctuary
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              className="rounded-full px-5 py-3 text-sm font-medium glass"
              onClick={() => setScreen("breathe")}
            >
              Try a breath →
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3">
            <Pill icon={Heart} label="Emotionally safe" />
            <Pill icon={Shield} label="No streak shame" />
            <Pill icon={Sparkles} label="Sensory aware" />
          </div>
        </section>

        {/* Right — phone */}
        <section className="relative flex-1">
          <PhoneFrame>
            {!onboarded ? (
              <Onboarding onDone={() => setOnboarded(true)} />
            ) : (
              <>
                <div className="absolute inset-0">
                  {screen === "home" && <HomeScreen />}
                  {screen === "breathe" && <BreatheScreen />}
                  {screen === "mood" && <MoodScreen />}
                  {screen === "quests" && <QuestsScreen />}
                  {screen === "me" && <MeScreen />}
                </div>
                <BottomNav active={screen} onChange={setScreen} />
              </>
            )}
          </PhoneFrame>
        </section>
      </div>

      {/* Feature strip */}
      <section className="relative mx-auto max-w-6xl px-6 pb-24">
        <h2 className="font-display text-3xl md:text-4xl">
          A whole <span className="text-gradient-aurora">inner world</span> in your pocket
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <FeatureCard
            title="A world that grows with you"
            body="Unlock cozy environments — mossy groves, quiet lakes, warm clearings — as you practice regulation."
            gradient="var(--gradient-sage)"
          />
          <FeatureCard
            title="Inner weather, not data"
            body="Track emotions as orbs, weather, and body maps — never clinical, always curious."
            gradient="var(--gradient-warmth)"
          />
          <FeatureCard
            title="Quests instead of lectures"
            body="Tiny brave journeys teach grounding, boundaries, and self-trust experientially."
            gradient="linear-gradient(135deg, oklch(0.55 0.1 290), oklch(0.4 0.08 230))"
          />
        </div>
      </section>

      <footer className="relative mx-auto max-w-6xl px-6 pb-12 text-center text-xs" style={{ color: "var(--muted-foreground)" }}>
        Built with care · My Toolbox is a companion, not a replacement for support. If you're in crisis, please reach out to someone who can be with you.
      </footer>
    </main>
  );
}

function Pill({ icon: Icon, label }: { icon: typeof Heart; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl glass px-3 py-2.5 text-xs">
      <Icon className="h-4 w-4" style={{ color: "var(--sage)" }} />
      <span>{label}</span>
    </div>
  );
}

function FeatureCard({ title, body, gradient }: { title: string; body: string; gradient: string }) {
  return (
    <div className="relative overflow-hidden rounded-3xl glass-strong p-6 shadow-soft">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-60 blur-3xl" style={{ background: gradient }} />
      <div className="relative">
        <div className="h-10 w-10 rounded-2xl" style={{ background: gradient, boxShadow: "var(--glow-sage)" }} />
        <h3 className="mt-4 font-display text-xl">{title}</h3>
        <p className="mt-1 text-sm" style={{ color: "var(--muted-foreground)" }}>
          {body}
        </p>
      </div>
    </div>
  );
}

function Onboarding({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);
  const steps = [
    {
      title: "Hi. You made it.",
      body: "This is a soft place. No streaks to lose, no perfect to be — just you, noticing.",
      cta: "Begin",
    },
    {
      title: "Pick a sanctuary",
      body: "Choose where your world lives. You can change this anytime.",
      cta: "Forest",
      choices: ["Forest", "Lake", "Bedroom", "Island"],
    },
    {
      title: "One last thing",
      body: "I'll meet you where you are today — soft, buzzy, foggy, tender. There's no wrong weather.",
      cta: "Open my world",
    },
  ];
  const s = steps[step];

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-between px-6 pb-10 pt-20 text-center">
      <ParticleField count={20} />
      <div className="relative z-10 mt-6 flex flex-col items-center">
        <div className="relative h-32 w-32">
          <div className="absolute inset-0 rounded-full animate-breathe" style={{ background: "var(--gradient-aurora)" }} />
          <div
            className="absolute inset-3 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, oklch(0.95 0.05 90), oklch(0.55 0.08 200))",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 px-2">
        <h2 className="font-display text-3xl leading-tight text-gradient-aurora">{s.title}</h2>
        <p className="mt-3 text-sm" style={{ color: "var(--mist)" }}>
          {s.body}
        </p>

        {s.choices && (
          <div className="mt-4 grid grid-cols-2 gap-2">
            {s.choices.map((c) => (
              <div
                key={c}
                className="rounded-2xl px-3 py-3 text-sm glass"
                style={{ border: "1px solid oklch(1 0 0 / 0.12)" }}
              >
                {c}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="relative z-10 flex w-full flex-col items-center gap-3">
        <div className="flex gap-1.5">
          {steps.map((_, i) => (
            <span
              key={i}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: i === step ? 22 : 6,
                background: i === step ? "var(--gold)" : "oklch(1 0 0 / 0.2)",
              }}
            />
          ))}
        </div>
        <button
          onClick={() => (step < steps.length - 1 ? setStep(step + 1) : onDone())}
          className="w-full rounded-full px-5 py-3 text-sm font-semibold shadow-soft"
          style={{ background: "var(--gradient-gold)", color: "oklch(0.2 0.03 240)" }}
        >
          {s.cta}
        </button>
      </div>
    </div>
  );
}
