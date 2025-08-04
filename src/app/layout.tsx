import type { Metadata } from "next";

import "./globals.css";
import { App } from "./App";
import { ThemeProvider } from "./ThemeProvider";

export const metadata: Metadata = {
  title: "Stanley Xu",
  description: "My home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <App>{children}</App>
      </ThemeProvider>
    </html>
  );
}
