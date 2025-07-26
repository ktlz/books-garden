"use client";

import React from "react";
import { BookCardProps } from "@/types";
import { StarRating } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { slugify } from "@/utils";

const BookCard = ({
  title,
  author,
  rating,
  image,
  coverColor,
}: BookCardProps) => {
  const router = useRouter();
  const slug = slugify(title).replace(/\s+/g, "-");

  return (
    <div
      onClick={() => router.push(`/library/${slug}`)}
      className="relative flex flex-col justify-between p-5 rounded-xl shadow-md w-72 min-h-[360px] overflow-hidden text-white"
    >
      <div
        className="absolute inset-0 rounded-xl z-0"
        style={{
          background: `linear-gradient(to bottom, ${coverColor}, #ffffff)`,
          opacity: 0.9,
        }}
      ></div>

      <div className="relative z-10 flex flex-col gap-4 h-full">
        <div className="mx-auto">
          <Image
            src={image}
            alt={title}
            width={120}
            height={180}
            className="rounded object-contain shadow-md"
          />
        </div>
        <div className="text-center mt-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm mt-1 text-white/90">by {author}</p>
          <StarRating rating={rating} color={coverColor} className="mt-2" />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
