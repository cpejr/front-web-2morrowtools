import * as requesterService from "./RequesterService";

export const useGetAITools = async () => {
  let aiTools = {};
  await requesterService.getAITools().then((res) => {
    aiTools = res.data;
  });
  return { aiTools };
};
