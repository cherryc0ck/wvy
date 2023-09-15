import { useRouter } from "next/navigation";
import { useState } from "react";

type CodyListType = {
  [key: string]: Cody[];
};

type Cody = {
  src: string;
  name: string;
};

const CODY_LIST: CodyListType = {
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
    {
      src: "/images/home/cody/cody-today7.jpg",
      name: "today7",
    },
    {
      src: "/images/home/cody/cody-today8.jpg",
      name: "today8",
    },
    {
      src: "/images/home/cody/cody-today9.jpg",
      name: "today9",
    },
    {
      src: "/images/home/cody/cody-today10.jpg",
      name: "today10",
    },
    {
      src: "/images/home/cody/cody-today11.jpg",
      name: "today11",
    },
    {
      src: "/images/home/cody/cody-today12.jpg",
      name: "today12",
    },
  ],
  weekend: [
    {
      src: "/images/home/cody/cody-week1.jpg",
      name: "week1",
    },
    {
      src: "/images/home/cody/cody-week2.jpg",
      name: "week2",
    },
    {
      src: "/images/home/cody/cody-week3.jpg",
      name: "week3",
    },
    {
      src: "/images/home/cody/cody-week4.jpg",
      name: "week4",
    },
    {
      src: "/images/home/cody/cody-week5.jpg",
      name: "week5",
    },
    {
      src: "/images/home/cody/cody-week6.jpg",
      name: "week6",
    },
    {
      src: "/images/home/cody/cody-week7.jpg",
      name: "week7",
    },
    {
      src: "/images/home/cody/cody-week8.jpg",
      name: "week8",
    },
    {
      src: "/images/home/cody/cody-week9.jpg",
      name: "week9",
    },
    {
      src: "/images/home/cody/cody-week10.jpg",
      name: "week10",
    },
    {
      src: "/images/home/cody/cody-week11.jpg",
      name: "week11",
    },
    {
      src: "/images/home/cody/cody-week12.jpg",
      name: "week12",
    },
  ],
  popular: [
    {
      src: "/images/home/cody/cody-popular1.jpg",
      name: "popular1",
    },
    {
      src: "/images/home/cody/cody-popular2.jpg",
      name: "popular2",
    },
    {
      src: "/images/home/cody/cody-popular3.jpg",
      name: "popular3",
    },
    {
      src: "/images/home/cody/cody-popular4.jpg",
      name: "popular4",
    },
    {
      src: "/images/home/cody/cody-popular5.jpg",
      name: "popular5",
    },
    {
      src: "/images/home/cody/cody-popular6.jpg",
      name: "popular6",
    },
    {
      src: "/images/home/cody/cody-popular7.jpg",
      name: "popular7",
    },
    {
      src: "/images/home/cody/cody-popular8.jpg",
      name: "popular8",
    },
    {
      src: "/images/home/cody/cody-popular9.jpg",
      name: "popular9",
    },
    {
      src: "/images/home/cody/cody-popular10.jpg",
      name: "popular10",
    },
    {
      src: "/images/home/cody/cody-popular11.jpg",
      name: "popular11",
    },
    {
      src: "/images/home/cody/cody-popular12.jpg",
      name: "popular12",
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
  const router = useRouter();

  const handleChangeTheme = (theme: string) => {
    setCurrentTheme(theme);
  };

  const handleGoShowRoom = () => {
    router.push("/showRoom");
  };

  return {
    codyList: CODY_LIST[currentTheme],
    codyThemeList: CODY_THEME_LIST,
    currentTheme,
    handleChangeTheme,
    handleGoShowRoom,
  };
}
