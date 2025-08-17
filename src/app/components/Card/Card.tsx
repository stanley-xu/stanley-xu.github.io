import { CSSProperties, ReactNode } from "react";

import styles from "./Card.module.css";

export interface CardProps {
  variant?: "simple" | "elevated";
  spacing?: "loose" | "regular" | "tight";
  style?: CSSProperties;
  children: ReactNode;
}

const SPACING_OPTS: Record<NonNullable<CardProps["spacing"]>, string> = {
  tight: "var(--spacing)",
  regular: "calc(var(--spacing) * 2)",
  loose: "calc(var(--spacing) * 4)",
};

export function Card({
  variant = "simple",
  spacing = "regular",
  style,
  children,
}: CardProps) {
  let variantStyle = null;
  switch (variant) {
    case "simple": {
      variantStyle = styles.simple;
      break;
    }
    case "elevated": {
      variantStyle = styles.elevated;
      break;
    }
  }

  const spacingStyle = SPACING_OPTS[spacing];

  return (
    <div
      className={`${styles.card} ${variantStyle ?? ""}`}
      style={{ padding: spacingStyle, ...style }}
    >
      {children}
    </div>
  );
}
