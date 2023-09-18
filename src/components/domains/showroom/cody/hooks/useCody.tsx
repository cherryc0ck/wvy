import React from "react";
import { useImmer } from "use-immer";

export type CodyListType = {
  [key: string]: Cody[];
};

export type Cody = {
  src: string;
  name: string;
};

const CREW_LIST: CodyListType = {
  oneMillion: [
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
  bebe: [
    {
      src: "/images/showroom/cody/crew/bebe1.png",
      name: "bebe1",
    },
    {
      src: "/images/showroom/cody/crew/bebe2.png",
      name: "bebe2",
    },
    {
      src: "/images/showroom/cody/crew/bebe3.png",
      name: "bebe3",
    },
    {
      src: "/images/showroom/cody/crew/bebe4.png",
      name: "bebe4",
    },
    {
      src: "/images/showroom/cody/crew/bebe5.png",
      name: "bebe5",
    },
    {
      src: "/images/showroom/cody/crew/bebe6.png",
      name: "bebe6",
    },
    {
      src: "/images/showroom/cody/crew/bebe7.png",
      name: "bebe7",
    },
    {
      src: "/images/showroom/cody/crew/bebe8.png",
      name: "bebe8",
    },
    {
      src: "/images/showroom/cody/crew/bebe9.png",
      name: "bebe9",
    },
    {
      src: "/images/showroom/cody/crew/bebe10.png",
      name: "bebe10",
    },
    {
      src: "/images/showroom/cody/crew/bebe11.png",
      name: "bebe11",
    },
    {
      src: "/images/showroom/cody/crew/bebe12.png",
      name: "bebe12",
    },
  ],
  deepNDap: [
    {
      src: "/images/showroom/cody/crew/deepNDap1.png",
      name: "deepNDap1",
    },
    {
      src: "/images/showroom/cody/crew/deepNDap2.png",
      name: "deepNDap2",
    },
    {
      src: "/images/showroom/cody/crew/deepNDap3.png",
      name: "deepNDap3",
    },
    {
      src: "/images/showroom/cody/crew/deepNDap4.png",
      name: "deepNDap4",
    },
    {
      src: "/images/showroom/cody/crew/deepNDap5.png",
      name: "deepNDap5",
    },
    {
      src: "/images/showroom/cody/crew/deepNDap6.png",
      name: "deepNDap6",
    },
    {
      src: "/images/showroom/cody/crew/deepNDap7.png",
      name: "deepNDap7",
    },
    {
      src: "/images/showroom/cody/crew/deepNDap8.png",
      name: "deepNDap8",
    },
    {
      src: "/images/showroom/cody/crew/deepNDap9.png",
      name: "deepNDap9",
    },
    {
      src: "/images/showroom/cody/crew/deepNDap10.png",
      name: "deepNDap10",
    },
    {
      src: "/images/showroom/cody/crew/deepNDap11.png",
      name: "deepNDap11",
    },
    {
      src: "/images/showroom/cody/crew/deepNDap12.png",
      name: "deepNDap12",
    },
  ],
};

const CREW_THEME_LIST = [
  {
    label: "원밀리언",
    theme: "oneMillion",
  },
  {
    label: "베베",
    theme: "bebe",
  },
  {
    label: "딥앤댑",
    theme: "deepNDap",
  },
];

const HOT_ITEM_LIST: CodyListType = {
  cargoPants: [
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
      src: "/images/showroom/cody/hot/cargoPants5.png",
      name: "cargoPants5",
    },
    {
      src: "/images/showroom/cody/hot/cargoPants6.png",
      name: "cargoPants6",
    },
    {
      src: "/images/showroom/cody/hot/cargoPants7.png",
      name: "cargoPants7",
    },
    {
      src: "/images/showroom/cody/hot/cargoPants8.png",
      name: "cargoPants8",
    },
    {
      src: "/images/showroom/cody/hot/cargoPants9.png",
      name: "cargoPants9",
    },
    {
      src: "/images/showroom/cody/hot/cargoPants10.png",
      name: "cargoPants10",
    },
    {
      src: "/images/showroom/cody/hot/cargoPants11.png",
      name: "cargoPants11",
    },
    {
      src: "/images/showroom/cody/hot/cargoPants12.png",
      name: "cargoPants12",
    },
  ],
  tubeTop: [
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
      src: "/images/showroom/cody/hot/tubeTop5.png",
      name: "tubeTop5",
    },
    {
      src: "/images/showroom/cody/hot/tubeTop6.png",
      name: "tubeTop6",
    },
    {
      src: "/images/showroom/cody/hot/tubeTop7.png",
      name: "tubeTop7",
    },
    {
      src: "/images/showroom/cody/hot/tubeTop8.png",
      name: "tubeTop8",
    },
    {
      src: "/images/showroom/cody/hot/tubeTop9.png",
      name: "tubeTop9",
    },
    {
      src: "/images/showroom/cody/hot/tubeTop10.png",
      name: "tubeTop10",
    },
    {
      src: "/images/showroom/cody/hot/tubeTop11.png",
      name: "tubeTop11",
    },
    {
      src: "/images/showroom/cody/hot/tubeTop12.png",
      name: "tubeTop12",
    },
  ],
  hoodie: [
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
    {
      src: "/images/showroom/cody/hot/hoodie5.png",
      name: "hoodie5",
    },
    {
      src: "/images/showroom/cody/hot/hoodie6.png",
      name: "hoodie6",
    },
    {
      src: "/images/showroom/cody/hot/hoodie7.png",
      name: "hoodie7",
    },
    {
      src: "/images/showroom/cody/hot/hoodie8.png",
      name: "hoodie8",
    },
    {
      src: "/images/showroom/cody/hot/hoodie9.png",
      name: "hoodie9",
    },
    {
      src: "/images/showroom/cody/hot/hoodie10.png",
      name: "hoodie10",
    },
    {
      src: "/images/showroom/cody/hot/hoodie11.png",
      name: "hoodie11",
    },
    {
      src: "/images/showroom/cody/hot/hoodie12.png",
      name: "hoodie12",
    },
  ],
  beanie: [
    {
      src: "/images/showroom/cody/hot/beanie1.png",
      name: "beanie1",
    },
    {
      src: "/images/showroom/cody/hot/beanie2.png",
      name: "beanie2",
    },
    {
      src: "/images/showroom/cody/hot/beanie3.png",
      name: "beanie3",
    },
    {
      src: "/images/showroom/cody/hot/beanie4.png",
      name: "beanie4",
    },
    {
      src: "/images/showroom/cody/hot/beanie5.png",
      name: "beanie5",
    },
    {
      src: "/images/showroom/cody/hot/beanie6.png",
      name: "beanie6",
    },
    {
      src: "/images/showroom/cody/hot/beanie7.png",
      name: "beanie7",
    },
    {
      src: "/images/showroom/cody/hot/beanie8.png",
      name: "beanie8",
    },
    {
      src: "/images/showroom/cody/hot/beanie9.png",
      name: "beanie9",
    },
    {
      src: "/images/showroom/cody/hot/beanie10.png",
      name: "beanie10",
    },
    {
      src: "/images/showroom/cody/hot/beanie11.png",
      name: "beanie11",
    },
    {
      src: "/images/showroom/cody/hot/beanie12.png",
      name: "beanie12",
    },
  ],
};

