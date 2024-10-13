import { Beacon, Category, ObjectItem } from "@/utils/types";
import apiService from "./apiService";

export async function getObjects(): Promise<{ objects: ObjectItem[] }> {
  try {
    const response = await apiService.get(""); // Adjust the endpoint if necessary
    return response.data; // Return the full response (should contain `objects`)
  } catch (error) {
    console.error("Error fetching objects:", error);
    throw error;
  }
}

export async function getObjectById(id: string): Promise<ObjectItem> {
  try {
    const response = await apiService.get(`/objects/${id}`);
    return response.data[0] as ObjectItem;
  } catch (error) {
    console.error(`Error fetching object with ID ${id}:`, error);
    throw error;
  }
}

export async function getCategories(): Promise<{ categories: Category[] }> {
  try {
    const response = await apiService.get(""); // Adjust the endpoint if necessary
    return response.data; // Return the full response (should contain `objects`)
  } catch (error) {
    console.error("Error fetching objects:", error);
    throw error;
  }
}

export async function getBeacon(): Promise<Beacon[]> {
  try {
    const response = await apiService.get("/fingerprints");
    return response.data as Beacon[];
  } catch (error) {
    console.error("Error fetching beacons:", error);
    throw error;
  }
}
