import { SwiperSlide } from "swiper/react";
import "swiper/css";

import * as S from "./styled";
import { useEffect, useState } from "react";

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
  const [isSwiperEnabled, setIsSwiperEnabled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsSwiperEnabled(window.innerWidth < 1024);
      const handleWindowSizeChange = () => {
        setIsSwiperEnabled(window.innerWidth < 1024);
      };

      window.addEventListener("resize", handleWindowSizeChange);

      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }
  }, []);

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
      {currentCategory === "keyword" && isSwiperEnabled && (
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

      {currentCategory === "keyword" && !isSwiperEnabled && (
        <S.KeywordList>
          {keywordList.map((item) => (
            <li>
              <S.KeywordButton
                aria-selected={currentKeyword === item.name}
                onClick={() => onSelectKeyword(item.name)}
              >
                {item.label}{" "}
              </S.KeywordButton>
            </li>
          ))}
        </S.KeywordList>
      )}
    </S.Container>
  );
}
