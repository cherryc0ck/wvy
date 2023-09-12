import { useState } from "react";

const BANNER_LIST = [
  {
    src: "/images/home/banner/banner-navyCounty.png",
    title: `언제 어디서든\n편안하게`,
    brand: "NAVY COUNTY",
  },
  {
    src: "/images/home/banner/banner-umarmung.png",
    title: "23FW 컬렉션 선발매",
    brand: "UMARMUNG",
  },
  {
    src: "/images/home/banner/banner-yourName.png",
    title: `기다려왔던\n시즌오프 소식`,
    brand: "YOUR NAME",
  },
  {
    src: "/images/home/banner/banner-fetch.png",
    title: "23FW 컬렉션 선발매",
    brand: "FETCH",
  },
  {
    src: "/images/home/banner/banner-dunst.png",
    title: `페미닌한 디테일\n편안한 실루엣`,
    brand: "DUNST",
  },
  {
    src: "/images/home/banner/banner-iey.png",
    title: `미니멀리즘과\n러프한 디테일이 만나면`,
    brand: "IEY",
  },
];

export default function useBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (activeIndex: number) => {
    setActiveIndex(activeIndex);
  };

  return {
    bannerList: BANNER_LIST,
    activeIndex,
    handleSlideChange,
  };
}
