import React, { useState } from 'react';

import NavModal from './NavModal';

import MenuIcon from '../assets/icons/icon-menu.svg';

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
            <NavModal navOpen={navOpen} handleNav={() => setNavOpen((prevState) => !prevState)} />
        </header>
    );
};

export default Header;
