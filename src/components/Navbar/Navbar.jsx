import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import useGlobalContext from "../../hooks/useGlobalContext";

function Navbar() {
  const { matches } = useGlobalContext();
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
