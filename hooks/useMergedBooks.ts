"use client";

import { useEffect, useState } from "react";
import { books as defaultBooks } from "@/constants/books";
import { BookCardProps } from "@/types";

export function useMergedBooks(): BookCardProps[] {
  const [mergedBooks, setMergedBooks] = useState<BookCardProps[]>(defaultBooks);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("customBooks");
      const customBooks: BookCardProps[] = stored ? JSON.parse(stored) : [];
      setMergedBooks([...defaultBooks, ...customBooks]);
    } catch (err) {
      console.error("Error loading customBooks from localStorage", err);
    }
  }, []);

  return mergedBooks;
}
