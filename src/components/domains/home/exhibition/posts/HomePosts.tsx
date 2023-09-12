import type { PostContent } from "@/types/post";

import { Post } from "@/components/common";
import * as S from "./styled";

type HomePostsProps = {
  posts: PostContent[];
  visiblePostCount: number;
};

export default function HomePosts({ posts, visiblePostCount }: HomePostsProps) {
  return (
    <S.Container>
      {posts.slice(0, visiblePostCount).map((post) => (
        <Post item={post} />
      ))}
    </S.Container>
  );
}
