import styled, { css } from "styled-components";
import { Swiper } from "swiper/react";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 20px;
    margin: 50px 0;

    ${theme.media.desktop} {
      gap: 30px;
    }
  `};
`;

export const TitleButtonGroup = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("flex-start")};
    padding: 0 20px;

    ${theme.media.desktop} {
      justify-content: space-between;
      width: 100%;
      padding: 0 24px;
    }
  `};
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    width: 100px;
    ${theme.typo.head.sm};
    color: ${theme.colors.mainBlack};

    ${theme.media.desktop} {
      width: 300px;
      ${theme.typo.head.lg};
    }
  `};
`;

export const SlideButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: none;

    ${theme.media.desktop} {
      ${theme.flex.row()};
    }
  `};
`;

export const SlideButton = styled.button`
  ${({ theme }) => css`
    ${theme.flex.row()};
    width: 24px;
    height: 24px;
    border: 1px solid ${theme.colors.gray400};

    svg {
      width: 5px;
      height: 10px;
    }

    &[aria-disabled="true"] svg {
      stroke: ${theme.colors.gray400};
    }

    &[aria-disabled="false"] svg {
      stroke: ${theme.colors.mainBlack};
    }
  `};
`;

export const CustomSwiper = styled(Swiper)`
  ${({ theme }) => css`
    ${theme.flex.row("flex-start")};
    width: 100%;
    padding: 0 20px;

    .swiper-wrapper {
      width: 152px;
      height: auto;
    }

    .swiper-slide {
      ${theme.flex.col("center", "flex-start")};
    }

    ${theme.media.desktop} {
      padding: 0 24px;

      .swiper-wrapper {
        width: 216px;
        height: auto;
      }
    }
  `}
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    width: 152px;
    height: 228px;
    margin-bottom: 10px;

    ${theme.media.desktop} {
      width: 216px;
      height: 324px;
    }
  `};
`;

export const Figcaption = styled.figcaption`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    ${theme.flex.row()};
    height: 24px;
    padding: 0 9px;
    background-color: ${theme.colors.mainBlack};
    span {
      color: ${theme.colors.white};
      ${theme.typo.caption.md};
    }
  `};
`;

export const ItemDesc = styled.div`
  ${({ theme }) => css`
    span {
      ${theme.typo.body.md};
      color: ${theme.colors.mainBlack};
    }
    p {
      ${theme.typo.body.sm};
      color: ${theme.colors.mainBlack};
    }
  `};
`;
