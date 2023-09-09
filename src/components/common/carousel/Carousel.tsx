import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

type CarouselProps = {
  list: ListItem[];
};

type ListItem = {
  title: string;
  subTitle: string;
  imgSrc: any;
};

export default function Carousel({ list }: CarouselProps) {
  return (
    <>
      <Swiper>
        {list.map((item, i) => (
          <SwiperSlide key={i}></SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
