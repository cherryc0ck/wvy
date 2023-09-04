import { css } from "styled-components";
import { flex, typo, colors } from "../foundations";

export const button = {
  size: {
    large: () => css``,
    medium: () => css``,
    small: () => css``,
    // sm: () => css`
    //   ${flex.row()};
    //   width: 72px;
    //   height: 32px;
    //   border-radius: 12px;
    //   ${typo.button.sm};
    // `,
  },

  // variant: {
  //   primary: () => css`
  //     background-color: ${colors.primary500};
  //     border: 1px solid ${colors.primary500};
  //     color: ${colors.white};
  //     transition: all 0.1s ease-in-out;
  //     :hover {
  //       background-color: ${colors.primary600};
  //     }
  //   `,
  // },
};
