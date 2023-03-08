import Header from './components/Header';

import './App.css';
import ProductItem from './components/ProductItem';

import ProductImage1 from './assets/images/image-product-1.jpg';
import ProductImage2 from './assets/images/image-product-2.jpg';
import ProductImage3 from './assets/images/image-product-3.jpg';
import ProductThumbnail1 from './assets/images/image-product-1-thumbnail.jpg';
import ProductThumbnail2 from './assets/images/image-product-2-thumbnail.jpg';
import ProductThumbnail3 from './assets/images/image-product-3-thumbnail.jpg';

const DUMMY_DATA = [
    {
        title: 'fall limited edition sneakers',
        description:
            "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
        brand: 'sneaker company',
        price: 250.0,
        discount: 0.5,
        images: {
            full: [ProductImage1, ProductImage2, ProductImage3],
            thumbnail: [ProductThumbnail1, ProductThumbnail2, ProductThumbnail3],
        },
    },
];

function App() {
    return (
        <div className='flex flex-col font-main-font'>
            <Header />
            <ProductItem data={DUMMY_DATA[0]} />
        </div>
    );
}

export default App;
