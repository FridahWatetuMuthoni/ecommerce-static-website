import { Divider, ListItemButton, ListItemIcon, styled } from "@mui/material";
import {
  ActionIconsDesktop,
  ActionIconsMobile,
  MyList,
} from "../../styles/Navbar";
import { ModeNight, Person, WbSunny } from "@mui/icons-material";
import useGlobalContext from "../../hooks/useGlobalContext";
import { Colors } from "../../styles/theme";

const StyledListButton = styled(ListItemButton)({
  justifyContent: "center",
});

function Actions() {
  const { mode, setMode, matches } = useGlobalContext();
  const Component = matches ? ActionIconsMobile : ActionIconsDesktop;

  const handleMode = () => {
    let new_mode = mode === "dark" ? "light" : "dark";
    setMode(new_mode);
  };

  const icon_color = !matches
    ? ""
    : mode === "light"
    ? "#EA95DF"
    : Colors.secondary;

  const StyledListIcon = styled(ListItemIcon)({
    display: "flex",
    justifyContent: "center",
    color: icon_color,
  });

  return (
    <Component elevation={24}>
      <MyList type="row">
        {/* <StyledListButton>
          <StyledListIcon>
            <ShoppingCart />
          </StyledListIcon>
        </StyledListButton>
         */}
        <Divider orientation="vertical" flexItem />
        <StyledListButton>
          <StyledListIcon>
            <Person />
          </StyledListIcon>
        </StyledListButton>
        <Divider orientation="vertical" flexItem />
        <StyledListButton>
          <StyledListIcon onClick={handleMode}>
            {mode === "dark" ? <WbSunny /> : <ModeNight />}
          </StyledListIcon>
        </StyledListButton>
        <Divider orientation="vertical" flexItem />
      </MyList>
    </Component>
  );
}

export default Actions;
