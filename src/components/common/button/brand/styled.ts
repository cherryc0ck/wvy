import type { ThemeMode } from "@/types/common";
import styled, { css } from "styled-components";

type ButtonProps = {
  mode: ThemeMode;
};

export const Button = styled.button<ButtonProps>`
  ${({ theme, mode }) => css`
    ${theme.flex.row()};
    gap: 10px;
    height: 39px;
    padding-left: 10px;
    padding-right: 14px;
    border: 1px solid transparent;
    border-radius: 33px;
    ${theme.typo.body.lg2};

    ${mode === "light" &&
    css`
      &[aria-selected="true"] {
        background-color: ${theme.colors.black};
        color: ${theme.colors.white};
      }
      &[aria-selected="false"] {
        background-color: ${theme.colors.white};
        color: ${theme.colors.mainBlack};
        border: 1px solid ${theme.colors.gray300};
      }
      :hover {
        background-color: ${theme.colors.gray200};
        color: ${theme.colors.mainBlack};
        border: 1px solid ${theme.colors.gray300};
      }
    `};

    ${mode === "dark" &&
    css`
      &[aria-selected="true"] {
        background-color: ${theme.colors.black};
        color: ${theme.colors.white};
      }
      &[aria-selected="false"] {
        background-color: ${theme.colors.white};
        color: ${theme.colors.mainBlack};
      }
    `};
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;

    img {
      border-radius: 50%;
    }
  `};
`;
