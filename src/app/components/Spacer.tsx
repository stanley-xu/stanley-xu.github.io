import { ReactNode } from "react";

interface SpacerProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  children?: ReactNode;
}

export function Spacer({ size = "md", children }: SpacerProps) {
  let spacing = "var(--spacing)";
  switch (size) {
    case "xl":
      spacing = "calc(var(--spacing) * 3)";
      break;
    case "lg":
      spacing = "calc(var(--spacing) * 2)";
      break;
    case "md":
      spacing = "calc(var(--spacing) * 1)";
      break;
    case "sm":
      spacing = "calc(var(--spacing-tight) * 1)";
      break;
    case "xs":
      spacing = "calc(var(--spacing-tight) / 2)"; // Note: not sure if `/` is division in CSS here
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
