import { useState } from "react";

type CateogryItemList = {
  [key: string]: CateogryItem[];
};

type CateogryItem = {
  src: string;
  brand: string;
  name: string;
};

const CATEGORY_LIST = [
  {
    label: "전체",
    name: "all",
  },
  {
    label: "의류",
    name: "clothes",
  },
  {
    label: "가방",
    name: "bag",
  },
  {
    label: "주얼리",
    name: "jewelry",
  },
  {
    label: "시즌 키워드",
    name: "keyword",
  },
];

const KEYWORD_LIST = [
  {
    label: "자켓",
    name: "jacket",
  },
  {
    label: "카디건",
    name: "cardigan",
  },
  {
    label: "셔츠",
    name: "shirt",
  },
  {
    label: "니트",
    name: "neat",
  },
  {
    label: "스트라이프",
    name: "stripe",
  },
  {
    label: "뷔스티에",
    name: "bustier",
  },
  {
    label: "슬랙스",
    name: "slacks",
  },
];

const ITEM_LIST: CateogryItemList = {
  clothes: [
    {
      src: "/images/category/categoryItems/clothes/clothes1.jpg",
      brand: "던스트포우먼",
      name: "UNISEX COLLARED VEGAN LEATHER BLOUSON JACKET",
    },
    {
      src: "/images/category/categoryItems/clothes/clothes2.jpg",
      brand: "던스트포우먼",
      name: "SEMI WIDE CHINO SLACKS",
    },
    {
      src: "/images/category/categoryItems/clothes/clothes3.jpg",
      brand: "던스트포우먼",
      name: "SEMI WIDE STRAIGHT SLACKS ",
    },
    {
      src: "/images/category/categoryItems/clothes/clothes4.jpg",
      brand: "던스트포우먼",
      name: "UNISEX DIVIDE V-NECK WOOL VEST MELANGE",
    },
    {
      src: "/images/category/categoryItems/clothes/clothes5.jpg",
      brand: "시아쥬",
      name: "White Denim T-shirt",
    },
    {
      src: "/images/category/categoryItems/clothes/clothes6.jpg",
      brand: "라벨아카이브",
      name: "TIED NECKLINE KNIT TOP",
    },
    {
      src: "/images/category/categoryItems/clothes/clothes7.jpg",
      brand: "제너럴아이디",
      name: "부클 카라 리브드 가디건",
    },
    {
      src: "/images/category/categoryItems/clothes/clothes8.jpg",
      brand: "마똉킴",
      name: "AUTUMN CARGO PANTS IN CHARCOAL",
    },
    {
      src: "/images/category/categoryItems/clothes/clothes9.jpg",
      brand: "마똉킴",
      name: "PIGMENT HENLY NECK LOGO TOP",
    },
    {
      src: "/images/category/categoryItems/clothes/clothes10.jpg",
      brand: "마르디 메크르디",
      name: "클래식 화이트 슬랙스",
    },
    {
      src: "/images/category/categoryItems/clothes/clothes11.jpg",
      brand: "맥키",
      name: "CLASSIC ONE TUCK WIDE LONG SLACKS",
    },
    {
      src: "/images/category/categoryItems/clothes/clothes12.jpg",
      brand: "닉앤닉콜",
      name: "TWO TUCK WIDE LONG SLACKS",
    },
  ],
  bag: [
    {
      src: "/images/home/category/category-bag1.jpg",
      brand: "아크트렉스",
      name: "맨티스 2 웨이스트팩",
    },
    {
      src: "/images/home/category/category-bag2.jpg",
      brand: "마뗑킴",
      name: "CARGO SPORTY TOTE BAG IN BLACK",
    },
    {
      src: "/images/home/category/category-bag3.jpg",
      brand: "로우로우",
      name: "스트링 크로스백 750 ep.2 Charcoal",
    },
    {
      src: "/images/home/category/category-bag4.jpg",
      brand: "어반디타입",
      name: "Nylon String Cross Bag_Light Gray_BL039",
    },
    {
      src: "/images/home/category/category-bag5.jpg",
      brand: "우메이",
      name: "Sonja Bag",
    },
    {
      src: "/images/home/category/category-bag6.jpg",
      brand: "그로브",
      name: "23SU ELLIOT BAG",
    },
    {
      src: "/images/home/category/category-bag7.jpg",
      brand: "블랭코브",
      name: "BS 07-1B FISHERMAN BAG 3",
    },
    {
      src: "/images/home/category/category-bag8.jpg",
      brand: "우메이",
      name: "Seesaw bag",
    },
    {
      src: "/images/home/category/category-bag9.jpg",
      brand: "마뗑킴",
      name: "ZIPPER LEATHER ROUND BAG IN BLACK",
    },
    {
      src: "/images/home/category/category-bag10.jpg",
      brand: "우메이",
      name: "Claudia Tote",
    },
    {
      src: "/images/home/category/category-bag11.jpg",
      brand: "찰스앤키스",
      name: "Crossbody Bags",
    },
    {
      src: "/images/home/category/category-bag12.jpg",
      brand: "미트미미트",
      name: "Seaweed gblack",
    },
  ],
  jewelry: [
    {
      src: "/images/home/category/category-jewelry1.jpg",
      brand: "디올",
      name: "GEM DIOR 목걸이",
    },
    {
      src: "/images/home/category/category-jewelry2.jpg",
      brand: "디올",
      name: "ROSE DES VENTS 팔찌",
    },
    {
      src: "/images/home/category/category-jewelry15.jpg",
      brand: "디올",
      name: "GEM DIOR 반지",
    },
    {
      src: "/images/home/category/category-jewelry4.jpg",
      brand: "디올",
      name: "GEM DIOR 반지",
    },
    {
      src: "/images/home/category/category-jewelry3.jpg",
      brand: "디올",
      name: "ROSE DES VENTS 스트랩 팔찌",
    },
    {
      src: "/images/home/category/category-jewelry5.jpg",
      brand: "샤넬",
      name: "Coco Crush 네크리스",
    },
    {
      src: "/images/home/category/category-jewelry6.jpg",
      brand: "샤넬",
      name: "Coco Crush 팔찌",
    },
    {
      src: "/images/home/category/category-jewelry7.jpg",
      brand: "샤넬",
      name: "COCO CRUSH 후프 이어링",
    },
    {
      src: "/images/home/category/category-jewelry8.jpg",
      brand: "샤넬",
      name: "COCO CRUSH 링",
    },
    {
      src: "/images/home/category/category-jewelry9.jpg",
      brand: "에르메스",
      name: "H D'ANCE 미듐 링",
    },
    {
      src: "/images/home/category/category-jewelry10.jpg",
      brand: "에르메스",
      name: "Finesse 래리어트 네크리스",
    },
    {
      src: "/images/home/category/category-jewelry11.jpg",
      brand: "에르메스",
      name: "H D'ANCE 링",
    },
  ],
  jacket: [
    {
      src: "/images/category/categoryItems/jacket/jacket1.jpg",
      brand: "던스트포우먼",
      name: "UNISEX COLLARED VEGAN LEATHER BLOUSON JACKET  ",
    },
    {
      src: "/images/category/categoryItems/jacket/jacket2.jpg",
      brand: "던스트포우먼",
      name: "90S WIDE LEG JEANS CLASSIC ",
    },
    {
      src: "/images/category/categoryItems/jacket/jacket3.jpg",
      brand: "던스트포우먼",
      name: "UNISEX 2 BUTTON VEGAN LEATHER BLAZER",
    },
    {
      src: "/images/category/categoryItems/jacket/jacket4.jpg",
      brand: "던스트포우먼",
      name: "UNISEX RAGLAN WOOL MAC COAT",
    },
    {
      src: "/images/category/categoryItems/jacket/jacket5.jpg",
      brand: "던스트포우먼",
      name: "UNISEX LOGO FLEECE JACKET MELANGE",
    },
    {
      src: "/images/category/categoryItems/jacket/jacket6.jpg",
      brand: "던스트포우먼",
      name: "CLASSIC TWEED COLLAR JACKET",
    },
    {
      src: "/images/category/categoryItems/jacket/jacket7.jpg",
      brand: "라벨아카이브",
      name: "TIED NECKLINE KNIT TOP",
    },
    {
      src: "/images/category/categoryItems/jacket/jacket8.jpg",
      brand: "라벨아카이브",
      name: "TIED NECKLINE KNIT TOP",
    },
    {
      src: "/images/category/categoryItems/jacket/jacket9.jpg",
      brand: "그로브",
      name: "23FW HARRIET JACKET",
    },
    {
      src: "/images/category/categoryItems/jacket/jacket10.jpg",
      brand: "그로브",
      name: "23FW CROWN JACKET",
    },
    {
      src: "/images/category/categoryItems/jacket/jacket11.jpg",
      brand: "그로브",
      name: "23FW BENIK TRENCH COAT",
    },
    {
      src: "/images/category/categoryItems/jacket/jacket12.jpg",
      brand: "그로브",
      name: "23FW BAIRD JACKET",
    },
  ],
  cardigan: [
    {
      src: "/images/category/categoryItems/cardigan/cardigan1.jpg",
      brand: "제너럴아이디",
      name: "부클 카라 리브드 가디건",
    },
    {
      src: "/images/category/categoryItems/cardigan/cardigan2.jpg",
      brand: "제너럴아이디",
      name: "에센셜 가디건",
    },
    {
      src: "/images/category/categoryItems/cardigan/cardigan3.jpg",
      brand: "제너럴아이디",
      name: "케이블 가디건",
    },
    {
      src: "/images/category/categoryItems/cardigan/cardigan4.jpg",
      brand: "제너럴아이디",
      name: "부클 카라 리브드 가디건",
    },
    {
      src: "/images/category/categoryItems/cardigan/cardigan5.jpg",
      brand: "제너럴아이디",
      name: "부클 카라 리브드 가디건",
    },
    {
      src: "/images/category/categoryItems/cardigan/cardigan6.jpg",
      brand: "마뗑킴",
      name: "LINE POINTED HOODY ZIP CARDIGAN",
    },
    {
      src: "/images/category/categoryItems/cardigan/cardigan7.jpg",
      brand: "마뗑킴",
      name: "SPELL POINT KNIT ZIP UP",
    },
    {
      src: "/images/category/categoryItems/cardigan/cardigan8.jpg",
      brand: "마뗑킴",
      name: "SEMI CROP KNIT CARDIGA",
    },
    {
      src: "/images/category/categoryItems/cardigan/cardigan9.jpg",
      brand: "마뗑킴",
      name: "TYPO PATCH ROUND CARDIGAN",
    },
    {
      src: "/images/category/categoryItems/cardigan/cardigan10.jpg",
      brand: "던스트포우먼",
      name: "UNISEX LINING CROCHET KNIT CARDIGAN CREAM",
    },
    {
      src: "/images/category/categoryItems/cardigan/cardigan11.jpg",
      brand: "마르디 메크르디",
      name: "COTTON CARDIGAN ROUND NECK STRIPE",
    },
    {
      src: "/images/category/categoryItems/cardigan/cardigan12.jpg",
      brand: "닉앤니콜",
      name: "화이트 코르셋",
    },
  ],
  shirt: [
    {
      src: "/images/category/categoryItems/shirt/shirt1.jpg",
      brand: "라벨아카이브",
      name: "블랙 셔링 셔츠",
    },
    {
      src: "/images/category/categoryItems/shirt/shirt2.jpg",
      brand: "라벨아카이브",
      name: "화이트 셔링 셔츠",
    },
    {
      src: "/images/category/categoryItems/shirt/shirt3.jpg",
      brand: "라벨아카이브",
      name: "포멀 라이트 셔츠",
    },
    {
      src: "/images/category/categoryItems/shirt/shirt4.jpg",
      brand: "라벨아카이브",
      name: "포멀 셔츠",
    },
    {
      src: "/images/category/categoryItems/shirt/shirt5.jpg",
      brand: "제너럴아이디",
      name: "링클 프리 클래식 스트라이프 셔츠",
    },
    {
      src: "/images/category/categoryItems/shirt/shirt6.jpg",
      brand: "제너럴아이디",
      name: "링클 포켓 하프 셔츠",
    },
    {
      src: "/images/category/categoryItems/shirt/shirt7.jpg",
      brand: "시아쥬",
      name: "LIGHT STRIP SHIRT",
    },
    {
      src: "/images/category/categoryItems/shirt/shirt8.jpg",
      brand: "시아쥬",
      name: "RELAXED COTTON SHIRT",
    },
    {
      src: "/images/category/categoryItems/shirt/shirt9.jpg",
      brand: "마르디 메크르디",
      name: "RELAXED LINEN SHIRT",
    },
    {
      src: "/images/category/categoryItems/shirt/shirt10.jpg",
      brand: "마르디 메크르디",
      name: "COTTON SILM SHIRT",
    },
    {
      src: "/images/category/categoryItems/shirt/shirt11.jpg",
      brand: "마르디 메크르디",
      name: "RELAXED LINEN SHIRT",
    },
    {
      src: "/images/category/categoryItems/shirt/shirt12.jpg",
      brand: "마르디 메크르디",
      name: "POCKET LINEN SHIRT",
    },
  ],
  neat: [
    {
      src: "/images/category/categoryItems/neat/neat1.jpg",
      brand: "라벨아카이브",
      name: "TIED NECKLINE KNIT TOP",
    },
    {
      src: "/images/category/categoryItems/neat/neat2.jpg",
      brand: "라벨아카이브",
      name: "TIED NECKLINE KNIT TOP",
    },
    {
      src: "/images/category/categoryItems/neat/neat3.jpg",
      brand: "라벨아카이브",
      name: "COLLAR NECKLINE KNIT TOP",
    },
    {
      src: "/images/category/categoryItems/neat/neat4.jpg",
      brand: "라벨아카이브",
      name: "ROUND KNIT",
    },
    {
      src: "/images/category/categoryItems/neat/neat5.jpg",
      brand: "제너럴 아이디",
      name: "프릴 크롭 니트",
    },
    {
      src: "/images/category/categoryItems/neat/neat6.jpg",
      brand: "시아쥬",
      name: "TEXTURE KNITE PULLOVER",
    },
    {
      src: "/images/category/categoryItems/neat/neat7.jpg",
      brand: "던스트포우먼",
      name: "UNISEX LOGO CREASE SWEAT SHIRT FRENCH",
    },
    {
      src: "/images/category/categoryItems/neat/neat8.jpg",
      brand: "시아쥬",
      name: "COTTON COLLAR KNIT",
    },
    {
      src: "/images/category/categoryItems/neat/neat9.jpg",
      brand: "던스트포우먼",
      name: "UNISEX V-NECK ARGYLE SWEATER",
    },
    {
      src: "/images/category/categoryItems/neat/neat10.jpg",
      brand: "시아쥬",
      name: "TIED NECKLINE KNIT TOP",
    },
    {
      src: "/images/category/categoryItems/neat/neat11.jpg",
      brand: "던스트포우먼",
      name: "TIED NECKLINE KNIT TOP",
    },
    {
      src: "/images/category/categoryItems/neat/neat12.jpg",
      brand: "다이애그널",
      name: "TIED NECKLINE KNIT TOP",
    },
  ],
  stripe: [
    {
      src: "/images/category/categoryItems/stripe/stripe1.jpg",
      brand: "던스트포우먼",
      name: "UNISEX STRIPE WHITE SHIRT",
    },
    {
      src: "/images/category/categoryItems/stripe/stripe2.jpg",
      brand: "시아쥬",
      name: "oat neck stripe T-shirt",
    },
    {
      src: "/images/category/categoryItems/stripe/stripe3.jpg",
      brand: "던스트포우먼",
      name: "STRIPED HALF ZIP-UP SWEATER",
    },
    {
      src: "/images/category/categoryItems/stripe/stripe4.jpg",
      brand: "라벨아카이브",
      name: "STRIPE NECKLINE KNIT TOP",
    },
    {
      src: "/images/category/categoryItems/stripe/stripe5.jpg",
      brand: "마뗑킴",
      name: "SPELL POINT STRIPE KNIT VEST",
    },
    {
      src: "/images/category/categoryItems/stripe/stripe6.jpg",
      brand: "마르디 메크르디",
      name: "COTTON CARDIGAN ROUND NECK STRIPE",
    },
    {
      src: "/images/category/categoryItems/stripe/stripe7.jpg",
      brand: "론론",
      name: "Henryneck Long Sleeve Ecru Black Stripe",
    },
    {
      src: "/images/category/categoryItems/stripe/stripe8.jpg",
      brand: "제너럴아이디",
      name: "스트라이프 벌룬 슬리브 티셔츠",
    },
    {
      src: "/images/category/categoryItems/stripe/stripe9.jpg",
      brand: "제너럴아이디",
      name: "스트라이프 벌룬 슬리브 티셔츠 포 맨",
    },
    {
      src: "/images/category/categoryItems/stripe/stripe10.jpg",
      brand: "시아쥬",
      name: "COTTON STRIPE T SHIRT",
    },
    {
      src: "/images/category/categoryItems/stripe/stripe11.jpg",
      brand: "마르디 메크르디",
      name: "KNITE V NECK STRIPE",
    },
    {
      src: "/images/category/categoryItems/stripe/stripe12.jpg",
      brand: "시아쥬",
      name: "SEMI STRIPE KNIT",
    },
  ],
  bustier: [
    {
      src: "/images/category/categoryItems/bustier/bustier1.jpg",
      brand: "던스트포우먼",
      name: "UNISEX DIVIDE V-NECK WOOL VEST",
    },
    {
      src: "/images/category/categoryItems/bustier/bustier2.jpg",
      brand: "던스트포우먼",
      name: "UNISEX DIVIDE V-NECK WOOL VEST MELANGE",
    },
    {
      src: "/images/category/categoryItems/bustier/bustier3.jpg",
      brand: "던스트포우먼",
      name: "CLASSIC LINED WOOL VEST",
    },
    {
      src: "/images/category/categoryItems/bustier/bustier4.jpg",
      brand: "던스트포우먼",
      name: "WHITE KNITE V NECK",
    },
    {
      src: "/images/category/categoryItems/bustier/bustier5.jpg",
      brand: "라벨아카이브",
      name: "SIKN2067 texture knit pullover_Navy",
    },
    {
      src: "/images/category/categoryItems/bustier/bustier6.jpg",
      brand: "시아쥬",
      name: "뷔스티에 수트 원피스",
    },
    {
      src: "/images/category/categoryItems/bustier/bustier7.jpg",
      brand: "맥키",
      name: "키치 부클 베스트 블랙",
    },
    {
      src: "/images/category/categoryItems/bustier/bustier8.jpg",
      brand: "시아쥬",
      name: "SIKN2060 BCI cotton bustier_Black",
    },
    {
      src: "/images/category/categoryItems/bustier/bustier9.jpg",
      brand: "마뗑킴",
      name: "SPELL POINT STRIPE KNIT VEST",
    },
    {
      src: "/images/category/categoryItems/bustier/bustier10.jpg",
      brand: "던스트포우먼",
      name: "WOMAN 클래식 니트 뷔스티에",
    },
    {
      src: "/images/category/categoryItems/bustier/bustier11.jpg",
      brand: "다이애그널",
      name: "클래식 케이블 베스트",
    },
    {
      src: "/images/category/categoryItems/bustier/bustier12.jpg",
      brand: "다이애그널",
      name: "클래식 케이블 베스트",
    },
  ],
  slacks: [
    {
      src: "/images/category/categoryItems/slacks/slacks1.jpg",
      brand: "시아쥬",
      name: "Straight-fit slacks",
    },
    {
      src: "/images/category/categoryItems/slacks/slacks2.jpg",
      brand: "시아쥬",
      name: "Straight-fit slacks",
    },
    {
      src: "/images/category/categoryItems/slacks/slacks3.jpg",
      brand: "시아쥬",
      name: "Two tuck wide chino pants",
    },
    {
      src: "/images/category/categoryItems/slacks/slacks4.jpg",
      brand: "시아쥬",
      name: "Two tuck wide chino pants",
    },
    {
      src: "/images/category/categoryItems/slacks/slacks5.jpg",
      brand: "다이애그널",
      name: "STRETCHY SKIRT PANTS",
    },
    {
      src: "/images/category/categoryItems/slacks/slacks6.jpg",
      brand: "다이애그널",
      name: "STRETCHY SHIRRING FLARE PANTS",
    },
    {
      src: "/images/category/categoryItems/slacks/slacks7.jpg",
      brand: "던스트포우먼",
      name: "SEMI WIDE CHINO SLACKS",
    },
    {
      src: "/images/category/categoryItems/slacks/slacks8.jpg",
      brand: "던스트포우먼",
      name: "SEMI WIDE STRAIGHT SLACKS",
    },
    {
      src: "/images/category/categoryItems/slacks/slacks9.jpg",
      brand: "마르디 메크르디",
      name: "클래식 케이블 베스트",
    },
    {
      src: "/images/category/categoryItems/slacks/slacks10.jpg",
      brand: "마르디 메크르디",
      name: "클래식 케이블 베스트",
    },
    {
      src: "/images/category/categoryItems/slacks/slacks11.jpg",
      brand: "맥키",
      name: "CLASSIC ONE TUCK WIDE LONG SLACKS",
    },
    {
      src: "/images/category/categoryItems/slacks/slacks12.jpg",
      brand: "닉앤닉콜",
      name: "TWO TUCK WIDE LONG SLACKS",
    },
  ],
};

