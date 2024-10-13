import axios from "axios";

const apiService = axios.create({
  baseURL: "https://yuikm.github.io/bc-api/db.json",
});

apiService.get("");

export default apiService;
