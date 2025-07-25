import { createStore } from "zustand/vanilla";
import { BookCardProps } from "@/types";
import { books as staticBooks } from "@/constants/books";

interface BooksStore {
  books: BookCardProps[];
  loadBooks: () => void;
  addBook: (book: BookCardProps) => void;
}

export const booksStore = createStore<BooksStore>((set) => ({
  books: [],

  loadBooks: () => {
    if (typeof window === "undefined") return;

    try {
      const stored = localStorage.getItem("customBooks");
      const customBooks = stored ? JSON.parse(stored) : [];
      set({ books: [...staticBooks, ...customBooks] });
    } catch (error) {
      console.error("Failed to load custom books:", error);
      set({ books: staticBooks });
    }
  },

  addBook: (book) => {
    try {
      const stored = localStorage.getItem("customBooks");
      const customBooks = stored ? JSON.parse(stored) : [];
      const updated = [...customBooks, book];
      localStorage.setItem("customBooks", JSON.stringify(updated));
      set((state) => ({ books: [...state.books, book] }));
    } catch (error) {
      console.error("Failed to add book:", error);
    }
  },
}));
