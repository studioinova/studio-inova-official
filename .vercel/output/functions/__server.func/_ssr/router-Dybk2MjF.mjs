import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useLocation } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { P as Provider, a as Portal, C as Content2 } from "../_libs/radix-ui__react-tooltip.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { P as Provider$1, R as Root2, T as Title, D as Description, C as Close, V as Viewport, A as Action } from "../_libs/radix-ui__react-toast.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { C as CircleAlert, X, M as Menu } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
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
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" }
];
function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;
  const [, setIsScrolled] = reactExports.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  reactExports.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: "fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md py-5 pt-[15px] pb-[15px]",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-2.5 leading-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/logo.png",
                alt: "Studio Inova",
                className: "h-9 w-auto block"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-xl tracking-tight text-foreground leading-none", children: "Studio Inova" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-8", children: navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: link.href,
              className: `text-sm font-medium transition-colors hover:text-primary ${pathname === link.href ? "text-primary" : "text-muted-foreground"}`,
              children: link.name
            },
            link.name
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "md:hidden p-2 text-foreground",
              onClick: () => setMobileMenuOpen(!mobileMenuOpen),
              "aria-label": "Toggle menu",
              children: mobileMenuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-6 h-6" })
            }
          )
        ] }) }),
        mobileMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2", children: navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: link.href,
            className: `text-base font-medium py-2 px-4 rounded-lg transition-colors ${pathname === link.href ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"}`,
            children: link.name
          },
          link.name
        )) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-white border-t border-border mt-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/logo.png",
              alt: "Studio Inova",
              className: "h-8 w-auto"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-lg text-foreground", children: "Studio Inova" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-xs leading-relaxed", children: "We are a digital studio focused on building simple apps, AI-powered tools, and clean digital experiences for the future." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-foreground mb-4", children: "Company" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "text-sm text-muted-foreground hover:text-primary transition-colors", children: "About Us" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "text-sm text-muted-foreground hover:text-primary transition-colors", children: "Products" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "text-sm text-muted-foreground hover:text-primary transition-colors", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-foreground mb-4", children: "Legal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy-policy", className: "text-sm text-muted-foreground hover:text-primary transition-colors", children: "Privacy Policy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/40 select-none", children: "|" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms-of-service", className: "text-sm text-muted-foreground hover:text-primary transition-colors", children: "Terms of Service" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 pt-8 flex justify-center", style: { borderTop: "1px solid #f0f0f0" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "© 2026 Studio Inova." }) })
  ] }) });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const TooltipProvider = Provider;
const TooltipContent = reactExports.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
TooltipContent.displayName = Content2.displayName;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = reactExports.useState(memoryState);
  reactExports.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
