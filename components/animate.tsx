"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ComponentProps, ReactNode } from "react";

const EASE = [0.23, 1, 0.32, 1] as const;
const revealVariants: Variants = {
  hidden: { opacity: 1, y: 12 },
  visible: { opacity: 1, y: 0 },
};

type RevealProps = { children: ReactNode; delay?: number; className?: string; as?: "div" | "section" | "article" | "p" | "h1" | "h2" } & Omit<ComponentProps<typeof motion.div>, "variants" | "initial" | "whileInView" | "viewport">;

export function Reveal({ children, delay = 0, className, as = "div", ...rest }: RevealProps) {
  const reduce = useReducedMotion();
  const Component = motion[as] as typeof motion.div;
  return (
    <Component
      variants={revealVariants}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? { opacity: 1 } : "visible"}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduce ? 0 : 0.35, ease: EASE, delay: reduce ? 0 : delay }}
      className={className}
      {...rest}
    >{children}</Component>
  );
}

const staggerParent: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
type StaggerGroupProps = { children: ReactNode; className?: string } & Omit<ComponentProps<typeof motion.div>, "variants" | "initial" | "whileInView" | "viewport">;

export function StaggerGroup({ children, className, ...rest }: StaggerGroupProps) {
  const reduce = useReducedMotion();
  return <motion.div variants={staggerParent} initial={reduce ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.15 }} transition={reduce ? { duration: 0 } : undefined} className={className} {...rest}>{children}</motion.div>;
}

type StaggerItemProps = { children: ReactNode; className?: string; as?: "div" | "article" | "li" | "span" } & Omit<ComponentProps<typeof motion.div>, "variants">;
export function StaggerItem({ children, className, as = "div", ...rest }: StaggerItemProps) {
  const reduce = useReducedMotion();
  const Component = motion[as] as typeof motion.div;
  return <Component variants={revealVariants} transition={{ duration: reduce ? 0 : 0.35, ease: EASE }} className={className} {...rest}>{children}</Component>;
}

export function FloatUp({ children, className, ...rest }: { children: ReactNode; className?: string } & Omit<ComponentProps<typeof motion.div>, "initial" | "whileInView" | "viewport">) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 1, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: reduce ? 0 : 0.45, ease: EASE }}
      className={className}
      {...rest}
    >{children}</motion.div>
  );
}
