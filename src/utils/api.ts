import axios from "axios";
import { API_KEY, DEFAULT_URL } from "../constants";

export const instance = axios.create({
    baseURL: DEFAULT_URL,
    params: { api_key: API_KEY },
});