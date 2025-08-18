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

/**
 * Theme switching is possible between system -> dark -> light modes
 * The default state is to use the system theme
 */
const THEMES = ["system", "dark", "light"] as const;
const DEFAULT_THEME = "system";
type ThemeValue = "system" | "dark" | "light";

type ThemeContextValue = {
  theme: ThemeValue;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeValue | null>(null);

  const toggleTheme = useCallback(() => {
    if (theme == null) return;

    const index = THEMES.indexOf(theme);
    const nextTheme = THEMES[(index + 1) % THEMES.length];
    setTheme(nextTheme);
  }, [theme]);

  // Sync state (to initialize) from local storage on client component mount
  useEffect(() => {
    const localStorageValue = localStorage.getItem(
      THEME_KEY,
    ) as ThemeValue | null;
    setTheme(localStorageValue ?? DEFAULT_THEME);
  }, []);

  // Register onChange that syncs theme state to changes in prefers-color-scheme
  useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (ev: MediaQueryListEvent) => {
      if (ev.matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };

    mediaQueryList.addEventListener("change", onChange);
    return () => mediaQueryList.removeEventListener("change", onChange);
  }, []);

  // Sync override theme in localStorage to theme state
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
