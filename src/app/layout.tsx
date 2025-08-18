import type { Metadata, Viewport } from "next";

import "./globals.css";
import { App } from "./App";

import { Geist_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "Stanley Xu",
  description: "My home page",
};

export const viewport: Viewport = {
  colorScheme: "dark light",
};

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                const theme = localStorage.getItem('user_theme_preference');
                if (theme && theme !== 'system') {
                  document.documentElement.setAttribute('data-theme', theme);
                }
              `,
          }}
        />
      </head>
      <body className={`${geistMono.variable} antialiased`}>
        <App>{children}</App>
      </body>
    </html>
  );
}
