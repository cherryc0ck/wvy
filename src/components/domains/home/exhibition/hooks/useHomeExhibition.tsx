import { useState } from "react";

import type { PostMenuType, PostContent } from "@/types/post";
import posts from "data/posts.json";

const POST_LIST: PostMenuType[] = ["전체", "홈", "뷰티", "레저"];

export default function useHomeExhibition() {
  const [data, setData] = useState<PostContent[]>(posts["홈"]);
  const [visiblePostCount, setVisiblePostCount] = useState(4);
  const [selectedMenu, setSelectedMenu] = useState<PostMenuType>("홈");

  const handleSelectMenu = (menu: PostMenuType) => {
    setSelectedMenu(menu);
    setVisiblePostCount(4);
    setData(posts[menu]);
  };

  const handleMorePost = () => {
    setVisiblePostCount((prev) => prev + 2);
  };

  return {
    data,
    postList: POST_LIST,
    currentPost: posts[selectedMenu],
    visiblePostCount,
    selectedMenu,
    handleSelectMenu,
    handleMorePost,
  };
}
