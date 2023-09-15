import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";

import { ChevronLeftIcon, ChevronRightIcon } from "@/assets/icons";
import { HeartButton } from "@/components/common";
import useBestItems from "../hooks/useBestItems";
import * as S from "./styled";

export default function BestItems() {
  const { bestItemList, handleLikeItem } = useBestItems();

  return (
    <S.Section>
      <S.TitleButtonGroup>
        <S.Title>9월 첫주 BEST</S.Title>
        <S.SlideButtonWrapper>
          <button>
            <ChevronLeftIcon />
          </button>
          <button>
            <ChevronRightIcon />
          </button>
        </S.SlideButtonWrapper>
      </S.TitleButtonGroup>
      <S.CustomSwiper slidesPerView={"auto"} spaceBetween={10}>
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
              <HeartButton onClick={handleLikeItem} />
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
