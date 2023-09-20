"use client";

import { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";
import ThemesProvider from "./ThemesProvider";
import GlobalStyle from "@/styles/global";

export default function AppProvider({ children }: PropsWithChildren) {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <ThemesProvider>{children}</ThemesProvider>
      </RecoilRoot>
    </>
  );
}
