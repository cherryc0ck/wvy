import { HomeMenuList } from "@/components/common";
import HomeCategoryList from "./list/HomeCategoryList";
import useHomeCateogry from "./hooks/useHomeCateogry";
import * as S from "./styled";

export default function HomeCategory() {
  const { menuList, categoryList, currentMenu, handleChangeMenu } =
    useHomeCateogry();

  return (
    <S.Section>
      <HomeMenuList
        list={menuList}
        currentMenu={currentMenu}
        onChangeMenu={handleChangeMenu}
      />
      <S.CategoryListWrapper>
        {currentMenu === "NEW IN" && (
          <HomeCategoryList list={categoryList.new} />
        )}
        {currentMenu === "의류" && (
          <HomeCategoryList list={categoryList.clothes} />
        )}
        {currentMenu === "가방" && <HomeCategoryList list={categoryList.bag} />}
        {currentMenu === "주얼리" && (
          <HomeCategoryList list={categoryList.jewelry} />
        )}
      </S.CategoryListWrapper>
    </S.Section>
  );
}
