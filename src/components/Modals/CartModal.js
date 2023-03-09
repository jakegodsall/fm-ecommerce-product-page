import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../UI/Button';

import { formatToCurrency } from '../../utilities/numberUtilities';

const CartModal = (props) => {
    const formattedPrice = formatToCurrency(props.discountedPrice);
    const formattedTotal = formatToCurrency(props.discountedPrice * props.quantitySelected);

    console.log();

    return ReactDOM.createPortal(
        <div className='absolute top-20 left-2 right-2 bg-[#fff] rounded-md'>
            <p>Cart</p>
            <div className='p-4'>
                <div className='flex items-center'>
                    <img
                        className='w-14 h-14 rounded-md mr-2'
                        src={props.thumbnail}
                        alt='selected product'
                    />
                    <div className='my-4'>
                        <p className='capitalize text-sm text-[#9b9ea6]'>{props.title}</p>
                        <p className='text-sm font-bold text-[#000] leading-8'>
                            <span className='text-[#9b9ea6] mr-4 font-normal'>{`${formattedPrice} x ${props.quantitySelected}`}</span>
                            {`${formattedTotal}`}
                        </p>
                    </div>
                </div>
                <Button>
                    <p className='text-[#fff]'>Checkout</p>
                </Button>
            </div>
        </div>,
        document.getElementById('cart-portal')
    );
};

export default CartModal;
