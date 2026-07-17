import { Link } from "@tanstack/react-router";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { Zap, ShieldCheck, CheckCircle2, Smartphone, Cpu, Palette, Search, Paintbrush, Code2, Rocket, GraduationCap, Compass } from "lucide-react";
import NoaWidget from "@/components/NoaWidget";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-white">
        {/* Soft blue glow from bottom-left */}
        <div
          className="absolute bottom-0 left-0 w-[60vw] h-[60vh] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 100% at 0% 100%, rgba(0, 122, 255, 0.12) 0%, transparent 70%)",
          }}
        />
        {/* Soft blue glow from bottom-right */}
        <div
          className="absolute bottom-0 right-0 w-[60vw] h-[60vh] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 100% at 100% 100%, rgba(0, 122, 255, 0.10) 0%, transparent 70%)",
          }}
        />

        {/* Faint dotted grid in top-left */}
        <div
          className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 pointer-events-none opacity-40"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
            {/* Left text — 55% */}
            <div className="w-full lg:w-[55%] text-center lg:text-left">
              <FadeIn direction="up">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[0.2em] text-foreground uppercase leading-none">
                  STUDIO INOVA
                </h1>
              </FadeIn>

              <FadeIn direction="up" delay={0.12}>
                <div className="w-[60px] h-[3px] bg-primary mx-auto lg:mx-0 mt-6 mb-6 rounded-full" />
              </FadeIn>

              <FadeIn direction="up" delay={0.24}>
                <p className="text-lg md:text-xl text-muted-foreground font-light tracking-[0.15em] uppercase">
                  Innovation Starts Here
                </p>
              </FadeIn>
            </div>

            {/* Right network constellation — 45% */}
            <div className="hidden lg:flex w-full lg:w-[45%] items-center justify-center">
              <FadeIn direction="up" delay={0.3}>
                <svg
                  viewBox="0 0 460 460"
                  className="w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px] h-auto text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  {[
                    [230, 230], [110, 100], [360, 90], [400, 250], [320, 380],
                    [130, 360], [60, 220], [230, 60], [230, 400], [180, 180],
                    [290, 190], [200, 300], [310, 290],
                  ].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r={i === 0 ? 6 : 3} fill="currentColor" opacity={i === 0 ? 1 : 0.7} />
                  ))}
                  {[
                    [230, 230, 110, 100], [230, 230, 360, 90], [230, 230, 400, 250],
                    [230, 230, 320, 380], [230, 230, 130, 360], [230, 230, 60, 220],
                    [230, 230, 230, 60], [230, 230, 230, 400],
                    [110, 100, 230, 60], [360, 90, 230, 60], [360, 90, 400, 250],
                    [400, 250, 320, 380], [320, 380, 230, 400], [230, 400, 130, 360],
                    [130, 360, 60, 220], [60, 220, 110, 100],
                    [180, 180, 290, 190], [290, 190, 310, 290], [310, 290, 200, 300], [200, 300, 180, 180],
                  ].map(([x1, y1, x2, y2], i) => (
                    <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} opacity="0.35" />
                  ))}
                </svg>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      {/* Core Values Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  We strip away the unnecessary. Our tools are designed with clean, intuitive interfaces that anyone can pick up and use immediately.
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
                  Functionality is our baseline. We solve real problems with calculated steps, ensuring every feature provides tangible value.
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
                  We believe in building transparent, step-by-step solutions without rushed or fake claims. Our focus is on steady growth, honest features, and creating digital products that bring genuine, long-term value.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Studio Inova operates at the intersection of modern design and advanced technology. We build solutions that feel effortless to the user while performing complex tasks under the hood.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <FadeIn delay={0.1} className="h-full">
              <div className="inova-card p-7 border border-border/30 flex flex-col gap-4 h-full">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">App Development</h3>
                  <p className="text-[#4A5568] text-sm">Developing user-centric mobile and web applications with a focus on simplicity and modern aesthetics.</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="h-full">
              <div className="inova-card p-7 border border-border/30 flex flex-col gap-4 h-full">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">AI-Based Tools</h3>
                  <p className="text-[#4A5568] text-sm">Intelligent AI detection and analysis tools like Detect AI, built to ensure authenticity in the digital age.</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3} className="h-full">
              <div className="inova-card p-7 border border-border/30 flex flex-col gap-4 h-full">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Academy</h3>
                  <p className="text-[#4A5568] text-sm">We offer an educational ebook designed to empower beginners with AI knowledge. It teaches you how to master AI tools and build products with confidence, moving from zero technical background to a creator mindset.</p>
                </div>
              </div>
            </FadeIn>
          </div>
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
                desc: "We embed AI capabilities thoughtfully into each product — making smart automation feel natural, useful, and trustworthy.",
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
