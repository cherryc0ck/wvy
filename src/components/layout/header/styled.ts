import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    ${theme.flex.row("space-between", "center")};
    width: 100%;
    padding: 16px 20px;
    background-color: ${theme.colors.white};

    h1 {
      width: 18px;
      height: 24px;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  `};
`;

export const MenuButton = styled.button`
  ${({ theme }) => css`
    ${theme.flex.row()};
    svg {
      width: 32px;
      height: 32px;
      stroke: ${theme.colors.black};
    }
  `};
`;
