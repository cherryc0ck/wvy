import styled, { css } from "styled-components";
import { Swiper } from "swiper/react";

export const Section = styled.section`
  ${({ theme }) => css`
    margin: 50px 0;
  `};
`;

export const BrandButtonWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("flex-start")};
    gap: 10px;
    margin-bottom: 30px;
    padding: 0 20px;

    ${theme.media.desktop} {
      gap: 20px;
      margin-bottom: 50px;
      padding: 0 24px;
    }
  `};
`;

export const CustomSwiper = styled(Swiper)`
  ${({ theme }) => css`
    width: 100%;
    ${theme.flex.row("flex-start")};
    margin-bottom: 20px;
    padding: 0 20px;

    .swiper-wrapper {
      width: 340px;
      height: auto;
    }

    ${theme.media.desktop} {
      margin-bottom: 30px;
      padding: 0 24px;

      .swiper-wrapper {
        width: 320px;
      }
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    width: 340px;
    height: 500px;

    ${theme.media.desktop} {
      width: 320px;
      height: 480px;
    }
  `};
`;

export const Desc = styled.p`
  ${({ theme }) => css`
    padding: 0 20px 20px 20px;
    ${theme.typo.body.lg};
    color: ${theme.colors.mainBlack};

    ${theme.media.desktop} {
      padding: 0 0 20px 24px;
      ${theme.typo.head.md};
    }
  `};
`;
