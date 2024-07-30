import React from 'react';
import './AllProducts.css';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../../FakeData/HomeData';
import MobileProduct from '../MobileProduct/MobileProduct';
import wallpaper from '../../../image/14875812184931531397.jpg';
import wallpaper2 from '../../../image/2443800720068632010.png';
import wallpaper3 from '../../../image/9999.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Location from '../Location/Location';
import Footer from '../Footer/Footer';

const AllProducts = () => {
    const { productName } = useParams();
    const products = fakeData.find(pd => pd.name === productName);
    const productKey = products.key;
    return (
        <div className="">
            <div className='margin-containt'>
                <Link><img src={wallpaper} alt="" /></Link>
                <main className='all-padding'>
                    <Location productName={productName}></Location>
                    <hr />
                    <div className="heiligth-containt">
                        <div className="flex-all">
                            <div className="cataguary-containt">
                                <div className="cataguary-container">
                                    <div className="">
                                        <p><small>Sort results by</small></p>
                                        <form action="">
                                            <select className='select-date' name='Country' id="">
                                                <option className='select-option' value="Date: Newest on top">Date: Newest on top</option>
                                                <option value="Date: Oldest on top">Date: Oldest on top</option>
                                                <option value="Price: High to low">Price: High to low</option>
                                                <option value="Price: low to High">Price: low to High</option>
                                            </select>
                                        </form>
                                    </div>
                                    <div className="filter-adds">
                                        <p><small>Filter ads</small></p>
                                        <input type="checkbox" name="" id="check" />
                                        <label className='urgent' htmlFor="check">URGENT</label>
                                        <br />
                                        <br />
                                        <input type="checkbox" name="" id="checked" />
                                        <label className='featured' htmlFor="checked">FEATURED</label>
                                    </div>
                                    <div className="members">
                                        <p><small>Type of posterType of poster</small></p>
                                        <form action="">
                                            <select className='select-date' name="All" id="">
                                                <option value="All">All</option>
                                                <option value="Members">Members</option>
                                                <option value="Authorized dealers">Authorized dealers</option>
                                                <option value="Non-members">Non-members</option>
                                            </select>
                                        </form>
                                    </div>
                                    <hr />
                                    <div className="category">
                                        <p>Category</p>
                                    </div>
                                    <hr />
                                    <div className="locations">
                                        <p>Location</p>
                                    </div>
                                    <div className=""></div>
                                </div>
                            </div>
                            <div className="dynamic-containt">
                                <div className="">
                                    <div className="">
                                        <div className="">
                                            <h5><span style={{ color: '#7b7979' }}>homepage <FontAwesomeIcon icon={faAngleRight} /> all ads <FontAwesomeIcon icon={faAngleRight} /></span> {productName}</h5>
                                            <h4 style={{ marginTop: '10px' }}>{productName} for sale in Bangladesh</h4>
                                            <p style={{ marginTop: '10px' }}>Showing 1-25 of {products.stock} for</p>
                                        </div>
                                        <div className="">
                                            <img src={products.pic} alt="" />
                                        </div>
                                    </div>
                                    <div className="">
                                        {
                                            productKey.map(pdKey => <MobileProduct pdKey={pdKey} key={pdKey.id}></MobileProduct>)
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="wallpaper2">
                                <Link><img src={wallpaper2} alt="" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="wallpaper3">
                        <Link><img src={wallpaper3} alt="" /></Link>
                    </div>
                    <div className=""></div>
                </main>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllProducts;