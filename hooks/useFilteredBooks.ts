import { useBooksStore } from "@/store/useBooksStore";
import { useMemo } from "react";

export const useFilteredBooks = (searchText: string) => {
  const books = useBooksStore((s) => s.books);
  const filters = useBooksStore((s) => s.filters);

  return useMemo(() => {
    return books.filter((book) => {
      const matchesSearch = book.title
        .toLowerCase()
        .includes(searchText.toLowerCase());

      const matchesStatus =
        filters.status === "all" || book.status === filters.status;

      const matchesRating = book.rating >= filters.minRating;

      return matchesSearch && matchesStatus && matchesRating;
    });
  }, [books, filters, searchText]);
};
