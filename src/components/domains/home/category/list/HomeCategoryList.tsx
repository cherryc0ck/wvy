import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { HeartButton } from "@/components/common";
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
  const handleLikeItem = () => {
    alert("handleLikeItem");
  };

  return (
    <S.CustomSwiper slidesPerView={4.26} spaceBetween={4}>
      {list.map((item) => (
        <SwiperSlide key={item.name}>
          <S.Figure>
            <Image src={item.src} fill={true} alt={item.name} />
            <HeartButton onClick={handleLikeItem} />
          </S.Figure>
        </SwiperSlide>
      ))}
    </S.CustomSwiper>
  );
}
