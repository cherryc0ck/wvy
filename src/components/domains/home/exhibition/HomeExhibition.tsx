import useHomeExhibition from "./hooks/useHomeExhibition";
import HomePostMenu from "./menu/HomePostMenu";
import HomePosts from "./posts/HomePosts";
import * as S from "./styled";

export default function HomeExhibition() {
  const {
    data,
    postList,
    currentPost,
    visiblePostCount,
    selectedMenu,
    handleSelectMenu,
    handleMorePost,
  } = useHomeExhibition();

  return (
    <S.Section>
      <S.Wrapper>
        <HomePostMenu
          list={postList}
          selected={selectedMenu}
          onSelectMenu={handleSelectMenu}
        />
        <HomePosts
          data={data}
          posts={currentPost}
          visiblePostCount={visiblePostCount}
          onMorePost={handleMorePost}
        />
      </S.Wrapper>
    </S.Section>
  );
}
