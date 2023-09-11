import styled, { css } from "styled-components";
import { Swiper } from "swiper/react";

export const CustomSwiper = styled(Swiper)`
  ${({ theme }) => css`
    ${theme.flex.row("flex-start")};
    width: 100%;

    .swiper-slide,
    .swiper-wrapper {
      width: 72px;
      height: 108px;
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    aspect-ratio: 72/108;
  `};
`;
