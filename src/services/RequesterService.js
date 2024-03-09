import api from "./api";

//user
export const getUser = (id) => api.get(`/User/${id}`);
export const postUser = (user) => api.post(`/User`, user);
export const getUsers = () => api.get(`/User/getAll`);
export const updateUser = (userId, body) => api.put(`/User/${userId}`, body);
export const deleteUser = (userId) => api.delete(`/User/${userId}`);

// Favorite

export const getFavorites = (userId) => api.get(`/Favorite/${userId}`);

export const postFavorite = (data) => api.post(`/Favorite`, data);

export const deleteFavorite = (params) =>
  api.delete(`/FavoriteByIds/${params.userId}/${params.toolId}`);
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

// Comments
export const getComments = (id_ia) => api.get(`/comment/${id_ia}`);

export const postComments = (body) => api.post(`/comment`, body);

export const editComments = (_id, body) => api.put(`/comment/${_id}`, body);

export const deleteComments = (_id, user) => api.delete(`/comment/${_id}`, { data: { user } });

// Category Filter

export const getAIToolsByCategoryId = (info) => api.get("IA/search-by-category", { params: info });

//Avaliation

export const getTrueOrFalse = (iaId) => api.get(`/avaliation/check/${iaId}`);
export const getUserTrueOrFalse = async (info) => {
  const { userId, iaId } = info;
  const res = await api.get(`/avaliation/userCheck/${iaId}`, { params: { userId } });
  return res.data;
};
export const getAvaliationID = (info) => api.get("avaliation/ID", { params: info });

export const postAvaliation = async (body) => {
  await api.post(`/avaliation`, { ...body });
};
export const putUpdateAvaliation = async (id, body) => {
  await api.put(`/avaliation/${id}`, body);
};
export const getByIaId = (aiId) => api.get(`/avaliation/${aiId}`);

export const getAvaliation = () => api.get(`/avaliation`);

// NewPost & Post

export const createPost = async (body) => {
  await api.post(`/posts`, { ...body });
};

export const getPostByName = (name) => api.put(`/posts/`, { name });

export const deletePost = (id) => api.delete(`/posts/${id}`);

export const updatePut = (_id, body) => api.put(`/posts/${_id}`, body);

export const getAllPosts = (filters) => api.get(`/post/`, { params: { filters } });

export const getPostImage = (imageUrl) => api.post(`/PostImage`, { imageUrl });

export const findPostsByID = (id) => api.get(`/posts/find-by-id`, { params: id });

//image

export const getImage = (imageURL) => api.post(`/IAImage`, { imageURL });
export const postImage = (body) => api.post(`/image`, body);

//newsletter

export const postNewsletter = async (body) => await api.post(`/newsletter`, { ...body });
export const getNewsletter = () => api.get(`/newsletter`);
