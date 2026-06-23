import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { F as FadeIn } from "./FadeIn-7xxbsaMm.mjs";
import { n as noaAsset } from "./noa-mascot.png.asset-imWt9YJb.mjs";
import { f as CircleCheck, Z as Zap, g as Compass, h as Smartphone, i as Cpu, G as GraduationCap, j as Search, P as Paintbrush, k as CodeXml, R as Rocket } from "../_libs/lucide-react.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function NoaWidget() {
  const [visible, setVisible] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "aria-hidden": !visible,
      className: `fixed bottom-6 right-6 z-50 flex items-end gap-3 transition-all duration-500 ease-out ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-6 pointer-events-none"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:block max-w-[260px] rounded-2xl rounded-br-sm bg-white border border-[#0A2540]/10 px-4 py-3 text-sm text-[#0A2540] leading-relaxed shadow-[0_10px_30px_-12px_rgba(10,37,64,0.25)]", children: [
          "Hey! I'm ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Noa" }),
          ". Welcome to Studio Inova—where we create simple solutions and AI-assisted tools for a better tomorrow. ✨"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: noaAsset.url,
            alt: "Noa, Studio Inova mascot",
            className: "w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-[0_12px_20px_rgba(10,37,64,0.25)] select-none",
            draggable: false
          }
        )
      ]
    }
  );
}
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative w-full min-h-screen flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 z-0 hero-bg-pan",
          style: {
            backgroundImage: "url('/hero-bg.jpg')",
            filter: "blur(2px)",
            transform: "scale(1.05)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 hero-gradient-overlay" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-[1]", style: { background: "rgba(255, 255, 255, 0.4)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col items-center justify-center text-center px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-widest text-black uppercase mb-4 leading-none", children: [
          "STUDIO INOVA",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: " — Minimalist AI Tools & Apps" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { direction: "up", delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-black/70 font-light tracking-wide", children: "Innovation Starts Here" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { direction: "up", delay: 0.3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-5 mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/products",
              className: "inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:brightness-110",
              style: { background: "#007AFF", borderRadius: "8px", minWidth: "180px" },
              children: "Explore Our App"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/about",
              className: "inline-flex items-center justify-center px-7 py-3 text-sm font-semibold transition-all",
              style: {
                border: "2px solid #007AFF",
                color: "#007AFF",
                background: "transparent",
                borderRadius: "8px",
                minWidth: "180px"
              },
              onMouseEnter: (e) => {
                e.currentTarget.style.background = "#007AFF";
                e.currentTarget.style.color = "#fff";
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#007AFF";
              },
              children: "Know About Us"
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Our Core Values" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "We measure our success by the clarity and utility we bring to our users." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inova-card p-8 border border-border/40 h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3", children: "Simple" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "We strip away the unnecessary. Our tools are designed with clean, intuitive interfaces that anyone can pick up and use immediately." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inova-card p-8 border border-border/40 h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3", children: "Effective" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Functionality is our baseline. We solve real problems with calculated steps, ensuring every feature provides tangible value." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inova-card p-8 border border-border/40 h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3", children: "Our Philosophy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "We believe in building transparent, step-by-step solutions without rushed or fake claims. Our focus is on steady growth, honest features, and creating digital products that bring genuine, long-term value." })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "What We Do" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Studio Inova operates at the intersection of modern design and advanced technology. We build solutions that feel effortless to the user while performing complex tasks under the hood." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.1, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inova-card p-7 border border-border/30 flex flex-col gap-4 h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold mb-2", children: "App Development" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#4A5568] text-sm", children: "Developing user-centric mobile and web applications with a focus on simplicity and modern aesthetics." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.2, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inova-card p-7 border border-border/30 flex flex-col gap-4 h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold mb-2", children: "AI-Based Tools" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#4A5568] text-sm", children: "Intelligent AI detection and analysis tools like Detect AI, built to ensure authenticity in the digital age." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.3, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inova-card p-7 border border-border/30 flex flex-col gap-4 h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold mb-2", children: "Academy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#4A5568] text-sm", children: "We offer an educational ebook designed to empower beginners with AI knowledge. It teaches you how to master AI tools and build products with confidence, moving from zero technical background to a creator mindset." })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-[#F8F9FA]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-[#007AFF] uppercase tracking-widest mb-3", children: "How We Work" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-[#0D1F3C] mb-4", children: "Our Approach" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#4A5568] max-w-2xl mx-auto", children: "How we build our products at Studio Inova." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-14 rounded-2xl overflow-hidden shadow-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/our-approach.jpg",
            alt: "Studio Inova workspace",
            className: "w-full object-cover h-56 md:h-72"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "block md:hidden bg-[#0D1F3C] px-6 py-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-xs font-medium uppercase tracking-widest mb-1", children: "Studio Inova" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white text-lg font-bold leading-snug", children: [
            "From idea to launch —",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "every step, engineered."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex absolute inset-0 bg-gradient-to-r from-[#0D1F3C]/60 via-transparent to-transparent items-center px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-sm font-medium uppercase tracking-widest mb-1", children: "Studio Inova" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white text-3xl font-bold leading-snug", children: [
            "From idea to launch —",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "every step, engineered."
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        {
          step: "01",
          icon: Search,
          title: "Research & Ideas",
          desc: "We start by identifying real problems worth solving — studying user needs, market gaps, and emerging technology to shape product concepts."
        },
        {
          step: "02",
          icon: Paintbrush,
          title: "Minimalist Design",
          desc: "We design clean, distraction-free interfaces that put the user first — stripping away everything unnecessary until only clarity remains."
        },
        {
          step: "03",
          icon: CodeXml,
          title: "AI Integration",
          desc: "We embed AI capabilities thoughtfully into each product — making smart automation feel natural, useful, and trustworthy."
        },
        {
          step: "04",
          icon: Rocket,
          title: "Continuous Improvement",
          desc: "We treat launch as the beginning — gathering feedback, refining features, and iterating until every product earns lasting trust."
        }
      ].map(({ step, icon: Icon, title, desc }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-white rounded-2xl p-7 h-full flex flex-col gap-5 border border-white/80",
          style: {
            boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
            borderRadius: "16px",
            transition: "all 0.3s ease"
          },
          onMouseEnter: (e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,122,255,0.08)";
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.03)";
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-[#007AFF]/10 flex items-center justify-center text-[#007AFF]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-7 h-7", strokeWidth: 1.75 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-[#007AFF] tracking-widest", children: step }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-[#0D1F3C] mt-0.5", children: title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#718096] leading-relaxed", children: desc })
          ]
        }
      ) }, step)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NoaWidget, {})
  ] });
}
const SplitComponent = Home;
export {
  SplitComponent as component
};
