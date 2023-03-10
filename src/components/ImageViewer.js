import React, { useState } from 'react';

const ImageViewer = (props) => {
    const [current, setCurrent] = useState(0);

    const handleClick = (e) => {
        setCurrent(e.target.id);

        console.log(e.target.id);
    };

    return (
        <div className='flex flex-col gap-4'>
            <img
                className='rounded-lg cursor-pointer'
                src={props.images[current]}
                alt={`product ${current}`}
                onClick={props.setModalOpen}
            />
            <div className='flex justify-between w-full'>
                {props.thumbnails.map((thumb, idx) => {
                    console.log(idx, current, idx === +current);
                    return (
                        <img
                            className={
                                idx === +current
                                    ? 'rounded-lg w-1/5 cursor-pointer border-orange border-2 opacity-50 transition-opacity duration-300'
                                    : 'rounded-lg w-1/5 cursor-pointer'
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
