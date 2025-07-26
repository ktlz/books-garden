"use client";

import React from "react";
import { StarRating } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { slugify } from "@/utils";
import { BookFormData } from "@/validations/bookSchema";

const BookCard = ({
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
      className="relative flex flex-col justify-between p-5 rounded-xl shadow-md min-h-[360px] overflow-hidden cursor-pointer"
    >
      <div
        className="absolute inset-0 rounded-xl z-0"
        style={{
          background: `linear-gradient(to bottom, ${coverColor}, #ffffff)`,
          opacity: 0.9,
        }}
      ></div>

      <div className="relative z-10 flex flex-col gap-4 h-full">
        <div className="mx-auto w-[120px] h-[180px]">
          {image && (
            <Image
              src={image}
              alt={title}
              width={120}
              height={180}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="text-center flex flex-col justify-between flex-1">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold leading-tight min-h-[2.5rem] line-clamp-2">
              {title}
            </h3>
            <p className="text-sm min-h-[1.25rem]">{author}</p>
          </div>

          <StarRating
            rating={rating}
            color={coverColor}
            className="mt-2 justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
