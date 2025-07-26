import { z } from "zod";

export const bookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  rating: z.number().min(1).max(5),
  status: z.enum(["to-read", "reading", "read"]),
  description: z.string().optional(),
  image: z.string().url("Invalid image URL"),
  coverColor: z.string(),
});

export type BookFormData = z.infer<typeof bookSchema>;
