import React from "react";
import { BookCardProps } from "@/types";

const BookCard = ({ title, author, rating }: BookCardProps) => {
  return (
    <div
      className="book-card p-4 rounded-md  bg-amber-200 mr-4 blue-gradient
"
    >
      <h3>{title}</h3>
      <p>by {author}</p>
      <p>{rating}</p>
    </div>
  );
};

export default BookCard;
