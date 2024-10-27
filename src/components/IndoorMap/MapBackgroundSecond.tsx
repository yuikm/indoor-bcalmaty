import floorplan from "@/assets/img/2-floor.svg";
import { ReactNode } from "react";
interface MapBackgroundSecondProps {
  children: ReactNode;
}

function MapBackgroundSecond({ children }: MapBackgroundSecondProps) {
  return (
    <svg
      viewBox="0.469 0.006 1461.95 1149.136"
      className="lg:h-[85vh] lg:w-[75vw] h-[85dvh]"
    >
      <image id="background" width="100%" height="100%" href={floorplan} />
      {children}
    </svg>
  );
}

export default MapBackgroundSecond;
