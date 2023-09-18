import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";

import * as S from "./styled";
import useRisingBrand from "./hooks/useRisingBrand";

export default function RisingBrand() {
  const { brandList } = useRisingBrand();
  return (
    <S.Section>
      <S.Title>지금 떠오르는 브랜드</S.Title>
      <S.CustomSwiper slidesPerView={"auto"} spaceBetween={14}>
        {brandList.map((item) => (
          <SwiperSlide key={item.brand}>
            <S.Figure>
              <Image
                src={item.src}
                alt={item.brand}
                fill={true}
                priority
                sizes="100%"
              />
            </S.Figure>
            <S.BrandName>{item.brand}</S.BrandName>
          </SwiperSlide>
        ))}
      </S.CustomSwiper>
    </S.Section>
  );
}
