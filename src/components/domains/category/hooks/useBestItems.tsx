const BEST_ITEM_LIST = [
  {
    isLike: false,
    src: "/images/category/bestItems/bestItems1.jpg",
    brand: "던스트포우먼",
    name: "COLLARED VEGAN LEATHER  JACKET",
  },
  {
    isLike: false,
    src: "/images/category/bestItems/bestItems2.jpg",
    brand: "던스트포우먼",
    name: "2 BUTTON VEGAN LEATHER BLAZER",
  },
  {
    isLike: false,
    src: "/images/category/bestItems/bestItems3.jpg",
    brand: "마뗑킴",
    name: "CARGO SPORTY TOTE BAG IN BLACK",
  },
  {
    isLike: false,
    src: "/images/category/bestItems/bestItems4.jpg",
    brand: "다이애그널",
    name: "SIDE CUTTING DENIM PANTS",
  },
  {
    isLike: false,
    src: "/images/category/bestItems/bestItems5.jpg",
    brand: "던스트포우먼",
    name: "LOGO CREASE SWEATSHIRT FRENCH",
  },
  {
    isLike: false,
    src: "/images/category/bestItems/bestItems6.jpg",
    brand: "제너럴아이디",
    name: "에센셜 가디건",
  },
  {
    isLike: false,
    src: "/images/category/bestItems/bestItems7.jpg",
    brand: "마지셔우드",
    name: "SOFT BOSTON",
  },
  {
    isLike: false,
    src: "/images/category/bestItems/bestItems8.jpg",
    brand: "마지셔우드",
    name: "seaweed gblack",
  },
  {
    isLike: false,
    src: "/images/category/bestItems/bestItems9.jpg",
    brand: "던스트포우먼",
    name: "UNISEX DIVIDE V-NECK WOOL VEST MELANGE",
  },
  {
    isLike: false,
    src: "/images/category/bestItems/bestItems10.jpg",
    brand: "네이비 카운티",
    name: "포켓 카고 팬츠",
  },
];

export default function useBestItems() {
  const handleLikeItem = () => {
    console.log("작업중");
  };
  return {
    bestItemList: BEST_ITEM_LIST,
    handleLikeItem,
  };
}
