import axios from "axios";

export const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const api = axios.create({
  baseURL: BASE_URL,
});

export const fetcher = (url: string) => api.get(url).then((res) => res.data);
