import { z } from "zod";

import { ERROR_CODES } from "../../../../utils/constants";

// Form Validation
export const editPostValidationSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres" })
    .max(60, { message: "O nome não pode exceder 60 caracteres" })
    .optional(),

  shortDescription: z
    .string()
    .optional(),

  longDescription: z
    .string()
    .optional(),

  imageURL: z.string().optional(),
  id_categoryfeature: z.string().optional(),
  id_categoryprofession: z.string().optional(),
});

// Error Handling
const editPostErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: "Dados inválidos",
  [ERROR_CODES.CONFLICT]: "O nome do post já está sendo utilizado",
};
const editPostDefaultErrorMessage = "Erro ao criar novo post. Tente novamente mais tarde";

export function buildEditPostErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return editPostErrorMessages[code] || editPostDefaultErrorMessage;
}
