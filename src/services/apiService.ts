import axios from "axios";

export const API_BASE_URL = import.meta.env.PROD
  ? "/"
  : "https://api.jsonbin.io/v3/b/670b5913acd3cb34a895f47e";
// Create an Axios instance
const apiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "X-Master-Key":
      "$2a$10$NmgrNTotuJ8IsC9Ymec57uFHGgrxutgI.es8fd9aI0Oj6dPD76l5a",
  },
});

export default apiService;
