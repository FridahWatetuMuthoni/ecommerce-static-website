import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  lighten,
} from "@mui/material";
import useGlobalContext from "../../hooks/useGlobalContext";
import { Close } from "@mui/icons-material";
import { DrawerCloseButton } from "../../styles/Drawer";
import { Colors } from "../../styles/theme";

function AppDrawer() {
  const { drawerOpen, setDrawerOpen } = useGlobalContext();

  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <Close
            sx={{ fontSize: "2.5rem", color: lighten(Colors.secondary, 0.01) }}
          />
        </DrawerCloseButton>
      )}

      <Drawer open={drawerOpen} onClick={() => setDrawerOpen(false)}>
        <List>
          <ListItemButton>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText>Categories</ListItemText>
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText>Products</ListItemText>
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText>About Us</ListItemText>
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText>Contact Us</ListItemText>
          </ListItemButton>
          <Divider />
        </List>
      </Drawer>
    </>
  );
}

export default AppDrawer;
