import { ReactNode } from "react";

interface SpacerProps {
  size: "sm" | "md" | "lg";
  children?: ReactNode;
}

export function Spacer({ size, children }: SpacerProps) {
  let spacing = "var(--spacing)";
  switch (size) {
    case "lg":
      spacing = "calc(var(--spacing) * 4)";
      break;
    case "md":
      spacing = "calc(var(--spacing) * 2)";
      break;
    case "sm":
      spacing = "calc(var(--spacing) * 1)";
      break;
  }

  return (
    <div
      style={{
        width: spacing,
        height: spacing,
      }}
    >
      {children}
    </div>
  );
}
