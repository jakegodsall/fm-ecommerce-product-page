import React from "react";

const NavBar = () => {
  return (
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
  );
};

export default NavBar;
