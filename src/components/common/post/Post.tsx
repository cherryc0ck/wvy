import Image from "next/image";

import type { PostContent } from "@/types/post";
import { ThemeTag } from "@/components/common";
import * as S from "./styled";

type PostProps = {
  item: PostContent;
};

export default function Post({ item }: PostProps) {
  return (
    <S.Post>
      <S.Figure>
        <Image src={item.mainImg} alt={item.title} fill={true} priority />
        <S.Figcaption>
          <span>{item.theme}</span>
        </S.Figcaption>
      </S.Figure>
      <S.ItemDesc>
        <h3>{item.title}</h3>
        <p>{item.content}</p>
        <S.TagWrapper>
          {item.tags.map((tag) => (
            <ThemeTag key={tag} value={tag} />
          ))}
        </S.TagWrapper>
      </S.ItemDesc>
      <S.SubImageWrapper>
        {item.subImg.map((subImg) => (
          <S.SubFigure>
            <Image src={subImg} alt="서브 이미지" fill={true} priority />
          </S.SubFigure>
        ))}
      </S.SubImageWrapper>
    </S.Post>
  );
}
