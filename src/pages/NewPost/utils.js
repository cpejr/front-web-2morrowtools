import { z } from "zod";
import { ERROR_CODES } from "../../utils/constants";

// Form Validation
export const newPostValidationSchema = z.object({
  name: z
    .string({ required_error: "O título é obrigatório" })
    .min(2, { message: "O título deve ter pelo menos 2 caracteres" })
    .max(60, { message: "O título não pode exceder 60 caracteres" }),
  imageUrl: z
    .string({ required_error: "A URL da imagem é obrigatória" })
    .min(1, { message: "O URL deve ter pelo menos 1 caractere" }),
  shortDescription: z
    .string({ required_error: "A descrição curta é obrigatória" })
    .min(1, { message: "Campo obrigatório" }),
});

// Error Handling
const newPostErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: "Dados inválidos",
  [ERROR_CODES.CONFLICT]: "O título do post já está sendo utilizado",
};
const newPostDefaultErrorMessage = "Erro ao criar novo post. Tente novamente mais tarde";

export function buildNewPostErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return newPostErrorMessages[code] || newPostDefaultErrorMessage;
}
