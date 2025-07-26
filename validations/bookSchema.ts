import { z } from "zod";

const isValidImagePath = (val: string) => {
  try {
    new URL(val);
    return true;
  } catch {
    return val.startsWith("/") && val.length > 5 && val.includes(".");
  }
};

export const bookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  rating: z.number().min(1).max(5),
  status: z.enum(["to-read", "reading", "read"]),
  description: z.string().optional(),
  image: z.string().min(1, "Cover image is required").refine(isValidImagePath, {
    message: "Must be a valid URL or local image path",
  }),
  coverColor: z.string(),
});

export type BookFormData = z.infer<typeof bookSchema>;
