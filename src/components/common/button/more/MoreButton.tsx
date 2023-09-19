import type { ThemeMode } from "@/types/common";
import * as S from "./styled";

type MoreButtonProps = {
  className?: string;
  isDisabled?: boolean;
  themeMode: ThemeMode;
  onClick: () => void;
};

export default function MoreButton({
  className = "",
  isDisabled = false,
  themeMode,
  onClick,
}: MoreButtonProps) {
  return (
    <S.Button
      className={className}
      type="button"
      themeMode={themeMode}
      onClick={onClick}
      aria-disabled={isDisabled ? "true" : "false"}
    >
      더보기
    </S.Button>
  );
}
