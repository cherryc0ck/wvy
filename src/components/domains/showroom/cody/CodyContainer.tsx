import ShowRoomCody from "./ShowRoomCody";
import useCody from "./hooks/useCody";
import * as S from "./styled";

export default function CodyContainer() {
  const { getCrewList, getHotItemList, getPopularBrand } = useCody();
  return (
    <S.Section>
      <ShowRoomCody {...getCrewList()} />
      <ShowRoomCody {...getHotItemList()} />
      <ShowRoomCody {...getPopularBrand()} />
    </S.Section>
  );
}
