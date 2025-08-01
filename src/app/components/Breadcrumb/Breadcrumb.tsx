import { Children } from "react";
import styles from "./Breadcrumb.module.css";

export function Breadcrumb({ children }: { children: React.ReactNode }) {
  // Appeasing TS
  const childrenArray = Children.toArray(children);
  const separatorMarkup = <span className={styles.separator}>/</span>;

  return (
    <section>
      {childrenArray.map((child, idx) => (
        <span key={idx}>
          {idx > 0 ? separatorMarkup : null}
          {child}
        </span>
      ))}
    </section>
  );
}
