"use client";

import { BestItems, CategoryItems } from "@/components/domains/category";
import * as S from "./styled";

export default function CategoryPage() {
  return (
    <S.Section>
      <BestItems />
      <CategoryItems />
    </S.Section>
  );
}
