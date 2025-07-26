"use client";

import { useEffect, useState } from "react";
import { useBooksStore } from "@/store/useBooksStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components";
import { slugify } from "@/utils";
import { bookSchema, BookFormData } from "@/validations/bookSchema";

type Props = {
  slug: string;
};

const EditBookPage = ({ slug }: Props) => {
  const books = useBooksStore((s) => s.books);
  const loadBooks = useBooksStore((s) => s.loadBooks);
  const updateBook = useBooksStore((s) => s.updateBook);
  const [ready, setReady] = useState(false);
  const router = useRouter();

  console.log(books);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<BookFormData>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      rating: 3,
      status: "to-read",
    },
  });

  useEffect(() => {
    loadBooks();
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const book = books.find((b) => slugify(b.title) === slug);
    if (book) {
      const normalized = {
        ...book,
        image:
          typeof book.image === "string"
            ? book.image
            : (book.image as any).src || "",
      };
      reset(normalized);
    }
  }, [ready, books, slug, reset]);

  const onSubmit = (data: BookFormData) => {
    updateBook(slug, data);
    router.push("/library");
  };

  if (!ready) return <p className="p-4">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto px-4 py-4">
      <h1 className="text-2xl font-bold mb-6">Edit Book</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title
          </label>
          <input
            id="title"
            {...register("title")}
            aria-invalid={!!errors.title}
            aria-describedby={errors.title ? "title-error" : undefined}
            placeholder="Book title"
            className="w-full border px-4 py-2 rounded"
          />
          {errors.title && (
            <p
              id="title-error"
              className="text-red-500 text-sm mt-1"
              role="alert"
            >
              {errors.title.message}
            </p>
          )}
        </div>

        {/* Author */}
        <div>
          <label htmlFor="author" className="block text-sm font-medium mb-1">
            Author
          </label>
          <input
            id="author"
            {...register("author")}
            aria-invalid={!!errors.author}
            aria-describedby={errors.author ? "author-error" : undefined}
            placeholder="Author"
            className="w-full border px-4 py-2 rounded"
          />
          {errors.author && (
            <p
              id="author-error"
              className="text-red-500 text-sm mt-1"
              role="alert"
            >
              {errors.author.message}
            </p>
          )}
        </div>

        {/* Rating */}
        <div>
          <label htmlFor="rating" className="block text-sm font-medium mb-1">
            Rating
          </label>
          <select
            id="rating"
            {...register("rating", { valueAsNumber: true })}
            aria-invalid={!!errors.rating}
            aria-describedby={errors.rating ? "rating-error" : undefined}
            className="w-full border px-4 py-2 rounded"
          >
            {[1, 2, 3, 4, 5].map((r) => (
              <option key={r} value={r}>
                {r} stars
              </option>
            ))}
          </select>
          {errors.rating && (
            <p
              id="rating-error"
              className="text-red-500 text-sm mt-1"
              role="alert"
            >
              {errors.rating.message}
            </p>
          )}
        </div>

        {/* Status */}
        <div>
          <label htmlFor="status" className="block text-sm font-medium mb-1">
            Status
          </label>
          <select
            id="status"
            {...register("status")}
            aria-invalid={!!errors.status}
            aria-describedby={errors.status ? "status-error" : undefined}
            className="w-full border px-4 py-2 rounded"
          >
            <option value="to-read">To read</option>
            <option value="reading">Reading</option>
            <option value="read">Read</option>
          </select>
          {errors.status && (
            <p
              id="status-error"
              className="text-red-500 text-sm mt-1"
              role="alert"
            >
              {errors.status.message}
            </p>
          )}
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description")}
            placeholder="Short description"
            className="w-full border px-4 py-2 rounded h-24"
          />
        </div>

        {/* Image */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium mb-1">
            Cover Image URL
          </label>
          <input
            id="image"
            {...register("image")}
            aria-invalid={!!errors.image}
            aria-describedby={errors.image ? "image-error" : undefined}
            placeholder="Cover image URL"
            className="w-full border px-4 py-2 rounded"
          />
          {errors.image && (
            <p
              id="image-error"
              className="text-red-500 text-sm mt-1"
              role="alert"
            >
              {errors.image.message}
            </p>
          )}
          {watch("image") && (
            <img
              src={watch("image")}
              alt="Cover preview"
              className="mt-2 h-32 object-cover rounded border"
            />
          )}
        </div>

        {/* Cover Color */}
        <div>
          <label
            htmlFor="coverColor"
            className="block text-sm font-medium mb-1"
          >
            Cover Color
          </label>
          <input
            id="coverColor"
            {...register("coverColor")}
            type="color"
            className="w-20 h-10 rounded border"
          />
        </div>

        <Button title="Save Changes" type="submit" variant="primary" />
      </form>
    </div>
  );
};

export default EditBookPage;
