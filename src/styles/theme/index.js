import { createTheme, lighten } from "@mui/material";

export const Colors = {
  primary: "#5f2c3e",
  secondary: "#d1adcc",
  success: "#4CAF50",
  info: "#00a2ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  //Grays
  dim_gray: "#696969",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  light_gray: "rgb(230,230,230)",
  //solid colors
  white: "#fff",
  black: "#000",
};

const theme = (mode) =>
  createTheme({
    palette: {
      mode: mode,
      primary: {
        main: Colors.primary,
        light: Colors.primary,
        dark: "#542838",
        contrastText: Colors.white,
      },
      secondary: {
        main: Colors.secondary,
        light: "#AB85A7",
        dark: Colors.secondary,
        contrastText: Colors.black,
      },
      cards: {
        main: Colors.light_gray,
        light: Colors.light_gray,
        dark: "#121212",
        // contrastText: Colors.black,
      },
    },
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            width: 250,
            background: Colors.primary,
            color: Colors.secondary,
            borderRadius: "0px 100px 0px 0px",
            borderRight: `1px solid ${Colors.secondary}`,
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: lighten(Colors.primary, 0.2),
          },
        },
      },
      MyShopButton: {
        styleOverrides: {
          root: {
            color: Colors.white,
          },
          primary: {
            background: Colors.primary,
            "&:hover": {
              background: lighten(Colors.primary, 0.05),
            },
          },
          secondary: {
            background: `${Colors.secondary}`,
            "&:hover": {
              background: lighten(Colors.primary, 0.05),
            },
          },
        },
      },
    },
  });

export default theme;
