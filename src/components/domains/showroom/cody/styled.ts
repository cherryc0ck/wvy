import styled, { css } from "styled-components";
import { Swiper } from "swiper/react";

export const Section = styled.section`
  ${({ theme }) => css`
    padding: 50px 0;
    background-color: ${theme.colors.mainBlack};
  `};
`;

export const Container = styled.div`
  ${({ theme }) => css`
    padding-top: 50px;
  `};
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-bottom: 16px;
    padding: 0 20px;
    ${theme.typo.body.lg};
    color: ${theme.colors.white};
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
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    height: 100px;
    width: 74px;
    height: 100px;
  `};
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("flex-start")};
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 20px;
    padding: 0 20px;
  `};
`;
