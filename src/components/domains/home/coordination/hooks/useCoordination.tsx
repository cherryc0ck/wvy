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
  crew: [
    {
      src: "/images/showroom/cody/crew/1million1.png",
      name: "1million1",
    },
    {
      src: "/images/showroom/cody/crew/1million2.png",
      name: "1million2",
    },
    {
      src: "/images/showroom/cody/crew/1million3.png",
      name: "1million3",
    },
    {
      src: "/images/showroom/cody/crew/1million4.png",
      name: "1million4",
    },
    {
      src: "/images/showroom/cody/crew/1million5.png",
      name: "1million5",
    },
    {
      src: "/images/showroom/cody/crew/1million6.png",
      name: "1million6",
    },
    {
      src: "/images/showroom/cody/crew/1million7.png",
      name: "1million7",
    },
    {
      src: "/images/showroom/cody/crew/1million8.png",
      name: "1million8",
    },
    {
      src: "/images/showroom/cody/crew/1million9.png",
      name: "1million9",
    },
    {
      src: "/images/showroom/cody/crew/1million10.png",
      name: "1million10",
    },
    {
      src: "/images/showroom/cody/crew/1million11.png",
      name: "1million11",
    },
    {
      src: "/images/showroom/cody/crew/1million12.png",
      name: "1million12",
    },
  ],
  hot: [
    {
      src: "/images/showroom/cody/hot/cargoPants1.png",
      name: "cargoPants1",
    },
    {
      src: "/images/showroom/cody/hot/cargoPants2.png",
      name: "cargoPants2",
    },
    {
      src: "/images/showroom/cody/hot/cargoPants3.png",
      name: "cargoPants3",
    },
    {
      src: "/images/showroom/cody/hot/cargoPants4.png",
      name: "cargoPants4",
    },
    {
      src: "/images/showroom/cody/hot/tubeTop1.png",
      name: "tubeTop1",
    },
    {
      src: "/images/showroom/cody/hot/tubeTop2.png",
      name: "tubeTop2",
    },
    {
      src: "/images/showroom/cody/hot/tubeTop3.png",
      name: "tubeTop3",
    },
    {
      src: "/images/showroom/cody/hot/tubeTop4.png",
      name: "tubeTop4",
    },
    {
      src: "/images/showroom/cody/hot/hoodie1.png",
      name: "hoodie1",
    },
    {
      src: "/images/showroom/cody/hot/hoodie2.png",
      name: "hoodie2",
    },
    {
      src: "/images/showroom/cody/hot/hoodie3.png",
      name: "hoodie3",
    },
    {
      src: "/images/showroom/cody/hot/hoodie4.png",
      name: "hoodie4",
    },
  ],
  popular: [
    {
      src: "/images/showroom/cody/popularBrand/dunst1.jpg",
      name: "dunst1",
    },
    {
      src: "/images/showroom/cody/popularBrand/dunst2.jpg",
      name: "dunst2",
    },
    {
      src: "/images/showroom/cody/popularBrand/dunst3.jpg",
      name: "dunst3",
    },
    {
      src: "/images/showroom/cody/popularBrand/general1.jpg",
      name: "general1",
    },
    {
      src: "/images/showroom/cody/popularBrand/general2.jpg",
      name: "general2",
    },
    {
      src: "/images/showroom/cody/popularBrand/general3.jpg",
      name: "general3",
    },
    {
      src: "/images/showroom/cody/popularBrand/siyazu1.jpg",
      name: "siyazu1",
    },
    {
      src: "/images/showroom/cody/popularBrand/siyazu2.jpg",
      name: "siyazu2",
    },
    {
      src: "/images/showroom/cody/popularBrand/siyazu3.jpg",
      name: "siyazu3",
    },
    {
      src: "/images/showroom/cody/popularBrand/diagonal1.jpg",
      name: "diagonal1",
    },
    {
      src: "/images/showroom/cody/popularBrand/diagonal2.jpg",
      name: "diagonal2",
    },
    {
      src: "/images/showroom/cody/popularBrand/diagonal3.jpg",
      name: "diagonal3",
    },
  ],
};

export const CODY_THEME_LIST = [
  {
    label: "크루",
    theme: "crew",
  },
  {
    label: "핫 아이템",
    theme: "hot",
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
    router.push("/showroom");
  };

  return {
    codyList: CODY_LIST[currentTheme],
    codyThemeList: CODY_THEME_LIST,
    currentTheme,
    handleChangeTheme,
    handleGoShowRoom,
  };
}
