import Header from './components/Header';

import './App.css';
import ProductItem from './components/ProductItem';

const DUMMY_DATA = [
    {
        title: 'fall limited edition sneakers',
        description:
            "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
        brand: 'sneaker company',
        price: 250.0,
        discount: 0.5,
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
