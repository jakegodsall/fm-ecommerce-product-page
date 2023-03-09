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
            <header className='flex justify-between p-4 items-center'>
                <div className='flex'>
                    <img
                        src={MenuIcon}
                        alt='open menu'
                        className='mr-4 self-center cursor-pointer sm:hidden'
                        onClick={handleNavOpen}
                    />
                    <img src={Logo} alt='logo' className='' />
                    <nav className='hidden sm:block mx-8 md:mx-16 transition-all duration-1000'>
                        <ul className='flex self-center gap-4 text-sm cursor-pointer'>
                            <li>Collections</li>
                            <li>Men</li>
                            <li>Women</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                </div>
                <div className='flex items-center'>
                    <div
                        className={
                            +props.quantitySelected === 0
                                ? 'opacity-0'
                                : 'opacity-1 relative -top-3 left-8 text-xs text-[#fff] bg-orange rounded-full px-2 transition-opacity duration-300'
                        }
                    >
                        {props.quantitySelected}
                    </div>
                    <img
                        src={CartIcon}
                        alt='view cart'
                        className='mr-4 cursor-pointer md:mr-8 transition-all duration-1000'
                        onClick={() => setCartOpen((prevState) => !prevState)}
                    />
                    <img
                        src={DefaultAccountAvatar}
                        alt='default account avatar'
                        className='w-8 cursor-pointer sm:w-12 transition-all duration-1000'
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
