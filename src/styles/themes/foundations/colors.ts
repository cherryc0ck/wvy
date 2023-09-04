export const colors = {
  white: "#fff",
  gray25: "#FCFCFC",
  gray50: "#FAFAFA",
  gray100: "#F5F5F5",
  gray200: "#EEEEEE",
  gray300: "#E0E0E0",
  gray400: "#BDBDBD",
  gray600: "#757575",
  gray800: "#424242",
  mainBlack: "#121212",
  black: "#000",
  dim: "rgba(0, 0, 0, 0.4)",
} as const;

export type ColorType = typeof colors;
