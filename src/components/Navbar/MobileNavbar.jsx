import { IconButton } from "@mui/material";
import { NavbarContainer, NavbarHeader } from "../../styles/Navbar";
import { Menu, Search } from "@mui/icons-material";
import Actions from "./Actions";
import useGlobalContext from "../../hooks/useGlobalContext";

function MobileNavbar() {
  const { setDrawerOpen } = useGlobalContext();
  return (
    <NavbarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <Menu />
      </IconButton>
      <NavbarHeader textAlign={"center"} variant="h5">
        My Bags
      </NavbarHeader>
      <IconButton>
        <Search />
      </IconButton>
      <Actions />
    </NavbarContainer>
  );
}

export default MobileNavbar;
