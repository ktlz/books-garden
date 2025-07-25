"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components";
import { useBooksStore } from "@/store/useBooksStore";

type FormData = {
  title: string;
  author: string;
  rating: number;
  status: string;
  description: string;
  image: string;
  coverColor: string;
};

const AddBookPage = () => {
  const router = useRouter();
  const addBook = useBooksStore((state) => state.addBook);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: "",
      author: "",
      rating: 3,
      status: "to-read",
      description: "",
      image: "",
      coverColor: "#cccccc",
    },
  });

  const onSubmit = (data: FormData) => {
    addBook(data);
    router.push("/library");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">📚 Add a New Book</h1>

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
          {...register("image", { required: true })}
          placeholder="Cover image URL"
          className="w-full border px-4 py-2 rounded"
        />
        {errors.image && (
          <p className="text-red-500 text-sm">Image URL is required</p>
        )}

        <Button title="Add Book" type="submit" variant="primary" />
      </form>
    </div>
  );
};

export default AddBookPage;
