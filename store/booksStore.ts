import { createStore } from "zustand/vanilla";
import { BookFormData } from "@/validations/bookSchema";
import { books as staticBooks } from "@/constants/books";

export interface BooksStore {
  books: BookFormData[];
  filters: {
    status: "all" | "to-read" | "reading" | "read";
    minRating: number;
  };
  setFilters: (filters: Partial<BooksStore["filters"]>) => void;
  loadBooks: () => void;
  addBook: (book: BookFormData) => void;
  updateBook: (slug: string, updatedData: Partial<BookFormData>) => void;
}

export const booksStore = createStore<BooksStore>((set) => ({
  books: [],

  filters: {
    status: "all",
    minRating: 0,
  },

  setFilters: (newFilters) =>
    set((state) => ({
      filters: {
        ...state.filters,
        ...newFilters,
      },
    })),

  loadBooks: () => {
    if (typeof window === "undefined") return;
    try {
      const stored = localStorage.getItem("allBooks");
      if (stored) {
        const allBooks: BookFormData[] = JSON.parse(stored);
        set({ books: allBooks });
      } else {
        localStorage.setItem("allBooks", JSON.stringify(staticBooks));
        set({ books: staticBooks });
      }
    } catch (error) {
      console.error("Failed to load books:", error);
      set({ books: staticBooks });
    }
  },

  addBook: (book) => {
    try {
      const stored = localStorage.getItem("allBooks");
      const allBooks: BookFormData[] = stored ? JSON.parse(stored) : [];
      const updated = [...allBooks, book];
      localStorage.setItem("allBooks", JSON.stringify(updated));
      set({ books: updated });
    } catch (error) {
      console.error("Failed to add book:", error);
    }
  },

  updateBook: (slug, updatedData) => {
    try {
      const stored = localStorage.getItem("allBooks");
      const allBooks: BookFormData[] = stored ? JSON.parse(stored) : [];

      const updatedBooks = allBooks.map((book) => {
        const bookSlug = book.title.toLowerCase().replace(/\s+/g, "-");
        return bookSlug === slug ? { ...book, ...updatedData } : book;
      });

      localStorage.setItem("allBooks", JSON.stringify(updatedBooks));
      set({ books: updatedBooks });
    } catch (error) {
      console.error("Failed to update book:", error);
    }
  },
}));
