import Link from "next/link";
import { Children } from "react";
import { Row } from "../row";

import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Row>
        <Breadcrumb>
          <Link href={`/about`}>About</Link>
          <Link href={`/lab`}>Lab</Link>
        </Breadcrumb>
      </Row>
    </header>
  );
}

function Breadcrumb({ children }: { children: React.ReactNode }) {
  // Appeasing TS
  const childrenArray = Children.toArray(children);

  return (
    <section className={styles.breadcrumb}>
      {childrenArray.map((child, idx) => (
        <span key={idx}>
          {idx > 0 ? <span className={styles.separator}>/</span> : null}
          {child}
        </span>
      ))}
    </section>
  );
}
