import * as S from "./styled";

type ThemeTagProps = {
  value: string;
};

export default function ThemeTag({ value }: ThemeTagProps) {
  return (
    <S.Container>
      <span>{value}</span>
    </S.Container>
  );
}
