import React, { useState } from "react";

const ImageViewer = ({ images, thumbnails, setModalOpen }) => {
  const [current, setCurrent] = useState(0);

  const handleClick = (e) => {
    setCurrent(e.target.id);
  };

  return (
    <div className="flex flex-col gap-4">
      <img
        className="cursor-pointer rounded-lg"
        src={images[current]}
        alt={`product ${current}`}
        onClick={setModalOpen}
      />
      <div className="flex w-full justify-between">
        {thumbnails.map((thumb, idx) => {
          return (
            <img
              className={
                idx === +current
                  ? "duration-400 w-[20%] cursor-pointer rounded-lg border-[3px] border-orange opacity-50 transition-all hover:rounded-[20px] hover:border-2"
                  : "w-[20%] cursor-pointer rounded-lg border-orange transition-all duration-200 hover:rounded-[20px]"
              }
              src={thumb}
              key={idx}
              alt={`product thumbnail ${idx}`}
              id={idx}
              onClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageViewer;
