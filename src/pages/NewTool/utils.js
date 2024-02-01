import { z } from "zod";

import { ERROR_CODES } from "../../utils/constants";

// Form Validation
export const newToolValidationSchema = z.object({
  name: z
    .string({ required_error: "O nome é obrigatório" })
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres" })
    .max(60, { message: "O nome não pode exceder 60 caracteres" }),
  imageURL: z
    .string({ required_error: "A URL da imagem é obrigatória" })
    .min(1, { message: "O URL deve ter pelo menos 1 caractere" }),
  shortDescription: z
    .string({ required_error: "A descrição curta é obrigatória" })
    .min(2, { message: "A descrição curta deve ter pelo menos 2 caracteres" })
    .max(60, { message: "A descrição curta não pode exceder 60 caracteres" }),

  longDescription: z
    .string({ required_error: "A descrição é obrigatória" })
    .min(20, { message: "A descrição longa deve ter pelo menos 20 caracteres" })
    .max(500, { message: "A descrição longa não pode exceder 500 caracteres" }),

  youtubeVideoLink: z
    .string({ required_error: "O link do Vídeo do Youtube é obrigatório" })
    .min(5, { message: "O link do vídeo do YouTube deve ter pelo menos 5 caracteres" }),

  link: z
    .string({ required_error: "O link é obrigatório" })
    .min(1, { message: "O link não pode estár vazio" }),
});

// Error Handling
const newToolErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: "Dados inválidos",
  [ERROR_CODES.CONFLICT]: "O nome da AI já está sendo utilizado",
};
const newToolDefaultErrorMessage = "Erro ao criar nova ferramenta. Tente novamente mais tarde";

export function buildNewToolErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return newToolErrorMessages[code] || newToolDefaultErrorMessage;
}
