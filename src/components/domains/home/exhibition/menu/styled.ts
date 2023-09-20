import styled, { css } from "styled-components";

export const PostMenuList = styled.ul`
  ${({ theme }) => css`
    ${theme.flex.row("flex-start")};
    gap: 24px;
    margin-bottom: 40px;
    border-bottom: 1px solid ${theme.colors.gray300};
    ${theme.typo.body.lg};

    ${theme.media.desktop} {
      ${theme.flex.col("center", "flex-start")}
      gap: 30px;
      min-width: 238px;
      margin-bottom: 0px;
      border-bottom: 0px;
    }
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

    ${theme.media.desktop} {
      width: 100%;
      padding-bottom: 19px;
      &[aria-selected="true"] {
        border-bottom: 3px solid ${theme.colors.mainBlack};
      }

      &[aria-selected="false"] {
        border-bottom: 1px solid ${theme.colors.gray200};
      }

      &[aria-selected="true"] button {
        width: 100%;
        color: ${theme.colors.mainBlack};
        text-align: left;
      }
      &[aria-selected="false"] button {
        width: 100%;
        color: ${theme.colors.mainBlack};
        text-align: left;
      }
    }
  `};
`;
