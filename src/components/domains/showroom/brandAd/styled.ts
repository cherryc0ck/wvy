import styled, { css } from "styled-components";
import { Swiper } from "swiper/react";

export const Section = styled.section`
  ${({ theme }) => css`
    margin: 50px 0;
  `};
`;

export const BrandButtonWrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 20px;
    ${theme.flex.row("flex-start")};
    gap: 10px;
    margin-bottom: 30px;
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
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    width: 340px;
    height: 500px;
  `};
`;

export const Desc = styled.p`
  ${({ theme }) => css`
    padding: 0 20px 20px 20px;
    ${theme.typo.body.lg};
    color: ${theme.colors.mainBlack};
  `};
`;
