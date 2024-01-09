import React, { useState } from "react";

const ImageViewer = (props) => {
  const [current, setCurrent] = useState(0);

  const handleClick = (e) => {
    setCurrent(e.target.id);
  };

  return (
    <div className="flex flex-col gap-4">
      <img
        className="cursor-pointer rounded-lg"
        src={props.images[current]}
        alt={`product ${current}`}
        onClick={props.setModalOpen}
      />
      <div className="flex w-full justify-between">
        {props.thumbnails.map((thumb, idx) => {
          return (
            <img
              className={
                idx === +current
                  ? "w-1/5 cursor-pointer rounded-lg border-2 border-orange opacity-50 transition-opacity duration-300"
                  : "w-1/5 cursor-pointer rounded-lg"
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
