import React from 'react';
import './Location.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMagnifyingGlass, faTag } from '@fortawesome/free-solid-svg-icons';

const Location = ({ productName }) => {
    return (
        <div className="location-container">
            <div className="tag">
                <Link><FontAwesomeIcon icon={faLocationDot} /></Link>
                <p>select location</p>
            </div>
            <div className="tag">
                <Link><FontAwesomeIcon icon={faTag} /></Link>
                <p>{productName}</p>
            </div>
            <div className="box2">
                <div className="search-box2">
                    <input type="search" name="" id="input" placeholder='What are you lookink for?' />
                    <label className='icons2' htmlFor="input"><FontAwesomeIcon icon={faMagnifyingGlass} /></label>
                </div>
            </div>
        </div>
    );
};

export default Location;