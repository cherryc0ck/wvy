import type { ThemeMode } from "@/types/common";
import * as S from "./styled";

type MoreButtonProps = {
  isDisabled?: boolean;
  themeMode: ThemeMode;
  onClick: () => void;
};

export default function MoreButton({
  isDisabled = false,
  themeMode,
  onClick,
}: MoreButtonProps) {
  return (
    <S.Button
      type="button"
      themeMode={themeMode}
      onClick={onClick}
      aria-disabled={isDisabled ? "true" : "false"}
    >
      더보기
    </S.Button>
  );
}
