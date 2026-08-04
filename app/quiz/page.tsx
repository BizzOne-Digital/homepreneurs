"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type BizKey = "pbg" | "pp" | "mm" | "bc" | "ep";

const BUSINESSES: Record<BizKey, string> = {
  pbg: "Poo Be Gone",
  pp: "Porch Pirates",
  mm: "Mobile Mechanix",
  bc: "Blu Callers",
  ep: "ECO Panels",
};

type Option = { label: string; scores?: Partial<Record<BizKey, number>> };
type Question = { question: string; header: string; options: Option[] };

const QUESTIONS: Question[] = [
  {
    header: "Your Work Style",
    question: "Which statement sounds most like you?",
    options: [
      { label: "I like simple, physical work outdoors", scores: { pbg: 2, pp: 1 } },
      { label: "I like hands-on mechanical work", scores: { mm: 2 } },
      { label: "I like talking to people and handling calls", scores: { bc: 2 } },
      { label: "I like quick, easy delivery-style work", scores: { pp: 2, pbg: 1 } },
      { label: "I'm open — just show me the easiest path to income" },
    ],
  },
  {
    header: "Your Income Goal",
    question: "What are you aiming for in your first year?",
    options: [
      { label: "$50K–$75K", scores: { pbg: 1, pp: 1 } },
      { label: "$75K–$100K", scores: { mm: 1, bc: 1 } },
      { label: "$100K+", scores: { ep: 2 } },
      { label: "I don't know — I just want something that works" },
    ],
  },
  {
    header: "Your Comfort Level",
    question: "Which type of work feels right to you?",
    options: [
      { label: "Light physical work", scores: { pbg: 2 } },
      { label: "Basic mechanical tasks", scores: { mm: 2 } },
      { label: "Talking to customers", scores: { bc: 2 } },
      { label: "Simple delivery / door-to-door drops", scores: { pp: 2 } },
      { label: "Whatever gets me earning fastest" },
    ],
  },
  {
    header: "Your Schedule",
    question: "How do you want your workweek to look?",
    options: [
      { label: "Flexible — mornings or afternoons" },
      { label: "Weekends optional" },
      { label: "Evenings okay" },
      { label: "I want full control — no rigid hours" },
    ],
  },
  {
    header: "Your Territory",
    question: "Where do you plan to operate?",
    options: [
      { label: "My local city" },
      { label: "My surrounding area" },
      { label: "I'm open — tell me what's available" },
    ],
  },
  {
    header: "Your Comfort With Tools",
    question: "Which one fits you best?",
    options: [
      { label: "I'm comfortable with basic tools", scores: { pbg: 1, ep: 1 } },
      { label: "I can handle simple mechanical tasks", scores: { mm: 2 } },
      { label: "I prefer no tools at all", scores: { bc: 2 } },
      { label: "Doesn't matter — teach me the system" },
    ],
  },
  {
    header: "Your Startup Budget",
    question: "Where do you sit?",
    options: [
      { label: "$10K–$20K" },
      { label: "$20K–$35K" },
      { label: "$35K–$50K" },
      { label: "I just want the best value" },
    ],
  },
  {
    header: "Your Personality",
    question: "Which one feels like you?",
    options: [
      { label: "Quiet, steady, reliable", scores: { pbg: 2 } },
      { label: "Hands-on, practical, problem-solver", scores: { mm: 2, ep: 1 } },
      { label: "Friendly, talkative, customer-focused", scores: { bc: 2 } },
      { label: "Independent, simple-task operator", scores: { pp: 2 } },
      { label: "Doesn't matter — I adapt" },
    ],
  },
  {
    header: "Your Goal Timeline",
    question: "How fast do you want to start earning?",
    options: [
      { label: "Immediately" },
      { label: "Within 30 days" },
      { label: "Within 60–90 days" },
      { label: "I'm exploring — but serious" },
    ],
  },
  {
    header: "Your Decision Style",
    question: "How do you make decisions?",
    options: [
      { label: "Show me the simplest path", scores: { pp: 1, bc: 1 } },
      { label: "Show me the highest-earning path", scores: { ep: 2 } },
      { label: "Show me the lowest-cost path", scores: { pbg: 1, pp: 1 } },
      { label: "Show me the path with the least moving parts", scores: { bc: 2 } },
      { label: "Just match me — you're the expert" },
    ],
  },
];

export default function QuizPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<BizKey, number>>({ pbg: 0, pp: 0, mm: 0, bc: 0, ep: 0 });
  const [answers, setAnswers] = useState<{ header: string; label: string }[]>([]);

  const total = QUESTIONS.length;
  const q = QUESTIONS[step];
  const progress = Math.round((step / total) * 100);

  const choose = (opt: Option) => {
    const next = { ...scores };
    if (opt.scores) {
      (Object.keys(opt.scores) as BizKey[]).forEach(k => {
        next[k] += opt.scores![k] ?? 0;
      });
    }
    setScores(next);
    const nextAnswers = [...answers, { header: q.header, label: opt.label }];
    setAnswers(nextAnswers);

    if (step + 1 < total) {
      setStep(step + 1);
    } else {
      const winner = (Object.keys(next) as BizKey[]).sort((a, b) => next[b] - next[a])[0];
      const summary = nextAnswers.map(a => `${a.header}: ${a.label}`).join(" | ");
      sessionStorage.setItem("quizAnswers", summary);
      router.push(`/contact?business=${encodeURIComponent(BUSINESSES[winner])}`);
    }
  };

  return (
    <section style={{ background: "#0D0D0D", minHeight: "100vh", padding: "10rem 1.5rem 6rem" }}>
      <div className="container-xl" style={{ maxWidth: "700px" }}>
        <div className="tag" style={{ marginBottom: "1.5rem" }}>Find Your Business Match</div>
        <div style={{ width: "100%", height: "6px", background: "#1A1A1A", marginBottom: "2.5rem" }}>
          <div style={{ width: `${progress}%`, height: "100%", background: "#F5C518", transition: "width 0.3s" }} />
        </div>
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6AAB00", fontWeight: 700, marginBottom: "0.75rem" }}>
          Question {step + 1} of {total} — {q.header}
        </p>
        <h1 className="display-heading" style={{ color: "#F9F7F2", fontSize: "clamp(1.6rem,3vw,2.4rem)", marginBottom: "2rem" }}>
          {q.question}
        </h1>
        <div style={{ display: "grid", gap: "0.85rem" }}>
          {q.options.map(opt => (
            <button
              key={opt.label}
              onClick={() => choose(opt)}
              style={{
                textAlign: "left",
                background: "#1A1A1A",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#F9F7F2",
                padding: "1rem 1.25rem",
                fontSize: "0.95rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "border-color 0.2s, transform 0.2s",
                fontFamily: "inherit",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#F5C518"; (e.currentTarget as HTMLElement).style.transform = "translateX(4px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateX(0)"; }}
            >
              {opt.label}
            </button>
          ))}
        </div>
        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            style={{ marginTop: "2rem", background: "none", border: "none", color: "#9E9E9E", fontSize: "0.85rem", cursor: "pointer", fontFamily: "inherit" }}
          >
            ← Back
          </button>
        )}
      </div>
    </section>
  );
}
