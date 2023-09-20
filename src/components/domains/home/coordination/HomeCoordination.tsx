import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import "swiper/css";

import useCoordination from "./hooks/useCoordination";
import { Button, MoreButton } from "@/components/common";
import * as S from "./styled";

export default function HomeCoordination() {
  const {
    codyList,
    codyThemeList,
    currentTheme,
    handleChangeTheme,
    handleGoShowRoom,
  } = useCoordination();

  return (
    <S.Section>
      <S.Title>스우파2 손민수템!</S.Title>
      <S.ButtonWrapper>
        {codyThemeList.map((item, index) => (
          <Button
            key={item.theme}
            isSelected={currentTheme === item.theme}
            mode="dark"
            label={item.label}
            onClick={() => handleChangeTheme(item.theme)}
          />
        ))}
      </S.ButtonWrapper>
      <S.CustomSwiper slidesPerView={"auto"} spaceBetween={10}>
        {codyList.map((item) => (
          <SwiperSlide key={item.name}>
            <S.Figure>
              <Image src={item.src} fill={true} sizes="100%" alt={item.name} />
            </S.Figure>
          </SwiperSlide>
        ))}
      </S.CustomSwiper>
      <MoreButton
        isDisabled={false}
        themeMode="dark"
        onClick={handleGoShowRoom}
      />
    </S.Section>
  );
}
