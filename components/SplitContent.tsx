"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components";

const SplitContent = () => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 px-4 md:px-16 max-w-7xl mx-auto">
      {/* Library block */}
      <div className="bg-pink-100 flex flex-col justify-center items-center text-center rounded-2xl p-10 h-72 md:h-80 lg:h-96 shadow-md w-full">
        <Image
          src="/books-red.svg"
          alt="Books"
          width={200}
          height={200}
          className="object-contain mb-4"
        />
        <Button
          title="Go to library"
          handleClick={() => router.push("/library")}
          variant="outline"
        />
      </div>

      {/* Blog block */}
      <div className="bg-orange-100 flex flex-col justify-center items-center text-center rounded-2xl p-10 h-72 md:h-80 lg:h-96 shadow-md w-full">
        <Image
          src="/books-spring.svg"
          alt="Blog"
          width={200}
          height={200}
          className="object-contain mb-4"
        />
        <Button
          title="See blog"
          handleClick={() => router.push("/blog")}
          variant="outline"
        />
      </div>
    </div>
  );
};

export default SplitContent;
