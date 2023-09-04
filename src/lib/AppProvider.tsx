"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "@/styles/global";
import { theme } from "@/styles/themes/theme";

export default function AppProvider({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}
