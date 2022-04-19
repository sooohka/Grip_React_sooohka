import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: {
      light: "rgb(255,1,136)",
      dark: "rgb(254,46,90)",
      main: "rgb(254,33,110)",
    },
    secondary: "rgb(18,18,18)",
    gray: {
      "50": "#F7FAFC",
      "100": "#EDF2F7",
      "200": "#E2E8F0",
      "300": "#CBD5E0",
      "400": "#A0AEC0",
      "500": "#718096",
      "600": "#4A5568",
      "700": "#2D3748",
      "800": "#1A202C",
      "900": "#171923",
    },
    black: "#000000",
    white: "#ffffff",
  },
  size: {
    app: {
      width: "40rem",
      height: "90vh",
    },
    modal: {
      width: "30rem",
      height: "15rem",
    },
    header: {
      height: "7rem",
    },
    footer: {
      height: "7rem",
    },
  },
  zIndex: {
    header: 10,
    backDrop: 100,
    modal: 150,
  },
};
export default theme;
