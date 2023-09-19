import styled, { css } from "styled-components";

export const Post = styled.article`
  ${({ theme }) => css`
    width: 100%;

    ${theme.media.desktop} {
      ${theme.flex.row("flex-start", "flex-start")};
      gap: 24px;
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;

    aspect-ratio: 320/255;
    margin-bottom: 20px;

    ${theme.media.desktop} {
      width: 320px;
      height: 480px;
      margin-bottom: 0px;
    }
  `};
`;

export const Figcaption = styled.figcaption`
  ${({ theme }) => css`
    position: absolute;
    left: 0;
    bottom: 0;
    ${theme.flex.row()};
    height: 36px;
    padding: 0 14px;
    background-color: ${theme.colors.mainBlack};

    span {
      ${theme.typo.body.md};
      color: ${theme.colors.white};
    }
  `};
`;

export const DescWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.desktop} {
      ${theme.flex.col("space-between", "flex-start")};
      height: 480px;
    }
  `};
`;

export const ItemDesc = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    margin-bottom: 20px;
    h3 {
      color: ${theme.colors.mainBlack};
      margin-bottom: 10px;
      ${theme.typo.body.lg};
    }
    p {
      margin-bottom: 10px;
      ${theme.typo.body.md};
      color: ${theme.colors.gray600};
    }

    ${theme.media.desktop} {
      margin-bottom: 0px;

      p {
        margin-bottom: 30px;
      }
    }
  `};
`;

export const TagWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("flex-start")};
    gap: 10px;

    ${theme.media.desktop} {
      gap: 8px;
    }
  `};
`;

export const SubImageWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("flex-start")};
    gap: 10px;
  `};
`;

export const SubFigure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    min-width: 72px;
    aspect-ratio: 72/72;
  `};
`;
