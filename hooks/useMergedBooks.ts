"use client";

import { useEffect, useState } from "react";
import { useBooksStore } from "@/store/useBooksStore";
import { BookCardProps } from "@/types";

export function useMergedBooks(): BookCardProps[] {
  const books = useBooksStore((state) => state.books);
  const loadBooks = useBooksStore((state) => state.loadBooks);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    loadBooks();
    setReady(true);
  }, [loadBooks]);

  return ready ? books : [];
}
