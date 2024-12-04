import axios from "axios";

const BASE_URL = "https://scalex-backend.vercel.app/";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
