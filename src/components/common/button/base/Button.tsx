import type { ThemeMode } from "@/types/common";
import * as S from "./styled";

type ButtonProps = {
  isSelected: boolean;
  size: "sm" | "md" | "lg";
  mode: ThemeMode;
  label: string;
  onClick: () => void;
};

export default function Button({
  isSelected,
  size,
  mode,
  label,
  onClick,
}: ButtonProps) {
  return (
    <S.Button
      size={size}
      mode={mode}
      aria-selected={isSelected}
      onClick={onClick}
    >
      {label}
    </S.Button>
  );
}
