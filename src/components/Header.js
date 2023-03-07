import React, { useState } from 'react';

import MenuIcon from '../assets/icons/icon-menu.svg';
import CloseIcon from '../assets/icons/icon-close.svg';

import Logo from '../assets/icons/logo.svg';
import CartIcon from '../assets/icons/icon-cart.svg';

import DefaultAccountAvatar from '../assets/images/image-avatar.png';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    const handleNavOpen = () => {
        setNavOpen((prevState) => !prevState);
    };

    return (
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
                <img
                    src={CartIcon}
                    alt='view cart'
                    className='mr-4 cursor-pointer md:mr-8 transition-all duration-1000'
                />
                <img
                    src={DefaultAccountAvatar}
                    alt='default account avatar'
                    className='w-8 cursor-pointer sm:w-12 transition-all duration-1000'
                />
            </div>

            <div
                className={
                    navOpen
                        ? 'visible bg-black/70 absolute left-0 right-0 top-0 bottom-0 transition-all duration-500'
                        : 'invisible opacity-0 absolute left-0 right-0 top-0 bottom-0 transition-all duration-1000'
                }
            >
                <div
                    className={
                        navOpen
                            ? 'w-[60%] h-full bg-white p-6 opacity-100 transition-all duration-1000'
                            : 'w-[60%] h-full bg-white p-6 opacity-100 translate-x-[-100%] transition-all duration-1000'
                    }
                >
                    <img
                        src={CloseIcon}
                        alt='close icon'
                        className='mb-12 cursor-pointer'
                        onClick={handleNavOpen}
                    />
                    <nav>
                        <ul className='font-bold flex flex-col gap-4'>
                            <li className='cursor-pointer'>Collections</li>
                            <li className='cursor-pointer'>Men</li>
                            <li className='cursor-pointer'>Women</li>
                            <li className='cursor-pointer'>About</li>
                            <li className='cursor-pointer'>Contact</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
