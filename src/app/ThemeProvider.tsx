"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { THEME_KEY } from "./constants";

const THEMES = ["system", "dark", "light"] as const;
const DEFAULT_THEME = "system";
type ThemeValue = "system" | "dark" | "light";

type ThemeContextValue = {
  theme: ThemeValue;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Can't read localStorage until effect runs on client component mount
  const [theme, setTheme] = useState<ThemeValue | null>(null);

  const toggleTheme = useCallback(() => {
    if (theme == null) return;

    const index = THEMES.indexOf(theme);
    const nextTheme = THEMES[(index + 1) % THEMES.length];
    setTheme(nextTheme);
  }, [theme]);

  // Sync theme state to preferred colour scheme
  useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (ev: MediaQueryListEvent) => {
      if (ev.matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };

    onChange({ matches: mediaQueryList.matches } as MediaQueryListEvent);

    mediaQueryList.addEventListener("change", onChange);
    return () => mediaQueryList.removeEventListener("change", onChange);
  }, []);

  // [Read overrides] One-time read from local storage on client component mount
  useEffect(() => {
    const localStorageValue = localStorage.getItem(
      THEME_KEY,
    ) as ThemeValue | null;
    setTheme(localStorageValue ?? DEFAULT_THEME);
  }, []);

  // [Write override] Sync override theme in localStorage to theme state
  useEffect(() => {
    if (theme == null) return;
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  // Sync html[data-theme] to theme state
  useEffect(() => {
    if (theme == null) return;
    if (theme !== "system") {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={
        theme == null
          ? null
          : {
              theme,
              toggleTheme,
            }
      }
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext: () => ThemeContextValue | null = () =>
  useContext(ThemeContext);
