import type { ThemeMode } from "@/types/common";
import styled, { css } from "styled-components";

type ButtonProps = {
  mode: ThemeMode;
};

export const Button = styled.button<ButtonProps>`
  ${({ theme, size, mode }) => css`
    ${theme.flex.row()};
    letter-spacing: 0em;
    text-align: center;
    border: 1px solid transparent;
    height: 28px;
    padding: 0 8px;
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 2.1rem;

    ${theme.media.desktop} {
      height: 40px;
      padding: 0 10px;
      ${theme.typo.body.lg};
    }

    /* 다크, 라이트 모드 스타일 */
    ${mode === "light" &&
    css`
      &[aria-selected="true"] {
        background-color: ${theme.colors.mainBlack};
        color: ${theme.colors.white};
      }
      &[aria-selected="false"] {
        background-color: ${theme.colors.white};
        color: ${theme.colors.mainBlack};
        border: 1px solid ${theme.colors.gray300};
      }
      :hover {
        background-color: ${theme.colors.gray200};
        border: 1px solid ${theme.colors.gray300};
      }
    `};

    ${mode === "dark" &&
    css`
      &[aria-selected="true"] {
        background-color: ${theme.colors.white};
        color: ${theme.colors.mainBlack};
      }
      &[aria-selected="false"] {
        background-color: transparent;
        color: ${theme.colors.gray400};
        border: 1px solid ${theme.colors.gray400};
      }
      :hover {
        border: 1px solid ${theme.colors.gray200};
        background-color: ${theme.colors.gray600};
        color: ${theme.colors.white};
      }
    `};
  `};
`;
