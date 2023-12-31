import styled, { css } from "styled-components";
import { Swiper } from "swiper/react";

export const Section = styled.section`
  ${({ theme }) => css`
    margin: 0 auto;
    padding: 50px 0;
    background-color: ${theme.colors.mainBlack};

    ${theme.media.desktop} {
      padding: 100px 0;
    }
  `};
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-bottom: 16px;
    padding: 0 20px;
    ${theme.typo.head.sm};
    color: ${theme.colors.white};

    ${theme.media.desktop} {
      margin-bottom: 20px;
      ${theme.typo.head.md};
    }
  `};
`;

export const CustomSwiper = styled(Swiper)`
  ${({ theme }) => css`
    width: 100%;
    ${theme.flex.row("flex-start")};
    margin-bottom: 30px;
    padding: 0 20px;

    .swiper-slide,
    .swiper-wrapper {
      width: 152px;
      height: 228px;
    }

    ${theme.media.desktop} {
      margin-bottom: 50px;
      padding: 0 24px;
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    height: 228px;
    aspect-ratio: 152/228;
  `};
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("flex-start")};
    gap: 10px;
    margin-bottom: 40px;
    padding: 0 20px;

    ${theme.media.desktop} {
      gap: 15px;
      margin-bottom: 50px;
      padding: 0 24px;
    }
  `};
`;
