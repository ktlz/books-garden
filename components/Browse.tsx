"use client";

import React, { useState, useEffect } from "react";
import { BookSmall, Button, FilterBar } from "@/components";
import { useRouter } from "next/navigation";
import { useBooksStore } from "@/store/useBooksStore";
import { useFilteredBooks } from "@/hooks/useFilteredBooks";

const Browse = () => {
  const router = useRouter();
  const [inputText, setInputText] = useState("");
  const books = useFilteredBooks(inputText);

  const loadBooks = useBooksStore((s) => s.loadBooks);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    loadBooks();
    setReady(true);
  }, []);

  const filteredBooks = books.filter((book: any) =>
    inputText === ""
      ? true
      : book.title.toLowerCase().includes(inputText.toLowerCase())
  );

  if (!ready) return <p>Loading...</p>;

  return (
    <section className="my-16 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold">Browse</h2>
        <Button
          title="Add book"
          variant="outline"
          handleClick={() => router.push("/library/new")}
        />
      </div>

      <div className="flex gap-4">
        <form className="max-w-md mb-6">
          <div className="relative">
            <input
              type="search"
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Search by title..."
              className="w-full py-3 pl-10 pr-4 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
            </div>
          </div>
        </form>

        <FilterBar />
      </div>

      {filteredBooks.length === 0 ? (
        <p className="text-gray-500 text-sm">No results found.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredBooks.map((book: any, id: any) => (
            <BookSmall key={id} {...book} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Browse;
