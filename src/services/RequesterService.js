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
export const editCategoriesFeature = (_id, body) => api.put(`/categoriesfeature/${_id}`, body);
export const getCategoriesFeature = () => api.get(`/categoriesfeature`);
export const deleteCategoriesFeature = (_id) => api.delete(`/categoriesfeature/${_id}`);
export const readByIdCategoriesFeature = (_id) => api.get(`/categoriesfeature/readById/${_id}`);
// Category Price
export const createCategoriesPrices = async (body) => {
  await api.post(`/categoriesprices`, { ...body });
};
export const editCategoriesPrices = (_id, body) => api.put(`/categoriesprices/${_id}`, body);
export const getCategoriesPrice = () => api.get(`/categoriesprices`);
export const deleteCategoriesPrice = (_id) => api.delete(`/categoriesprices/${_id}`);
export const readByIdCategoriesPrice = (_id) => api.get(`/categoriesprices/readById/${_id}`);

// Category Profession
export const createCategoriesProfession = async (body) => {
  await api.post(`/categoriesprofession`, { ...body });
};
export const editCategoriesProfession = (_id, body) =>
  api.put(`/categoriesprofession/${_id}`, body);
export const getCategoriesProfession = () => api.get(`/categoriesprofession`);
export const deleteCategoriesProfession = (_id) => api.delete(`/categoriesprofession/${_id}`);
export const readByIdCategoriesProfession = (_id) =>
  api.get(`/categoriesprofession/readById/${_id}`);

// Category Filter
export const getAIToolsByCategoryId = (id) => api.get(`IA/search-by-name`, { params: id });
