import { createStore } from "zustand/vanilla";
import { BookCardProps } from "@/types";
import { books as staticBooks } from "@/constants/books";

export interface BooksStore {
  books: BookCardProps[];
  loadBooks: () => void;
  addBook: (book: BookCardProps) => void;
  updateBook: (slug: string, updatedData: Partial<BookCardProps>) => void;
  removeBook: (slug: string) => void;
}

export const booksStore = createStore<BooksStore>((set) => ({
  books: [],

  loadBooks: () => {
    if (typeof window === "undefined") return;
    try {
      const stored = localStorage.getItem("allBooks");
      if (stored) {
        const allBooks: BookCardProps[] = JSON.parse(stored);
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
      const allBooks: BookCardProps[] = stored ? JSON.parse(stored) : [];
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
      const allBooks: BookCardProps[] = stored ? JSON.parse(stored) : [];

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

  removeBook: (slug) => {
    try {
      const stored = localStorage.getItem("allBooks");
      const allBooks: BookCardProps[] = stored ? JSON.parse(stored) : [];

      const updatedBooks = allBooks.filter((book) => {
        const bookSlug = book.title.toLowerCase().replace(/\s+/g, "-");
        return bookSlug !== slug;
      });

      localStorage.setItem("allBooks", JSON.stringify(updatedBooks));
      set({ books: updatedBooks });
    } catch (error) {
      console.error("Failed to remove book:", error);
    }
  },
}));
