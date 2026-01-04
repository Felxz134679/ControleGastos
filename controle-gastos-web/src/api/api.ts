import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5285/api", // mesma porta da API
});