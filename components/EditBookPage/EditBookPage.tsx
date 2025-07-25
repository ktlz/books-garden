"use client";

import { useEffect, useState } from "react";
import { useBooksStore } from "@/store/useBooksStore";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components";
import { BookCardProps } from "@/types";

type Props = {
  slug: string;
};

const EditBookPage = ({ slug }: Props) => {
  const books = useBooksStore((s) => s.books);
  const loadBooks = useBooksStore((s) => s.loadBooks);
  const updateBook = useBooksStore((s) => s.updateBook);
  const [ready, setReady] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookCardProps>();

  useEffect(() => {
    loadBooks();
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const book = books.find(
      (b) => b.title.toLowerCase().replace(/\s+/g, "-") === slug
    );
    if (book) {
      reset(book);
    }
  }, [ready, books, slug, reset]);

  const onSubmit = (data: BookCardProps) => {
    updateBook(slug, data);
    router.push(`/library`);
  };

  if (!ready) return <p className="p-4">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">✏️ Edit Book</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <input
          {...register("title", { required: true })}
          placeholder="Book title"
          className="w-full border px-4 py-2 rounded"
        />
        {errors.title && (
          <p className="text-red-500 text-sm">Title is required</p>
        )}

        <input
          {...register("author", { required: true })}
          placeholder="Author"
          className="w-full border px-4 py-2 rounded"
        />
        {errors.author && (
          <p className="text-red-500 text-sm">Author is required</p>
        )}

        <select
          {...register("rating", { valueAsNumber: true })}
          className="w-full border px-4 py-2 rounded"
        >
          {[1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>
              {r} stars
            </option>
          ))}
        </select>

        <select
          {...register("status")}
          className="w-full border px-4 py-2 rounded"
        >
          <option value="to-read">To read</option>
          <option value="reading">Reading</option>
          <option value="read">Read</option>
        </select>

        <textarea
          {...register("description")}
          placeholder="Short description"
          className="w-full border px-4 py-2 rounded h-24"
        />

        <input
          {...register("image")}
          placeholder="Cover image URL"
          className="w-full border px-4 py-2 rounded"
        />

        <input
          {...register("coverColor")}
          type="color"
          className="w-20 h-10 rounded border"
        />

        <Button title="Save Changes" type="submit" variant="primary" />
      </form>
    </div>
  );
};

export default EditBookPage;
