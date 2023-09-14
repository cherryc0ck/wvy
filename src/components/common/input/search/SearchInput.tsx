import { SearchIcon } from "@/assets/icons";
import * as S from "./styled";

type SearchInputProps = {
  className?: string;
  placeholder: string;
  name: string;
  value: string;
  onClick: () => void;
};

export default function SearchInput({
  className = "",
  placeholder,
  name,
  value,
  onClick,
}: SearchInputProps) {
  return (
    <S.Container className={className}>
      <S.Label />
      <S.Input
        type="search"
        placeholder={placeholder}
        name={name}
        value={value}
      />
      <S.Button onClick={onClick}>
        <SearchIcon />
      </S.Button>
    </S.Container>
  );
}
