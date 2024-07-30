import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
// import imagess from '../../../image/images.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faUser } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
    return (
        <header className='flex-containt'>
            <div className="friest-containt">
                <ul>
                    <li><Link className='font-containt' to={'/'}>Bikroy</Link></li>
                    <li><Link>All ads</Link></li>
                    <li><Link className='border-containt'>English</Link></li>
                </ul>
            </div>
            <div className="friest-containt">
                <ul>
                    <li><Link to={'/'}><FontAwesomeIcon className='width' icon={faComments} /> Chat</Link></li>
                    <li><Link to={'/login'}><FontAwesomeIcon className='width' icon={faUser} /> Login</Link></li>
                    <li><Link to={'/'} className='background-containt'>POST YOUR AD</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;