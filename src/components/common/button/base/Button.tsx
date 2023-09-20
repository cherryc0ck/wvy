import type { ThemeMode } from "@/types/common";
import * as S from "./styled";

type ButtonProps = {
  isSelected: boolean;

  mode: ThemeMode;
  label: string;
  onClick: () => void;
};

export default function Button({
  isSelected,
  mode,
  label,
  onClick,
}: ButtonProps) {
  return (
    <S.Button mode={mode} aria-selected={isSelected} onClick={onClick}>
      {label}
    </S.Button>
  );
}
