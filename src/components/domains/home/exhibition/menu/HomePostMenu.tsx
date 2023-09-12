import { PostMenuType } from "@/types/post";
import * as S from "./styled";

type HomePostMenuProps = {
  list: PostMenuType[];
  selected: PostMenuType;
  onSelectMenu: (menu: PostMenuType) => void;
};

export default function HomePostMenu({
  list,
  selected,
  onSelectMenu,
}: HomePostMenuProps) {
  return (
    <S.PostMenuList>
      {list.map((item) => (
        <S.MenuListItem key={item} aria-selected={selected === item}>
          <button onClick={() => onSelectMenu(item)}>{item}</button>
        </S.MenuListItem>
      ))}
    </S.PostMenuList>
  );
}
