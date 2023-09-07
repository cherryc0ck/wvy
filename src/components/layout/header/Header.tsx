"use client";

import Link from "next/link";

import { HamburgerIcon, LogoIcon } from "@/assets/icons";
import * as S from "./styled";

export default function Header() {
  return (
    <S.Header>
      <h1>
        <Link href="">
          <LogoIcon />
        </Link>
      </h1>
      <S.MenuButton>
        <HamburgerIcon />
      </S.MenuButton>
    </S.Header>
  );
}