const ToastProvider = Provider$1;
const ToastViewport = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = reactExports.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root2,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = Root2.displayName;
const ToastAction = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    ),
    ...props
  }
));
ToastAction.displayName = Action.displayName;
const ToastClose = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = Close.displayName;
const ToastTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-sm font-semibold", className),
    ...props
  }
));
ToastTitle.displayName = Title.displayName;
const ToastDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = Description.displayName;
function Toaster() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Toast, { ...props, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsxRuntimeExports.jsx(ToastTitle, { children: title }),
          description && /* @__PURE__ */ jsxRuntimeExports.jsx(ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ jsxRuntimeExports.jsx(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToastViewport, {})
  ] });
}
const Card = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
      ...props
    }
  )
);
Card.displayName = "Card";
const CardHeader = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
const CardTitle = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn("font-semibold leading-none tracking-tight", className),
      ...props
    }
  )
);
CardTitle.displayName = "CardTitle";
const CardDescription = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("text-sm text-muted-foreground", className), ...props })
);
CardDescription.displayName = "CardDescription";
const CardContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
const CardFooter = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props })
);
CardFooter.displayName = "CardFooter";
function NotFound() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen w-full flex items-center justify-center bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "w-full max-w-md mx-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex mb-4 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-8 w-8 text-red-500" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "404 Page Not Found" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-gray-600", children: "Did you forget to add the page to the router?" })
  ] }) }) });
}
const appCss = "/assets/styles-4oc8VfUA.css";
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$8 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1" },
      { property: "og:site_name", content: "Studio Inova" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Lovable App" },
      { property: "og:title", content: "Lovable App" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "description", content: "GitHub Import Helper guides users to import and rebuild websites from GitHub repositories." },
      { property: "og:description", content: "GitHub Import Helper guides users to import and rebuild websites from GitHub repositories." },
      { name: "twitter:description", content: "GitHub Import Helper guides users to import and rebuild websites from GitHub repositories." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f63a9615-c7ac-4c0d-aebd-5d247ba219ea/id-preview-e580f366--396016f2-125f-4706-a4a3-b67713d4142c.lovable.app-1780288591067.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f63a9615-c7ac-4c0d-aebd-5d247ba219ea/id-preview-e580f366--396016f2-125f-4706-a4a3-b67713d4142c.lovable.app-1780288591067.png" }
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/logo.png" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Montserrat:wght@500;600;700;800&display=swap"
      },
      { rel: "stylesheet", href: appCss }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Studio Inova",
          url: "https://studio-inova-official.lovable.app"
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$8.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TooltipProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {})
  ] }) });
}
const $$splitComponentImporter$6 = () => import("./terms-of-service-CriyyM8x.mjs");
const URL$4 = "https://studio-inova-official.lovable.app/terms-of-service";
const TITLE$5 = "Terms of Service — Studio Inova";
const DESCRIPTION$5 = "Review the Studio Inova Terms of Service covering acceptable use, intellectual property, and the conditions for using our products and site.";
const Route$7 = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [{
      title: TITLE$5
    }, {
      name: "description",
      content: DESCRIPTION$5
    }, {
      property: "og:title",
      content: TITLE$5
    }, {
      property: "og:description",
      content: DESCRIPTION$5
    }, {
      property: "og:url",
      content: URL$4
    }, {
      name: "twitter:title",
      content: TITLE$5
    }, {
      name: "twitter:description",
      content: DESCRIPTION$5
    }],
    links: [{
      rel: "canonical",
      href: URL$4
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const BASE_URL = "https://studio-inova-official.lovable.app";
const Route$6 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/products", changefreq: "weekly", priority: "0.9" },
          { path: "/contact", changefreq: "monthly", priority: "0.7" },
          { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
          { path: "/terms-of-service", changefreq: "yearly", priority: "0.3" }
        ];
        const urls = entries.map(
          (e) => [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$5 = () => import("./products-M_2I5R19.mjs");
const URL$3 = "https://studio-inova-official.lovable.app/products";
const TITLE$4 = "Products — Detect AI and AI Learning E-book | Studio Inova";
const DESCRIPTION$4 = "Explore Studio Inova's products — Detect AI for spotting AI-generated content, and our Zero-to-App AI learning e-book for beginners.";
const Route$5 = createFileRoute("/products")({
  head: () => ({
    meta: [{
      title: TITLE$4
    }, {
      name: "description",
      content: DESCRIPTION$4
    }, {
      property: "og:title",
      content: TITLE$4
    }, {
      property: "og:description",
      content: DESCRIPTION$4
    }, {
      property: "og:url",
      content: URL$3
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:title",
      content: TITLE$4
    }, {
      name: "twitter:description",
      content: DESCRIPTION$4
    }],
    links: [{
      rel: "canonical",
      href: URL$3
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "Product",
          name: "Detect AI",
          description: "AI-powered tool for detecting AI-generated content and ensuring authenticity in the digital age.",
          brand: {
            "@type": "Brand",
            name: "Studio Inova"
          },
          url: URL$3
        }, {
          "@type": "Product",
          name: "Zero Knowledge to App Builder",
          description: "Beginner-friendly e-book that teaches how to master AI tools and build digital products from zero technical background.",
          brand: {
            "@type": "Brand",
            name: "Studio Inova"
          },
          url: URL$3
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./privacy-policy-qgwalXM9.mjs");
const URL$2 = "https://studio-inova-official.lovable.app/privacy-policy";
const TITLE$3 = "Privacy Policy — Studio Inova";
const DESCRIPTION$3 = "Read the Studio Inova Privacy Policy to understand what information we collect, how it is used, and the choices you have over your data.";
const Route$4 = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [{
      title: TITLE$3
    }, {
      name: "description",
      content: DESCRIPTION$3
    }, {
      property: "og:title",
      content: TITLE$3
    }, {
      property: "og:description",
      content: DESCRIPTION$3
    }, {
      property: "og:url",
      content: URL$2
    }, {
      name: "twitter:title",
      content: TITLE$3
    }, {
      name: "twitter:description",
      content: DESCRIPTION$3
    }],
    links: [{
      rel: "canonical",
      href: URL$2
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./contact-DD3Xfssa.mjs");
const URL$1 = "https://studio-inova-official.lovable.app/contact";
const TITLE$2 = "Contact Studio Inova — Get in Touch";
const DESCRIPTION$2 = "Get in touch with Studio Inova. Share feedback, suggestions, or project inquiries — we'd love to hear from you.";
const Route$3 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: TITLE$2
    }, {
      name: "description",
      content: DESCRIPTION$2
    }, {
      property: "og:title",
      content: TITLE$2
    }, {
      property: "og:description",
      content: DESCRIPTION$2
    }, {
      property: "og:url",
      content: URL$1
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:title",
      content: TITLE$2
    }, {
      name: "twitter:description",
      content: DESCRIPTION$2
    }],
    links: [{
      rel: "canonical",
      href: URL$1
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./admin-CXmkE5t4.mjs");
const Route$2 = createFileRoute("/admin")({
  head: () => ({
    meta: [{
      title: "Admin — Studio Inova"
    }, {
      name: "description",
      content: "Private admin portal for Studio Inova staff. Authentication required."
    }, {
      name: "robots",
      content: "noindex, nofollow"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-6BPNRhFz.mjs");
const URL = "https://studio-inova-official.lovable.app/about";
const TITLE$1 = "About Studio Inova — Our Mission and Founder";
const DESCRIPTION$1 = "Meet the team behind Studio Inova — a minimalist digital studio focused on honest, step-by-step AI tools and apps built for long-term value.";
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: TITLE$1
    }, {
      name: "description",
      content: DESCRIPTION$1
    }, {
      property: "og:title",
      content: TITLE$1
    }, {
      property: "og:description",
      content: DESCRIPTION$1
    }, {
      property: "og:url",
      content: URL
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:title",
      content: TITLE$1
    }, {
      name: "twitter:description",
      content: DESCRIPTION$1
    }],
    links: [{
      rel: "canonical",
      href: URL
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-Dzv5q0LK.mjs");
const SITE_URL = "https://studio-inova-official.lovable.app";
const TITLE = "Studio Inova — Minimalist AI Tools and Apps";
const DESCRIPTION = "Studio Inova is a digital studio building minimalist, high-impact AI tools, apps, and clean digital experiences for creators and modern teams.";
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: TITLE
    }, {
      name: "description",
      content: DESCRIPTION
    }, {
      property: "og:title",
      content: TITLE
    }, {
      property: "og:description",
      content: DESCRIPTION
    }, {
      property: "og:url",
      content: SITE_URL + "/"
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:title",
      content: TITLE
    }, {
      name: "twitter:description",
      content: DESCRIPTION
    }],
    links: [{
      rel: "canonical",
      href: SITE_URL + "/"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Studio Inova",
        url: SITE_URL
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TermsOfServiceRoute = Route$7.update({
  id: "/terms-of-service",
  path: "/terms-of-service",
  getParentRoute: () => Route$8
});
const SitemapDotxmlRoute = Route$6.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$8
});
const ProductsRoute = Route$5.update({
  id: "/products",
  path: "/products",
  getParentRoute: () => Route$8
});
const PrivacyPolicyRoute = Route$4.update({
  id: "/privacy-policy",
  path: "/privacy-policy",
  getParentRoute: () => Route$8
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$8
});
const AdminRoute = Route$2.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AdminRoute,
  ContactRoute,
  PrivacyPolicyRoute,
  ProductsRoute,
  SitemapDotxmlRoute,
  TermsOfServiceRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  cn as c,
  router as r,
  useToast as u
};
