import React from 'react';

import CloseIcon from '../assets/icons/icon-close.svg';

const NavbarOverlay = () => {
    return (
        <div className='absolute left-0 right-0 top-0 bottom-0 bg-red-400'>
            <div className='w-[60%] h-full bg-white p-6'>
                <img src={CloseIcon} alt='close icon' className='mb-12 cursor-pointer' />
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
    );
};

export default NavbarOverlay;
