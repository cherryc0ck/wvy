"use client";

import { useState } from "react";
import { useRecoilState } from "recoil";
import Link from "next/link";

import {
  CloseIcon,
  HamburgerIcon,
  LogoIcon,
  WhiteLogoIcon,
} from "@/assets/icons";
import { ThemeFlag, themeState } from "@/stores/theme";
import * as S from "./styled";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [theme, setTheme] = useRecoilState(themeState);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleClick = () => {
    if (theme === ThemeFlag.light) {
      setTheme(ThemeFlag.dark);
    } else {
      setTheme(ThemeFlag.light);
    }
  };
  theme;
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
