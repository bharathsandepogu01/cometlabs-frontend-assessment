"use client";

import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DARK_THEME, LIGHT_THEME } from "@/constants/theme";
import { IThemeContext, TTheme } from "./types";

export const ThemeContext = createContext<IThemeContext>({
  theme: DARK_THEME,
  setTheme: () => null,
});

function AppThemeProvider(props: PropsWithChildren): JSX.Element {
  const [theme, setTheme] = useState<TTheme>(DARK_THEME);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.classList.remove("bg-backgroundColor-day");
      document.body.classList.add("bg-backgroundColor-night");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("bg-backgroundColor-night");
      document.body.classList.add("bg-backgroundColor-day");
    }
  }, [theme]);

  const themeContextValue = useMemo<IThemeContext>(() => {
    return {
      theme,
      setTheme,
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default AppThemeProvider;
