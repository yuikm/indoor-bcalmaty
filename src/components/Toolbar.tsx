import { NavigationContext } from "@/pages/Map";
import { NavigationContextType } from "@/utils/types";
import { useContext } from "react";
import { isDesktop } from "react-device-detect";
import EditPositionButton from "./EditPositionButton";
import DesktopRouteDetails from "./DesktopRouteDetails";
import SearchBar from "./SearchBar";
import ChangeFloor from "./ChangeFloor";

function Toolbar() {
  const { navigation } = useContext(NavigationContext) as NavigationContextType;
  return (
    <div className="flex space-x-1 mb-4 h-12 relative">
      <SearchBar />
      <EditPositionButton />
      <ChangeFloor />
      {navigation.end && isDesktop && <DesktopRouteDetails />}
    </div>
  );
}

export default Toolbar;
