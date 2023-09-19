import styled, { css } from "styled-components";
import { Swiper } from "swiper/react";

export const CustomSwiper = styled(Swiper)`
  ${({ theme }) => css`
    ${theme.flex.row("flex-start")};
    width: 100%;
    padding: 0 20px;

    .swiper-slide,
    .swiper-wrapper {
      width: 72px;
      height: 108px;
    }

    ${theme.media.desktop} {
      padding: 0;

      .swiper-slide,
      .swiper-wrapper {
        width: 216px;
        height: 322.5px;
      }
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    aspect-ratio: 72/108;

    ${theme.media.desktop} {
      width: 216px;
      height: 322.5px;
      aspect-ratio: 0;
    }
  `};
`;

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("flex-start")};
    flex-wrap: wrap;
    gap: 12px;
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${({ theme }) => css`
      ${theme.flex.row()};
      flex-wrap: wrap;
    `};
  `};
`;
