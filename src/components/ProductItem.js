import React from 'react';
import QuantitySelector from './QuantitySelector';

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
            </div>
        </div>
    );
};

export default ProductItem;
