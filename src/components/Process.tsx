"use client";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import {
  Activity,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Pause,
  Play,
  RotateCcw,
  Search,
  Server,
} from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Assess",
    icon: Search,
    desc: "Systems audit, vulnerability scan, and compliance check against local data protection requirements.",
    output: "Written audit report",
  },
  {
    n: "02",
    title: "Deploy",
    icon: Server,
    desc: "Firewall, endpoint protection, and any custom systems (FOSA/BOSA, CRM, AML tooling) configured for your environment.",
    output: "Systems configured and running",
  },
  {
    n: "03",
    title: "Train",
    icon: GraduationCap,
    desc: "We train your team on the tools and automation we set up, so you are not left to figure it out alone.",
    output: "ICT staff who can run it",
  },
  {
    n: "04",
    title: "Monitor",
    icon: Activity,
    desc: "Ongoing AI-driven threat detection and support as your systems and risks evolve.",
    output: "Ongoing support",
  },
];

const STEP_DELAY = 220; // stagger between cards when the section first appears
const STEP_MS = 3200; // how long each step stays highlighted while playing
const REVEAL_MS = steps.length * STEP_DELAY + 900;

function ArrowRight({ delay, travelling, tick }: { delay: number; travelling: boolean; tick: number }) {
  return (
    <svg viewBox="0 0 48 14" className="flow-arrow w-12 h-3.5 text-signal overflow-visible" style={{ transitionDelay: `${delay}ms` }} aria-hidden="true">
      <line x1="0" y1="7" x2="44" y2="7" stroke="currentColor" strokeWidth="2" pathLength={1} />
      <path d="M38 1 L46 7 L38 13" fill="none" stroke="currentColor" strokeWidth="2" pathLength={1} />
      {travelling && <circle key={tick} cx="0" cy="7" r="4" className="flow-dot flow-dot-x" />}
    </svg>
  );
}

function ArrowDown({ delay, travelling, tick }: { delay: number; travelling: boolean; tick: number }) {
  return (
    <svg viewBox="0 0 14 36" className="flow-arrow w-3.5 h-9 text-signal overflow-visible" style={{ transitionDelay: `${delay}ms` }} aria-hidden="true">
      <line x1="7" y1="0" x2="7" y2="32" stroke="currentColor" strokeWidth="2" pathLength={1} />
      <path d="M1 26 L7 34 L13 26" fill="none" stroke="currentColor" strokeWidth="2" pathLength={1} />
      {travelling && <circle key={tick} cx="7" cy="0" r="4" className="flow-dot flow-dot-y" />}
    </svg>
  );
}

