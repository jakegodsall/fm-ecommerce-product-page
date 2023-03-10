import React, { useState } from 'react';

import Header from './components/Header';
import ProductItem from './components/ProductItem';

import './App.css';

import ProductImage1 from './assets/images/image-product-1.jpg';
import ProductImage2 from './assets/images/image-product-2.jpg';
import ProductImage3 from './assets/images/image-product-3.jpg';
import ProductImage4 from './assets/images/image-product-4.jpg';
import ProductThumbnail1 from './assets/images/image-product-1-thumbnail.jpg';
import ProductThumbnail2 from './assets/images/image-product-2-thumbnail.jpg';
import ProductThumbnail3 from './assets/images/image-product-3-thumbnail.jpg';
import ProductThumbnail4 from './assets/images/image-product-4-thumbnail.jpg';

const DUMMY_DATA = [
    {
        title: 'fall limited edition sneakers',
        description:
            "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
        brand: 'sneaker company',
        price: 250.0,
        discount: 0.5,
        discountedPrice: 125.0,
        images: {
            full: [ProductImage1, ProductImage2, ProductImage3, ProductImage4],
            thumbnail: [ProductThumbnail1, ProductThumbnail2, ProductThumbnail3, ProductThumbnail4],
        },
    },
];

function App() {
    const [quantitySelected, setQuantitySelected] = useState(0);

    const handleFormSubmission = (value) => {
        setQuantitySelected((prevValue) => +prevValue + +value);
    };

    return (
        <div className='w-screen h-screen flex flex-col font-main-font md:px-10 lg:px-40 transition-all duration-300'>
            <Header
                quantitySelected={quantitySelected}
                title={DUMMY_DATA[0].title}
                discountedPrice={DUMMY_DATA[0].discountedPrice}
                thumbnail={DUMMY_DATA[0].images.thumbnail[0]}
                removeFromCart={() => setQuantitySelected(0)}
            />
            <div className='h-full flex flex-col md:mt-10 items-center'>
                <ProductItem data={DUMMY_DATA[0]} getSubmittedQuantity={handleFormSubmission} />
            </div>
        </div>
    );
}

export default App;
