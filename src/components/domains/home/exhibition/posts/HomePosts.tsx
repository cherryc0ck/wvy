import type { PostContent } from "@/types/post";

import { MoreButton, Post } from "@/components/common";
import * as S from "./styled";

type HomePostsProps = {
  data: PostContent[];
  posts: PostContent[];
  visiblePostCount: number;
  onMorePost: () => void;
};

export default function HomePosts({
  data,
  posts,
  visiblePostCount,
  onMorePost,
}: HomePostsProps) {
  return (
    <S.Container>
      {posts.slice(0, visiblePostCount).map((post, idx) => (
        <Post key={idx} item={post} />
      ))}
      {data.length > visiblePostCount && (
        <MoreButton css={S.MoreButton} themeMode="light" onClick={onMorePost} />
      )}
    </S.Container>
  );
}
