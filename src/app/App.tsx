import { ReactNode } from "react";
import Header from "./components/Header";

import { ThemeProvider } from "./ThemeProvider";

export function App({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <Header />
      {children}
    </ThemeProvider>
  );
}
