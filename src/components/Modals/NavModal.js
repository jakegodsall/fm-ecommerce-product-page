import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import CloseIcon from '../../assets/icons/icon-close.svg';

const NavModal = ({ navOpen, handleNav }) => {
    return ReactDOM.createPortal(
        <React.Fragment>
            <div
                onClick={() => handleNav()}
                className={
                    navOpen
                        ? 'visible bg-[#000]/70 fixed left-0 right-0 top-0 bottom-0 transition-all duration-500 z-10'
                        : 'invisible opacity-0 fixed left-0 right-0 top-0 bottom-0 transition-all duration-1000 z-10'
                }
            ></div>
            <div
                className={
                    navOpen
                        ? 'fixed top-0 bottom-0 left-0 right-[40%] h-full bg-[#fff] p-6 opacity-100 transition-all duration-1000 z-20'
                        : 'fixed top-0 bottom-0 left-0 right-[40%] h-full bg-[#fff] p-6 opacity-100 translate-x-[-100%] transition-all duration-1000 z-20'
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
        </React.Fragment>,

        document.getElementById('nav-portal')
    );
};

export default NavModal;
