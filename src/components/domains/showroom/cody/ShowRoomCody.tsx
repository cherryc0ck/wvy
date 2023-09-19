import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import "swiper/css";

import { Button, MoreButton } from "@/components/common";
import * as S from "./styled";

type Cody = {
  src: string;
  name: string;
};

type ThemeList = {
  label: string;
  theme: string;
};

type ShowRoomCodyProps = {
  currentTheme: string;
  data: Cody[];
  title: string;
  themeList: ThemeList[];
  onChangeTheme: (theme: string) => void;
  onMoreItem: () => void;
};

export default function ShowRoomCody({
  currentTheme,
  title,
  data,
  themeList,
  onChangeTheme,
  onMoreItem,
}: ShowRoomCodyProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.ButtonWrapper>
        {themeList.map((item, index) => (
          <Button
            key={item.theme}
            isSelected={currentTheme === item.theme}
            mode="dark"
            label={item.label}
            onClick={() => onChangeTheme(item.theme)}
          />
        ))}
      </S.ButtonWrapper>
      <S.CustomSwiper slidesPerView={"auto"} spaceBetween={7}>
        {data.map((item) => (
          <SwiperSlide key={item.name}>
            <S.Figure>
              <Image src={item.src} fill={true} sizes="100%" alt={item.name} />
            </S.Figure>
          </SwiperSlide>
        ))}
      </S.CustomSwiper>
      <MoreButton isDisabled={false} themeMode="dark" onClick={onMoreItem} />
    </S.Container>
  );
}
