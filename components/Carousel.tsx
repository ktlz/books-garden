import React from "react";

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel = ({ children }: CarouselProps) => {
  return <div className="flex">{children}</div>;
};

export default Carousel;
