import * as requesterService from "./RequesterService";

// AI

export const useGetAITools = async () => {
  let aiTools = {};
  await requesterService.getAITools().then((res) => {
    aiTools = res.data;
  });
  return { aiTools };
};

export const useCreateAITools = async (body) => {
  const create = await requesterService.createAITools(body).then((res) => {
    return res;
  });
  return create;
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

export const useGetAIToolsByName = async ({ name }) => {
  let aiTools = {};
  await requesterService.getAIToolsByName(name).then((res) => {
    aiTools = res.data;
  });
  return { aiTools };
};
export const useGetAIToolsNames = async () => {
  let aiTools = {};
  await requesterService.getAIToolsNames().then((res) => {
    aiTools = res.data;
  });
  return { aiTools };
};

// User

export const usePostUser = async (user) => {
  let token;
  await requesterService.postUser(user).then((res) => {
    token = res.data;
  });
  return token;
};

// Favorite

export const useGetFavorites = async (userId) => {
  let favorites = [];
  await requesterService.getFavorites(userId).then((res) => {
    favorites = res.data;
  });
  return favorites;
};

export const usePostFavorite = async (data) => {
  let favorite = {};
  await requesterService.postFavorite(data).then((res) => {
    favorite = res.data;
  });
  return favorite;
};

// Category Feature

export const useGetCategoryFeaturesByName = async ({ name }) => {
  let categoryFeatures = {};
  await requesterService.getCategoryFeatureByName(name).then((res) => {
    categoryFeatures = res.data;
  });
  return { categoryFeatures };
};

export const useGetCategoryFeaturesNames = async () => {
  let categoryFeatures = {};
  await requesterService.getCategoryFeatureNames().then((res) => {
    categoryFeatures = res.data;
  });
  return { categoryFeatures };
};

export const useCreateCategoriesFeature = async (body) => {
  const create = await requesterService.createCategoriesFeature(body).then((res) => {
    return res;
  });
  return create;
};

export const useEditCategoriesFeature = async (_id, body) => {
  try {
    const response = await requesterService.editCategoriesFeature(_id, body);
    return response.data;
  } catch (error) {
    console.error("Error updating category feature", error);
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

export const useDeleteCategoriesFeature = async (_id) => {
  try {
    const response = await requesterService.deleteCategoriesFeature(_id);
    return response.data;
  } catch (error) {
    console.error("Error deleting category feature", error);
    throw error;
  }
};

// Category Price

export const useCreateCategoriesPrices = async (body) => {
  const create = await requesterService.createCategoriesPrices(body).then((res) => {
    return res;
  });
  return create;
};

export const useGetCategoryPricesByName = async ({ name }) => {
  let categoryPrices = {};
  await requesterService.getCategoryPricesByName(name).then((res) => {
    categoryPrices = res.data;
  });
  return { categoryPrices };
};

export const useGetCategoryPricesNames = async () => {
  let categoryPrices = {};
  await requesterService.getCategoryPricesNames().then((res) => {
    categoryPrices = res.data;
  });
  return { categoryPrices };
};

export const useEditCategoriesPrices = async (_id, body) => {
  try {
    const response = await requesterService.editCategoriesPrices(_id, body);
    return response.data;
  } catch (error) {
    console.error("Error updating category price", error);
    throw error;
  }
};

export const usegetCategoriesPrices = async () => {
  let categoriesPrices = {};
  await requesterService.getCategoriesPrice().then((res) => {
    categoriesPrices = res.data;
  });
  return { categoriesPrices };
};

export const useDeleteCategoriesPrice = async (_id) => {
  try {
    const response = await requesterService.deleteCategoriesPrice(_id);
    return response.data;
  } catch (error) {
    console.error("Error deleting category price", error);
    throw error;
  }
};

// Category Profession

export const useCreateCategoriesProfession = async (body) => {
  const create = await requesterService.createCategoriesProfession(body).then((res) => {
    return res;
  });
  return create;
};

export const useGetCategoryProfesssionByName = async ({ name }) => {
  let categoryProfesssion = {};
  await requesterService.getCategoryProfessionByName(name).then((res) => {
    categoryProfesssion = res.data;
  });
  return { categoryProfesssion };
};

export const useGetCategoryProfesssionNames = async () => {
  let categoryProfesssion = {};
  await requesterService.getCategoryProfessionNames().then((res) => {
    categoryProfesssion = res.data;
  });
  return { categoryProfesssion };
};

export const useEditCategoriesProfession = async (_id, body) => {
  try {
    const response = await requesterService.editCategoriesProfession(_id, body);
    return response.data;
  } catch (error) {
    console.error("Error updating category price", error);
    throw error;
  }
};

export const usegetCategoriesProfession = async () => {
  let categoriesprofession = {};
  await requesterService.getCategoriesProfession().then((res) => {
    categoriesprofession = res.data;
  });
  return { categoriesprofession };
};

export const useDeleteCategoriesProfession = async (_id) => {
  try {
    const response = await requesterService.deleteCategoriesProfession(_id);
    return response.data;
  } catch (error) {
    console.error("Error deleting category profession", error);
    throw error;
  }
};

// Category Filter

export const useGetAIToolsByCategoryId = async (info) => {
  let aiTools = {};
  await requesterService.getAIToolsByCategoryId(info).then((res) => {
    aiTools = res.data;
  });
  return { aiTools };
};
