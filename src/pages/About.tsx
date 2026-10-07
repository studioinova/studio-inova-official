import { FadeIn } from "@/components/ui/FadeIn";
import { Target } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center mb-20">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            About Studio Inova
          </h1>
          <p className="text-xl text-black font-medium max-w-3xl mx-auto">
            "We build SaaS products that solve real problems with small, calculated steps."
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
                Studio Inova is a founder-led SaaS studio with a
                clear focus: build products that actually work. As a regular user
                of countless products myself, I run into problems constantly — some
                with no real solution, some with a solution that just doesn't
                work well. I don't want others to run into the same wall I did.
                That's the reason each product exists.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                By taking small, calculated steps, each product is built
                to respect the user and be stable, secure, and genuinely useful before anything else.
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
                Studio Inova aims to become a trusted SaaS studio known for simple, honest, and reliable products.
              </p>
            </div>
          </FadeIn>
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
                  alt="Sazid, Founder of Studio Inova"
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
                  Founder & CEO, Studio Inova
                </p>

                <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                  <p>
                    Sazid is the founder of Studio Inova, building simple and reliable SaaS products.
                  </p>
                </div>

                <p className="text-foreground font-bold text-sm md:text-base mt-8 tracking-wide">
                  "At Studio Inova, we build products that solve one problem well."
                </p>
              </div>

            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}


    