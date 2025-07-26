"use client";

import React, { useState, useEffect } from "react";
import { Carousel, BookCard } from "@/components";
import { useBooksStore } from "@/store/useBooksStore";
import { motion } from "framer-motion";

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
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">For You</h2>
      <Carousel>
        {books.map((book: any, id: any) => (
          <motion.div
            key={id}
            className="px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: id * 0.05, duration: 0.4 }}
          >
            <BookCard {...book} />
          </motion.div>
        ))}
      </Carousel>
    </section>
  );
};

export default ForYouPanel;
