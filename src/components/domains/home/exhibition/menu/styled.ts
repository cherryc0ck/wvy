import styled, { css } from "styled-components";

export const PostMenuList = styled.ul`
  ${({ theme }) => css`
    ${theme.flex.row("flex-start")};
    gap: 24px;
    margin-bottom: 40px;
    border-bottom: 1px solid ${theme.colors.gray300};
    ${theme.typo.body.lg};
  `};
`;

export const MenuListItem = styled.li`
  ${({ theme }) => css`
    &[aria-selected="true"] {
      border-bottom: 1px solid ${theme.colors.mainBlack};
    }

    &[aria-selected="true"] button {
      color: ${theme.colors.mainBlack};
    }
    &[aria-selected="false"] button {
      color: ${theme.colors.gray400};
    }
  `};
`;
