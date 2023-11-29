import { z } from "zod";

import { ERROR_CODES } from "../../utils/constants";

// Form Validation
export const newToolValidationSchema = z.object({
  name: z
    .string({ required_error: "The name is required" })
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(60, { message: "Name cannot exceed 60 characters" }),

  shortDescription: z
    .string({ required_error: "The short description is required" })
    .min(2, {
      message: "Short description must be at least 2 characters long",
    })
    .max(60, { message: "Short description cannot exceed 60 characters" }),

  longDescription: z
    .string({ required_error: "The description is required" })
    .min(20, {
      message: "Large description must be at least 20 characters long",
    })
    .max(500, { message: "Large description cannot exceed 500 characters" }),
  youtubeVideoLink: z
    .string()
    .min(5, {
      message: "Name must be at least 5 characters long",
    })
    .optional(),

  linkedIn: z
    .string()
    .min(5, {
      message: "Name must be at least 5 characters long",
    })
    .optional(),

  discord: z
    .string()
    .min(5, {
      message: "Name must be at least 5 characters long",
    })
    .optional(),

  twitterX: z
    .string()
    .min(5, {
      message: "Name must be at least 5 characters long",
    })
    .optional(),

  instagram: z
    .string()
    .min(5, {
      message: "Name must be at least 5 characters long",
    })
    .optional(),

  tiktok: z
    .string()
    .min(5, {
      message: "Name must be at least 5 characters long",
    })
    .optional(),

  facebook: z
    .string()
    .min(5, {
      message: "Name must be at least 5 characters long",
    })
    .optional(),

  reddit: z
    .string()
    .min(5, {
      message: "Name must be at least 5 characters long",
    })
    .optional(),

  pinterest: z
    .string()
    .min(5, {
      message: "Name must be at least 5 characters long",
    })
    .optional(),

  youtube: z
    .string()
    .min(5, {
      message: "Name must be at least 5 characters long",
    })
    .optional(),
  imageURL: z.string({ required_error: "The image URL is required" }),
  link: z.string({ required_error: "The link is required" }),
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
