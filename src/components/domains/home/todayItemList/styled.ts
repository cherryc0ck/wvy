import styled, { css } from "styled-components";
import { Swiper } from "swiper/react";

export const Section = styled.section`
  ${({ theme }) => css`
    margin: 50px 0;

    ${theme.media.desktop} {
      margin: 100px 0;
    }
  `};
`;

export const Date = styled.time`
  ${({ theme }) => css`
    display: block;
    margin-bottom: 30px;
    padding: 0 20px;
    ${theme.typo.head.sm};
    color: ${theme.colors.black};

    ${theme.media.desktop} {
      padding: 0 20px;
      ${theme.typo.head.lg};
    }
  `};
`;

export const CustomSwiper = styled(Swiper)`
  ${({ theme }) => css`
    width: 100%;
    ${theme.flex.row("flex-start")};
    padding: 0 20px;

    .swiper-slide,
    .swiper-wrapper {
      width: 216px;
      height: auto;
    }

    ${theme.media.desktop} {
      padding: 0 24px;

      .swiper-slide,
      .swiper-wrapper {
        width: 320px;
      }
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    width: 216px;
    height: 324px;
    margin-bottom: 10px;

    ${theme.media.desktop} {
      width: 320px;
      height: 480px;
      margin-bottom: 20px;
    }
  `};
`;

export const Figcaption = styled.figcaption`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    ${theme.flex.row()};
    height: 28px;
    padding: 0 10px;
    background-color: ${theme.colors.mainBlack};

    span {
      color: ${theme.colors.white};
      ${theme.typo.caption.md};
    }

    ${theme.media.desktop} {
      height: 36px;
      padding: 0 14px;

      span {
        ${theme.typo.body.md};
      }
    }
  `};
`;

export const ItemDesc = styled.div`
  ${({ theme }) => css`
    margin-bottom: 20px;
    h3 {
      margin-bottom: 4px;
      ${theme.typo.body.md};
      color: ${theme.colors.black};
    }
    span {
      ${theme.typo.body.sm};
      color: ${theme.colors.gray600};
    }

    ${theme.media.desktop} {
      h3 {
        ${theme.typo.head.sm};
      }
      span {
        ${theme.typo.body.md};
      }
    }
  `};
`;

export const ThemeTags = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("flex-start")};
    gap: 8px;

    ${theme.media.desktop} {
      gap: 10px;
    }
  `};
`;
