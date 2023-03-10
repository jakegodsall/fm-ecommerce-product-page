import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Carousel from './Carousel';
import ImageViewer from './ImageViewer';
import PurchaseForm from './PurchaseForm';

import { formatToCurrency, formatToPercentage } from '../utilities/numberUtilities';
import ImageViewerModal from './Modals/ImageViewerModal';

const ProductItem = (props) => {
    const [productImageModal, setProductImageModal] = useState(false);

    const images = props.data.images.full;

    const handleFormSubmission = (value) => {
        props.getSubmittedQuantity(value);
    };

    const currentPrice = props.data.price * props.data.discount;

    return (
        <div className='flex flex-col md:grid md:grid-cols-2 md:items-center md:gap-8'>
            <div className='md:hidden'>
                <Carousel>
                    {images.map((img, idx) => {
                        return <img src={img} key={idx} alt={`product ${idx}`} />;
                    })}
                </Carousel>
            </div>
            <div className='hidden md:block md:max-w-[500px]'>
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
                    document.getElementById('image-viewer-portal')
                )}
            </div>

            <div className='p-4 md:max-w-[500px]'>
                <p className='uppercase text-orange font-bold text-xs tracking-widest mb-2'>
                    {props.data.brand}
                </p>
                <h1 className='capitalize text-3xl font-bold'>{props.data.title}</h1>
                <p className='text-md leading-6 text-[#68707d] my-4'>{props.data.description}</p>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-4 items-center'>
                        <p className='font-bold text-2xl'>{formatToCurrency(currentPrice)}</p>
                        <p className='font-bold text-orange bg-pale-orange px-2 rounded-sm'>
                            {formatToPercentage(props.data.discount)}
                        </p>
                    </div>
                    <p className='text-[#b6bcc8] line-through'>
                        {formatToCurrency(props.data.price)}
                    </p>
                </div>
                <PurchaseForm getSubmittedQuantity={handleFormSubmission} />
            </div>
        </div>
    );
};

export default ProductItem;
