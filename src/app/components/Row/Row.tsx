import { CSSProperties } from "react";
import styles from "./Row.module.css";

interface RowProps {
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  children: React.ReactNode;
}

export function Row({ justifyContent, alignItems, children }: RowProps) {
  return (
    <div
      className={styles.Row}
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
