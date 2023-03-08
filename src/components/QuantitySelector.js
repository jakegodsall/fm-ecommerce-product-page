import React, { useState } from 'react';

import PlusIcon from '../assets/icons/icon-plus.svg';
import MinusIcon from '../assets/icons/icon-minus.svg';

const QuantitySelector = (props) => {
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity((prevState) => (prevState += 1));
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity((prevState) => (prevState -= 1));
        }
    };

    return (
        <div className='flex justify-between items-center bg-[#f7f8fd] rounded-lg'>
            <img
                src={MinusIcon}
                alt='minus'
                onClick={handleDecrement}
                className='cursor-pointer px-4 py-6'
            />
            <input type='text' className='hidden' readOnly min='0' value={quantity} id='quantity' />
            <p>{quantity}</p>
            <img
                src={PlusIcon}
                alt='plus'
                onClick={handleIncrement}
                className='cursor-pointer px-4 py-6'
            />
        </div>
    );
};

export default QuantitySelector;
