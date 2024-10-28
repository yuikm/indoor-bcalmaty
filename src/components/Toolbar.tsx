import { useState, useContext } from "react";
import { NavigationContext } from "@/pages/Map";
import { NavigationContextType } from "@/utils/types";
import { isDesktop } from "react-device-detect";
import EditPositionButton from "./EditPositionButton";
import DesktopRouteDetails from "./DesktopRouteDetails";
import SearchBar from "./SearchBar";
import IndoorMapWrapperFirst from "./IndoorMapWrapper";
import IndoorMapWrapperSecond from "./IndoorMapWrapperSecond";
import IndoorMapWrapperThird from "./IndoorMapWrapperThird";
import IndoorMapWrapperFourth from "./IndoorMapWrapperFourth";
import IndoorMapWrapperFifth from "./IndoorMapWrapperFifth";
import IndoorMapWrapperSix from "./IndoorMapWrapperSix";

function Toolbar() {
  const { navigation } = useContext(NavigationContext) as NavigationContextType;

  const [selectedFloor, setSelectedFloor] = useState(1);

  const floorComponents = [
    <IndoorMapWrapperFirst />,
    <IndoorMapWrapperSecond />,
    <IndoorMapWrapperThird />,
    <IndoorMapWrapperFourth />,
    <IndoorMapWrapperFifth />,
    <IndoorMapWrapperSix />,
  ];

  const handleFloorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFloor(parseInt(event.target.value));
  };

  return (
    <div className="w-full h-full">
      <div className="flex space-x-1 mb-4 h-12 relative">
        <SearchBar />
        <EditPositionButton />
        {navigation.end && isDesktop && <DesktopRouteDetails />}
        {/* Dropdown to select floor */}
        <select
          value={selectedFloor}
          onChange={handleFloorChange}
          className="border rounded px-2 py-1"
        >
          {Array.from({ length: 7 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {`Floor ${i + 1}`}
            </option>
          ))}
        </select>
      </div>
      <div className="center w-full h-full">
        {/* Render the selected floor's component */}
        {floorComponents[selectedFloor - 1]}
      </div>
    </div>
  );
}

export default Toolbar;
