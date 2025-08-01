"use client";

import { Children, ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Breadcrumb.module.css";

export function BreadcrumbLink(props: LinkProps & { children: ReactNode }) {
  const pathname = usePathname();
  const active = props.href === pathname;

  return (
    <Link
      {...props}
      className={`${styles.link} ${active ? styles.active : ""}`}
    >
      {props.children}
    </Link>
  );
}

export function Breadcrumb({ children }: { children: React.ReactNode }) {
  const childrenArray = Children.toArray(children); // Appeasing TS
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
