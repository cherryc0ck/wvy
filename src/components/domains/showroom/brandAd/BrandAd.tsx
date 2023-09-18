import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";

import { BannerScrollBar, BrandButton } from "@/components/common";
import useBrandAd from "./hooks/useBrandAd";
import * as S from "./styled";

export default function BrandAd() {
  const {
    currentBrand,
    activeIndex,
    brands,
    adList,
    textList,
    handleSelectBrand,
    handleSlideChange,
  } = useBrandAd();
  return (
    <S.Section>
      <S.BrandButtonWrapper>
        {brands.map((brand) => (
          <BrandButton
            key={brand.name}
            isSelected={true}
            mode="light"
            imgSrc={brand.src}
            label={brand.label}
            name={brand.name}
            onSelectBrand={handleSelectBrand}
          />
        ))}
      </S.BrandButtonWrapper>
      <S.CustomSwiper
        slidesPerView={"auto"}
        onSlideChange={(slide) => handleSlideChange(slide.realIndex)}
      >
        {adList[currentBrand].map((item) => (
          <SwiperSlide key={item.name}>
            <S.Figure>
              <Image
                src={item.src}
                alt={item.name}
                fill={true}
                priority
                sizes="100%"
              />
            </S.Figure>
          </SwiperSlide>
        ))}
      </S.CustomSwiper>
      <S.Desc>{textList[currentBrand]}</S.Desc>
      <BannerScrollBar activeIndex={activeIndex} />
    </S.Section>
  );
}
