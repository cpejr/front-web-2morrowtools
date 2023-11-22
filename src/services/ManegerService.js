import * as requesterService from "./RequesterService";

export const usePostUser = async (user) => {
    let token;
  await requesterService.postUser(user).then((res) => {
    token = res.data;
  });
  return token ;
};