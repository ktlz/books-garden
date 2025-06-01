import React from "react";
import { BookCardProps } from "@/types";
import { StarRating } from "@/components";
import Image from "next/image";

const BookSmall = ({
  title,
  author,
  rating,
  image,
  coverColor,
}: BookCardProps) => {
  return (
    <div className="flex gap-2 book-card p-4 rounded-md  mr-4 w-3xs">
      <Image
        src={image}
        alt="logo"
        width={100}
        height={200}
        className="object-fit mx-auto"
      />
      <div>
        <h3 className="text-md  font-bold">{title}</h3>
        <p className="text-sm mt-2">by {author}</p>
        <StarRating color={coverColor} rating={rating} className="mt-2" />
      </div>
    </div>
  );
};

export default BookSmall;
