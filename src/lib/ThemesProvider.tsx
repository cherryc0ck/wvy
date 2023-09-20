"use client";
import { PropsWithChildren } from "react";

import { ThemeProvider } from "styled-components";

import { theme } from "@/styles/themes/theme";

export default function ThemesProvider({ children }: PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
