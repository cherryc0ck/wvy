import * as S from "./styled";

type BannerScrollBarProps = {
  className?: string;
  activeIndex: number;
};

export default function BannerScrollBar({
  className = "",
  activeIndex,
}: BannerScrollBarProps) {
  return (
    <S.Container className={className} activeIndex={activeIndex}>
      <span />
    </S.Container>
  );
}
