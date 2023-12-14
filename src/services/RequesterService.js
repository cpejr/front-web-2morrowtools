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

//Avaliation


export const postAvaliation = async(body) => {
  await api.post(`/avaliation`, { ...body });
};
export const updateAvaliation = (userId, rate, iaId) => api.put(`/avaliation/${iaId}`, { userId, rate, iaId });
export const getByIaId = (iaId) => api.get(`/avaliation/${iaId}`);
