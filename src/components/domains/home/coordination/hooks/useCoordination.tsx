import { useState } from "react";

const CODY_LIST = {
  today: [
    {
      src: "/images/home/cody/cody-today1.jpg",
      name: "today1",
    },
    {
      src: "/images/home/cody/cody-today2.jpg",
      name: "today2",
    },
    {
      src: "/images/home/cody/cody-today3.jpg",
      name: "today3",
    },
    {
      src: "/images/home/cody/cody-today4.jpg",
      name: "today4",
    },
    {
      src: "/images/home/cody/cody-today5.jpg",
      name: "today5",
    },
    {
      src: "/images/home/cody/cody-today6.jpg",
      name: "today6",
    },
  ],
  week: [
    {
      src: "/images/home/cody/cody-today1.jpg",
      name: "week1",
    },
    {
      src: "/images/home/cody/cody-today2.jpg",
      name: "week2",
    },
    {
      src: "/images/home/cody/cody-today3.jpg",
      name: "week3",
    },
    {
      src: "/images/home/cody/cody-today4.jpg",
      name: "week4",
    },
    {
      src: "/images/home/cody/cody-today5.jpg",
      name: "week5",
    },
    {
      src: "/images/home/cody/cody-today6.jpg",
      name: "week6",
    },
  ],
  popular: [
    {
      src: "/images/home/cody/cody-today1.jpg",
      name: "popular1",
    },
    {
      src: "/images/home/cody/cody-today2.jpg",
      name: "popular2",
    },
    {
      src: "/images/home/cody/cody-today3.jpg",
      name: "popular3",
    },
    {
      src: "/images/home/cody/cody-today4.jpg",
      name: "popular4",
    },
    {
      src: "/images/home/cody/cody-today5.jpg",
      name: "popular5",
    },
    {
      src: "/images/home/cody/cody-today6.jpg",
      name: "popular6",
    },
  ],
};

export const CODY_THEME_LIST = [
  {
    label: "오늘 뭐 입지",
    theme: "today",
  },
  {
    label: "주말에 뭐 입지",
    theme: "weekend",
  },
  {
    label: "인기 브랜드",
    theme: "popular",
  },
];

export default function useCoordination() {
  const [currentTheme, setCurrentTheme] = useState(CODY_THEME_LIST[0].theme);

  const handleChangeTheme = (theme: string) => {
    setCurrentTheme(theme);
  };

  const handleAddCody = () => {
    console.log("handleAddCody");
  };

  return {
    codyList: CODY_LIST,
    codyThemeList: CODY_THEME_LIST,
    currentTheme,
    handleChangeTheme,
    handleAddCody,
  };
}
