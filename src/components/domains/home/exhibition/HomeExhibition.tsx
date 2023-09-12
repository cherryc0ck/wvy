import useHomeExhibition from "./hooks/useHomeExhibition";
import { MoreButton } from "@/components/common";
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
      <HomePostMenu
        list={postList}
        selected={selectedMenu}
        onSelectMenu={handleSelectMenu}
      />
      <HomePosts posts={currentPost} visiblePostCount={visiblePostCount} />
      {data.length > visiblePostCount && (
        <MoreButton themeMode="light" onClick={handleMorePost} />
      )}
    </S.Section>
  );
}
