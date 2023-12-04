import { z } from "zod";

import { ERROR_CODES } from "../.../../../../../utils/constants";

// Form Validation
export const editToolValidationSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres" })
    .max(60, { message: "O nome não pode exceder 60 caracteres" })
    .optional(),

  shortDescription: z
    .string()
    .min(2, { message: "A descrição curta deve ter pelo menos 2 caracteres" })
    .max(100, { message: "A descrição curta não pode exceder 100 caracteres" })
    .optional(),

  longDescription: z
    .string()
    .min(20, { message: "A descrição longa deve ter pelo menos 20 caracteres" })
    .max(750, { message: "A descrição longa não pode exceder 750 caracteres" })
    .optional(),

  youtubeVideoLink: z
    .string()
    .min(5, { message: "O link do vídeo do YouTube deve ter pelo menos 5 caracteres" })
    .optional(),

  linkedIn: z
    .string()
    .min(5, { message: "O link do LinkedIn deve ter pelo menos 5 caracteres" })
    .optional(),

  discord: z
    .string()
    .min(5, { message: "O link do Discord deve ter pelo menos 5 caracteres" })
    .optional(),

  twitterX: z
    .string()
    .min(5, { message: "O link do Twitter deve ter pelo menos 5 caracteres" })
    .optional(),

  instagram: z
    .string()
    .min(5, { message: "O link do Instagram deve ter pelo menos 5 caracteres" })
    .optional(),

  tiktok: z
    .string()
    .min(5, { message: "O link do TikTok deve ter pelo menos 5 caracteres" })
    .optional(),

  facebook: z
    .string()
    .min(5, { message: "O link do Facebook deve ter pelo menos 5 caracteres" })
    .optional(),

  reddit: z
    .string()
    .min(5, { message: "O link do Reddit deve ter pelo menos 5 caracteres" })
    .optional(),

  pinterest: z
    .string()
    .min(5, { message: "O link do Pinterest deve ter pelo menos 5 caracteres" })
    .optional(),

  youtube: z
    .string()
    .min(5, { message: "O link do YouTube deve ter pelo menos 5 caracteres" })
    .optional(),

  imageURL: z.string().optional(),
  link: z.string().optional(),
  id_categoryfeature: z.string().optional(),
  id_categoryprice: z.string().optional(),
  id_categoryprofession: z.string().optional(),
});

// Error Handling
const editToolErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: "Dados inválidos",
  [ERROR_CODES.CONFLICT]: "O nome da AI já está sendo utilizado",
};
const editToolDefaultErrorMessage = "Erro ao criar nova ferramenta. Tente novamente mais tarde";

export function buildEditToolErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return editToolErrorMessages[code] || editToolDefaultErrorMessage;
}
