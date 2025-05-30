import React from "react";
import { Carousel, BookCard } from "@/components";
import topBooks from "@/constants/topBooks.json";

const ForYouPanel = () => {
  return (
    <div className="mt-32 max-w-[1440px] mx-auto">
      <h1 className="mb-8">For You</h1>
      <Carousel>
        {topBooks.books?.map((book, id) => {
          return (
            <BookCard
              key={id}
              title={book.title}
              author={book.author}
              rating={book.rating}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default ForYouPanel;
