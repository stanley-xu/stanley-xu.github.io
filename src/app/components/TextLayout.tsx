import { CSSProperties, ReactNode } from "react";

interface TextLayoutProps {
  width?: "regular" | "tight";
  textAlign?: CSSProperties["textAlign"];
  children: ReactNode;
}

export function TextLayout({
  width = "regular",
  textAlign = "left",
  children,
}: TextLayoutProps) {
  return (
    <div
      style={{
        textAlign,
        maxWidth: width === "tight" ? "65ch" : undefined,
      }}
    >
      {children}
    </div>
  );
}
