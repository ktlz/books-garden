export const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // remove punctuation except hyphens/underscores
    .replace(/\s+/g, "-"); // replace spaces with hyphens
