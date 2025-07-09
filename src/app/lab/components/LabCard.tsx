import Link from "next/link";
import React from "react";

export interface LabProps {
  title: string;
  href: string;
  children: React.ReactNode;
}

export function LabCard({ title, href, children }: LabProps) {
  return (
    <Link
      href={href}
      style={{
        flex: "1 1 400px",
        minHeight: "400px",
      }}
    >
      {children}
      <p>{title}</p>
    </Link>
  );
}
