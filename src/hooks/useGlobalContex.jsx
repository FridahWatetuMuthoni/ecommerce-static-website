import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function useGlobalContex() {
  return useContext(GlobalContext);
}

export default useGlobalContex;
