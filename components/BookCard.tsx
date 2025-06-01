import React from "react";
import { BookCardProps } from "@/types";
import { StarRating } from "@/components";
import Image from "next/image";

const BookCard = ({
  title,
  author,
  rating,
  image,
  coverColor,
}: BookCardProps) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(180deg, ${coverColor}, rgba(255, 245, 245, 1))`,
  };

  return (
    <div
      className="flex gap-2 book-card p-4 rounded-md  bg-amber-200 mr-4 w-xs"
      style={gradientStyle}
    >
      <Image
        src={image}
        alt="logo"
        width={150}
        height={250}
        className="object-fit mx-auto"
      />
      <div>
        <h3 className="text-lg text-white font-bold">{title}</h3>
        <p className="text-sm mt-2 text-white">by {author}</p>
        <StarRating rating={rating} color={coverColor} className="mt-2" />
      </div>
    </div>
  );
};

export default BookCard;
