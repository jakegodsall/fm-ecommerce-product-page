import React from 'react';

import MenuIcon from '../assets/icons/icon-menu.svg';
import Logo from '../assets/icons/logo.svg';
import CartIcon from '../assets/icons/icon-cart.svg';

import DefaultAccountAvatar from '../assets/images/image-avatar.png';

const Header = () => {
    return (
        <header className='flex justify-between p-4 items-center'>
            <div className='flex'>
                <img src={MenuIcon} alt='open menu' className='mr-4 self-center' />
                <img src={Logo} alt='logo' className='' />
            </div>
            <div className='flex items-center'>
                <img src={CartIcon} alt='view cart' className='mr-4' />
                <img src={DefaultAccountAvatar} alt='default account avatar' className='w-8' />
            </div>
        </header>
    );
};

export default Header;