const INITIAL_ITEMS_COUNT = 12;

export default function useCategoryItems() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searched, setSearched] = useState("");
  const [currentCategory, setCurrentCategory] = useState(CATEGORY_LIST[1].name);
  const [currentKeyword, setCurrentKeyword] = useState(KEYWORD_LIST[0].name);
  const [visibleItemsCount, setVisibleItemsCount] =
    useState(INITIAL_ITEMS_COUNT);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearched(searchKeyword);
  };

  const handleSelectCategory = (category: string) => {
    setVisibleItemsCount(INITIAL_ITEMS_COUNT);
    setCurrentCategory(category);
    setSearchKeyword("");
    setSearched("");
  };

  const handleSelectKeyword = (keyword: string) => {
    setCurrentKeyword(keyword);
    setSearchKeyword("");
    setSearched("");
  };

  const handleMoreItems = () => {
    setVisibleItemsCount((prev) => prev + 12);
  };

  const getSearchInputProps = () => ({
    value: searchKeyword,
    onChange: handleChangeInput,
    onSubmit: handleSubmit,
  });

  const getCategoryListProps = () => ({
    categoryList: CATEGORY_LIST,
    keywordList: KEYWORD_LIST,
    currentCategory,
    currentKeyword,
    onSelectCategory: handleSelectCategory,
    onSelectKeyword: handleSelectKeyword,
  });

  const getShowItemsProps = () => ({
    searched,
    visibleItemsCount,
    onShowMoreItems: handleMoreItems,
  });

  const getAllItemsProps = () => ({
    ...getShowItemsProps(),
    items: [
      ...ITEM_LIST.clothes,
      ...ITEM_LIST.bag,
      ...ITEM_LIST.jewelry,
      ...ITEM_LIST.jacket,
      ...ITEM_LIST.cardigan,
      ...ITEM_LIST.shirt,
      ...ITEM_LIST.neat,
      ...ITEM_LIST.stripe,
      ...ITEM_LIST.bustier,
      ...ITEM_LIST.slacks,
    ],
  });

  const getCategoryItemsProps = () => ({
    ...getShowItemsProps(),
    items: ITEM_LIST[currentCategory],
  });

  const getKeywordItemsProps = () => ({
    ...getShowItemsProps(),
    items: ITEM_LIST[currentKeyword],
  });

  return {
    /* 임시 */
    getSearchInputProps,
    currentCategory,
    getCategoryListProps,
    getAllItemsProps,
    getCategoryItemsProps,
    getKeywordItemsProps,
  };
}
