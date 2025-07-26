"use client";

import React from "react";
import { BookFormData } from "@/validations/bookSchema";
import { StarRating } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { slugify } from "@/utils";

const BookSmall = ({
  title,
  author,
  rating,
  image,
  coverColor,
}: BookFormData) => {
  const router = useRouter();
  const slug = slugify(title).replace(/\s+/g, "-");

  return (
    <div
      onClick={() => router.push(`/library/${slug}`)}
      className="flex items-start gap-4 p-4 rounded-lg shadow-sm bg-white hover:shadow-md transition cursor-pointer w-full max-w-sm"
    >
      {image && (
        <div className="w-[80px] h-[120px] rounded overflow-hidden shrink-0">
          <Image
            src={image}
            alt={title}
            width={80}
            height={120}
            className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-col justify-between h-full flex-1">
        <div className="mb-2">
          <h3 className="text-base font-semibold text-gray-800 leading-snug line-clamp-2 min-h-[2.5rem]">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mt-1 leading-tight min-h-[1.25rem]">
            by {author}
          </p>
        </div>
        <StarRating rating={rating} color={coverColor} />
      </div>
    </div>
  );
};

export default BookSmall;
