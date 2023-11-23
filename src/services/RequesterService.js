import api from "./api";

// AI

export const getAITools = () => api.get(`/IA`);
export const getAIToolsByName = (name) => api.get(`IA/search-by-name?name=${name}`);
