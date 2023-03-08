import React, { useState } from 'react';

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
        <div className='overflow-hidden relative'>
            <div
                className='flex transition-transform ease-out duration-1000'
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides}
            </div>
            <div className='absolute inset-0 flex items-center justify-between p-4'>
                <button
                    className='p-2 rounded-full bg-[#fff] opacity-50 hover:opacity-100 transition-opacity duration-300'
                    onClick={handlePrev}
                >
                    <svg
                        className='w-4 h-4 stroke-[3] stroke-[#1D2026] fill-none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path d='M11 1 3 9l8 8' />
                    </svg>
                </button>

                <button
                    className='p-2 rounded-full bg-[#fff] opacity-50 hover:opacity-100 transition-opacity duration-300'
                    onClick={handleNext}
                >
                    <svg
                        className='w-4 h-4 stroke-[3] stroke-[#1D2026] fill-none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path d='m2 1 8 8-8 8' />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
