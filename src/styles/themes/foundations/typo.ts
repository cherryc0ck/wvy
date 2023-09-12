import { css } from "styled-components";
import { colors } from "./colors";

export const typo = {
  head: {
    lg: () => css`
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 5.12rem;
    `,
    md: () => css`
      font-size: 2.8rem;
      font-weight: 500;
      line-height: 4.48rem;
    `,
    sm: () => css`
      font-size: 2.4rem;
      font-weight: 400;
      line-height: 3.84rem;
    `,
  },
  body: {
    lg: () => css`
      font-size: 2rem;
      font-weight: 500;
      line-height: 3.2rem;
    `,
    md: () => css`
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.56rem;
    `,
    sm: () => css`
      font-size: 1.4rem;
      font-weight: 300;
      line-height: 2.24rem;
    `,
  },
  caption: {
    md: () => css`
      font-size: 1.3rem;
      font-weight: 400;
      line-height: 2.08rem;
    `,
  },
};
