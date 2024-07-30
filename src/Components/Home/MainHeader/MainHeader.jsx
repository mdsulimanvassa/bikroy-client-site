import React from 'react';
import './MainHeader.css';
import header from '../../../image/header.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const MainHeader = () => {
    return (
        <section>
            <div className="search-containt">
                <div className="location">
                    <a href="/#"><FontAwesomeIcon icon={faLocationPin} /> All of Bangladesh</a>
                </div>
                <div className="box">
                    <div className="search-box">
                        <input type="text" name="" id="input" placeholder='What are you lookink for?' />
                        <label className='icons' htmlFor="input"><FontAwesomeIcon icon={faMagnifyingGlass} /></label>
                    </div>
                </div>
            </div>
            <div className="benner-image">
                <a href="#/"><img src={header} alt="" /></a>
            </div>
        </section>
    );
};

export default MainHeader;