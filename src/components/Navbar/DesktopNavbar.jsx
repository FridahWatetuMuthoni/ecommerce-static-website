import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { MyList, NavbarContainer, NavbarHeader } from "../../styles/Navbar";
import { Search } from "@mui/icons-material";
import Actions from "./Actions";

function DesktopNavbar() {
  return (
    <NavbarContainer>
      <NavbarHeader>My Bags</NavbarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact Us" />
        <ListItemButton>
          <ListItemIcon>
            <Search />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions />
    </NavbarContainer>
  );
}

export default DesktopNavbar;
