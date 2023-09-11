import React, { useState } from "react";

const MENU_LIST = ["NEW IN", "의류", "가방", "주얼리"];
const CATEGORY_LIST = {
  new: [
    {
      isLike: false,
      src: "/images/home/category/category-new1.jpg",
      name: "new1",
    },
    {
      isLike: false,
      src: "/images/home/category/category-new2.jpg",
      name: "new2",
    },
    {
      isLike: false,
      src: "/images/home/category/category-new3.jpg",
      name: "new3",
    },
    {
      isLike: false,
      src: "/images/home/category/category-new4.jpg",
      name: "new4",
    },
    {
      isLike: false,
      src: "/images/home/category/category-new5.jpg",
      name: "new5",
    },
    {
      isLike: false,
      src: "/images/home/category/category-new6.jpg",
      name: "new6",
    },
    {
      isLike: false,
      src: "/images/home/category/category-new7.jpg",
      name: "new7",
    },
    {
      isLike: false,
      src: "/images/home/category/category-new8.jpg",
      name: "new8",
    },
    {
      isLike: false,
      src: "/images/home/category/category-new9.jpg",
      name: "new9",
    },
    {
      isLike: false,
      src: "/images/home/category/category-new10.jpg",
      name: "new10",
    },
    {
      isLike: false,
      src: "/images/home/category/category-new11.jpg",
      name: "new11",
    },
    {
      isLike: false,
      src: "/images/home/category/category-new12.jpg",
      name: "new12",
    },
  ],
  clothes: [
    {
      isLike: false,
      src: "/images/home/category/category-clothes1.jpg",
      name: "clothes1",
    },
    {
      isLike: false,
      src: "/images/home/category/category-clothes2.jpg",
      name: "clothes2",
    },
    {
      isLike: false,
      src: "/images/home/category/category-clothes3.jpg",
      name: "clothes3",
    },
    {
      isLike: false,
      src: "/images/home/category/category-clothes4.jpg",
      name: "clothes4",
    },
    {
      isLike: false,
      src: "/images/home/category/category-clothes5.jpg",
      name: "clothes5",
    },
    {
      isLike: false,
      src: "/images/home/category/category-clothes6.jpg",
      name: "clothes6",
    },

    {
      isLike: false,
      src: "/images/home/category/category-clothes7.jpg",
      name: "clothes7",
    },
    {
      isLike: false,
      src: "/images/home/category/category-clothes8.jpg",
      name: "clothes8",
    },
    {
      isLike: false,
      src: "/images/home/category/category-clothes9.jpg",
      name: "clothes9",
    },
    {
      isLike: false,
      src: "/images/home/category/category-clothes10.jpg",
      name: "clothes10",
    },
    {
      isLike: false,
      src: "/images/home/category/category-clothes11.jpg",
      name: "clothes11",
    },
    {
      isLike: false,
      src: "/images/home/category/category-clothes12.jpg",
      name: "clothes12",
    },
  ],
  bag: [
    {
      isLike: false,
      src: "/images/home/category/category-bag1.jpg",
      name: "bag1",
    },
    {
      isLike: false,
      src: "/images/home/category/category-bag2.jpg",
      name: "bag2",
    },
    {
      isLike: false,
      src: "/images/home/category/category-bag3.jpg",
      name: "bag3",
    },
    {
      isLike: false,
      src: "/images/home/category/category-bag4.jpg",
      name: "bag4",
    },
    {
      isLike: false,
      src: "/images/home/category/category-bag5.jpg",
      name: "bag5",
    },
    {
      isLike: false,
      src: "/images/home/category/category-bag6.jpg",
      name: "bag6",
    },
    {
      isLike: false,
      src: "/images/home/category/category-bag7.jpg",
      name: "bag7",
    },
    {
      isLike: false,
      src: "/images/home/category/category-bag8.jpg",
      name: "bag8",
    },
    {
      isLike: false,
      src: "/images/home/category/category-bag9.jpg",
      name: "bag9",
    },
    {
      isLike: false,
      src: "/images/home/category/category-bag10.jpg",
      name: "bag10",
    },
    {
      isLike: false,
      src: "/images/home/category/category-bag11.jpg",
      name: "bag11",
    },
    {
      isLike: false,
      src: "/images/home/category/category-bag12.jpg",
      name: "bag12",
    },
  ],

  jewelry: [
    {
      isLike: false,
      src: "/images/home/category/category-jewelry1.jpg",
      name: "jewelry1",
    },
    {
      isLike: false,
      src: "/images/home/category/category-jewelry2.jpg",
      name: "jewelry2",
    },
    {
      isLike: false,
      src: "/images/home/category/category-jewelry3.jpg",
      name: "jewelry3",
    },
    {
      isLike: false,
      src: "/images/home/category/category-jewelry4.jpg",
      name: "jewelry4",
    },
    {
      isLike: false,
      src: "/images/home/category/category-jewelry5.jpg",
      name: "jewelry5",
    },
    {
      isLike: false,
      src: "/images/home/category/category-jewelry6.jpg",
      name: "jewelry6",
    },
    {
      isLike: false,
      src: "/images/home/category/category-jewelry7.jpg",
      name: "jewelry7",
    },
    {
      isLike: false,
      src: "/images/home/category/category-jewelry8.jpg",
      name: "jewelry8",
    },
    {
      isLike: false,
      src: "/images/home/category/category-jewelry9.jpg",
      name: "jewelry9",
    },
    {
      isLike: false,
      src: "/images/home/category/category-jewelry10.jpg",
      name: "jewelry10",
    },
    {
      isLike: false,
      src: "/images/home/category/category-jewelry11.jpg",
      name: "jewelry11",
    },
    {
      isLike: false,
      src: "/images/home/category/category-jewelry12.jpg",
      name: "jewelry12",
    },
  ],
};

export default function useHomeCateogry() {
  const [currentMenu, setCurrentMenu] = useState(MENU_LIST[0]);
  const handleChangeMenu = (item: string) => {
    setCurrentMenu(item);
  };
  return {
    categoryList: CATEGORY_LIST,
    menuList: MENU_LIST,
    currentMenu,
    handleChangeMenu,
  };
}
