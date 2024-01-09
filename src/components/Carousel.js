import React, { useState } from "react";

const Carousel = ({ children: slides }) => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prevState) => {
      if (prevState === 0) {
        return slides.length - 1;
      } else {
        return (prevState -= 1);
      }
    });
  };

  const handleNext = () => {
    setCurrent((prevState) => {
      if (prevState === slides.length - 1) {
        return 0;
      } else {
        return (prevState += 1);
      }
    });
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          className="rounded-full bg-[#fff] p-2 opacity-50 transition-opacity duration-300 hover:opacity-100"
          onClick={handlePrev}
        >
          <svg
            className="h-4 w-4 fill-none stroke-[#1D2026] stroke-[3]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 1 3 9l8 8" />
          </svg>
        </button>

        <button
          className="rounded-full bg-[#fff] p-2 opacity-50 transition-opacity duration-300 hover:opacity-100"
          onClick={handleNext}
        >
          <svg
            className="h-4 w-4 fill-none stroke-[#1D2026] stroke-[3]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m2 1 8 8-8 8" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
