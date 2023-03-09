import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../UI/Button';

const CartModal = (props) => {
    return ReactDOM.createPortal(
        <div className='absolute top-20 left-2 right-2 bg-[#fff] rounded-md'>
            <p>Cart</p>
            <div className='p-4'>
                <div>
                    <img
                        className='w-16 h-16 rounded-md'
                        src={props.thumbnail}
                        alt='selected product'
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
