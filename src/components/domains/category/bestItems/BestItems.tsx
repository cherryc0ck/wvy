import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import "swiper/css";

import { ChevronLeftIcon, ChevronRightIcon } from "@/assets/icons";
import useBestItems from "../hooks/useBestItems";
import * as S from "./styled";

export default function BestItems() {
  const {
    isStartSlide,
    isEndSlide,
    activeIndex,
    bestItemList,
    swiperOption,
    handleSlidePrev,
    handleSlideNext,
  } = useBestItems();

  return (
    <S.Section>
      <S.TitleButtonGroup>
        <S.Title>9월 첫주 BEST</S.Title>
        <S.SlideButtonWrapper>
          <S.SlideButton
            aria-disabled={isStartSlide ? "true" : "false"}
            onClick={handleSlidePrev}
          >
            <ChevronLeftIcon />
          </S.SlideButton>
          <S.SlideButton
            aria-disabled={isEndSlide ? "true" : "false"}
            onClick={handleSlideNext}
          >
            <ChevronRightIcon />
          </S.SlideButton>
        </S.SlideButtonWrapper>
      </S.TitleButtonGroup>
      <S.CustomSwiper {...swiperOption}>
        {bestItemList.map((item, idx) => (
          <SwiperSlide key={item.name}>
            <S.Figure>
              <Image
                src={item.src}
                alt={item.name}
                fill
                sizes="100%"
                priority
              />
              <S.Figcaption>
                <span>{idx + 1}</span>
              </S.Figcaption>
            </S.Figure>
            <S.ItemDesc>
              <span>{item.brand}</span>
              <p>{item.name}</p>
            </S.ItemDesc>
          </SwiperSlide>
        ))}
      </S.CustomSwiper>
    </S.Section>
  );
}
