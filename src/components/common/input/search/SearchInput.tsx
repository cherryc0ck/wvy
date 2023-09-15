import { SearchIcon } from "@/assets/icons";
import * as S from "./styled";

type SearchInputProps = {
  className?: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function SearchInput({
  className = "",
  placeholder,
  name,
  value,
  onChange,
  onSubmit,
}: SearchInputProps) {
  return (
    <S.Form className={className} onSubmit={onSubmit}>
      <S.Label />
      <S.Input
        type="search"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      <S.Button>
        <SearchIcon />
      </S.Button>
    </S.Form>
  );
}
