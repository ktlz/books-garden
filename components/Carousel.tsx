"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CarouselProps = {
  children: React.ReactNode;
};

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full group">
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-xl text-gray-700 shadow-md hover:bg-white hover:text-black hover:scale-105 transition-all duration-200 opacity-0 group-hover:opacity-100"
        aria-label="Previous"
      >
        ‹
      </button>

      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-xl text-gray-700 shadow-md hover:bg-white hover:text-black hover:scale-105 transition-all duration-200 opacity-0 group-hover:opacity-100"
        aria-label="Next"
      >
        ›
      </button>

      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default Carousel;
