import { CSSProperties } from "react";
import styles from "./Row.module.css";

interface RowProps {
  flexDirection?: CSSProperties["flexDirection"];
  flexWrap?: CSSProperties["flexWrap"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
  className?: string;
  children: React.ReactNode;
}

export function Row({
  className,
  children,
  flexWrap = "wrap",
  ...props
}: RowProps) {
  return (
    <div
      className={`${styles.Row} ${className ?? ""}`}
      style={{ flexWrap, ...props }}
    >
      {children}
    </div>
  );
}
