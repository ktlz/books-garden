"use client";

import React from "react";
import { Button } from "@/components";
import { useRouter } from "next/navigation";

const SplitContent = () => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/library");
  };
  return (
    <div className="w-full grid grid-cols-2 h-inherit">
      <div className="bg-light-pink">
        1
        <Button
          title="Go to library"
          handleClick={handleNavigation}
          containerStyles="border-solid border-1 border-black rounded-sm mt-4"
        />
      </div>
      <div className="bg-orange">2</div>
    </div>
  );
};

export default SplitContent;
