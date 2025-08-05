import { CSSProperties } from "react";
import styles from "./Row.module.css";

interface RowProps {
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  className?: string;
  children: React.ReactNode;
}

export function Row({
  justifyContent,
  alignItems,
  className,
  children,
}: RowProps) {
  return (
    <div
      className={`${styles.Row} ${className ?? ""}`}
      style={{
        display: "flex",
        justifyContent,
        alignItems,
      }}
    >
      {children}
    </div>
  );
}
