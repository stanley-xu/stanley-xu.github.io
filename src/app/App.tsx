"use client";

import { ReactNode } from "react";
import Header from "./components/Header";

import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function App({ children }: { children: ReactNode }) {
  return (
    <body className={`${geistMono.variable} antialiased`}>
      <Header />
      {children}
    </body>
  );
}
