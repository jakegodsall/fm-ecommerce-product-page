import React from "react";

const Button = (props) => {
  return (
    <button className="font-bold text-white-900 bg-orange w-full p-4 my-4 rounded-md shadow-md  active:translate-y-1 transition-all duration-200">
      {props.children}
    </button>
  );
};

export default Button;
