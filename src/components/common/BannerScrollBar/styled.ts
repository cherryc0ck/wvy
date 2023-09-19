import styled, { css } from "styled-components";

type ContainerProps = {
  activeIndex: number;
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, activeIndex }) => css`
    position: relative;
    width: auto;
    height: 1px;
    margin: 20px;

    background-color: ${theme.colors.gray300};

    span {
      position: absolute;
      left: calc(${activeIndex}*16.6%);
      display: block;
      width: 16.66%;
      height: 1px;
      background-color: ${theme.colors.mainBlack};
      transition: left 0.2s ease-out;
    }

    ${theme.media.tablet} {
      display: none;
    }
  `};
`;
