"use client";

import { useEffect, useState } from "react";
import { useBooksStore } from "@/store/useBooksStore";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  slug: string;
};

export default function BookPageClient({ slug }: Props) {
  const { books, loadBooks } = useBooksStore((state) => ({
    books: state.books,
    loadBooks: state.loadBooks,
  }));
  const [ready, setReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    loadBooks();
    setReady(true);
  }, []);

  if (!ready) return <p className="px-4 py-10">Loading...</p>;

  const book = books.find(
    (b) => b.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!book) {
    router.push("/404");
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex flex-col sm:flex-row gap-6">
        {book.image && (
          <Image
            src={book.image}
            alt={book.title}
            width={180}
            height={270}
            className="rounded shadow-md"
          />
        )}
        <div>
          <h1 className="text-3xl font-bold">{book.title}</h1>
          <p className="text-lg text-gray-700 mt-2">by {book.author}</p>
          <p className="mt-4 text-gray-800 leading-relaxed">
            {book.description}
          </p>
        </div>
      </div>
    </div>
  );
}
