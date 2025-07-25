"use client";

import React from "react";
import { BookCardProps } from "@/types";
import { StarRating } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BookSmall = ({
  title,
  author,
  rating,
  image,
  coverColor,
}: BookCardProps) => {
  const router = useRouter();
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div
      onClick={() => router.push(`/library/${slug}`)}
      className="flex items-start gap-4 p-4 rounded-lg shadow-sm bg-white hover:shadow-md transition w-full max-w-sm"
    >
      <Image
        src={image}
        alt={title}
        width={80}
        height={120}
        className="rounded object-contain"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-base font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">by {author}</p>
        </div>
        <StarRating rating={rating} color={coverColor} className="mt-2" />
      </div>
    </div>
  );
};

export default BookSmall;
