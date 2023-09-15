import { HeartIcon } from "@/assets/icons";
import * as S from "./styled";

type HeartButtonProps = {
  onClick: () => void;
};

export default function HeartButton({ onClick }: HeartButtonProps) {
  return (
    <S.Button type="button" onClick={onClick}>
      <HeartIcon />
    </S.Button>
  );
}
