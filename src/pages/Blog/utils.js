import { z } from "zod";

// Form Validation
export const createTextValidationSchema = z.object({
  name: z
    .string({ required_error: "O título é obrigatório" })
    .min(2, {
      message: "O título deve ter pelo menos 2 caracteres",
    })
    .max(60, {
      message: "O título não pode exceder 60 caracteres",
    }),
});