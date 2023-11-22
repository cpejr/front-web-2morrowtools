import * as requesterService from "./RequesterService";

export const usePostAITools = async (body) => {
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
    await requesterService.editAITools(_id, body).then();
  } catch (error) {
    return false;
  }
};

export const useDeleteAITools = async (_id) => {
  try {
    await requesterService.deleteAITools(_id).then();
  } catch (error) {
    return false;
  }
};
