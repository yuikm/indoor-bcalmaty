import axios from "axios";

export const API_BASE_URL = import.meta.env.PROD
  ? "/"
  : "https://api.jsonbin.io/v3/b/670b5913acd3cb34a895f47e";
// Create an Axios instance
const apiService = axios.create({
  baseURL: "https://api.jsonbin.io/v3/b/670b5913acd3cb34a895f47e", // Use the correct endpoint
  headers: {
    "X-Master-Key":
      "$2a$10$NmgrNTotuJ8IsC9Ymec57uFHGgrxutgI.es8fd9aI0Oj6dPD76l5a", // Ensure you have the correct key here
  },
});

apiService.get("/");

export default apiService;
