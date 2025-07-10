import Link from "next/link";
import React from "react";
import styles from "./LabCard.module.css";

export interface LabProps {
  title: string;
  href: string;
  children: React.ReactNode;
}

export function LabCard({ title, href, children }: LabProps) {
  return (
    <Link href={href} className={styles.labcard}>
      {children}
      <div className={styles.title}>
        <strong>{title}</strong>
      </div>
    </Link>
  );
}
