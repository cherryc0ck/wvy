import { Swiper } from "swiper/react";
import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    margin-bottom: 20px;
  `};
`;

export const CustomSwiper = styled(Swiper)`
  ${({ theme }) => css`
    width: 100%;
    ${theme.flex.row("flex-start")};

    .swiper-slide,
    .swiper-wrapper {
      width: 360px;
      height: 480px;
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    height: 480px;
    aspect-ratio: 360/480;
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
  `};
`;
