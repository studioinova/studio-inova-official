import { ReactNode, useEffect, useState } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  fullWidth?: boolean;
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  fullWidth = false,
  className,
}: FadeInProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 },
  };

  const cls = fullWidth ? `w-full ${className || ""}` : className;

  if (!isMounted) {
    return <div className={cls}>{children}</div>;
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{
          opacity: 0,
          ...directions[direction],
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{
          duration: 0.7,
          delay: delay,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
        className={cls}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
