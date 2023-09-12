import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 32px;
    height: 32px;
    svg {
      width: 100%;
      height: 100%;
      stroke: ${theme.colors.white};
    }
  `};
`;
