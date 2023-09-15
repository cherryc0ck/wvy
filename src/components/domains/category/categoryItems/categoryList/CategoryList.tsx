import { SwiperSlide } from "swiper/react";
import "swiper/css";

import * as S from "./styled";

type CategoryListProps = {
  categoryList: Category[];
  keywordList: Category[];
  currentCategory: string;
  currentKeyword: string;
  onSelectCategory: (category: string) => void;
  onSelectKeyword: (keyword: string) => void;
};

type Category = {
  label: string;
  name: string;
};

export default function CategoryList({
  categoryList,
  keywordList,
  currentCategory,
  currentKeyword,
  onSelectCategory,
  onSelectKeyword,
}: CategoryListProps) {
  return (
    <S.Container>
      <S.CategoryList>
        {categoryList.map((category) => (
          <S.Category
            key={category.name}
            aria-selected={currentCategory === category.name}
          >
            <button onClick={() => onSelectCategory(category.name)}>
              {category.label}
            </button>
          </S.Category>
        ))}
      </S.CategoryList>
      {currentCategory === "keyword" && (
        <S.CustomSwiper slidesPerView={"auto"} spaceBetween={20}>
          {keywordList.map((item) => (
            <SwiperSlide key={item.name}>
              <S.KeywordButton
                aria-selected={currentKeyword === item.name}
                onClick={() => onSelectKeyword(item.name)}
              >
                {item.label}{" "}
              </S.KeywordButton>
            </SwiperSlide>
          ))}
        </S.CustomSwiper>
      )}
    </S.Container>
  );
}
