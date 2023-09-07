import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import * as S from "./styled";

type BannerSlideProps = {
  onSlideChange: (activeIndex: number) => void;
};
const BANNER_LIST = [
  {
    src: "/images/home/banner-dunst.png",
    title: `언제 어디서든\n편안하게`,
    brand: "NAVY COUNTY",
  },
  {
    src: "/images/home/banner-umarmung.png",
    title: "23FW 컬렉션 선발매",
    brand: "UMARMUNG",
  },
  {
    src: "/images/home/banner-yourName.png",
    title: `기다려왔던\n시즌오프 소식`,
    brand: "YOUR NAME",
  },
  {
    src: "/images/home/banner-fetch.png",
    title: "23FW 컬렉션 선발매",
    brand: "FETCH",
  },
  {
    src: "/images/home/banner-dunst.png",
    title: `페미닌한 디테일\n편안한 실루엣`,
    brand: "DUNST",
  },
  {
    src: "/images/home/banner-iey.png",
    title: `미니멀리즘과\n러프한 디테일이 만나면`,
    brand: "IEY",
  },
];

export default function BannerSlide({ onSlideChange }: BannerSlideProps) {
  return (
    <S.Section>
      <Swiper onSlideChange={(slide) => onSlideChange(slide.activeIndex)}>
        {BANNER_LIST.map((item) => (
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
      </Swiper>
    </S.Section>
  );
}
