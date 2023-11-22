import api from "./api";

// AI
export const postUser = (user) => api.post(`/User`, user);