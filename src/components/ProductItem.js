import React, { useState } from "react";
import ReactDOM from "react-dom";

import Carousel from "./Carousel";
import ImageViewer from "./ImageViewer";
import PurchaseForm from "./PurchaseForm";

import {
  formatToCurrency,
  formatToPercentage,
} from "../utilities/numberUtilities";
import ImageViewerModal from "./Modals/ImageViewerModal";

const ProductItem = (props) => {
  const [productImageModal, setProductImageModal] = useState(false);

  const images = props.data.images.full;

  const handleFormSubmission = (value) => {
    props.getSubmittedQuantity(value);
  };

  const currentPrice = props.data.price * props.data.discount;

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 md:items-center md:gap-8">
      <div className="md:hidden">
        <Carousel>
          {images.map((img, idx) => {
            return <img src={img} key={idx} alt={`product ${idx}`} />;
          })}
        </Carousel>
      </div>
      <div className="hidden md:block md:max-w-[500px]">
        <ImageViewer
          images={props.data.images.full}
          thumbnails={props.data.images.thumbnail}
          setModalOpen={() => setProductImageModal((prevState) => !prevState)}
        />
        {ReactDOM.createPortal(
          <ImageViewerModal
            images={props.data.images.full}
            thumbnails={props.data.images.thumbnail}
            isOpen={productImageModal}
            setIsOpen={() => setProductImageModal((prevState) => !prevState)}
          />,
          document.getElementById("image-viewer-portal"),
        )}
      </div>

      <div className="p-4 md:max-w-[500px]">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-orange">
          {props.data.brand}
        </p>
        <h1 className="text-3xl font-bold capitalize">{props.data.title}</h1>
        <p className="text-md my-4 leading-6 text-[#68707d]">
          {props.data.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <p className="text-2xl font-bold">
              {formatToCurrency(currentPrice)}
            </p>
            <p className="rounded-sm bg-pale-orange px-2 font-bold text-orange">
              {formatToPercentage(props.data.discount)}
            </p>
          </div>
          <p className="text-[#b6bcc8] line-through">
            {formatToCurrency(props.data.price)}
          </p>
        </div>
        <PurchaseForm getSubmittedQuantity={handleFormSubmission} />
      </div>
    </div>
  );
};

export default ProductItem;
