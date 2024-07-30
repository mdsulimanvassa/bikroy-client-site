import React from 'react';
import './Many.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import dollar from '../../../image/images.jpg';

const Many = () => {
    return (
        <div className='many-containt'>
            <div className="contaner dollar">
                <div className="icons">
                    <img src={dollar} alt="" />
                </div>
                <div className="">
                    <h3>Start making money!</h3>
                    <p>Do you have something to sell?
                        Post your first ad and start making money!</p>
                    <button><span className='plus'><FontAwesomeIcon icon={faPlus} /></span> Post your ad for free</button>
                </div>
            </div>
            <div className="contaner shadow">
                <h2>Bikroy<span>jobs</span></h2>
                <p>Looking to hire or get hired in Bangladesh ?
                    Get access to 800k+ CVs or browse through 800+ job vacancies!</p>
                <button>Explore more   <span className='angle'><FontAwesomeIcon icon={faChevronRight} /></span></button>
            </div>
        </div>
    );
};

export default Many;