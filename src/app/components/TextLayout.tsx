import { ReactNode } from "react";

export function TextLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        maxWidth: "65ch",
        lineHeight: 1.6,
      }}
    >
      {children}
    </div>
  );
}
