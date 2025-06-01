import React from "react";
import { Carousel, BookCard } from "@/components";
import { books } from "@/constants/books";

const ForYouPanel = () => {
  return (
    <div className="mt-24 max-w-[1440px] mx-auto">
      <h1 className="mb-4 text-2xl font-bold">For You</h1>
      <Carousel>
        {books?.map((book: any, id: any) => {
          return <BookCard key={id} {...book} />;
        })}
      </Carousel>
    </div>
  );
};

export default ForYouPanel;
