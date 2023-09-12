import styled, { css } from "styled-components";

export const Tag = styled.span`
  ${({ theme }) => css`
    ${theme.flex.row()};
    height: 28px;
    padding: 0 10px;
    background-color: ${theme.colors.gray200};
    ${theme.typo.caption.md};
    color: ${theme.colors.mainBlack};
  `};
`;
