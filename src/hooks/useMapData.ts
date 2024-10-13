// useMapData.ts
import { useState, useEffect } from "react";
import { getObjects, getCategories } from "../services/mapServices";
import { Category, ObjectItem } from "@/utils/types";

function useMapData() {
  const [objects, setObjects] = useState<ObjectItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchData = async () => {
    try {
      const objectsResponse = await getObjects();
      const categoriesResponse = await getCategories();

      // Access objects and categories directly from the response
      const objectsData = objectsResponse?.objects || [];
      const categoriesData = categoriesResponse?.categories || [];

      // Only proceed if objectsData and categoriesData are available
      if (objectsData.length > 0 && categoriesData.length > 0) {
        objectsData.forEach((obj) => {
          obj.categoryName = categoriesData.find(
            (cat) => cat.id === obj.categoryId
          )?.name;
        });
        setObjects(objectsData);
        setCategories(categoriesData);
      } else {
        console.warn("No objects or categories found in the response.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { objects, categories, refetchData: fetchData };
}

export default useMapData;
