import { useState } from "react";

import { BannerScrollBar } from "@/components/common";
import BannerSlide from "./slide/BannerSlide";
import * as S from "./styled";

export default function HomeBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (activeIndex: number) => {
    setActiveIndex(activeIndex);
  };

  return (
    <S.Section>
      <BannerSlide onSlideChange={handleSlideChange} />
      <BannerScrollBar activeIndex={activeIndex} />
    </S.Section>
  );
}
