// Studio Inova: Ebook light theme and cover image fix finalized
import { useState, useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { ExternalLink, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const DETECT_AI_SLIDES = [
  { src: "/detect-ai-slide-1.png?v=2", alt: "Check Content Fast", label: "Check Content Fast" },
  { src: "/detect-ai-slide-2.png?v=2", alt: "Spot AI Text", label: "Spot AI Text" },
  { src: "/detect-ai-slide-3.png?v=2", alt: "AI Text Detector", label: "AI Text Detector" },
  { src: "/detect-ai-slide-4.png?v=2", alt: "Verify Images Clearly", label: "Verify Images Clearly" },
  { src: "/detect-ai-slide-5.png?v=2", alt: "Review Videos Easily", label: "Review Videos Easily" },
  { src: "/detect-ai-slide-6.png?v=2", alt: "See Scan History", label: "See Scan History" },
];

function DetectAICarousel() {
  // Start with the "Scan History" slide active (center index = 2)
  const [current, setCurrent] = useState(2);
  const touchStartX = useRef<number | null>(null);
  const total = DETECT_AI_SLIDES.length;

  const prev = () => setCurrent(i => (i - 1 + total) % total);
  const next = () => setCurrent(i => (i + 1) % total);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) next();
    else if (diff < -40) prev();
    touchStartX.current = null;
  };

  const getOffset = (i: number) => {
    let diff = i - current;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center gap-5 select-none">

      {/* 3D Coverflow stage */}
      <div
        className="relative w-full flex items-center justify-center"
        style={{ perspective: "1400px", height: "420px" }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {DETECT_AI_SLIDES.map((slide, i) => {
          const offset = getOffset(i);
          const abs = Math.abs(offset);
          const isActive = offset === 0;
          const translateX = offset * 90;
          const rotateY = offset * -20;
          const scale = isActive ? 1.0 : 0.75;
          const opacity = abs > 2 ? 0 : isActive ? 1 : abs === 1 ? 0.8 : 0.45;
          const zIndex = 10 - abs;
          return (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={slide.label}
              className="absolute top-1/2 left-1/2 transition-all duration-500 ease-out focus:outline-none"
              style={{
                transform: `translate(-50%, -50%) translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
                opacity,
                zIndex,
                width: "155px",
                aspectRatio: "9/19",
                transformStyle: "preserve-3d",
                pointerEvents: abs > 2 ? "none" : "auto",
                filter: isActive
                  ? "drop-shadow(0 20px 30px rgba(0,122,255,0.28))"
                  : "drop-shadow(0 10px 18px rgba(0,0,0,0.18))",
              }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-contain rounded-[24px]"
                draggable={false}
              />
            </button>
          );
        })}
      </div>

      {/* Active label */}
      <p className="text-sm font-semibold tracking-wide -mt-1" style={{ color: "#007AFF" }}>
        {DETECT_AI_SLIDES[current].label}
      </p>

      {/* Pager dots — 4 dots + 1 active bar */}
      <div className="flex items-center gap-2">
        {DETECT_AI_SLIDES.map((_, i) => {
          const active = i === current;
          return (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: active ? "22px" : "8px",
                height: "8px",
                background: active ? "#007AFF" : "rgba(0,122,255,0.28)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          );
        })}
      </div>

      {/* PREV / NEXT */}
      <div className="flex items-center gap-3">
        <button
          onClick={prev}
          className="flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold tracking-[0.15em] border transition-all hover:scale-105"
          style={{ borderColor: "rgba(0,122,255,0.4)", color: "#007AFF", background: "rgba(0,122,255,0.06)" }}
        >
          <ChevronLeft className="w-3.5 h-3.5" /> PREV
        </button>
        <button
          onClick={next}
          className="flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold tracking-[0.15em] text-white transition-all hover:scale-105"
          style={{ background: "#007AFF" }}
        >
          NEXT <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary/30 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tools engineered for clarity, accuracy, and long-term trust.
          </p>
        </FadeIn>

        {/* ── Our Apps ── */}
        <FadeIn className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Our Apps</h2>
        </FadeIn>

        <div className="flex flex-col gap-16">
          {/* Featured Product: Detect AI */}
          <FadeIn>
            <div className="inova-card border border-border/40 flex flex-col lg:flex-row group">
              <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center">
                <Badge className="w-fit mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-100 border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                  Live & Available
                </Badge>

                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/detect-ai-logo.jpg?v=2"
                    alt="Detect AI"
                    className="w-12 h-12 rounded-xl object-cover shadow-md"
                  />
                  <h2 className="text-3xl font-bold">Detect AI — Detect what's real or fake</h2>
                </div>

                <div
                  className="detect-ai-scroll mb-8 pr-3 space-y-5"
                  style={{ height: "250px", overflowY: "auto" }}
                >
                  {/* Description */}
                  <div className="text-sm leading-relaxed space-y-4">
                    <div>
                      <span className="font-bold" style={{ color: "#007AFF" }}>What it is — </span>
                      <span className="text-muted-foreground">Detect AI is a state-of-the-art security tool developed by Studio Inova to verify digital authenticity. It helps students, educators, journalists, and enterprises confirm whether content was created by a human or an AI.</span>
                    </div>
                    <div>
                      <span className="font-bold" style={{ color: "#007AFF" }}>What it does — </span>
                      <span className="text-muted-foreground">It scans across multiple formats. For <strong className="text-foreground">Text</strong>, it identifies patterns common in LLMs like GPT-4. For <strong className="text-foreground">Images &amp; Videos</strong>, it looks for pixel inconsistencies and deepfake signatures that the human eye cannot detect.</span>
                    </div>
                    <div>
                      <span className="font-bold" style={{ color: "#007AFF" }}>How it works — </span>
                      <span className="text-muted-foreground">Using advanced neural networks, our engine analyzes linguistic variance and metadata. It doesn't just guess — it calculates the probability of AI involvement through billions of data points, returning a precise confidence score.</span>
                    </div>
                    <div>
                      <span className="font-bold" style={{ color: "#007AFF" }}>The Process — </span>
                      <span className="text-muted-foreground">Simply paste your content or upload a file. Our Deep Scan engine runs a 3-layer check: <strong className="text-foreground">Linguistic Analysis</strong>, <strong className="text-foreground">Metadata Verification</strong>, and <strong className="text-foreground">Pattern Recognition</strong> — all in seconds.</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 pt-1">
                    {[
                      "AI Text Detection: Analyze articles, essays, and reports.",
                      "Image & Video Scan: Identify deepfakes and AI-generated visuals.",
                      "High Accuracy: Powered by advanced neural networks for 99%+ precision.",
                      "Simple Interface: Minimalist and easy-to-use UI for everyone.",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-foreground font-medium">
                        <div className="mr-3 mt-0.5 w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center" style={{ background: "rgba(0,122,255,0.12)" }}>
                          <Check className="w-3 h-3" style={{ color: "#007AFF" }} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-fit rounded-full px-8" style={{ background: "#007AFF" }} asChild>
                  <a href="https://detect-ai-official.lovable.app/" target="_blank" rel="noopener noreferrer">
                    Open Detect AI <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>

              {/* Carousel Area */}
              <div className="lg:w-1/2 bg-slate-50 p-8 flex items-center justify-center relative border-t lg:border-t-0 lg:border-l border-border min-h-[540px]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <DetectAICarousel />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ── Studio Inova E-books ── */}
        <div className="mt-24">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Studio Inova E-books</h2>
          </FadeIn>

          <div className="flex flex-col gap-6">

            {/* ── Card: The Art of Prompting ── */}
            <FadeIn delay={0.1}>
              <div className="inova-card overflow-hidden border border-border/40 bg-white shadow-sm">
                <div className="flex flex-col md:flex-row">

                  {/* Left: Book cover */}
                  <div className="md:w-64 lg:w-72 shrink-0 flex items-center justify-center p-8 md:py-10 md:pl-10 md:pr-6 bg-[#F0F9FF]">
                    <div
                      className="relative w-44 md:w-full"
                      style={{
                        filter: "drop-shadow(-8px 14px 28px rgba(0,0,0,0.18)) drop-shadow(3px 3px 0px rgba(0,0,0,0.10))",
                        transform: "perspective(700px) rotateY(-8deg) rotateX(2deg)",
                        transition: "transform 0.4s ease",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.transform = "perspective(700px) rotateY(0deg) rotateX(0deg)")}
                      onMouseLeave={e => (e.currentTarget.style.transform = "perspective(700px) rotateY(-8deg) rotateX(2deg)")}
                    >
                      <img
                        src="/ebook-art-of-prompting.jpg?v=2"
                        alt="The Art of Prompting — by Studio Inova"
                        className="w-full rounded-xl object-contain select-none"
                        draggable={false}
                      />
                      <div className="absolute top-0 left-0 w-2 h-full rounded-l-xl" style={{ background: "linear-gradient(to right, rgba(255,255,255,0.08), transparent)" }} />
                    </div>
                  </div>

                  {/* Right: Text */}
                  <div className="flex-1 flex flex-col justify-center p-7 md:py-10 md:pl-6 md:pr-10 relative">

                    {/* Live badge */}
                    <div className="absolute top-5 right-5">
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full text-[#007aff]" style={{ background: "rgba(14,165,233,0.1)", letterSpacing: "0.04em", border: "1px solid rgba(14,165,233,0.25)" }}>
                        Available Now
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="border-0 text-[#007aff]" style={{ background: "rgba(14,165,233,0.1)" }}>E-book</Badge>
                      <Badge className="border-0" style={{ background: "rgba(0,0,0,0.05)", color: "#555" }}>Studio Inova</Badge>
                      <Badge className="border-0" style={{ background: "rgba(0,0,0,0.05)", color: "#555" }}>2026</Badge>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-1 uppercase text-gray-900">The Art of Prompting</h3>
                    <p className="text-sm font-semibold uppercase tracking-widest mb-5 text-[#007aff]">
                      A Practical Guide to Getting Better Results from AI
                    </p>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4 max-w-lg">
                      Master the skill of communicating with AI. Learn the <strong className="text-gray-900">C.L.E.A.R. framework</strong>, core prompting techniques, and how to direct reasoning models and AI agents to get extraordinary results — regardless of your technical background.
                    </p>

                    <ul className="space-y-2 mb-7">
                      {[
                        "The C.L.E.A.R. framework for structured, high-quality prompts",
                        "Core techniques used by AI power users and researchers",
                        "How to direct reasoning models & autonomous AI agents",
                        "Real-world examples across writing, coding, and business",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-700 font-medium">
                          <div className="mr-3 mt-0.5 w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center" style={{ background: "rgba(14,165,233,0.12)" }}>
                            <Check className="w-3 h-3" style={{ color: "#0EA5E9" }} />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3">
                      <Button
                        className="rounded-full px-8 font-semibold hover:scale-105 transition-transform bg-[#007aff]"
                        style={{ color: "#fff" }}
                        asChild
                      >
                        <a href="https://studioinova.gumroad.com/l/the-art-of-prompting" target="_blank" rel="noopener noreferrer">
                          Get the Ebook <ExternalLink className="ml-2 w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>

      </div>
    </div>
  );
}
