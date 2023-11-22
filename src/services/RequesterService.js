import api from "./api";

// AI

export const createAITools = async (body) => {
  await api.post(`/IA`, { ...body });
};

export const getAITools = () => api.get(`/IA`);

export const editAITools = (_id, body) => api.put(`/IA/${_id}`, body);

export const deleteAITools = (_id) => api.delete(`/IA/${_id}`);
