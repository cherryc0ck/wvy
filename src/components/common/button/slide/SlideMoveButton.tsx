import { SlideNextIcon, SlidePrevIcon } from "@/assets/icons";
import * as S from "./styled";

type SlideMoveButtonProps = {
  className?: string;
  direction: "prev" | "next";
  onClick: () => void;
};

export default function SlideMoveButton({
  className,
  direction,
  onClick,
}: SlideMoveButtonProps) {
  return (
    <S.Button className={className} onClick={onClick}>
      {direction === "prev" && <SlidePrevIcon />}
      {direction === "next" && <SlideNextIcon />}
    </S.Button>
  );
}
