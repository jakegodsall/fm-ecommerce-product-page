import React from "react";
import ReactDOM from "react-dom";

import Button from "../UI/Button";

import CloseIcon from "../../assets/icons/icon-close.svg";
import DeleteIcon from "../../assets/icons/icon-delete.svg";

import { formatToCurrency } from "../../utilities/numberUtilities";

const CartModal = (props) => {
  const formattedPrice = formatToCurrency(props.discountedPrice);
  const formattedTotal = formatToCurrency(
    props.discountedPrice * props.quantitySelected,
  );

  return ReactDOM.createPortal(
    <React.Fragment>
      <div
        className={
          props.cartOpen
            ? "opacity-1 fixed top-20 bottom-0 left-0 right-0"
            : "opacity-0"
        }
        onClick={() => props.handleCartOpen()}
      ></div>

      <div
        className={
          props.cartOpen
            ? "opacity-1 absolute top-20 left-2 right-2 h-[260px] translate-y-0 rounded-md bg-[#fff] shadow-2xl [transition:opacity_1s,transform_.1s] md:left-auto md:right-[10%] md:min-w-[302px]"
            : "absolute top-20 left-2 right-2 -translate-y-[350px] rounded-md bg-[#fff] opacity-0 shadow-2xl ease-in-out [transition:opacity_.5s,transform_.5s] md:left-auto md:right-[10%] md:min-w-[302px]"
        }
      >
        <div className="flex items-center justify-between border-b-[1px] border-[#cdd0d7]">
          <p className="p-4  font-bold ">Cart</p>
          <img
            src={CloseIcon}
            alt="close cart"
            className="mr-4 cursor-pointer"
            onClick={() => props.handleCartOpen()}
          />
        </div>
        {props.quantitySelected === 0 && (
          <div className="flex h-[200px] w-full flex-col items-center justify-center">
            <p className="font-bold text-[#78797c]">Your cart is empty.</p>
          </div>
        )}
        {props.quantitySelected !== 0 && (
          <div className="flex flex-col items-center p-4">
            <div className="flex w-full items-center gap-2">
              <img
                className="h-14 w-14 rounded-md"
                src={props.thumbnail}
                alt="selected product"
              />
              <div className="my-4">
                <p className="text-sm capitalize text-[#9b9ea6]">
                  {props.title}
                </p>
                <p className="text-sm font-bold leading-8 text-[#000]">
                  <span className="mr-4 font-normal text-[#9b9ea6]">{`${formattedPrice} x ${props.quantitySelected}`}</span>
                  {`${formattedTotal}`}
                </p>
              </div>
              <img
                src={DeleteIcon}
                alt="remove from cart"
                className="ml-auto cursor-pointer"
                onClick={() => props.removeFromCart()}
              />
            </div>

            <Button>
              <p className="text-[#fff]">Checkout</p>
            </Button>
          </div>
        )}
      </div>
    </React.Fragment>,
    document.getElementById("cart-portal"),
  );
};

export default CartModal;
