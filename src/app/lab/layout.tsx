import { ReactNode } from "react";

export default function LabLayout({ children }: { children: ReactNode }) {
  return (
    <section
      style={{
        height: "100%",
        padding: "32px 64px",
      }}
    >
      {children}
    </section>
  );
}
