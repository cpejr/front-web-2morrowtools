import api from "./api";

//user
export const postUser = (user) => api.post(`/User`, user);

//favorite
export const getFavorites = (userId) => api.get(`/Favorite/${userId}`);

export const postFavorite = (data) => api.post(`/Favorite`, data);

// AI
export const getAITools = () => api.get(`/IA`);

export const getAIToolsByName = (name) => api.get(`IA/search-by-name`, { params: { name } });

export const createAITools = async (body) => {
  await api.post(`/IA`, { ...body });
};

export const editAITools = (_id, body) => api.put(`/IA/${_id}`, body);

export const deleteAITools = (_id) => api.delete(`/IA/${_id}`);

export const getCategoriesFeature = () => api.get(`/categoriesfeature`);

export const getCategoriesPrice = () => api.get(`/categoriesprices`);

export const getCategoriesProfession = () => api.get(`/categoriesprofession`);

// Comments
export const getComments = (id_ia) => api.get("/comment", { id_ia });

export const postComments = (body) => api.post(`/comment`, body);

export const editComments = (_id, body) => api.put(`/comment/${_id}`, body);

export const deleteComments = (_id, id_user) => api.delete(`/comment/${_id}`, { id_user });
