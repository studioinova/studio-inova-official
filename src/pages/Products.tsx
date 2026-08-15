// Studio Inova: Ebook light theme and cover image fix finalized
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { ExternalLink, Check, MailSearch } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import trueOpenShot from "@/assets/trueopen-screenshot.png.asset.json";



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

        {/* ── Our Tools ── */}
        <FadeIn className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Our Tools</h2>
        </FadeIn>

        <div className="flex flex-col gap-16">

          {/* Featured Product: TrueOpen */}
          <FadeIn>
            <div className="inova-card border border-border/40 flex flex-col lg:flex-row group">
              <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center">
                <Badge className="w-fit mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-100 border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                  Live
                </Badge>

                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                    style={{ background: "#007AFF" }}
                  >
                    <MailSearch className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <h2 className="text-3xl font-bold">TrueOpen — See what really happened after you hit send</h2>
                </div>

                <div className="mb-8 pr-3 space-y-5">
                  <div className="text-sm leading-relaxed space-y-4">
                    <div>
                      <span className="font-bold" style={{ color: "#007AFF" }}>What it is — </span>
                      <span className="text-muted-foreground">TrueOpen is a free tool for solo newsletter writers that reveals their real email engagement — filtering out fake "opens" caused by Apple Mail Privacy Protection, and showing an honest Adjusted Engagement Score alongside the raw open rate.</span>
                    </div>
                    <div>
                      <span className="font-bold" style={{ color: "#007AFF" }}>How it works — </span>
                      <span className="text-muted-foreground">100% client-side, no ESP account access needed. Paste your email send data and TrueOpen analyzes it right in your browser — your data never leaves your device.</span>
                    </div>
                  </div>

                  <ul className="space-y-3 pt-1">
                    {[
                      "Reveals real engagement by filtering fake Apple Mail Privacy opens.",
                      "Honest Adjusted Engagement Score alongside the raw open rate.",
                      "100% client-side — no ESP account access required.",
                      "Free & built for solo newsletter writers.",
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
                  <a href="https://honest-email-insights.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Open TrueOpen <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>

              {/* Screenshot Visual Area — flat neutral panel (image has its own background/shadow) */}
              <div className="lg:w-1/2 bg-white p-6 md:p-8 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-border min-h-[420px]">
                <img
                  src={trueOpenShot.url}
                  alt="TrueOpen dashboard showing adjusted engagement score versus raw open rate"
                  className="w-full max-w-[520px] h-auto object-contain select-none"
                  loading="lazy"
                  draggable={false}
                />
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
