import * as S from "./styled";

type BannerScrollBarProps = {
  activeIndex: number;
};

export default function BannerScrollBar({ activeIndex }: BannerScrollBarProps) {
  return (
    <S.Container activeIndex={activeIndex}>
      <span />
    </S.Container>
  );
}
