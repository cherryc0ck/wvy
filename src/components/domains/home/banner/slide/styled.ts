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
  `};
`;
