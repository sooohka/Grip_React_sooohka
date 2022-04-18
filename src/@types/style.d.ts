import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      black: string;
      white: string;
      gray: {
        "50": string;
        "100": string;
        "200": string;
        "300": string;
        "400": string;
        "500": string;
        "600": string;
        "700": string;
        "800": string;
        "900": string;
      };
    };
    size: {
      app: {
        width: string;
        height: string;
      };
      modal: {
        width: string;
        height: string;
      };
      header: {
        height: string;
      };
    };
    zIndex: {
      header: number;
      backDrop: number;
      modal: number;
    };
  }
}
