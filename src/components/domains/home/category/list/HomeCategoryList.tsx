import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import "swiper/css";

import { HeartButton } from "@/components/common";
import useLike from "@/hooks/useLike";
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
  const { handleLikeItem } = useLike();

  return (
    <S.CustomSwiper slidesPerView={"auto"} spaceBetween={4}>
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
