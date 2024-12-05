import axios from "axios";

const BASE_URL = "https://scalex.onrender.com/";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
