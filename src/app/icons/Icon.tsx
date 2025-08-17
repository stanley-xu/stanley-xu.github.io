import { ReactNode } from "react";
import styles from "./Icon.module.css";

export default function Icon({ children }: { children: ReactNode }) {
  return <span className={styles.Icon}>{children}</span>;
}
