"use client";

import { motion, type Variants } from "motion/react";
import type { ComponentProps, ReactNode } from "react";

/*
 * Shared easing — a slightly overdamped spring feel expressed as a cubic-bezier
 * so it works with CSS `transition` too.  Quicker than the typical 0.4s ease-out
 * but long enough to feel intentional.
 */
const EASE = [0.23, 1, 0.32, 1] as const;

/* ------------------------------------------------------------------ */
/*  Reveal — scroll-triggered entrance                                 */
/* ------------------------------------------------------------------ */

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

type RevealProps = {
  children: ReactNode;
  /** Extra delay in seconds (stacks with stagger) */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "p" | "h1" | "h2";
} & Omit<ComponentProps<typeof motion.div>, "variants" | "initial" | "whileInView" | "viewport">;

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  ...rest
}: RevealProps) {
  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
}

/* ------------------------------------------------------------------ */
/*  StaggerGroup — staggers children Reveals                           */
/* ------------------------------------------------------------------ */

const staggerParent: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof motion.div>, "variants" | "initial" | "whileInView" | "viewport">;

export function StaggerGroup({ children, className, ...rest }: StaggerGroupProps) {
  return (
    <motion.div
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  StaggerItem — child of StaggerGroup, auto-inherits stagger timing  */
/* ------------------------------------------------------------------ */

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li" | "span";
} & Omit<ComponentProps<typeof motion.div>, "variants">;

export function StaggerItem({
  children,
  className,
  as = "div",
  ...rest
}: StaggerItemProps) {
  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      variants={revealVariants}
      transition={{ duration: 0.6, ease: EASE }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
}

/* ------------------------------------------------------------------ */
/*  FloatUp — hero product screenshot: subtle float-up + scale          */
/* ------------------------------------------------------------------ */

export function FloatUp({
  children,
  className,
  ...rest
}: {
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof motion.div>, "initial" | "whileInView" | "viewport">) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.9, ease: EASE }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
