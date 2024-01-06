import api from "./api";

//user
export const postUser = (user) => api.post(`/User`, user);

//favorite
export const getFavorites = (userId) => api.get(`/Favorite/${userId}`);

export const postFavorite = (data) => api.post(`/Favorite`, data);

// AI
export const getAITools = () => api.get(`/IA`);

export const getAIToolsByName = (name) => api.get(`IA/search-by-name`, { params: { name } });

export const getAIToolsNames = () => api.get(`/IA/names`);

export const createAITools = async (body) => {
  await api.post(`/IA`, { ...body });
};

export const editAITools = (_id, body) => api.put(`/IA/${_id}`, body);

export const deleteAITools = (_id) => api.delete(`/IA/${_id}`);

// Category Feature
export const createCategoriesFeature = async (body) => {
  await api.post(`/categoriesfeature`, { ...body });
};
export const getCategoryFeatureByName = (name) =>
  api.get(`categoriesfeature/search-by-name`, { params: { name } });
export const getCategoryFeatureNames = () => api.get(`categoriesfeature/names`);
export const editCategoriesFeature = (_id, body) => api.put(`/categoriesfeature/${_id}`, body);
export const getCategoriesFeature = () => api.get(`/categoriesfeature`);
export const deleteCategoriesFeature = (_id) => api.delete(`/categoriesfeature/${_id}`);
// Category Price
export const createCategoriesPrices = async (body) => {
  await api.post(`/categoriesprices`, { ...body });
};
export const getCategoryPricesByName = (name) =>
  api.get(`categoriesprices/search-by-name`, { params: { name } });
export const getCategoryPricesNames = () => api.get(`categoriesprices/names`);
export const editCategoriesPrices = (_id, body) => api.put(`/categoriesprices/${_id}`, body);
export const getCategoriesPrice = () => api.get(`/categoriesprices`);
export const deleteCategoriesPrice = (_id) => api.delete(`/categoriesprices/${_id}`);

// Category Profession
export const createCategoriesProfession = async (body) => {
  await api.post(`/categoriesprofession`, { ...body });
};
export const getCategoryProfessionByName = (name) =>
  api.get(`categoriesprofession/search-by-name`, { params: { name } });
export const getCategoryProfessionNames = () => api.get(`categoriesprofession/names`);
export const editCategoriesProfession = (_id, body) =>
  api.put(`/categoriesprofession/${_id}`, body);
export const getCategoriesProfession = () => api.get(`/categoriesprofession`);
export const deleteCategoriesProfession = (_id) => api.delete(`/categoriesprofession/${_id}`);
// Category Filter
export const getAIToolsByCategoryId = (info) => api.get("IA/search-by-category", { params: info });
