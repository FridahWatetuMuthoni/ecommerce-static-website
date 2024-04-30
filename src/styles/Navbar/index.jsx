import { Box, List, Paper, Typography, styled } from "@mui/material";
import { Colors } from "../theme";
import "@fontsource/montez";

export const NavbarContainer = styled(Box)({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
  marginBottom: "5px",
});

export const NavbarHeader = styled(Typography)({
  padding: "4px",
  flexGrow: 1,
  fontSize: "3em",
  fontFamily: '"Montez","cursive"',
  color: Colors.secondary,
});

export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

export const ActionIconsDesktop = styled(Box)({
  flexGrow: 0,
});

export const ActionIconsMobile = styled(Paper)({
  display: "flex",
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  zIndex: 99,
  padding: "0",
});
