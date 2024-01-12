import { z } from "zod";

import { ERROR_CODES } from "../../utils/constants";

// Form Validation
export const newCategoryValidationSchema = z.object({
  name: z
    .string({ required_error: "O nome é obrigatório" })
    .min(2, {
      message: "O nome deve ter pelo menos 2 caracteres",
    })
    .max(60, {
      message: "O nome não pode exceder 60 caracteres",
    }),
});

// Error Handling
const newCategoryErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: "Dados inválidos",
  [ERROR_CODES.CONFLICT]: "O nome da categoria já está sendo utilizado",
};
const newCategoryDefaultErrorMessage =
  "Erro ao adicionar nova categoria. Tente novamente mais tarde";

export function buildNewCategoryErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return newCategoryErrorMessages[code] || newCategoryDefaultErrorMessage;
}
