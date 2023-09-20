import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 33px;
    margin-bottom: 80px;

    ${theme.media.desktop} {
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 0;
      padding: 100px 0 100px 24px;
    }
  `};
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    display: none;
    min-width: 295px;
    ${theme.typo.head.lg};
    color: ${theme.colors.black};

    ${theme.media.desktop} {
      display: block;
    }
  `};
`;

export const CategoryContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;

    ${theme.media.desktop} {
      ${theme.flex.col("center", "flex-start")};
      flex-grow: 1;
    }
  `};
`;
