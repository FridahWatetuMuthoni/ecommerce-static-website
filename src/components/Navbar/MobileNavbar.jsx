import { IconButton } from "@mui/material";
import { NavbarContainer, NavbarHeader } from "../../styles/Navbar";
import { Menu, Search } from "@mui/icons-material";

function MobileNavbar() {
  return (
    <NavbarContainer>
      <IconButton>
        <Menu />
      </IconButton>
      <NavbarHeader textAlign={"center"} variant="h4">
        My Bags
      </NavbarHeader>
      <IconButton>
        <Search />
      </IconButton>
    </NavbarContainer>
  );
}

export default MobileNavbar;
