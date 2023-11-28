import * as requesterService from "./RequesterService";

export const useCreateAITools = async (body) => {
  console.log(body);
  const create = await requesterService.createAITools(body).then((res) => {
    return res;
  });
  return create;
};

export const useGetAITools = async () => {
  let aiTools = {};
  await requesterService.getAITools().then((res) => {
    aiTools = res.data;
  });
  return { aiTools };
};

export const useEditAITools = async (_id, body) => {
  try {
    const response = await requesterService.editAITools(_id, body);
    return response.data;
  } catch (error) {
    console.error("Error updating tool", error);
    throw error;
  }
};

export const useDeleteAITools = async (_id) => {
  try {
    const response = await requesterService.deleteAITools(_id);
    return response.data;
  } catch (error) {
    console.error("Error deleting tool", error);
    throw error;
  }
};

export const usegetCategoriesFeature = async () => {
  let categoriesFeature = {};
  await requesterService.getCategoriesFeature().then((res) => {
    categoriesFeature = res.data;
  });
  return { categoriesFeature };
};

export const usegetCategoriesPrices = async () => {
  let categoriesPrices = {};
  await requesterService.getCategoriesPrice().then((res) => {
    categoriesPrices = res.data;
  });
  return { categoriesPrices };
};

export const usegetCategoriesProfession = async () => {
  let categoriesprofession = {};
  await requesterService.getCategoriesProfession().then((res) => {
    categoriesprofession = res.data;
  });
  return { categoriesprofession };
};