const HOT_ITEM_THEME_LIST = [
  {
    label: "카고 팬츠",
    theme: "cargoPants",
  },
  {
    label: "튜브 탑",
    theme: "tubeTop",
  },
  {
    label: "후드",
    theme: "hoodie",
  },
  {
    label: "비니",
    theme: "beanie",
  },
];

const POPULAR_BRAND_LIST: CodyListType = {
  dunst: [
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
      src: "/images/showroom/cody/popularBrand/dunst4.jpg",
      name: "dunst4",
    },
    {
      src: "/images/showroom/cody/popularBrand/dunst5.jpg",
      name: "dunst5",
    },
    {
      src: "/images/showroom/cody/popularBrand/dunst6.jpg",
      name: "dunst6",
    },
    {
      src: "/images/showroom/cody/popularBrand/dunst7.jpg",
      name: "dunst7",
    },
    {
      src: "/images/showroom/cody/popularBrand/dunst8.jpg",
      name: "dunst8",
    },
    {
      src: "/images/showroom/cody/popularBrand/dunst9.jpg",
      name: "dunst9",
    },
    {
      src: "/images/showroom/cody/popularBrand/dunst10.jpg",
      name: "dunst10",
    },
    {
      src: "/images/showroom/cody/popularBrand/dunst11.jpg",
      name: "dunst11",
    },
    {
      src: "/images/showroom/cody/popularBrand/dunst12.jpg",
      name: "dunst12",
    },
  ],
  general: [
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
      src: "/images/showroom/cody/popularBrand/general4.jpg",
      name: "general4",
    },
    {
      src: "/images/showroom/cody/popularBrand/general5.jpg",
      name: "general5",
    },
    {
      src: "/images/showroom/cody/popularBrand/general6.jpg",
      name: "general6",
    },
    {
      src: "/images/showroom/cody/popularBrand/general7.jpg",
      name: "general7",
    },
    {
      src: "/images/showroom/cody/popularBrand/general8.jpg",
      name: "general8",
    },
    {
      src: "/images/showroom/cody/popularBrand/general9.jpg",
      name: "general9",
    },
    {
      src: "/images/showroom/cody/popularBrand/general10.jpg",
      name: "general10",
    },
    {
      src: "/images/showroom/cody/popularBrand/general11.jpg",
      name: "general11",
    },
    {
      src: "/images/showroom/cody/popularBrand/general12.jpg",
      name: "general12",
    },
  ],
  siyazu: [
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
      src: "/images/showroom/cody/popularBrand/siyazu4.jpg",
      name: "siyazu4",
    },
    {
      src: "/images/showroom/cody/popularBrand/siyazu5.jpg",
      name: "siyazu5",
    },
    {
      src: "/images/showroom/cody/popularBrand/siyazu6.jpg",
      name: "siyazu6",
    },
    {
      src: "/images/showroom/cody/popularBrand/siyazu7.jpg",
      name: "siyazu7",
    },
    {
      src: "/images/showroom/cody/popularBrand/siyazu8.jpg",
      name: "siyazu8",
    },
    {
      src: "/images/showroom/cody/popularBrand/siyazu9.jpg",
      name: "siyazu9",
    },
    {
      src: "/images/showroom/cody/popularBrand/siyazu10.jpg",
      name: "siyazu10",
    },
    {
      src: "/images/showroom/cody/popularBrand/siyazu11.jpg",
      name: "siyazu11",
    },
    {
      src: "/images/showroom/cody/popularBrand/siyazu12.jpg",
      name: "siyazu12",
    },
  ],
  diagonal: [
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
    {
      src: "/images/showroom/cody/popularBrand/diagonal4.jpg",
      name: "diagonal4",
    },
    {
      src: "/images/showroom/cody/popularBrand/diagonal5.jpg",
      name: "diagonal5",
    },
    {
      src: "/images/showroom/cody/popularBrand/diagonal6.jpg",
      name: "diagonal6",
    },
    {
      src: "/images/showroom/cody/popularBrand/diagonal7.jpg",
      name: "diagonal7",
    },
    {
      src: "/images/showroom/cody/popularBrand/diagonal8.jpg",
      name: "diagonal8",
    },
    {
      src: "/images/showroom/cody/popularBrand/diagonal9.jpg",
      name: "diagonal9",
    },
    {
      src: "/images/showroom/cody/popularBrand/diagonal10.jpg",
      name: "diagonal10",
    },
    {
      src: "/images/showroom/cody/popularBrand/diagonal11.jpg",
      name: "diagonal11",
    },
    {
      src: "/images/showroom/cody/popularBrand/diagonal12.pg",
      name: "diagonal12",
    },
  ],
  marge: [
    {
      src: "/images/showroom/cody/popularBrand/marge1.jpg",
      name: "marge1",
    },
    {
      src: "/images/showroom/cody/popularBrand/marge2.jpg",
      name: "marge2",
    },
    {
      src: "/images/showroom/cody/popularBrand/marge3.jpg",
      name: "marge3",
    },
    {
      src: "/images/showroom/cody/popularBrand/marge4.jpg",
      name: "marge4",
    },
    {
      src: "/images/showroom/cody/popularBrand/marge5.jpg",
      name: "marge5",
    },
    {
      src: "/images/showroom/cody/popularBrand/marge6.jpg",
      name: "marge6",
    },
    {
      src: "/images/showroom/cody/popularBrand/marge7.jpg",
      name: "marge7",
    },
    {
      src: "/images/showroom/cody/popularBrand/marge8.jpg",
      name: "marge8",
    },
    {
      src: "/images/showroom/cody/popularBrand/marge9.jpg",
      name: "marge9",
    },
    {
      src: "/images/showroom/cody/popularBrand/marge10.jpg",
      name: "marge10",
    },
    {
      src: "/images/showroom/cody/popularBrand/marge11.jpg",
      name: "marge11",
    },
    {
      src: "/images/showroom/cody/popularBrand/marge12.jpg",
      name: "marge12",
    },
  ],
  label: [
    {
      src: "/images/showroom/cody/popularBrand/label1.jpg",
      name: "label1",
    },
    {
      src: "/images/showroom/cody/popularBrand/label2.jpg",
      name: "label2",
    },
    {
      src: "/images/showroom/cody/popularBrand/label3.jpg",
      name: "label3",
    },
    {
      src: "/images/showroom/cody/popularBrand/label4.jpg",
      name: "label4",
    },
    {
      src: "/images/showroom/cody/popularBrand/label5.jpg",
      name: "label5",
    },
    {
      src: "/images/showroom/cody/popularBrand/label6.jpg",
      name: "label6",
    },
    {
      src: "/images/showroom/cody/popularBrand/label7.jpg",
      name: "label7",
    },
    {
      src: "/images/showroom/cody/popularBrand/label8.jpg",
      name: "label8",
    },
    {
      src: "/images/showroom/cody/popularBrand/label9.jpg",
      name: "label9",
    },
    {
      src: "/images/showroom/cody/popularBrand/label10.jpg",
      name: "label10",
    },
    {
      src: "/images/showroom/cody/popularBrand/label11.jpg",
      name: "label11",
    },
    {
      src: "/images/showroom/cody/popularBrand/label12.jpg",
      name: "label12",
    },
  ],
  martin: [
    {
      src: "/images/showroom/cody/popularBrand/martin1.jpg",
      name: "martin1",
    },
    {
      src: "/images/showroom/cody/popularBrand/martin2.jpg",
      name: "martin2",
    },
    {
      src: "/images/showroom/cody/popularBrand/martin3.jpg",
      name: "martin3",
    },
    {
      src: "/images/showroom/cody/popularBrand/martin4.jpg",
      name: "martin4",
    },
    {
      src: "/images/showroom/cody/popularBrand/martin5.jpg",
      name: "martin5",
    },
    {
      src: "/images/showroom/cody/popularBrand/martin6.jpg",
      name: "martin6",
    },
    {
      src: "/images/showroom/cody/popularBrand/martin7.jpg",
      name: "martin7",
    },
    {
      src: "/images/showroom/cody/popularBrand/martin8.jpg",
      name: "martin8",
    },
    {
      src: "/images/showroom/cody/popularBrand/martin9.jpg",
      name: "martin9",
    },
    {
      src: "/images/showroom/cody/popularBrand/martin10.jpg",
      name: "martin10",
    },
    {
      src: "/images/showroom/cody/popularBrand/martin11.jpg",
      name: "martin11",
    },
    {
      src: "/images/showroom/cody/popularBrand/martin12.jpg",
      name: "martin12",
    },
  ],
};

