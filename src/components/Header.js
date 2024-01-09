import React, { useState } from "react";

import NavModal from "./Modals/NavModal";
import CartModal from "./Modals/CartModal";

import MenuIcon from "../assets/icons/icon-menu.svg";
import Logo from "../assets/icons/logo.svg";
import CartIcon from "../assets/icons/icon-cart.svg";

import DefaultAccountAvatar from "../assets/images/image-avatar.png";

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
    <div className="relative">
      <header className="flex items-center justify-between p-4 md:border-b-[1px] md:border-[#c0c0c1] md:p-0">
        <div className="flex items-center">
          <img
            src={MenuIcon}
            alt="open menu"
            className="mr-8 cursor-pointer self-center sm:hidden"
            onClick={handleNavOpen}
          />
          <img src={Logo} alt="logo" className="cursor-pointer" />
          <nav className="mx-8 hidden h-full transition-all duration-1000 sm:block md:mx-16">
            <ul className="flex cursor-pointer gap-8 self-center text-sm text-[#b6bcc8]">
              <li className="border-b-4 border-orange border-opacity-0 py-8 transition-all duration-500 hover:border-opacity-100 hover:text-[#000] active:text-[#000]">
                Collections
              </li>
              <li className="border-b-4 border-orange border-opacity-0 py-8 transition-all duration-500 hover:border-opacity-100 hover:text-[#000] active:text-[#000]">
                Men
              </li>
              <li className="border-b-4 border-orange border-opacity-0 py-8 transition-all duration-500 hover:border-opacity-100 hover:text-[#000] active:text-[#000]">
                Women
              </li>
              <li className="border-b-4 border-orange border-opacity-0 py-8 transition-all duration-500 hover:border-opacity-100 hover:text-[#000] active:text-[#000]">
                About
              </li>
              <li className="border-b-4 border-orange border-opacity-0 py-8 transition-all duration-500 hover:border-opacity-100 hover:text-[#000] active:text-[#000]">
                Contact
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center">
          <div
            className={
              +props.quantitySelected === 0
                ? "opacity-0"
                : "opacity-1 relative -top-3 left-8 box-border rounded-full bg-orange px-2 text-xs text-[#fff] transition-opacity duration-300"
            }
          >
            {props.quantitySelected}
          </div>
          <img
            src={CartIcon}
            alt="view cart"
            className="mr-8 cursor-pointer transition-all duration-1000 md:mr-8"
            onClick={() => setCartOpen((prevState) => !prevState)}
          />
          <img
            src={DefaultAccountAvatar}
            alt="default account avatar"
            className="w-8 cursor-pointer rounded-full border-orange transition-all duration-300 hover:border-2 sm:w-12"
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
