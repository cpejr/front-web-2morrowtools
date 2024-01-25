import { z } from "zod";
import { ERROR_CODES } from "../../utils/constants";

// Form Validation
export const newTextValidationSchema = z.object({
  name: z
    .string({ required_error: "O título é obrigatório" })
    .min(2, { message: "O título deve ter pelo menos 2 caracteres" })
    .max(60, { message: "O título não pode exceder 60 caracteres" }),
  imageUrl: z.string({required_error: "Campo obrigatório"})
    .min(1, { message: "Campo obrigatório" }),
  shortDescription: z
    .string({ required_error: "A descrição curta é obrigatória" })
    .min(1, { message: "Campo obrigatório" }),
  longDescription: z
    .string({ required_error: "A descrição é obrigatória" })
    .min(1, { message: "Campo obrigatório" }),
  id_categoryfeature: z.string( {required_error: "Característica inválida"}),  
  id_categoryprofession: z.string( {required_error: "Profissão inválida"}),
});


// Error Handling
const newToolErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: "Dados inválidos",
  [ERROR_CODES.CONFLICT]: "O título do post já está sendo utilizado",
};
const newToolDefaultErrorMessage = "Erro ao criar novo post. Tente novamente mais tarde";

export function buildNewToolErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return newToolErrorMessages[code] || newToolDefaultErrorMessage;
}
