import type { ReactNode } from "react";

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        padding: "32px",
      }}
    >
      {children}
    </div>
  );
}
