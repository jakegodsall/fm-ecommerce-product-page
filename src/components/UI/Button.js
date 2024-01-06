import React from "react";

const Button = (props) => {
  return (
    <button className="text-white-900 my-4 w-full rounded-md bg-orange p-4 font-bold shadow-md transition-all duration-200 active:translate-y-1">
      {props.children}
    </button>
  );
};

export default Button;
