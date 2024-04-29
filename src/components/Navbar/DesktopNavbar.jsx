import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { MyList, NavbarContainer, NavbarHeader } from "../../styles/Navbar";
import { ModeNight, Search, WbSunny } from "@mui/icons-material";
import useGlobalContex from "../../hooks/useGlobalContex";
import Actions from "./Actions";
import PropTypes from "prop-types";

function DesktopNavbar({ matches }) {
  const { mode, setMode } = useGlobalContex();

  const handleMode = () => {
    let new_mode = mode === "dark" ? "light" : "dark";
    setMode(new_mode);
  };

  return (
    <NavbarContainer>
      <NavbarHeader>My Bags</NavbarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact Us" />
        <ListItemIcon onClick={handleMode}>
          {mode === "dark" ? <WbSunny /> : <ModeNight />}
        </ListItemIcon>
        <ListItemButton>
          <ListItemIcon>
            <Search />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </NavbarContainer>
  );
}

DesktopNavbar.propTypes = {
  matches: PropTypes.bool,
};

export default DesktopNavbar;
