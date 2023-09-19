import { Swiper } from "swiper/react";
import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    position: relative;
    margin-bottom: 20px;

    ${theme.media.desktop} {
      margin-bottom: 15px;
    }
  `};
`;

export const CustomSwiper = styled(Swiper)`
  ${({ theme }) => css`
    width: 100%;
    ${theme.flex.row("flex-start")};

    .swiper-wrapper {
      min-width: 360px;
      width: 100%;
      max-width: 648px;
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 480px;
  `};
`;

export const Figcaption = styled.figcaption`
  ${({ theme }) => css`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: ${theme.colors.white};

    h3 {
      margin-bottom: 10px;
      color: ${theme.colors.white};
      ${theme.typo.head.md};
      white-space: pre-wrap;
    }
    p {
      color: ${theme.colors.white};
      ${theme.typo.body.sm};
    }

    ${theme.media.desktop} {
      h3 {
        margin-bottom: 0px;
      }
    }
  `};
`;

export const PrevButton = css`
  ${({ theme }) => css`
    display: none;
    ${theme.media.tablet} {
      display: block;
      position: absolute;
      top: 50%;
      left: 10px;
      z-index: 1000;
      transform: translate(0, -50%);
    }
  `};
`;

export const NextButton = css`
  ${({ theme }) => css`
    display: none;
    ${theme.media.tablet} {
      display: block;
      position: absolute;
      top: 50%;
      right: 10px;
      z-index: 1000;
      transform: translate(0, -50%);
    }
  `};
`;
