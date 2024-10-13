import axios from "axios";

// Set the base URL for your JSON file hosted on GitHub
const apiService = axios.create({
  baseURL: "https://yuikm.github.io/bc-api/db.json",
});

// Example GET request to fetch data
apiService.get("");

export default apiService;
