import { z } from "zod";

import { ERROR_CODES } from "../../utils/constants";

// Form Validation
export const newCategoryValidationSchema = z.object({
  name: z
    .string({ required_error: "The name is required" })
    .min(2, {
      message: "Name must be at least 2 characters long",
    })
    .max(60, {
      message: "Name cannot exceed 60 characters",
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
