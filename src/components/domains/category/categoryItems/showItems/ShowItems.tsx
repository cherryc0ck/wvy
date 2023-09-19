import Image from "next/image";

import { MoreButton } from "@/components/common";
import * as S from "./styled";

type ShowItemsProps = {
  items: Item[];
  searched: string;
  visibleItemsCount: number;
  onShowMoreItems: () => void;
};

type Item = {
  src: string;
  brand: string;
  name: string;
};

export default function ShowItems({
  items,
  searched,
  visibleItemsCount,
  onShowMoreItems,
}: ShowItemsProps) {
  const test = () => {
    console.log("test");
  };

  return (
    <S.Container>
      <S.ItemWrapper>
        {items
          .slice(0, visibleItemsCount)
          .filter((el) => el.brand.includes(searched))
          .map((item, idx) => (
            <S.Item key={idx}>
              <S.Figure>
                <Image
                  src={item.src}
                  fill={true}
                  sizes="100%"
                  alt={item.name}
                />
              </S.Figure>
              <S.ItemDesc>
                <span>{item.brand}</span>
                <h3>{item.name}</h3>
              </S.ItemDesc>
            </S.Item>
          ))}
      </S.ItemWrapper>
      {items.length > visibleItemsCount && (
        <MoreButton
          isDisabled={false}
          themeMode="light"
          onClick={onShowMoreItems}
        />
      )}
    </S.Container>
  );
}
