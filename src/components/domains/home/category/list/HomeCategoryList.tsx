import Image from "next/image";
import { useEffect, useState } from "react";
import { SwiperProps, SwiperSlide } from "swiper/react";
import "swiper/css";

import * as S from "./styled";

type HomeCategoryListProps = {
  list: ListItems[];
};

type ListItems = {
  isLike: boolean;
  src: string;
  name: string;
};

export default function HomeCategoryList({ list }: HomeCategoryListProps) {
  const [isSwiperEnabled, setIsSwiperEnabled] = useState(
    window.innerWidth < 1024
  );

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setIsSwiperEnabled(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const swiperOption: SwiperProps = {
    spaceBetween: 4,
    slidesPerView: "auto",
  };

  if (isSwiperEnabled) {
    return (
      <S.CustomSwiper {...swiperOption}>
        {list.map((item) => (
          <SwiperSlide key={item.name}>
            <S.Figure>
              <Image src={item.src} fill={true} sizes="100%" alt={item.name} />
            </S.Figure>
          </SwiperSlide>
        ))}
      </S.CustomSwiper>
    );
  }
  return (
    <S.Container>
      {list.map((item) => (
        <S.Wrapper key={item.name}>
          <S.Figure>
            <Image src={item.src} fill={true} sizes="100%" alt={item.name} />
          </S.Figure>
        </S.Wrapper>
      ))}
    </S.Container>
  );
}
