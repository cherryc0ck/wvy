import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 50px;
    margin-bottom: 30px;

    ${theme.media.desktop} {
      margin-bottom: 60px;
    }
  `};
`;

export const MoreButton = css`
  ${({ theme }) => css`
    ${theme.media.desktop} {
      margin: 0 auto 0 0;
    }
  `};
`;
