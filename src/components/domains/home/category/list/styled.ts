import styled, { css } from "styled-components";
import { Swiper } from "swiper/react";

export const CustomSwiper = styled(Swiper)`
  width: 100%;
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    aspect-ratio: 72/108;
  `};
`;
