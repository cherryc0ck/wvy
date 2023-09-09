import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row()};
    padding: 4px 10px 3px 10px;
    background-color: ${theme.colors.gray200};

    span {
      ${theme.typo.caption.md};
      color: ${theme.colors.mainBlack};
    }
  `};
`;
