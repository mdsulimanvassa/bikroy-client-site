import React from 'react';
import './Product.css';
import ProductDetail from '../ProductDetail/ProductDetail';
import homes from '../../../FakeData/HomeData';


const Product = () => {
    return (
        <section>
            <h3>Browse items by category</h3>
            <div className="product-containt">
                {
                    homes.map(product => <ProductDetail product={product} key={product.id}></ProductDetail>)
                }
            </div>
        </section>
    );
};

export default Product;