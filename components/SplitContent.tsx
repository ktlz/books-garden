"use client";

import React from "react";
import { Button } from "@/components";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SplitContent = () => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/library");
  };
  return (
    <div className="w-full grid grid-cols-2 split-content">
      <div className="bg-light-pink flex flex-col justify-center items-center gap-4">
        <Image
          src="/books-red.svg"
          alt="logo"
          width={200}
          height={200}
          className="object-contain mx-auto"
        />
        <Button
          title="Go to library"
          handleClick={handleNavigation}
          containerStyles="border-solid border-1 border-black rounded-sm mx-auto"
        />
      </div>
      <div className="bg-orange flex flex-col justify-center items-center gap-4">
        <Image
          src="/books-spring.svg"
          alt="logo"
          width={200}
          height={200}
          className="object-contain"
        />
        <Button
          title="See blog"
          handleClick={handleNavigation}
          containerStyles="border-solid border-1 border-black rounded-sm mx-auto"
        />
      </div>
    </div>
  );
};

export default SplitContent;
