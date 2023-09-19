import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row()};
    margin-bottom: 40px;

    ${theme.media.desktop} {
      align-items: flex-start;
      margin-bottom: 50px;
    }
  `};
`;

export const List = styled.ul`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    flex-grow: 1;
    gap: 10px;
    padding: 0 20px;

    ${theme.media.desktop} {
      gap: 20px;
      padding: 0;
    }
  `};
`;

export const ListItem = styled.li`
  ${({ theme }) => css`
    button {
      ${theme.typo.body.lg};
      color: ${theme.colors.gray400};
    }

    &[aria-selected="true"] button {
      color: ${theme.colors.mainBlack};
      border-bottom: 1px solid ${theme.colors.mainBlack};
    }

    ${theme.media.desktop} {
      button {
        font-size: 2.8rem;
        font-weight: 500;
        line-height: 4.48rem;
      }
    }
  `};
`;
