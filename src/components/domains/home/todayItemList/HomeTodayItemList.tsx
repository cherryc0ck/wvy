import Image from "next/image";
import dayjs from "dayjs";
import { SwiperSlide } from "swiper/react";
import "swiper/css";

import { ThemeTag } from "@/components/common";
import * as S from "./styled";

const TODAY_ITEM_LIST = [
  {
    src: "/images/home/today/today-image-1.png",
    title: "좋은 감촉, 페메닌한 실루엣",
    brand: "ESSENTIAL",
    theme: "쇼룸",
    tags: ["원피스", "니트", "이벤트"],
  },
  {
    src: "/images/home/today/today-image-2.png",
    title: "포인트 있는 가방",
    brand: "YU MEI",
    theme: "브랜드",
    tags: ["수납", "토드백", "레더"],
  },
  {
    src: "/images/home/today/today-image-3.png",
    title: "기본에 충실한 자켓",
    brand: "NAVY COUNTY",
    theme: "룩북",
    tags: ["데님", "오버핏", "간절기"],
  },
  {
    src: "/images/home/today/today-image-4.png",
    title: "미니멀이 완성하는 일상",
    brand: "YOUR NAME HERE",
    theme: "쇼륨",
    tags: ["니트", "미니멀", "간절기"],
  },
  {
    src: "/images/home/today/today-image-5.png",
    title: "매일 신게될 로퍼",
    brand: "Coor",
    theme: "코디",
    tags: ["데일리", "로퍼", "관리"],
  },
  {
    src: "/images/home/today/today-image-6.png",
    title: "모던한 지갑",
    brand: "EQL",
    theme: "브랜드",
    tags: ["레더", "모던", "지갑"],
  },
  {
    src: "/images/home/today/today-image-7.png",
    title: "지속가능한 패션",
    brand: "ESSENTIAL",
    theme: "브랜드",
    tags: ["비건", "레더", "환경"],
  },
  {
    src: "/images/home/today/today-image-8.png",
    title: "핸드메이드의 디테일",
    brand: "LONDON UNDERGROUND",
    theme: "브랜드",
    tags: ["독보적", "레더", "인터뷰"],
  },
  {
    src: "/images/home/today/today-image-9.png",
    title: "데님과 클레식한 디자인",
    brand: "KANATA",
    theme: "룩북",
    tags: ["데님", "자켓", "룩북"],
  },
  {
    src: "/images/home/today/today-image-10.png",
    title: "클래식하고 여성스로운 무드",
    brand: "KIMUR",
    theme: "fw가을",
    tags: ["원피스", "아우터", "룩북"],
  },
];

export default function HomeTodayItemList() {
  return (
    <S.Section>
      <S.Date dateTime={dayjs().format("MM.DD.ddd")}>
        {dayjs().format("MM.DD.ddd")}
      </S.Date>
      <S.CustomSwiper slidesPerView={"auto"} spaceBetween={10}>
        {TODAY_ITEM_LIST.map((item) => (
          <SwiperSlide key={item.title}>
            <S.Figure>
              <Image
                src={item.src}
                alt={item.title}
                fill={true}
                priority
                sizes="100%"
              />
              <S.Figcaption>
                <span>{item.theme}</span>
              </S.Figcaption>
            </S.Figure>
            <S.ItemDesc>
              <h3>{item.title}</h3>
              <span>{item.brand}</span>
            </S.ItemDesc>
            <S.ThemeTags>
              {item.tags.map((tag) => (
                <ThemeTag key={tag} value={tag} />
              ))}
            </S.ThemeTags>
          </SwiperSlide>
        ))}
      </S.CustomSwiper>
    </S.Section>
  );
}
