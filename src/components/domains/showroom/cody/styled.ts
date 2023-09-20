import styled, { css } from "styled-components";
import { Swiper } from "swiper/react";

export const Section = styled.section`
  ${({ theme }) => css`
    padding-bottom: 50px;
    background-color: ${theme.colors.mainBlack};

    ${theme.media.desktop} {
      padding-bottom: 100px;
    }
  `};
`;

export const Container = styled.div`
  ${({ theme }) => css`
    padding-top: 50px;

    ${theme.media.desktop} {
      padding-top: 100px;
    }
  `};
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-bottom: 16px;
    padding: 0 20px;
    ${theme.typo.body.lg};
    color: ${theme.colors.white};

    ${theme.media.desktop} {
      margin-bottom: 30px;
      padding: 0 24px;
      ${theme.typo.head.md};
    }
  `};
`;

export const CustomSwiper = styled(Swiper)`
  ${({ theme }) => css`
    width: 100%;
    ${theme.flex.row("flex-start")};
    margin-bottom: 20px;
    padding: 0 20px;

    .swiper-slide,
    .swiper-wrapper {
      width: 74px;
      height: 100px;
    }

    ${theme.media.desktop} {
      margin-bottom: 50px;
      padding: 0 24px;

      .swiper-slide,
      .swiper-wrapper {
        width: 72px;
        height: 108px;
        margin-right: 10px !important;
      }
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    width: 74px;
    height: 100px;

    ${theme.media.desktop} {
      width: 72px;
      height: 108px;
    }
  `};
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("flex-start")};
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 20px;
    padding: 0 20px;

    ${theme.media.desktop} {
      gap: 15px;
      margin-bottom: 50px;
      padding: 0 24px;
    }
  `};
`;
