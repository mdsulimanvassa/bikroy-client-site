import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import sri from '../../../image/sri.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faFacebook, faGooglePlay, faTiktok, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='footer-containt'>
            <footer className='footer-container'>
                <div className="footer">
                    <div className="fooret-bassis">
                        <h3>More from Bikroy</h3>
                        <Link>Sell Fast</Link>
                        <Link>Membership</Link>
                        <Link>Banner Ads</Link>
                        <Link>Ad Promotions</Link>
                    </div>
                    <div className="fooret-bassis">
                        <h3>Help & Support</h3>
                        <Link>FAQ</Link>
                        <Link>Stay safe</Link>
                        <Link>Contact Us</Link>
                    </div>
                    <div className="fooret-bassis">
                        <h3>About Bikroy</h3>
                        <Link>About Us</Link>
                        <Link>Careers</Link>
                        <Link>Terms and Conditions</Link>
                        <Link>Privacy policy</Link>
                        <Link>Sitemap</Link>
                    </div>
                    <div className="fooret-bassis">
                        <h3>Blog & Guides</h3>
                        <Link>CarsGuide</Link>
                        <Link>BikesGuide</Link>
                        <Link>PropertyGuide</Link>
                        <Link>Official Blog</Link>
                        <div className="icon-basic">
                                <Link className=""><FontAwesomeIcon icon={faFacebook} /></Link>
                                <Link className=""><FontAwesomeIcon icon={faXTwitter} /></Link>
                                <Link className=""><FontAwesomeIcon icon={faTiktok} /></Link>
                                <Link className=""><FontAwesomeIcon icon={faYoutube} /></Link>
                        </div>
                    </div>
                    <div className="fooret-bassis">
                        <h3>Download our app</h3>
                        <button><FontAwesomeIcon icon={faGooglePlay} />  Google Play</button>
                        <button><FontAwesomeIcon icon={faApple} />  App Store</button>
                        <h3>Other countries</h3>
                        <Link> <img src={sri} alt="" />Sri Lanka</Link>
                    </div>
                </div>
                <hr />
                <div className="footer-allright">
                    <div className="footer-flex">
                        <p>© 2024. All rights reserved. Saltside Technologies</p>
                    </div>
                    <div className="">
                        <h1>Bikroy</h1>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;