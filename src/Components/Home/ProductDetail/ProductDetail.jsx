import React from 'react';
import './ProductDetail.css';
import { Link } from 'react-router-dom';

const ProductDetail = (props) => {
    const { name, stock, pic, } = props.product;
    return (
         <div className='flex-basic'>
            <Link to={`/Bangladesh/` + name}>
                <div className="conainer1">
                    <div className="">
                        <img src={require(`../../../image/${pic}`)} alt="" />
                    </div>
                    <div className="">
                        <h4>{name}</h4>
                        <h5>{stock}</h5>
                    </div>
                </div>
            </Link>
        </div>
        
    );
};

export default ProductDetail;