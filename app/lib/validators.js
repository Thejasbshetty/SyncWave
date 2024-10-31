import { z } from "zod";

export const projectSchema = z.object({
  name: z
    .string()
    .min(3, "Project name is required and it should be atleast 3 character")
    .max(100, "Project name must be 100 charactersor less"),
  key: z
    .string()
    .min(2, "Project key is required and it should be atleast 2 character")
    .max(10, "Project key must be 10 charactersor less"),
  description: z
    .string()
    .max(255, "Description must be 255 characters or less")
    .optional(),
});
