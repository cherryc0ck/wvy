import { SearchInput } from "@/components/common";
import CategoryList from "./categoryList/CategoryList";
import ShowItems from "./showItems/ShowItems";
import useCategoryItems from "../hooks/useCategoryItems";
import * as S from "./styled";

export default function CategoryItems() {
  const {
    getSearchInputProps,
    currentCategory,
    getCategoryListProps,
    getAllItemsProps,
    getCategoryItemsProps,
    getKeywordItemsProps,
  } = useCategoryItems();

  return (
    <S.Section>
      <S.Title>Category</S.Title>
      <S.Wrapper>
        <S.SearchListGroup>
          <SearchInput
            css={S.InputStyles}
            placeholder="브랜드명을 검색하세요."
            name="brand"
            {...getSearchInputProps()}
          />
          <CategoryList {...getCategoryListProps()} />
        </S.SearchListGroup>
        {currentCategory === "all" ? (
          <ShowItems {...getAllItemsProps()} />
        ) : currentCategory === "keyword" ? (
          <ShowItems {...getKeywordItemsProps()} />
        ) : (
          <ShowItems {...getCategoryItemsProps()} />
        )}
      </S.Wrapper>
    </S.Section>
  );
}
