import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 0 20px;

    ${theme.media.desktop} {
      margin: 0;
      flex-grow: 1;
    }
  `};
`;

export const ItemWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: 8px;
    row-gap: 50px;
    grid-template-columns: repeat(auto-fit, minmax(156px, 1fr));
    width: 100%;
    margin-bottom: 50px;

    ${theme.media.desktop} {
      gap: 12px;
      row-gap: 80px;
      grid-template-columns: repeat(auto-fit, minmax(152px, 1fr));
      margin-bottom: 80px;
    }
  `};
`;

export const Item = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("flex-start", "flex-start")};
    gap: 10px;
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    aspect-ratio: 156/200;

    ${theme.media.desktop} {
      aspect-ratio: 152/228;
    }
  `};
`;

export const ItemDesc = styled.div`
  ${({ theme }) => css`
    span {
      display: inline-block;
      margin-bottom: 3px;
      ${theme.typo.body.md};
    }
    h3 {
      ${theme.typo.body.sm};
    }

    ${theme.media.desktop} {
      span {
        margin-bottom: 0px;
      }
    }
  `};
`;
