import { Link } from "@tanstack/react-router";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { Zap, CheckCircle2, Search, Paintbrush, Code2, Rocket, Compass } from "lucide-react";
import NoaWidget from "@/components/NoaWidget";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden" style={{ backgroundColor: "#f4f6fa" }}>
        {/* Full-bleed background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
        />
        {/* Soft white overlay for text readability */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.55) 45%, rgba(255,255,255,0.7) 100%)",
          }}
        />
        {/* Bottom fade overlay: blue glow fades into the next section */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-[40vh] z-[1]"
          style={{
            background: "linear-gradient(to bottom, rgba(248,249,250,0) 0%, rgba(248,249,250,0.7) 60%, rgba(248,249,250,1) 100%)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 text-center">
          <FadeIn direction="up">
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[0.12em] uppercase leading-[0.85] bg-gradient-to-br from-[#0c1b3a] to-[#1a3a6b] bg-clip-text text-transparent"
              style={{ textShadow: "0 4px 20px rgba(12,27,58,0.1)" }}
            >
              <span className="block">STUDIO</span>
              <span className="block">INOVA</span>
            </h1>
          </FadeIn>


          <FadeIn direction="up" delay={0.24}>
            <p className="text-lg md:text-xl text-muted-foreground font-light tracking-[0.15em] uppercase">
              Innovation Starts Here
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.36}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 rounded-lg text-white font-semibold text-sm transition-all hover:scale-105"
                style={{ backgroundColor: "#2f7dff" }}
              >
                Explore Our Products
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 rounded-lg border-2 font-semibold text-sm transition-all hover:scale-105 hover:text-white"
                style={{ borderColor: "#2f7dff", color: "#2f7dff" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2f7dff")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                Know About Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
      {/* Core Values Section */}
      <section className="relative py-24 bg-secondary">
        {/* Top fade overlay: continues the hero glow fade into this section */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 right-0 h-[140px] z-[1]"
          style={{
            background: "linear-gradient(to bottom, rgba(244,246,250,0.9) 0%, rgba(248,249,250,0) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We measure our success by the clarity and utility we bring to our users.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="inova-card p-8 border border-border/40 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Simple</h3>
                <p className="text-muted-foreground">
                  As a founder-led studio, we keep things minimal. Every product is built with just what's needed — no bloated features, no unnecessary complexity, just clean interfaces that work the way you'd expect.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="inova-card p-8 border border-border/40 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Effective</h3>
                <p className="text-muted-foreground">
                  Functionality is the baseline. Every product here exists because a real problem needed solving — usually one I ran into myself. If a feature doesn't add tangible value, it doesn't make the cut.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="inova-card p-8 border border-border/40 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Our Philosophy</h3>
                <p className="text-muted-foreground">
                  Every product starts with a plan — deciding exactly what it needs to do before a single line of code is written. It's built carefully against that plan, then released. But the work doesn't stop at launch — each product keeps evolving, with new updates and improvements added over time as it's used and understood better.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* What We Build Section */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Build</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Studio Inova builds focused SaaS products that solve one real problem well. Our first product is TrueOpen.
            </p>
            <Button asChild className="mt-8" size="lg">
              <Link to="/products">See Our Products</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <FadeIn className="text-center mb-14">
            <p className="text-sm font-semibold text-[#007AFF] uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1F3C] mb-4">Our Approach</h2>
            <p className="text-[#4A5568] max-w-2xl mx-auto">
              How we build our products at Studio Inova.
            </p>
          </FadeIn>

          {/* Image Banner */}
          <FadeIn>
            <div className="relative mb-14 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/our-approach.jpg"
                alt="Studio Inova workspace"
                className="w-full object-cover h-56 md:h-72"
              />
              {/* Mobile: text below the image */}
              <div className="block md:hidden bg-[#0D1F3C] px-6 py-5">
                <p className="text-white/70 text-xs font-medium uppercase tracking-widest mb-1">Studio Inova</p>
                <p className="text-white text-lg font-bold leading-snug">From idea to launch —<br/>every step, engineered.</p>
              </div>
              {/* Desktop: gradient overlay on image */}
              <div className="hidden md:flex absolute inset-0 bg-gradient-to-r from-[#0D1F3C]/60 via-transparent to-transparent items-center px-10">
                <div>
                  <p className="text-white/80 text-sm font-medium uppercase tracking-widest mb-1">Studio Inova</p>
                  <p className="text-white text-3xl font-bold leading-snug">From idea to launch —<br/>every step, engineered.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 2×2 Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                icon: Search,
                title: "Research & Ideas",
                desc: "We start by identifying real problems worth solving — studying user needs, market gaps, and emerging technology to shape product concepts.",
              },
              {
                step: "02",
                icon: Paintbrush,
                title: "Minimalist Design",
                desc: "We design clean, distraction-free interfaces that put the user first — stripping away everything unnecessary until only clarity remains.",
              },
              {
                step: "03",
                icon: Code2,
                title: "AI Integration",
                desc: "We use AI only where it genuinely improves the product, and keep everything else simple and reliable.",
              },
              {
                step: "04",
                icon: Rocket,
                title: "Continuous Improvement",
                desc: "We treat launch as the beginning — gathering feedback, refining features, and iterating until every product earns lasting trust.",
              },
            ].map(({ step, icon: Icon, title, desc }, i) => (
              <FadeIn key={step} delay={i * 0.1}>
                <div
                  className="bg-white rounded-2xl p-7 h-full flex flex-col gap-5 border border-white/80"
                  style={{
                    boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                    borderRadius: "16px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 40px rgba(0,122,255,0.08)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 30px rgba(0,0,0,0.03)";
                  }}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-[#007AFF]/10 flex items-center justify-center text-[#007AFF]">
                    <Icon className="w-7 h-7" strokeWidth={1.75} />
                  </div>
                  {/* Step + Title */}
                  <div>
                    <span className="text-xs font-bold text-[#007AFF] tracking-widest">{step}</span>
                    <h3 className="text-lg font-bold text-[#0D1F3C] mt-0.5">{title}</h3>
                  </div>
                  {/* Description */}
                  <p className="text-sm text-[#718096] leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      <NoaWidget />
    </div>
  );
}
