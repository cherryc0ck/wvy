import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";

import useEditorNote from "./hooks/useEditorNote";
import * as S from "./styled";
import { ThemeTag } from "@/components/common";

export default function EditorNote() {
  const { editorNoteList } = useEditorNote();
  return (
    <S.Section>
      <S.Title>
        23 f/w <br />
        에디터 노트
      </S.Title>
      <S.CustomSwiper slidesPerView={"auto"} spaceBetween={14}>
        {editorNoteList.map((item) => (
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
            <S.ItemDesc>
              <h3>{item.label}</h3>
              <S.ThemeWrapper>
                {item.theme.map((v) => (
                  <ThemeTag key={v} value={v} />
                ))}
              </S.ThemeWrapper>
            </S.ItemDesc>
          </SwiperSlide>
        ))}
      </S.CustomSwiper>
    </S.Section>
  );
}
