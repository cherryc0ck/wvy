import "styled-components";

import { theme } from "@/styles";

type CustomTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
declare module "react" {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
