"use client";

import { useState } from "react";
import Link from "next/link";

import { CloseIcon, HamburgerIcon, LogoIcon } from "@/assets/icons";
import * as S from "./styled";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <S.Header>
      <h1>
        <Link href="">
          <LogoIcon />
        </Link>
      </h1>
      {toggleMenu && (
        <S.MobileNav>
          <ul>
            <li>
              <Link href="/category">fw가을</Link>
            </li>
            <li>
              <Link href="/showroom">Showroom</Link>
            </li>
          </ul>
        </S.MobileNav>
      )}
      <S.DesktopNav>
        <ul>
          <li>
            <Link href="/category">fw가을</Link>
          </li>
          <li>
            <Link href="/showroom">Showroom</Link>
          </li>
        </ul>
      </S.DesktopNav>
      <S.MenuButton onClick={handleToggleMenu}>
        {!toggleMenu ? <HamburgerIcon /> : <CloseIcon />}
      </S.MenuButton>
    </S.Header>
  );
}
