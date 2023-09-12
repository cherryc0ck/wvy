import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 50px;
    margin-bottom: 30px;
  `};
`;
