import useBanner from "./hooks/useBanner";
import { BannerScrollBar } from "@/components/common";
import BannerSlide from "./slide/BannerSlide";

import * as S from "./styled";

export default function HomeBanner() {
  const { bannerList, handleSlideChange, activeIndex } = useBanner();

  return (
    <S.Section>
      <BannerSlide bannerList={bannerList} onSlideChange={handleSlideChange} />
      <BannerScrollBar activeIndex={activeIndex} />
    </S.Section>
  );
}
