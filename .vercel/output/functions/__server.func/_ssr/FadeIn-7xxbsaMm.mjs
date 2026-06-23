import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function FadeIn({
  children,
  delay = 0,
  direction = "up",
  fullWidth = false,
  className
}) {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: {
        opacity: 0,
        ...directions[direction]
      },
      whileInView: {
        opacity: 1,
        x: 0,
        y: 0
      },
      viewport: { once: true, margin: "-10%" },
      transition: {
        duration: 0.7,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      },
      className: fullWidth ? `w-full ${className || ""}` : className,
      children
    }
  );
}
export {
  FadeIn as F
};
