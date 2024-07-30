import React from 'react';
import './MobileProduct.css';
import { Link } from 'react-router-dom';

const MobileProduct = (props) => {
    const { names, img, address, price } = props.pdKey;
    return (
        <section className=''>
            <Link className="all-containt" to={`/ad/` + names} >
                    <div className="all-container">
                        <img src={img} alt="" />
                    </div>
                    <div className="all-container">
                        <h4>{names}</h4>
                        <p>{address}</p>
                        <h5>{price}</h5>
                    </div>
            </Link>
        </section>
    );
};

export default MobileProduct;