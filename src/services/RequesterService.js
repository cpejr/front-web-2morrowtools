import api from "./api";

//user
export const postUser = (user) => api.post(`/User`, user);

//AI
export const getAITools = () => api.get(`/IA`);
export const getAIToolsByName = (name) => api.get(`IA/search-by-name`, { params: { name } });

//favorite
export const getFavorites = (userId) => api.get(`/Favorite/${userId}`);

//favorite
export const postFavorite = (data) => api.post(`/Favorite`, data);
