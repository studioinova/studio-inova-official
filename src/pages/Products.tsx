import { useState, useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { ExternalLink, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const DETECT_AI_SLIDES = [
  { src: "/detect-ai-slide-1.png", alt: "Detect AI — Main Interface" },
  { src: "/detect-ai-slide-2.png", alt: "Detect AI — AI Text Detector" },
  { src: "/detect-ai-slide-3.png", alt: "Detect AI — Scan Results" },
  { src: "/detect-ai-slide-4.png", alt: "Detect AI — Scan History" },
];

function DetectAICarousel() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = () => setCurrent(i => (i === 0 ? DETECT_AI_SLIDES.length - 1 : i - 1));
  const next = () => setCurrent(i => (i === DETECT_AI_SLIDES.length - 1 ? 0 : i + 1));

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

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-4 select-none">
      {/* Phone frame */}
      <div className="relative flex items-center justify-center w-full">
        {/* Left arrow */}
        <button
          onClick={prev}
          className="absolute left-0 z-10 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-opacity hover:opacity-80"
          style={{ background: "#007AFF" }}
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        {/* Slide */}
        <div
          className="mx-12 rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
          style={{ width: "210px", aspectRatio: "9/16", background: "#fff" }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <img
            src={DETECT_AI_SLIDES[current].src}
            alt={DETECT_AI_SLIDES[current].alt}
            className="w-full h-full object-cover transition-opacity duration-300"
            style={{ display: "block" }}
          />
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          className="absolute right-0 z-10 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-opacity hover:opacity-80"
          style={{ background: "#007AFF" }}
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center gap-2">
        {DETECT_AI_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all"
            style={{
              width: i === current ? "20px" : "8px",
              height: "8px",
              background: i === current ? "#007AFF" : "rgba(0,122,255,0.25)",
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
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
            <div className="inova-card overflow-hidden border border-border/40 flex flex-col lg:flex-row group">
              <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center">
                <Badge className="w-fit mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-100 border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                  Live & Available
                </Badge>

                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/detect-ai-logo.jpg"
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
              <div className="lg:w-1/2 bg-slate-50 p-8 flex items-center justify-center relative overflow-hidden border-t lg:border-t-0 lg:border-l border-border min-h-[400px]">
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

            {/* ── Card 1: Zero Knowledge to App Builder — Featured Full-Width Horizontal ── */}
            <FadeIn delay={0.1}>
              <div className="inova-card overflow-hidden border border-border/40 bg-white shadow-md">
                <div className="flex flex-col md:flex-row">

                  {/* Left: Book cover */}
                  <div className="md:w-64 lg:w-72 shrink-0 flex items-center justify-center p-8 md:py-10 md:pl-10 md:pr-6">
                    <div
                      className="relative w-44 md:w-full"
                      style={{
                        filter: "drop-shadow(-8px 14px 28px rgba(0,0,0,0.32)) drop-shadow(2px 2px 0px rgba(0,0,0,0.2))",
                        transform: "perspective(700px) rotateY(8deg) rotateX(2deg)",
                        transition: "transform 0.4s ease",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.transform = "perspective(700px) rotateY(0deg) rotateX(0deg)")}
                      onMouseLeave={e => (e.currentTarget.style.transform = "perspective(700px) rotateY(8deg) rotateX(2deg)")}
                    >
                      <img src="/ebook-cover.jpg" alt="Zero Knowledge to App Builder" className="w-full rounded-xl" style={{ display: "block" }} />
                      <div className="absolute top-0 left-0 w-2.5 h-full rounded-l-xl" style={{ background: "linear-gradient(to right, rgba(255,255,255,0.2), transparent)" }} />
                    </div>
                  </div>

                  {/* Right: Text */}
                  <div className="flex-1 flex flex-col justify-center p-8 md:py-10 md:pl-4 md:pr-10 relative">

                    {/* Buy Now badge */}
                    <div className="absolute top-5 right-5">
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full shadow" style={{ background: "#007AFF", color: "#fff", letterSpacing: "0.04em" }}>
                        Buy Now
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="border-0" style={{ background: "rgba(0,122,255,0.1)", color: "#007AFF" }}>E-book</Badge>
                      <Badge className="border-0" style={{ background: "rgba(0,122,255,0.07)", color: "#007AFF" }}>2026</Badge>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-1">Zero Knowledge to App Builder</h3>
                    <p className="text-sm mb-5" style={{ color: "#007AFF" }}>How anyone can build apps using AI — without coding.</p>

                    <div className="detect-ai-scroll mb-6 pr-2 text-sm leading-relaxed space-y-3" style={{ height: "150px", overflowY: "auto" }}>
                      <div>
                        <span className="font-bold" style={{ color: "#007AFF" }}>The Goal — </span>
                        <span className="text-muted-foreground">This book is designed to change your mindset. Learn how to turn ideas into real applications using the power of AI.</span>
                      </div>
                      <div>
                        <span className="font-bold" style={{ color: "#007AFF" }}>What You Will Learn — </span>
                      </div>
                      <ul className="space-y-2 pl-1">
                        {[
                          "The Zero Knowledge Mindset.",
                          "Essential AI tools for building without code.",
                          "Planning your first app, screens, and flows.",
                          "Fixing errors and moving from prototype to a real app.",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-muted-foreground">
                            <div className="mt-0.5 w-4 h-4 flex-shrink-0 rounded-full flex items-center justify-center" style={{ background: "rgba(0,122,255,0.1)" }}>
                              <Check className="w-2.5 h-2.5" style={{ color: "#007AFF" }} />
                            </div>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="text-muted-foreground text-xs pt-1">By Studio Inova · 2026</p>
                    </div>

                    <Button className="rounded-full px-8 w-fit" style={{ background: "#007AFF", color: "#fff" }}>
                      Get the E-book
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* ── Card 2: The Art of Prompt Engineering ── */}
            <FadeIn delay={0.2}>
              <div className="inova-card overflow-hidden border border-border/40 bg-white shadow-sm">
                <div className="flex flex-col md:flex-row">

                  {/* Left: Placeholder cover */}
                  <div className="md:w-52 lg:w-60 shrink-0 flex items-center justify-center p-7 md:py-8 md:pl-8 md:pr-5">
                    <div
                      className="relative w-36 md:w-full"
                      style={{
                        filter: "drop-shadow(-6px 10px 22px rgba(0,0,0,0.35)) drop-shadow(2px 2px 0px rgba(0,0,0,0.2))",
                        transform: "perspective(700px) rotateY(-8deg) rotateX(2deg)",
                        transition: "transform 0.4s ease",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.transform = "perspective(700px) rotateY(0deg) rotateX(0deg)")}
                      onMouseLeave={e => (e.currentTarget.style.transform = "perspective(700px) rotateY(-8deg) rotateX(2deg)")}
                    >
                      <div className="w-full rounded-xl overflow-hidden flex items-center justify-center" style={{ aspectRatio: "2/3", background: "linear-gradient(160deg, #0a1628 0%, #0d2147 55%, #081020 100%)" }}>
                        <span className="text-white font-bold text-xl tracking-wide select-none">Coming Soon</span>
                      </div>
                      <div className="absolute top-0 left-0 w-2 h-full rounded-l-xl" style={{ background: "linear-gradient(to right, rgba(255,255,255,0.12), transparent)" }} />
                    </div>
                  </div>

                  {/* Right: Text */}
                  <div className="flex-1 flex flex-col justify-center p-7 md:py-8 md:pl-4 md:pr-8 relative">

                    {/* Coming Soon badge */}
                    <div className="absolute top-5 right-5">
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full" style={{ background: "rgba(0,122,255,0.1)", color: "#007AFF", letterSpacing: "0.04em", border: "1px solid rgba(0,122,255,0.25)" }}>
                        Coming Soon
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge className="border-0" style={{ background: "rgba(0,122,255,0.1)", color: "#007AFF" }}>E-book</Badge>
                      <Badge className="border-0" style={{ background: "rgba(0,122,255,0.07)", color: "#007AFF" }}>2026</Badge>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold mb-1">The Art of Prompt Engineering</h3>
                    <p className="text-sm mb-4" style={{ color: "#007AFF" }}>Master the language of AI to get professional results.</p>

                    <div className="detect-ai-scroll mb-5 pr-2 text-sm leading-relaxed" style={{ height: "130px", overflowY: "auto" }}>
                      <span className="text-muted-foreground">Learn how to communicate with AI like a pro. This guide will teach you how to write perfect prompts for coding, designing, and business automation. Unlock the full potential of every AI tool you use — from writing to development to creative work.</span>
                    </div>

                    <Button
                      className="rounded-full px-8 w-fit"
                      style={{ background: "rgba(0,122,255,0.55)", color: "#fff", cursor: "not-allowed" }}
                      disabled
                    >
                      Notify Me
                    </Button>
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
