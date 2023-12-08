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
export const getComments = () => api.get("/comment")
export const getCommentsbyID = (_id) => api.get(`/comment/${_id}`)
export const getCommentsbyUser = (_id) => api.get(`/comment/user/${_id}`)
export const getCommentsbyIA = (_id) => api.get(`/comment/IA/${_id}`)

export const postComments = (body) => api.post(`/comment`, body)

export const editComments = (_id,body) => api.put(`/comment/${_id}`, body)

export const deleteComments = (_id) => api.delete(`/comment/${_id}`)