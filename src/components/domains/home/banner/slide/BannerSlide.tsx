import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import "swiper/css";

import * as S from "./styled";

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
  return (
    <S.Section>
      <S.CustomSwiper
        slidesPerView={"auto"}
        onSlideChange={(slide) => onSlideChange(slide.activeIndex)}
      >
        {bannerList.map((item) => (
          <SwiperSlide key={item.brand}>
            <S.Figure>
              <Image src={item.src} alt="text" fill={true} priority />
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
