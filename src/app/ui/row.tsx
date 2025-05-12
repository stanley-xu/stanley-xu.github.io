interface RowProps {
  spacing?: "space-between" | "space-evenly";
  children: React.ReactNode;
}

export function Row({ spacing = "space-between", children }: RowProps) {
  return (
    <span
      style={{
        display: "flex",
        justifyContent: spacing,
      }}
    >
      {children}
    </span>
  );
}
