import { HomeMenuList } from "@/components/common";
import HomeCategoryList from "./list/HomeCategoryList";
import useHomeCateogry from "./hooks/useHomeCateogry";
import * as S from "./styled";
import dynamic from "next/dynamic";

const DynamicCategoryList = dynamic(() => import("./list/HomeCategoryList"), {
  ssr: false, // 서버 사이드 렌더링 중에는 로드하지 않음
});

export default function HomeCategory() {
  const { menuList, categoryList, currentMenu, handleChangeMenu } =
    useHomeCateogry();

  return (
    <S.Section>
      <S.Title>NEW IN</S.Title>
      <S.CategoryContainer>
        <HomeMenuList
          list={menuList}
          currentMenu={currentMenu}
          onChangeMenu={handleChangeMenu}
        />
        {currentMenu === "의류" && (
          <DynamicCategoryList list={categoryList.clothes} />
        )}
        {currentMenu === "가방" && (
          <DynamicCategoryList list={categoryList.bag} />
        )}
        {currentMenu === "주얼리" && (
          <DynamicCategoryList list={categoryList.jewelry} />
        )}
      </S.CategoryContainer>
    </S.Section>
  );
}
