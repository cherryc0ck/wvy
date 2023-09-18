import type { ThemeMode } from "@/types/common";
import * as S from "./styled";
import Image from "next/image";

type BrandButtonProps = {
  isSelected: boolean;
  imgSrc: string;
  mode: ThemeMode;
  label: string;
  name: string;
  onSelectBrand: (brand: string) => void;
};

export default function BrandButton({
  isSelected,
  imgSrc,
  mode,
  label,
  name,
  onSelectBrand,
}: BrandButtonProps) {
  return (
    <S.Button
      mode={mode}
      aria-selected={isSelected ? "true" : "false"}
      onClick={() => onSelectBrand(name)}
    >
      <S.Figure>
        <Image src={imgSrc} alt={label} fill priority sizes="100%" />
      </S.Figure>
      <span>{label}</span>
    </S.Button>
  );
}
