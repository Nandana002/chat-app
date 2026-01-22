import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL ?? (import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "https://chat-app-1-g1rv.onrender.com/api");

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});
