import styled, { css } from "styled-components";
import { Swiper } from "swiper/react";

export const Section = styled.section`
  ${({ theme }) => css`
    margin: 50px 0;
  `};
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-bottom: 30px;
    padding: 0 20px;
    ${theme.typo.head.sm};
    color: ${theme.colors.mainBlack};
  `};
`;

export const CustomSwiper = styled(Swiper)`
  ${({ theme }) => css`
    width: 100%;
    ${theme.flex.row("flex-start")};
    padding: 0 20px;

    .swiper-wrapper {
      width: 308px;
      height: auto;
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    width: 308px;
    height: 160px;
    margin-bottom: 15px;
  `};
`;

export const BrandName = styled.h3`
  ${({ theme }) => css`
    ${theme.typo.body.md};
    color: ${theme.colors.gray600};
  `};
`;
