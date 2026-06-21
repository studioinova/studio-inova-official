import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { F as FadeIn } from "./FadeIn-7xxbsaMm.mjs";
import { B as Button } from "./button-DVUlc_rK.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as cn } from "./router-FFVLQPUJ.mjs";
import { a as Check, E as ExternalLink, b as ChevronLeft, c as ChevronRight } from "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-tooltip.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-toast.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
const DETECT_AI_SLIDES = [
  { src: "/detect-ai-slide-2.png", alt: "Initial Input", label: "Initial Input" },
  { src: "/detect-ai-slide-3.png", alt: "Scanning", label: "Scanning" },
  { src: "/detect-ai-slide-5.png", alt: "Scan History", label: "Scan History" },
  { src: "/detect-ai-slide-4.png", alt: "Results", label: "Results" },
  { src: "/detect-ai-slide-1.png", alt: "Secondary Input", label: "Secondary Input" }
];
function DetectAICarousel() {
  const [current, setCurrent] = reactExports.useState(2);
  const touchStartX = reactExports.useRef(null);
  const total = DETECT_AI_SLIDES.length;
  const prev = () => setCurrent((i) => (i - 1 + total) % total);
  const next = () => setCurrent((i) => (i + 1) % total);
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) next();
    else if (diff < -40) prev();
    touchStartX.current = null;
  };
  const getOffset = (i) => {
    let diff = i - current;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full flex flex-col items-center justify-center gap-5 select-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "relative w-full flex items-center justify-center",
        style: { perspective: "1400px", height: "380px" },
        onTouchStart,
        onTouchEnd,
        children: DETECT_AI_SLIDES.map((slide, i) => {
          const offset = getOffset(i);
          const abs = Math.abs(offset);
          const isActive = offset === 0;
          const translateX = offset * 70;
          const rotateY = offset * -22;
          const scale = isActive ? 1.1 : 0.8;
          const opacity = abs > 2 ? 0 : isActive ? 1 : abs === 1 ? 0.85 : 0.55;
          const zIndex = 10 - abs;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setCurrent(i),
              "aria-label": slide.label,
              className: "absolute top-1/2 left-1/2 transition-all duration-500 ease-out focus:outline-none",
              style: {
                transform: `translate(-50%, -50%) translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
                opacity,
                zIndex,
                width: "180px",
                aspectRatio: "9/19",
                transformStyle: "preserve-3d",
                pointerEvents: abs > 2 ? "none" : "auto",
                filter: isActive ? "drop-shadow(0 20px 30px rgba(0,122,255,0.28))" : "drop-shadow(0 10px 18px rgba(0,0,0,0.18))"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: slide.src,
                  alt: slide.alt,
                  className: "w-full h-full object-cover rounded-[28px]",
                  draggable: false
                }
              )
            },
            i
          );
        })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold tracking-wide -mt-1", style: { color: "#007AFF" }, children: DETECT_AI_SLIDES[current].label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: DETECT_AI_SLIDES.map((_, i) => {
      const active = i === current;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setCurrent(i),
          className: "rounded-full transition-all duration-300",
          style: {
            width: active ? "22px" : "8px",
            height: "8px",
            background: active ? "#007AFF" : "rgba(0,122,255,0.28)"
          },
          "aria-label": `Go to slide ${i + 1}`
        },
        i
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: prev,
          className: "flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold tracking-[0.15em] border transition-all hover:scale-105",
          style: { borderColor: "rgba(0,122,255,0.4)", color: "#007AFF", background: "rgba(0,122,255,0.06)" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-3.5 h-3.5" }),
            " PREV"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: next,
          className: "flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold tracking-[0.15em] text-white transition-all hover:scale-105",
          style: { background: "#007AFF" },
          children: [
            "NEXT ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5" })
          ]
        }
      )
    ] })
  ] });
}
function Products() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col min-h-screen bg-secondary/30 pt-32 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold tracking-tight mb-4", children: "Our Products" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Tools engineered for clarity, accuracy, and long-term trust." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { className: "text-center mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold tracking-tight", children: "Our Apps" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inova-card overflow-hidden border border-border/40 flex flex-col lg:flex-row group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 md:p-12 lg:w-1/2 flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "w-fit mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-100 border-emerald-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" }),
          "Live & Available"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/detect-ai-logo.jpg",
              alt: "Detect AI",
              className: "w-12 h-12 rounded-xl object-cover shadow-md"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold", children: "Detect AI — Detect what's real or fake" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "detect-ai-scroll mb-8 pr-3 space-y-5",
            style: { height: "250px", overflowY: "auto" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm leading-relaxed space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", style: { color: "#007AFF" }, children: "What it is — " }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Detect AI is a state-of-the-art security tool developed by Studio Inova to verify digital authenticity. It helps students, educators, journalists, and enterprises confirm whether content was created by a human or an AI." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", style: { color: "#007AFF" }, children: "What it does — " }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                    "It scans across multiple formats. For ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Text" }),
                    ", it identifies patterns common in LLMs like GPT-4. For ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Images & Videos" }),
                    ", it looks for pixel inconsistencies and deepfake signatures that the human eye cannot detect."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", style: { color: "#007AFF" }, children: "How it works — " }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Using advanced neural networks, our engine analyzes linguistic variance and metadata. It doesn't just guess — it calculates the probability of AI involvement through billions of data points, returning a precise confidence score." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", style: { color: "#007AFF" }, children: "The Process — " }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                    "Simply paste your content or upload a file. Our Deep Scan engine runs a 3-layer check: ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Linguistic Analysis" }),
                    ", ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Metadata Verification" }),
                    ", and ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Pattern Recognition" }),
                    " — all in seconds."
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 pt-1", children: [
                "AI Text Detection: Analyze articles, essays, and reports.",
                "Image & Video Scan: Identify deepfakes and AI-generated visuals.",
                "High Accuracy: Powered by advanced neural networks for 99%+ precision.",
                "Simple Interface: Minimalist and easy-to-use UI for everyone."
              ].map((feature, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start text-sm text-foreground font-medium", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mr-3 mt-0.5 w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center", style: { background: "rgba(0,122,255,0.12)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3", style: { color: "#007AFF" } }) }),
                feature
              ] }, i)) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-fit rounded-full px-8", style: { background: "#007AFF" }, asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://detect-ai-official.lovable.app/", target: "_blank", rel: "noopener noreferrer", children: [
          "Open Detect AI ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "ml-2 w-4 h-4" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:w-1/2 bg-slate-50 p-8 flex items-center justify-center relative overflow-hidden border-t lg:border-t-0 lg:border-l border-border min-h-[400px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DetectAICarousel, {}) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { className: "text-center mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold tracking-tight", children: "Studio Inova E-books" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inova-card overflow-hidden border border-border/40 bg-white shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:w-64 lg:w-72 shrink-0 flex items-center justify-center p-8 md:py-10 md:pl-10 md:pr-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "relative w-44 md:w-full",
              style: {
                filter: "drop-shadow(-8px 14px 28px rgba(0,0,0,0.32)) drop-shadow(2px 2px 0px rgba(0,0,0,0.2))",
                transform: "perspective(700px) rotateY(8deg) rotateX(2deg)",
                transition: "transform 0.4s ease"
              },
              onMouseEnter: (e) => e.currentTarget.style.transform = "perspective(700px) rotateY(0deg) rotateX(0deg)",
              onMouseLeave: (e) => e.currentTarget.style.transform = "perspective(700px) rotateY(8deg) rotateX(2deg)",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/ebook-cover.jpg", alt: "Zero Knowledge to App Builder", className: "w-full rounded-xl", style: { display: "block" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-2.5 h-full rounded-l-xl", style: { background: "linear-gradient(to right, rgba(255,255,255,0.2), transparent)" } })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col justify-center p-8 md:py-10 md:pl-4 md:pr-10 relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-5 right-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold px-3 py-1 rounded-full shadow", style: { background: "#007AFF", color: "#fff", letterSpacing: "0.04em" }, children: "Buy Now" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "border-0", style: { background: "rgba(0,122,255,0.1)", color: "#007AFF" }, children: "E-book" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "border-0", style: { background: "rgba(0,122,255,0.07)", color: "#007AFF" }, children: "2026" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl md:text-3xl font-bold mb-1", children: "Zero Knowledge to App Builder" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-5", style: { color: "#007AFF" }, children: "How anyone can build apps using AI — without coding." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "detect-ai-scroll mb-6 pr-2 text-sm leading-relaxed space-y-3", style: { height: "150px", overflowY: "auto" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", style: { color: "#007AFF" }, children: "The Goal — " }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "This book is designed to change your mindset. Learn how to turn ideas into real applications using the power of AI." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", style: { color: "#007AFF" }, children: "What You Will Learn — " }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 pl-1", children: [
                "The Zero Knowledge Mindset.",
                "Essential AI tools for building without code.",
                "Planning your first app, screens, and flows.",
                "Fixing errors and moving from prototype to a real app."
              ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 w-4 h-4 flex-shrink-0 rounded-full flex items-center justify-center", style: { background: "rgba(0,122,255,0.1)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-2.5 h-2.5", style: { color: "#007AFF" } }) }),
                item
              ] }, i)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs pt-1", children: "By Studio Inova · 2026" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "rounded-full px-8 w-fit", style: { background: "#007AFF", color: "#fff" }, children: "Get the E-book" })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inova-card overflow-hidden border border-border/40 bg-white shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:w-52 lg:w-60 shrink-0 flex items-center justify-center p-7 md:py-8 md:pl-8 md:pr-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "relative w-36 md:w-full",
              style: {
                filter: "drop-shadow(-6px 10px 22px rgba(0,0,0,0.35)) drop-shadow(2px 2px 0px rgba(0,0,0,0.2))",
                transform: "perspective(700px) rotateY(-8deg) rotateX(2deg)",
                transition: "transform 0.4s ease"
              },
              onMouseEnter: (e) => e.currentTarget.style.transform = "perspective(700px) rotateY(0deg) rotateX(0deg)",
              onMouseLeave: (e) => e.currentTarget.style.transform = "perspective(700px) rotateY(-8deg) rotateX(2deg)",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full rounded-xl overflow-hidden flex items-center justify-center", style: { aspectRatio: "2/3", background: "linear-gradient(160deg, #0a1628 0%, #0d2147 55%, #081020 100%)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold text-xl tracking-wide select-none", children: "Coming Soon" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-2 h-full rounded-l-xl", style: { background: "linear-gradient(to right, rgba(255,255,255,0.12), transparent)" } })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col justify-center p-7 md:py-8 md:pl-4 md:pr-8 relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-5 right-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold px-3 py-1 rounded-full", style: { background: "rgba(0,122,255,0.1)", color: "#007AFF", letterSpacing: "0.04em", border: "1px solid rgba(0,122,255,0.25)" }, children: "Coming Soon" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "border-0", style: { background: "rgba(0,122,255,0.1)", color: "#007AFF" }, children: "E-book" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "border-0", style: { background: "rgba(0,122,255,0.07)", color: "#007AFF" }, children: "2026" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl md:text-2xl font-bold mb-1", children: "The Art of Prompt Engineering" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-4", style: { color: "#007AFF" }, children: "Master the language of AI to get professional results." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "detect-ai-scroll mb-5 pr-2 text-sm leading-relaxed", style: { height: "130px", overflowY: "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Learn how to communicate with AI like a pro. This guide will teach you how to write perfect prompts for coding, designing, and business automation. Unlock the full potential of every AI tool you use — from writing to development to creative work." }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "rounded-full px-8 w-fit",
                style: { background: "rgba(0,122,255,0.55)", color: "#fff", cursor: "not-allowed" },
                disabled: true,
                children: "Notify Me"
              }
            )
          ] })
        ] }) }) })
      ] })
    ] })
  ] }) });
}
const SplitComponent = Products;
export {
  SplitComponent as component
};
