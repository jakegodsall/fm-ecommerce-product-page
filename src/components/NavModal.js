import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import CloseIcon from '../assets/icons/icon-close.svg';

const NavModal = ({ navOpen, handleNav }) => {
    return ReactDOM.createPortal(
        <div
            className={
                navOpen
                    ? 'visible bg-[#000]/70 absolute left-0 right-0 top-0 bottom-0 transition-all duration-500 z-10'
                    : 'invisible opacity-0 absolute left-0 right-0 top-0 bottom-0 transition-all duration-1000 z-10'
            }
        >
            <div
                className={
                    navOpen
                        ? 'w-[60%] h-full bg-[#fff] p-6 opacity-100 transition-all duration-1000'
                        : 'w-[60%] h-full bg-[#fff] p-6 opacity-100 translate-x-[-100%] transition-all duration-1000'
                }
            >
                <img
                    src={CloseIcon}
                    alt='close icon'
                    className='mb-12 cursor-pointer'
                    onClick={() => handleNav()}
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
        </div>,
        document.getElementById('nav-portal')
    );
};

export default NavModal;
