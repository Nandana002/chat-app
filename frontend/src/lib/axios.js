import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-app-1-g1rv.onrender.com/api" : "/api",
  withCredentials: true,
});