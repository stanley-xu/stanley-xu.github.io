import { CSSProperties } from "react";
import styles from "./Row.module.css";

interface RowProps {
  justifyContent?: CSSProperties["justifyContent"];
  children: React.ReactNode;
}

export function Row({ justifyContent, children }: RowProps) {
  return (
    <div
      className={styles.Row}
      style={{
        display: "flex",
        justifyContent,
      }}
    >
      {children}
    </div>
  );
}
