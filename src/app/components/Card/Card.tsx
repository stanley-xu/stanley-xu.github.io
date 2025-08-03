import { CSSProperties, ReactNode } from "react";

import styles from "./Card.module.css";

export interface CardProps {
  variant?: "simple" | "elevated";
  style?: CSSProperties;
  children: ReactNode;
}

export function Card({ variant = "simple", style, children }: CardProps) {
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

  return (
    <div className={`${styles.card} ${variantStyle ?? ""}`} style={style}>
      {children}
    </div>
  );
}