const POPULAR_BRAND_THEME_LIST = [
  {
    label: "던스트포우먼",
    theme: "dunst",
  },
  {
    label: "제너럴아이디",
    theme: "general",
  },
  {
    label: "시아쥬",
    theme: "siyazu",
  },
  {
    label: "다이애그널",
    theme: "diagonal",
  },
  {
    label: "마지셔우드",
    theme: "marge",
  },
  {
    label: "라벨아카이브",
    theme: "label",
  },
  {
    label: "마뗑킴",
    theme: "martin",
  },
];

export default function useCody() {
  const [currentTheme, setCurrentTheme] = useImmer({
    crew: "oneMillion",
    hot: "cargoPants",
    popularBrand: "dunst",
  });

  const handleChangeCrew = (theme: string) => {
    setCurrentTheme((draft) => {
      draft.crew = theme;
    });
  };

  const handleChangeHotItem = (theme: string) => {
    setCurrentTheme((draft) => {
      draft.hot = theme;
    });
  };

  const handleChangehPopularBrand = (theme: string) => {
    setCurrentTheme((draft) => {
      draft.popularBrand = theme;
    });
  };

  const handleMoreItem = () => {
    alert("준비중입니다!");
  };

  const getCrewList = () => ({
    currentTheme: currentTheme.crew,
    data: CREW_LIST[currentTheme.crew],
    title: "크루",
    themeList: CREW_THEME_LIST,
    onChangeTheme: handleChangeCrew,
    onMoreItem: handleMoreItem,
  });

  const getHotItemList = () => ({
    currentTheme: currentTheme.hot,
    data: HOT_ITEM_LIST[currentTheme.hot],
    title: "핫 아이템",
    themeList: HOT_ITEM_THEME_LIST,
    onChangeTheme: handleChangeHotItem,
    onMoreItem: handleMoreItem,
  });

  const getPopularBrand = () => ({
    currentTheme: currentTheme.popularBrand,
    data: POPULAR_BRAND_LIST[currentTheme.popularBrand],
    title: "인기 브랜드 모아보기",
    themeList: POPULAR_BRAND_THEME_LIST,
    onChangeTheme: handleChangehPopularBrand,
    onMoreItem: handleMoreItem,
  });

  return {
    getCrewList,
    getHotItemList,
    getPopularBrand,
  };
}
