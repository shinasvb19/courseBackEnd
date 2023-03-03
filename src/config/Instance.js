import axios from "axios";

const Instance = axios.create({
  baseURL: "http://localhost:3000",
});

export default Instance;
