import { z } from "zod";

import { ERROR_CODES } from "../.../../../../../utils/constants";

// Form Validation
export const editPostValidationSchema = z.object({
  name: z
    .string({ required_error: "O título é obrigatório" })
    .max(60, { message: "O título não pode exceder 60 caracteres" })
    .optional(),
  imageUrl: 
    z.string().optional(),
  shortDescription: z
    .string().optional(),
  longDescription: z
    .string()
    .max(750, { message: "A descrição longa não pode exceder 750 caracteres" })
    .optional(),
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
