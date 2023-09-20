import * as S from "./styled";

type HomeMenuListProps = {
  list: string[];
  currentMenu: string;
  onChangeMenu: (item: string) => void;
};

export default function HomeMenuList({
  list,
  currentMenu,
  onChangeMenu,
}: HomeMenuListProps) {
  return (
    <S.Container>
      <S.List>
        {list.map((item) => (
          <S.ListItem
            key={item}
            aria-selected={currentMenu === item ? "true" : "false"}
          >
            <button onClick={() => onChangeMenu(item)}>{item}</button>
          </S.ListItem>
        ))}
      </S.List>
    </S.Container>
  );
}
