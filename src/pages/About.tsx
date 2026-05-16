import { FadeIn } from "@/components/ui/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { User, Target, Lightbulb, Shield } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center mb-20">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            About Studio Inova
          </h1>
          <p className="text-xl text-primary font-medium max-w-3xl mx-auto">
            "We create AI-assisted tools that solve real problems with small,
            calculated steps."
          </p>
        </FadeIn>
      </section>

      {/* Story & Vision */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <FadeIn direction="right">
            <div className="prose prose-lg prose-slate">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Studio Inova began as an independent digital studio with a clear
                mandate: build technology that respects the user. In an era
                overwhelmed by complex, intrusive applications, we chose a
                different path.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We focus on responsible AI—tools that enhance human capability
                rather than replacing it. By taking small, calculated steps, we
                ensure every product we release is stable, secure, and genuinely
                useful.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="p-8 bg-secondary rounded-2xl border border-border h-full flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-primary">
                <Target className="w-32 h-32" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4 relative z-10">
                Our Vision
              </h2>
              <p className="text-lg text-foreground/80 font-medium leading-relaxed relative z-10">
                Studio Inova aims to become a leading AI-driven studio that
                creates smart, ethical digital solutions setting the standard
                for user trust globally.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values Detailed */}
      <section className="bg-slate-50 py-24 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Pillars of Our Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide every line of code we write and every
              interface we design.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Simple",
                desc: "Complexity is easy; simplicity takes hard work. We distill powerful technology into interfaces that feel naturally intuitive.",
              },
              {
                icon: Target,
                title: "Effective",
                desc: "We don't build software for the sake of it. If a feature doesn't directly solve a user's problem efficiently, it doesn't ship.",
              },
              {
                icon: Shield,
                title: "Trusted",
                desc: "Trust is earned in drops and lost in buckets. We prioritize transparency, robust security, and absolute data privacy.",
              },
            ].map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <Card className="inova-card h-full border-none">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6">
                      <value.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.desc}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

     
      {/* Team / Leadership Section */}
            <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full py-24 text-center">
              <FadeIn>
                <h2 className="text-3xl font-bold mb-12 text-foreground">Meet The Founder</h2>
                <div className="inline-block text-left w-full max-w-3xl">
                  <div className="inova-card p-8 border border-border/40 flex flex-col md:flex-row items-center gap-10 w-full rounded-2xl bg-card">

                    {/* Illustration Area */}
                    <div className="w-48 h-48 shrink-0 bg-[#f0f4f8] rounded-2xl border border-primary/10 flex items-center justify-center relative overflow-hidden shadow-inner">
                      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="text-primary font-bold text-5xl mb-1">S</span>
                        <span className="text-[10px] uppercase tracking-tighter text-muted-foreground">The Creative Builder</span>
                      </div>
                      <img 
                        src="/sazid-founder-ceo.png"
                        alt="Sazid" 
                        className="w-full h-full object-cover absolute inset-0 z-10"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>

                    {/* Text Details Area */}
                    <div className="text-center md:text-left flex-1">
                      <h3 className="text-4xl font-extrabold text-foreground mb-1 tracking-tight">Sazid</h3>

                      <p className="text-black font-extrabold text-sm md:text-base mb-3 tracking-[0.2em] uppercase">
                        FOUNDER & CEO, STUDIO INOVA
                      </p>

                      <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                        <span className="text-xs font-medium px-2 py-1 bg-secondary text-secondary-foreground rounded">Author</span>
                        <span className="text-xs font-medium px-2 py-1 bg-secondary text-secondary-foreground rounded">AI Strategist</span>
                      </div>

                      <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                        <p>
                          Sazid is a tech visionary and the author of 'Zero Knowledge to App Builder.' As the Founder and CEO of Studio Inova, he is dedicated to simplifying complex AI technology into minimalist, high-impact tools.
                        </p>
                      </div>

                      {/* The missing bracket issue is completely fixed here */}
                      <p className="text-foreground font-bold text-sm md:text-base mt-8 tracking-wide">
                        "At Studio Inova, we don't just build apps; we build solutions."
                      </p>
                    </div>

                  </div>
                </div>
              </FadeIn>
            </section>
          </div>
        );
      };

    