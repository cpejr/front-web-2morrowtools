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

// Category Feature
export const createCategoriesFeature = async (body) => {
  await api.post(`/categoriesfeature`, { ...body });
};
export const getCategoriesFeature = () => api.get(`/categoriesfeature`);
export const deleteCategoriesFeature = (_id) => api.delete(`/categoriesfeature/${_id}`);

// Category Price
export const createCategoriesPrices = async (body) => {
  await api.post(`/categoriesprices`, { ...body });
};
export const getCategoriesPrice = () => api.get(`/categoriesprices`);
export const deleteCategoriesPrice = (_id) => api.delete(`/categoriesprices/${_id}`);

// Category Profession
export const createCategoriesProfession = async (body) => {
  await api.post(`/categoriesprofession`, { ...body });
};
export const getCategoriesProfession = () => api.get(`/categoriesprofession`);
export const deleteCategoriesProfession = (_id) => api.delete(`/categoriesprofession/${_id}`);
