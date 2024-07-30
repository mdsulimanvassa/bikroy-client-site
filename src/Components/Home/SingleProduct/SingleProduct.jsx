import React, { useContext } from 'react';
import './SingleProduct.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import fakeData from '../../../FakeData/HomeData';
import images5 from '../../../image/4363.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faPhone } from '@fortawesome/free-solid-svg-icons';
import { ProductContext } from '../../../App';
import Footer from '../Footer/Footer';

const SingleProduct = () => {
    const [products, setProducts] = useContext(ProductContext);
    const navigate = useNavigate();
    const { singleProduct } = useParams();
    let singleProducts;
    for (let category of fakeData) {
        const product = category.key.find(product => product.names === singleProduct);
        if (product) {
            singleProducts = product;
            break;
        }
    };

    const handleShipment = (pdData) => {
        setProducts(pdData);
        navigate(`/shipment`);
    }

    return (
        <div className="">
            <div className='all-padding-containt'>
                <h1>{singleProduct}</h1>
                <p>{singleProducts.address}</p>
                <div className="display-grid">
                    <div className="">
                        <div className="image-container">
                            <img src={singleProducts.img} alt={singleProducts.name} />
                        </div>
                        <div className="">
                            <h1>{singleProducts.price}</h1>
                            <p>Condition:</p>
                            <button onClick={() => handleShipment(singleProducts)} className='propmote'><label className='promote-icon' htmlFor=""><FontAwesomeIcon icon={faArrowUp} /></label>Promote this ad</button>
                        </div>
                    </div>
                    <div className="chat-container">
                        <p>For sale by</p>
                        <p><label htmlFor=""><FontAwesomeIcon icon={faPhone} /></label> 01300XXXXXX</p>
                        <Link><img src={images5} alt="" /></Link>
                        <div className="verify-items">
                            <h4>Stay Alert: Avoid Online Scams</h4>
                            <ul>
                                <li>
                                    Never share card details or OTPs, and always verify items in person before payment. Bikroy does not offer a delivery service. Stay vigilant!
                                </li>
                            </ul>
                            <Link>See all safety tips</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SingleProduct;