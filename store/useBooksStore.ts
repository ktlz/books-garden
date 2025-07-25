"use client";

import { useStore } from "zustand";
import { booksStore, BooksStore } from "./booksStore";

export const useBooksStore = <T>(selector: (state: BooksStore) => T): T =>
  useStore(booksStore, selector);
