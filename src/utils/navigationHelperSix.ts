import { Dispatch, SetStateAction } from "react";
import { graph } from "../algorithms/dijkstraSix";
import { Navigation, NavigationContextType } from "./types";
import { ObjectItem } from "./types";
import { graphDataSix } from "@/store/graphDataSix";
import { toast } from "react-toastify";
export let routeLength = 0;

const findVertexByObjectId = (vertexId: string) =>
  graphDataSix.vertices.find((v) => v.objectName === vertexId);

export function navigateToObjectSix(
  selectedObjectId: string,
  navigation: NavigationContextType["navigation"],
  setNavigation: NavigationContextType["setNavigation"]
) {
  const target = findVertexByObjectId(selectedObjectId);
  if (!target) {
    console.error("Target not found");
    toast.error("Target not found");
    return;
  }

  const shortestPath = graph.calculateShortestPath(navigation.start, target.id);
  const pathString = shortestPath
    .slice(1)
    .map((vertexId) => {
      const vertex = graphDataSix.vertices.find((v) => v.id === vertexId);
      return vertex ? `L${vertex.cx} ${vertex.cy}` : "";
    })
    .join(" ");

  const startVertex = graphDataSix.vertices.find(
    (v) => v.id === navigation.start
  );
  const navigationRoutePath = document.getElementById("navigation-route");
  if (navigationRoutePath && startVertex) {
    navigationRoutePath.setAttribute(
      "d",
      `M${startVertex.cx} ${startVertex.cy} ${pathString}`
    );
    console.log("navigationRoutePath", navigationRoutePath);
    navigationRoutePath.classList.remove("path-once", "path-active");
    navigationRoutePath.classList.add("path-once");
    navigationRoutePath.addEventListener(
      "animationend",
      () => {
        navigationRoutePath.classList.remove("path-once");
        navigationRoutePath.classList.add("path-active");
      },
      { once: true }
    );
  }

  setNavigation((prevNavigation) => ({
    ...prevNavigation,
    end: selectedObjectId,
  }));
}

export function resetEdges() {
  document.getElementById("navigation-route")?.setAttribute("d", "");
  graphDataSix.edges.forEach((edge) => {
    const element = document.getElementById(edge.id);
    if (element) {
      element.classList.remove("path-active");
    }
  });
}

export function navigateWithDelay(
  objects: ObjectItem[],
  index: number,
  delay: number,
  navigation: Navigation,
  setNavigation: Dispatch<SetStateAction<Navigation>>
) {
  if (index < objects.length) {
    const obj = objects[index];
    navigateToObjectSix(obj.name, navigation, setNavigation);

    setTimeout(() => {
      navigateWithDelay(objects, index + 1, delay, navigation, setNavigation);
    }, delay);
  }
}
