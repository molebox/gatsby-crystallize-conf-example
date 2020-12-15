import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        visibility: "hidden",
      },
    },
  },
  fonts: {
    heading: "Open Sans",
    body: "Jost",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "74px",
    "6xl": "100px",
    "7xl": "130px",
  },
  colors: {
    brand: {
      bg: "#008ca5",
      offBlack: "#000213",
      offWhite: "#f6f8fa",
      accent: "#e93f79",
    },
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
});
