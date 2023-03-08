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
                    className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
                    onClick={handlePrev}
                >
                    <svg className='w-4 h-4' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M11 1 3 9l8 8' stroke='#1D2026' strokeWidth='3' fill='none' />
                    </svg>
                </button>

                <button
                    className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
                    onClick={handleNext}
                >
                    <svg className='w-4 h-4' xmlns='http://www.w3.org/2000/svg'>
                        <path d='m2 1 8 8-8 8' stroke='#1D2026' strokeWidth='3' fill='none' />
                    </svg>
                </button>
            </div>

            <div className=''>
                <div className='flex items-center justify-center gap-2'>
                    {slides.map((_, idx) => (
                        <div
                            className={`transition-all w-3 h-3 bg-black rounded-full ${
                                current === idx ? 'p-2' : 'bg-opacity-50'
                            }`}
                            key={idx}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
