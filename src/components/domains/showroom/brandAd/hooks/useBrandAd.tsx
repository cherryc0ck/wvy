import type { IndexSignature } from "@/types/common";
import React, { useState } from "react";

type AdList = {
  [key: string]: AdItem[];
};

type AdItem = {
  src: string;
  name: string;
};

const BRANDS = [
  {
    name: "yumei",
    src: "/images/showroom/brandAd/yumei.png",
    label: "YU MEI",
  },
  {
    name: "asics",
    src: "/images/showroom/brandAd/asics.jpg",
    label: "asics",
  },
];

const TEXT_LIST: IndexSignature = {
  yumei: "YU MEI, Ch'lita 미니백 출시",
  asics: "ASICS 젤 카야노 14 출시",
};

const AD_LIST: AdList = {
  yumei: [
    {
      src: "/images/showroom/brandAd/ad-yumei1.jpg",
      name: "yumei1",
    },
    {
      src: "/images/showroom/brandAd/ad-yumei2.jpg",
      name: "yumei2",
    },
    {
      src: "/images/showroom/brandAd/ad-yumei3.jpg",
      name: "yumei3",
    },
    {
      src: "/images/showroom/brandAd/ad-yumei4.jpg",
      name: "yumei4",
    },
    {
      src: "/images/showroom/brandAd/ad-yumei5.jpg",
      name: "yumei5",
    },
    {
      src: "/images/showroom/brandAd/ad-yumei6.jpg",
      name: "yumei6",
    },
  ],
  asics: [
    {
      src: "/images/showroom/brandAd/ad-asics1.jpg",
      name: "asics1",
    },
    {
      src: "/images/showroom/brandAd/ad-asics2.jpg",
      name: "asics2",
    },
    {
      src: "/images/showroom/brandAd/ad-asics3.jpg",
      name: "asics3",
    },
    {
      src: "/images/showroom/brandAd/ad-asics4.jpg",
      name: "asics4",
    },
    {
      src: "/images/showroom/brandAd/ad-asics5.jpg",
      name: "asics5",
    },
    {
      src: "/images/showroom/brandAd/ad-asics6.jpg",
      name: "asics6",
    },
  ],
};

const INITIAL_CURRENT_BRAND = "yumei";

export default function useBrandAd() {
  const [currentBrand, setCurrentBrand] = useState(INITIAL_CURRENT_BRAND);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (activeIndex: number) => {
    setActiveIndex(activeIndex);
  };
  const handleSelectBrand = (brand: string) => {
    setCurrentBrand(brand);
  };

  return {
    currentBrand,
    activeIndex,
    brands: BRANDS,
    adList: AD_LIST,
    textList: TEXT_LIST,
    handleSelectBrand,
    handleSlideChange,
  };
}
