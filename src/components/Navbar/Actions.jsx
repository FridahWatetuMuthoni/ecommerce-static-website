import { Divider, ListItemButton, ListItemIcon, styled } from "@mui/material";
import {
  ActionIconsDesktop,
  ActionIconsMobile,
  MyList,
} from "../../styles/Navbar";
import { Favorite, Person, ShoppingCart } from "@mui/icons-material";
import PropTypes from "prop-types";

const StyledListButton = styled(ListItemButton)({
  justifyContent: "center",
});
const StyledListIcon = styled(ListItemIcon)({
  display: "flex",
  justifyContent: "center",
});

function Actions({ matches }) {
  const Component = matches ? ActionIconsMobile : ActionIconsDesktop;

  return (
    <Component>
      <MyList type="row">
        <StyledListButton>
          <StyledListIcon>
            <ShoppingCart />
          </StyledListIcon>
        </StyledListButton>
        <Divider orientation="vertical" flexItem />
        <StyledListButton>
          <StyledListIcon>
            <Favorite />
          </StyledListIcon>
        </StyledListButton>
        <Divider orientation="vertical" flexItem />
        <StyledListButton>
          <StyledListIcon>
            <Person />
          </StyledListIcon>
        </StyledListButton>
        <Divider orientation="vertical" flexItem />
      </MyList>
    </Component>
  );
}

Actions.propTypes = {
  matches: PropTypes.bool,
};

export default Actions;
