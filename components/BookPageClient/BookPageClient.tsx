"use client";

import { useEffect, useState } from "react";
import { useBooksStore } from "@/store/useBooksStore";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/utils";
import { notFound } from "next/navigation";

type Props = {
  slug: string;
};

export default function BookPageClient({ slug }: Props) {
  const books = useBooksStore((s) => s.books);
  const loadBooks = useBooksStore((s) => s.loadBooks);
  const [ready, setReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    loadBooks();
    setReady(true);
  }, []);

  if (!ready) return <p className="p-4">Loading...</p>;

  const book = books.find((b) => slugify(b.title) === slug);

  // if (!book) {
  //   router.push("/404");
  //   return null;
  // }

  if (!book) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col sm:flex-row gap-6">
        <div className="relative w-44 h-64 shrink-0">
          <Image
            src={book.image}
            alt={book.title}
            fill
            className="rounded-md object-cover border border-gray-200"
          />
          <div
            className="absolute top-2 left-2 w-4 h-4 rounded-full"
            style={{ backgroundColor: book.coverColor || "#ccc" }}
            title="Cover color"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-extrabold text-gray-900">
            {book.title}
          </h1>
          <p className="text-gray-600 text-lg mt-1">by {book.author}</p>

          <div className="mt-3 flex items-center gap-1 text-yellow-500">
            {"⭐".repeat(book.rating)}
            {"☆".repeat(5 - book.rating)}
            <span className="text-gray-500 text-sm ml-2">{book.rating}/5</span>
          </div>

          {book.description && (
            <p className="mt-6 text-gray-800 leading-relaxed text-sm">
              {book.description}
            </p>
          )}

          <div className="mt-4 text-xs font-medium uppercase tracking-wide text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">
            {book.status}
          </div>

          <Link
            href={`/library/${slug}/edit`}
            className="mt-6 inline-block text-sm font-semibold text-blue-600 hover:underline hover:text-blue-800 transition"
          >
            ✏️ Edit this book
          </Link>
        </div>
      </div>
    </div>
  );
}
