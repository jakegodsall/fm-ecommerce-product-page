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
import ProductDetails from "./ProductDetails";

const ProductItem = (props) => {
  const [productImageModal, setProductImageModal] = useState(false);

  const images = props.data.images.full;

  const handleFormSubmission = (value) => {
    props.getSubmittedQuantity(value);
  };

  return (
    <main className="flex flex-col md:grid md:grid-cols-2 md:items-center md:gap-8">
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
      <ProductDetails
        brand={props.data.brand}
        title={props.data.title}
        description={props.data.description}
        discount={props.data.discount}
        price={props.data.price}
        handleFormSubmission={handleFormSubmission}
      />
    </main>
  );
};

export default ProductItem;
