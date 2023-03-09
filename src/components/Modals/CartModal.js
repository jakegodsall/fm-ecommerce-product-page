import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../UI/Button';

import CloseIcon from '../../assets/icons/icon-close.svg';
import DeleteIcon from '../../assets/icons/icon-delete.svg';

import { formatToCurrency } from '../../utilities/numberUtilities';

const CartModal = (props) => {
    const formattedPrice = formatToCurrency(props.discountedPrice);
    const formattedTotal = formatToCurrency(props.discountedPrice * props.quantitySelected);

    console.log();

    return ReactDOM.createPortal(
        <React.Fragment>
            <div
                className={
                    props.cartOpen ? 'fixed top-20 bottom-0 left-0 right-0 opacity-1' : 'opacity-0'
                }
                onClick={() => props.handleCartOpen()}
            ></div>

            <div
                className={
                    props.cartOpen
                        ? 'opacity-1 absolute top-20 left-2 right-2 md:left-auto md:right-[10%] md:min-w-[302px] bg-[#fff] rounded-md transition-all duration-1000 ease-in-out translate-y-0 h-[260px] shadow-2xl'
                        : 'opacity-0 absolute top-20 left-2 right-2 md:left-auto md:right-[10%] md:min-w-[302px] bg-[#fff] rounded-md transition-all duration-1000 ease-in-out -translate-y-8 shadow-2xl'
                }
            >
                <div className='flex justify-between items-center border-b-[1px] border-[#cdd0d7]'>
                    <p className='p-4  font-bold '>Cart</p>
                    <img
                        src={CloseIcon}
                        alt='close cart'
                        className='mr-4 cursor-pointer'
                        onClick={() => props.handleCartOpen()}
                    />
                </div>
                {props.quantitySelected === 0 && (
                    <div className='w-full h-[200px] flex flex-col items-center justify-center'>
                        <p className='text-[#78797c] font-bold'>Your cart is empty.</p>
                    </div>
                )}
                {props.quantitySelected !== 0 && (
                    <div className='flex flex-col items-center p-4'>
                        <div className='w-full flex items-center gap-2'>
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
                                className='cursor-pointer ml-auto'
                                onClick={() => props.removeFromCart()}
                            />
                        </div>

                        <Button>
                            <p className='text-[#fff]'>Checkout</p>
                        </Button>
                    </div>
                )}
            </div>
        </React.Fragment>,
        document.getElementById('cart-portal')
    );
};

export default CartModal;
