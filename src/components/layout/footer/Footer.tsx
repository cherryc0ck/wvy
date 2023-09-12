"use client";

import Link from "next/link";
import { useState } from "react";

import { ChevronDownIcon } from "@/assets/icons";
import * as S from "./styled";

export default function Footer() {
  const [isOpenContact, setIsOpenContact] = useState(false);

  const handleDropdownContact = () => {
    setIsOpenContact(!isOpenContact);
  };

  return (
    <S.Footer>
      <S.List>
        <li>
          <Link href="">About</Link>
        </li>
        <li>
          <Link href="">Help</Link>
        </li>
        <li>
          <button onClick={handleDropdownContact}>
            <span>Contact</span>
            <ChevronDownIcon />
          </button>
        </li>
      </S.List>
      {isOpenContact && (
        <S.ContactList>
          <li>
            <Link href="">Instagram</Link>
          </li>
          <li>
            <Link href="">Facebook</Link>
          </li>
        </S.ContactList>
      )}
    </S.Footer>
  );
}
