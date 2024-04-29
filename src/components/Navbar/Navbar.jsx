import { useMediaQuery, useTheme } from "@mui/material";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {matches ? (
        <MobileNavbar matches={matches} />
      ) : (
        <DesktopNavbar matches={matches} />
      )}
    </>
  );
}

export default Navbar;
