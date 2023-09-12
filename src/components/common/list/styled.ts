import styled, { css } from "styled-components";

export const List = styled.ul`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 10px;
    margin-bottom: 40px;
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
  `};
`;
