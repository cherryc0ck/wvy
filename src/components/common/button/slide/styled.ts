import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    width: 64px;
    height: 64px;
    background-color: ${theme.colors.mainBlack};

    svg {
      width: 20px;
      height: 36px;
      stroke: ${theme.colors.white};
    }
  `};
`;
