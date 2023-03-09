import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../UI/Button';

import DeleteIcon from '../../assets/icons/icon-delete.svg';

import { formatToCurrency } from '../../utilities/numberUtilities';

const CartModal = (props) => {
    const formattedPrice = formatToCurrency(props.discountedPrice);
    const formattedTotal = formatToCurrency(props.discountedPrice * props.quantitySelected);

    console.log();

    return ReactDOM.createPortal(
        <div
            className={
                props.isOpen
                    ? 'opacity-1 absolute top-20 left-2 right-2 bg-[#fff] rounded-md transition-all duration-1000 ease-in-out translate-y-0'
                    : 'opacity-0 -translate-y-8 duration-1000 transition-all'
            }
        >
            <p>Cart</p>
            <div className='p-4'>
                <div className='flex items-center gap-2'>
                    <img
                        className='w-14 h-14 rounded-md'
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
                    <img
                        src={DeleteIcon}
                        alt='remove from cart'
                        className='cursor-pointer'
                        onClick={() => props.removeFromCart()}
                    />
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