function StepBox({
  step,
  delay,
  state,
  tick,
  running,
  onSelect,
}: {
  step: (typeof steps)[number];
  delay: number;
  state: "idle" | "active" | "dimmed";
  tick: number;
  running: boolean;
  onSelect: () => void;
}) {
  const Icon = step.icon;
  const active = state === "active";
  return (
    <div
      className="h-full opacity-0 translate-y-4 transition duration-500 ease-out group-data-[visible=true]/flow:opacity-100 group-data-[visible=true]/flow:translate-y-0"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        onClick={onSelect}
        className={`group relative h-full cursor-pointer overflow-hidden border rounded-sm p-5 transition-all duration-500 ease-out hover:border-signal/60 hover:opacity-100 ${
          active
            ? "border-signal bg-panel-active shadow-[0_20px_45px_-20px_rgba(227,30,36,0.6)] lg:-translate-y-1.5"
            : "border-line/10 bg-panel"
        } ${state === "dimmed" ? "opacity-80" : "opacity-100"}`}
      >
        <span
          className="absolute inset-x-0 top-0 h-0.5 bg-signal origin-left scale-x-0 transition-transform duration-700 ease-out group-data-[visible=true]/flow:scale-x-100"
          style={{ transitionDelay: `${delay + 200}ms` }}
          aria-hidden="true"
        />
        <span
          className={`absolute right-4 top-2 font-display text-5xl font-bold select-none transition-colors duration-500 ${
            active ? "text-signal/20" : "text-line/[0.06]"
          }`}
          aria-hidden="true"
        >
          {step.n}
        </span>
        <span
          className={`relative mb-5 flex h-11 w-11 items-center justify-center border rounded-sm transition-colors duration-300 ${
            active
              ? "bg-signal text-graphite border-signal"
              : "bg-signal/10 border-signal/40 text-signal group-hover:bg-signal group-hover:text-graphite"
          }`}
        >
          {active && <span className="absolute inset-0 rounded-sm bg-signal flow-ping" aria-hidden="true" />}
          <Icon className="relative w-5 h-5" strokeWidth={1.75} />
        </span>
        <p className="font-mono text-xs text-signal mb-1">Step {step.n}</p>
        <h3 className="font-display text-xl mb-2">{step.title}</h3>
        <p className="text-muted text-sm mb-5">{step.desc}</p>
        <p className="text-xs border-t border-line/10 pt-3">
          <span className="text-muted">You get: </span>
          <span className="text-ink font-medium">{step.output}</span>
        </p>
        {active && (
          <span
            key={tick}
            className="flow-progress absolute left-0 bottom-0 h-1 bg-signal"
            style={{ animationDuration: `${STEP_MS}ms`, animationPlayState: running ? "running" : "paused" }}
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
}

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(-1);
  const [from, setFrom] = useState(-1);
  const [tick, setTick] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovering, setHovering] = useState(false);

  const activeRef = useRef(-1);

  const running = playing && !hovering;

  const goTo = useCallback((next: number) => {
    setFrom(activeRef.current);
    activeRef.current = next;
    setActive(next);
    setTick((t) => t + 1);
  }, []);

  // Reveal once the section scrolls into view.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // After the reveal, start the walkthrough on step 1.
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => goTo(0), REVEAL_MS);
    return () => clearTimeout(t);
  }, [visible, goTo]);

  // Advance through the steps while playing.
  useEffect(() => {
    if (active < 0 || !running) return;
    const t = setTimeout(() => goTo((active + 1) % steps.length), STEP_MS);
    return () => clearTimeout(t);
  }, [active, running, tick, goTo]);

  const stateOf = (i: number) => (active < 0 ? "idle" : i === active ? "active" : "dimmed");
  const returning = active === 0 && from === steps.length - 1;
  const shown = Math.max(active, 0);

  return (
    <section className="max-w-6xl mx-auto px-6 py-24 border-t border-line/10" id="solutions">
      <h2 className="font-display text-3xl mb-3">How we work</h2>
      <p className="text-muted mb-12 max-w-xl">
        Most engagements follow these four steps, from the first audit to ongoing support.
      </p>

      <div
        ref={ref}
        data-visible={visible}
        className="group/flow"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {/* Desktop: left-to-right flow with a loop back from Monitor to Assess */}
        <ol className="hidden lg:grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch">
          {steps.map((s, i) => (
            <Fragment key={s.n}>
              <li className="list-none">
                <StepBox step={s} delay={i * STEP_DELAY} state={stateOf(i)} tick={tick} running={running} onSelect={() => goTo(i)} />
              </li>
              {i < steps.length - 1 && (
                <li className="list-none flex items-center px-2" aria-hidden="true">
                  <ArrowRight delay={i * STEP_DELAY + 250} travelling={active === i + 1 && from === i} tick={tick} />
                </li>
              )}
            </Fragment>
          ))}
        </ol>
        <div
          className="flow-loop hidden lg:grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] opacity-0 transition-opacity duration-700 group-data-[visible=true]/flow:opacity-100"
          data-returning={returning}
          style={{ transitionDelay: `${steps.length * STEP_DELAY + 300}ms` }}
          aria-hidden="true"
        >
          <div className="relative ml-[50%] h-12">
            <span className="flow-dash-y up left-0 top-0 bottom-0" />
            <span className="flow-dash-x left-0 right-0 bottom-0" />
            <svg viewBox="0 0 14 10" className="absolute -top-1 -left-[6px] w-3.5 h-2.5 text-signal">
              <path d="M1 9 L7 1 L13 9" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          {[0, 1, 2, 3, 4].map((k) => (
            <div key={k} className={`relative h-12 ${k % 2 === 0 ? "w-16" : ""}`}>
              <span className="flow-dash-x left-0 right-0 bottom-0" />
            </div>
          ))}
          <div className="relative mr-[50%] h-12">
            <span className="flow-dash-y down right-0 top-0 bottom-0" />
            <span className="flow-dash-x left-0 right-0 bottom-0" />
          </div>
        </div>
        <p className="hidden lg:flex items-center justify-center gap-2 mt-4 text-sm text-muted">
          <RotateCcw className={`w-4 h-4 text-signal ${returning ? "flow-spin" : ""}`} key={returning ? tick : "still"} />
          What we see while monitoring feeds into the next assessment.
        </p>

        {/* Mobile and tablet: top-to-bottom flow */}
        <ol className="lg:hidden flex flex-col items-center">
          {steps.map((s, i) => (
            <Fragment key={s.n}>
              <li className="list-none w-full max-w-md">
                <StepBox step={s} delay={i * STEP_DELAY} state={stateOf(i)} tick={tick} running={running} onSelect={() => goTo(i)} />
              </li>
              {i < steps.length - 1 && (
                <li className="list-none py-2" aria-hidden="true">
                  <ArrowDown delay={i * STEP_DELAY + 250} travelling={active === i + 1 && from === i} tick={tick} />
                </li>
              )}
            </Fragment>
          ))}
        </ol>
        <p className="lg:hidden flex items-center justify-center gap-2 mt-6 text-sm text-muted text-center">
          <RotateCcw className="w-4 h-4 text-signal shrink-0" />
          What we see while monitoring feeds into the next assessment.
        </p>

        {/* Player controls */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => goTo((shown - 1 + steps.length) % steps.length)}
            aria-label="Previous step"
            className="p-2 border border-line/15 rounded-sm text-muted hover:text-ink hover:border-line/40 transition"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => {
              if (active < 0) goTo(0);
              setPlaying((p) => !p);
            }}
            aria-label={playing ? "Pause walkthrough" : "Play walkthrough"}
            className="flex items-center gap-2 px-4 py-2 border border-signal text-signal rounded-sm text-sm font-medium hover:bg-signal hover:text-graphite transition"
          >
            {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {playing ? "Pause" : "Play"}
          </button>
          <button
            type="button"
            onClick={() => goTo((shown + 1) % steps.length)}
            aria-label="Next step"
            className="p-2 border border-line/15 rounded-sm text-muted hover:text-ink hover:border-line/40 transition"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <span className="ml-2 font-mono text-xs text-muted min-w-[9rem]">
            Step {shown + 1} of {steps.length}: <span className="text-ink">{steps[shown].title}</span>
          </span>
        </div>
      </div>
    </section>
  );
}
