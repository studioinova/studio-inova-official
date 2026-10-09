import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { ExternalLink, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";



export default function Products() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary/30 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            SaaS products built for clarity, accuracy, and long-term trust.
          </p>
        </FadeIn>

        {/* ── Our Products ── */}
        <FadeIn className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Our Products</h2>
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
                  <img
                    src="/trueopen-logo.png"
                    alt="TrueOpen logo"
                    className="w-12 h-12 rounded-xl shadow-md object-contain flex-shrink-0 self-center"
                    draggable={false}
                  />
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
                  src="/trueopen-screenshot.png"
                  alt="TrueOpen dashboard showing adjusted engagement score versus raw open rate"
                  className="w-full max-w-[520px] h-auto object-contain select-none"
                  loading="lazy"
                  draggable={false}
                />
              </div>

            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <p className="mt-8 text-center text-sm text-muted-foreground">More SaaS products are coming soon.</p>
        </FadeIn>

      </div>
    </div>
  );
}
