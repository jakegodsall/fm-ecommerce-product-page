import React from "react";

import {
  formatToCurrency,
  formatToPercentage,
} from "../utilities/numberUtilities";

import PurchaseForm from "./PurchaseForm";

const ProductDetails = ({
  brand,
  title,
  description,
  discount,
  price,
  handleFormSubmission,
}) => {
  const currentPrice = price - price * discount;

  const onSubmit = (value) => {
    handleFormSubmission(value);
  };

  return (
    <div className="p-4 md:max-w-[500px]">
      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-orange">
        {brand}
      </p>
      <h1 className="text-3xl font-bold capitalize">{title}</h1>
      <p className="text-md my-4 leading-6 text-[#68707d]">{description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <p className="text-2xl font-bold">{formatToCurrency(currentPrice)}</p>
          <p className="rounded-sm bg-pale-orange px-2 font-bold text-orange">
            {formatToPercentage(discount)}
          </p>
        </div>
        <p className="text-[#b6bcc8] line-through">{formatToCurrency(price)}</p>
      </div>
      <PurchaseForm getSubmittedQuantity={onSubmit} />
    </div>
  );
};

export default ProductDetails;
