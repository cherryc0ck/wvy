import Image from "next/image";
import { useRef } from "react";
import { SwiperSlide, SwiperProps } from "swiper/react";
import "swiper/css";
import type { Swiper as SwiperType } from "swiper";

import * as S from "./styled";
import SlideMoveButton from "@/components/common/button/slide/SlideMoveButton";

type BannerSlideProps = {
  bannerList: BannerContent[];
  onSlideChange: (activeIndex: number) => void;
};

type BannerContent = {
  src: string;
  title: string;
  brand: string;
};

export default function BannerSlide({
  bannerList,
  onSlideChange,
}: BannerSlideProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const swiperOption: SwiperProps = {
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 0,
    onSlideChange: (slide) => onSlideChange(slide.realIndex),
    onInit: (swiper) => (swiperRef.current = swiper),
  };

  return (
    <S.Section>
      <SlideMoveButton
        css={S.PrevButton}
        direction="prev"
        onClick={() => swiperRef.current?.slidePrev()}
      />
      <SlideMoveButton
        css={S.NextButton}
        direction="next"
        onClick={() => swiperRef.current?.slideNext()}
      />
      <S.CustomSwiper {...swiperOption}>
        {bannerList.map((item) => (
          <SwiperSlide key={item.brand}>
            <S.Figure>
              <Image
                src={item.src}
                alt="text"
                fill={true}
                priority
                sizes="100%"
              />
              <S.Figcaption>
                <h3>{item.title}</h3>
                <p>{item.brand}</p>
              </S.Figcaption>
            </S.Figure>
          </SwiperSlide>
        ))}
      </S.CustomSwiper>
    </S.Section>
  );
}
