import type { ThemeMode } from "@/types/common";
import styled, { css } from "styled-components";

type ButtonProps = {
  themeMode: ThemeMode;
};

export const Button = styled.button<ButtonProps>`
  ${({ theme, themeMode }) => css`
    ${theme.flex.row()};
    width: 320px;
    height: 44px;
    margin: 0 auto;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.2rem;
    letter-spacing: 0em;

    ${themeMode === "dark" &&
    css`
      border: 1px solid ${theme.colors.gray600};
      color: ${theme.colors.gray100};
    `};

    ${themeMode === "light" &&
    css`
      border: 1px solid ${theme.colors.black};
      color: ${theme.colors.black};
    `}
  `};
`;
