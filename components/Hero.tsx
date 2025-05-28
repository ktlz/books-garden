"use client";

import { Button, SplitContent } from "@/components";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Hero = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/library");
  };
  return (
    <div className="hero mt-32 w-full h-screen">
      <div className="max-w-[1440px] mx-auto flex flex-col text-center">
        <h1 className="hero__title max-w-[600px] mb-16">
          Discover a world beyond imagination. Dive into our garden of
          stories—your next great read awaits.
        </h1>
        {/* <Button
          title="Go to library"
          handleClick={handleNavigation}
          containerStyles="bg-white rounded-full mt-4"
        /> */}
      </div>
      <SplitContent />
    </div>
  );
};

export default Hero;
