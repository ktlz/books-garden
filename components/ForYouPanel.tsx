// import React from "react";
// import { Carousel, BookCard } from "@/components";
// import { books } from "@/constants/books";

// const ForYouPanel = () => {
//   return (
//     <div className="mt-24 max-w-[1440px] mx-auto">
//       <h1 className="mb-4 text-2xl font-bold">For You</h1>
//       <Carousel>
//         {books?.map((book: any, id: any) => {
//           return <BookCard key={id} {...book} />;
//         })}
//       </Carousel>
//     </div>
//   );
// };

// export default ForYouPanel;

import React from "react";
import { Carousel, BookCard } from "@/components";
import { books } from "@/constants/books";

const ForYouPanel = () => {
  return (
    <section className="mt-8 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        For You
      </h2>
      <Carousel>
        {books.map((book: any, id: any) => (
          <div className="my-2">
            <BookCard key={id} {...book} />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default ForYouPanel;
