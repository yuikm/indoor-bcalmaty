import React, { useContext, useState } from "react";
import { isMobile } from "react-device-detect";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { MapDataContext, NavigationContext } from "../pages/Map";
import "../styles/map.css";
import {
  MapDataContextType,
  NavigationContextType,
  ObjectItem,
} from "../utils/types";
import {
  MapBackgroundFourth,
  PathsFourth,
  PositionsFourth,
  ObjectsFourth,
} from "./IndoorMap";

import Controls from "./MapControls";
import ObjectDetailsModal from "./Modals/ObjectDetailsModal";
import { navigateToObjectFourth } from "@/utils/navigationHelperFourth";
import { toast } from "react-toastify";

function IndoorMapWrapperFourth() {
  const [modalOpen, setModalOpen] = useState(false);
  const [object, setObject] = useState<ObjectItem>({} as ObjectItem);
  const positionRadius = isMobile ? 10 : 8;
  const { navigation, setNavigation, isEditMode, setIsEditMode } = useContext(
    NavigationContext
  ) as NavigationContextType;
  const { objects } = useContext(MapDataContext) as MapDataContextType;
  async function handleObjectClick(e: React.MouseEvent<SVGPathElement>) {
    if (!isEditMode) {
      const targetId = (e.target as HTMLElement).id;
      const selectedObject = objects.find((obj) => obj.name === targetId);
      if (selectedObject?.id) {
        setObject(selectedObject);
        setModalOpen(true);
      } else {
        toast.error("Арендатор не найден");
      }
    }
  }
  const handlePositionClick = (e: React.MouseEvent<SVGPathElement>) => {
    if (isEditMode) {
      const vertexId = (e.target as HTMLElement).id;
      setNavigation({ start: vertexId });
      setIsEditMode(false);
    }
  };

  function handleNavigationClick() {
    setModalOpen(false);
    navigateToObjectFourth(object.name, navigation, setNavigation);
  }
  return (
    <div className="relative w-full h-full bg-white center">
      <ObjectDetailsModal
        open={modalOpen}
        object={object}
        onClose={() => setModalOpen((cur) => !cur)}
        objectNavigation={handleNavigationClick}
      />

      <TransformWrapper
        centerOnInit
        minScale={isMobile ? 0.4 : 1}
        doubleClick={{ mode: "reset" }}
        initialScale={isMobile ? 0.4 : 1}
        smooth={true}
        wheel={{ smoothStep: 0.01 }}
      >
        <TransformComponent wrapperClass="bg-white">
          <MapBackgroundFourth>
            {/*Objects are the clickable areas on the map e.g. Rooms, Desks, ...*/}
            <ObjectsFourth
              handleObjectClick={handleObjectClick}
              className={
                isEditMode ? "" : "hover:cursor-pointer hover:opacity-50"
              }
            />
            {/*Edges are the lines on the map aka the paths*/}
            <PathsFourth />
            {/*Vertexes are the circles on the map aka the positions*/}
            <PositionsFourth
              positionRadius={positionRadius}
              handlePositionClick={handlePositionClick}
              className={
                isEditMode
                  ? "opacity-100 cursor-pointer hover:fill-[#488af4] "
                  : "opacity-0"
              }
              navigation={navigation}
            />
          </MapBackgroundFourth>
        </TransformComponent>
        <Controls />
      </TransformWrapper>
    </div>
  );
}
export default IndoorMapWrapperFourth;
