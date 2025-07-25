"use client";

import React, { useState, useEffect } from "react";
import { Carousel, BookCard } from "@/components";
import { useBooksStore } from "@/store/useBooksStore";

const ForYouPanel = () => {
  const books = useBooksStore((s) => s.books);
  const loadBooks = useBooksStore((s) => s.loadBooks);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    loadBooks();
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <section className="mt-8 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        For You
      </h2>
      <Carousel>
        {books.map((book: any, id: any) => (
          <div className="my-2">
            <BookCard key={id} {...book} />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default ForYouPanel;
