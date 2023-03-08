import React from 'react';
import QuantitySelector from './QuantitySelector';
import Button from './UI/Button';

const ProductItem = (props) => {
    console.log(props.data);

    const formatToCurrency = (value) => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        return formatter.format(value);
    };

    const formatToPercentage = (value) => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'percent',
        });

        return formatter.format(value);
    };

    const currentPrice = props.data.price * props.data.discount;

    return (
        <div className='flex flex-col'>
            <div className='p-4'>
                <p className='uppercase text-orange font-bold text-xs tracking-widest mb-2'>
                    {props.data.brand}
                </p>
                <h1 className='capitalize text-3xl font-bold'>{props.data.title}</h1>
                <p className='text-md leading-6 text-[#68707d] my-4'>{props.data.description}</p>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-4 items-center'>
                        <p className='font-bold text-2xl'>{formatToCurrency(currentPrice)}</p>
                        <p className='font-bold text-orange bg-pale-orange px-2 rounded-sm'>
                            {formatToPercentage(props.data.discount)}
                        </p>
                    </div>
                    <p className='text-[#b6bcc8] line-through'>
                        {formatToCurrency(props.data.price)}
                    </p>
                </div>
                <QuantitySelector />
                <Button>
                    <div className='flex justify-center gap-4 items-center'>
                        <svg
                            className='w-[22px] h-[20px]'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='#ffede0'
                        >
                            <path d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z' />
                        </svg>
                        <p className='text-[#ffede0]'>Add to cart</p>
                    </div>
                </Button>
            </div>
        </div>
    );
};

export default ProductItem;
