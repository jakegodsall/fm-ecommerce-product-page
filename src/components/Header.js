import React, { useState } from 'react';

import NavModal from './Modals/NavModal';
import CartModal from './Modals/CartModal';

import MenuIcon from '../assets/icons/icon-menu.svg';
import Logo from '../assets/icons/logo.svg';
import CartIcon from '../assets/icons/icon-cart.svg';

import DefaultAccountAvatar from '../assets/images/image-avatar.png';

const Header = (props) => {
    const [navOpen, setNavOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);

    const handleNavOpen = () => {
        setNavOpen((prevState) => !prevState);
    };

    const handleCartOpen = () => {
        setCartOpen((prevState) => !prevState);
    };

    return (
        <div className='relative'>
            <header className='flex justify-between items-center p-4 md:p-0 md:border-b-[1px] md:border-[#c0c0c1]'>
                <div className='flex items-center'>
                    <img
                        src={MenuIcon}
                        alt='open menu'
                        className='mr-8 self-center cursor-pointer sm:hidden'
                        onClick={handleNavOpen}
                    />
                    <img src={Logo} alt='logo' className='cursor-pointer' />
                    <nav className='hidden sm:block h-full mx-8 md:mx-16 transition-all duration-1000'>
                        <ul className='flex self-center gap-8 text-sm cursor-pointer text-[#b6bcc8]'>
                            <li className='py-8 active:text-[#000] hover:text-[#000] border-b-4 border-opacity-0 border-orange hover:border-opacity-100 transition-all duration-500'>
                                Collections
                            </li>
                            <li className='py-8 active:text-[#000] hover:text-[#000] border-b-4 border-opacity-0 border-orange hover:border-opacity-100 transition-all duration-500'>
                                Men
                            </li>
                            <li className='py-8 active:text-[#000] hover:text-[#000] border-b-4 border-opacity-0 border-orange hover:border-opacity-100 transition-all duration-500'>
                                Women
                            </li>
                            <li className='py-8 active:text-[#000] hover:text-[#000] border-b-4 border-opacity-0 border-orange hover:border-opacity-100 transition-all duration-500'>
                                About
                            </li>
                            <li className='py-8 active:text-[#000] hover:text-[#000] border-b-4 border-opacity-0 border-orange hover:border-opacity-100 transition-all duration-500'>
                                Contact
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='flex items-center'>
                    <div
                        className={
                            +props.quantitySelected === 0
                                ? 'opacity-0'
                                : 'opacity-1 relative -top-3 left-8 text-xs text-[#fff] bg-orange box-border rounded-full px-2 transition-opacity duration-300'
                        }
                    >
                        {props.quantitySelected}
                    </div>
                    <img
                        src={CartIcon}
                        alt='view cart'
                        className='mr-8 cursor-pointer md:mr-8 transition-all duration-1000'
                        onClick={() => setCartOpen((prevState) => !prevState)}
                    />
                    <img
                        src={DefaultAccountAvatar}
                        alt='default account avatar'
                        className='w-8 cursor-pointer sm:w-12 transition-all duration-300 hover:border-2 border-orange rounded-full'
                    />
                </div>
                <NavModal
                    navOpen={navOpen}
                    handleNav={() => setNavOpen((prevState) => !prevState)}
                />
            </header>
            <CartModal
                cartOpen={cartOpen}
                quantitySelected={props.quantitySelected}
                title={props.title}
                discountedPrice={props.discountedPrice}
                thumbnail={props.thumbnail}
                removeFromCart={props.removeFromCart}
                handleCartOpen={handleCartOpen}
            />
        </div>
    );
};

export default Header;
