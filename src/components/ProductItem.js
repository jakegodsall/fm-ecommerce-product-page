import React from 'react';

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
                <div>
                    <div className='flex'>
                        <p>{formatToCurrency(currentPrice)}</p>
                        <p>{formatToPercentage(props.data.discount)}</p>
                    </div>
                    <p>{formatToCurrency(props.data.price)}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
