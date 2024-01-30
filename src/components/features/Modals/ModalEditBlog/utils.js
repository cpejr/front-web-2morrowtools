import { z } from "zod";

import { ERROR_CODES } from "../.../../../../../utils/constants";

// Form Validation
export const editToolValidationSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres" })
    .max(60, { message: "O nome não pode exceder 60 caracteres" }),

  imageURL: z.string(),
  shortDescription: z
    .string()
    .min(2, { message: "A descrição curta deve ter pelo menos 2 caracteres" })
    .max(100, { message: "A descrição curta não pode exceder 100 caracteres" }),

  longDescription: z
    .string()
    .min(20, { message: "A descrição longa deve ter pelo menos 20 caracteres" })
    .max(750, { message: "A descrição longa não pode exceder 750 caracteres" }),

  id_categoryfeature: z.string(),
  id_categoryprofession: z.string(),
});

// Error Handling
const editToolErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: "Dados inválidos",
  [ERROR_CODES.CONFLICT]: "O nome do post já está sendo utilizado",
};
const editToolDefaultErrorMessage = "Erro ao criar novo post. Tente novamente mais tarde";

export function buildEditToolErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return editToolErrorMessages[code] || editToolDefaultErrorMessage;
}
