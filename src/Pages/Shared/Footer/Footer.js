import React from 'react';
import './footer.css'
import logo from "../../../images/logos/footerlogo.png"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            {/* footer top */}
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-lg-4 col-md-6">
                            {/* footer right */}
                            <div className='footer_widget'>
                                {/* footer logo */}
                                <div className='text-light'>
                                    <Link to='/home'>
                                        <img src={logo} alt="" />
                                    </Link>
                                </div>
                                <p className='text-light mt-4'>
                                    5th flora, 700/D kings road, green <br />
                                    lane Dinajpur-1782
                                    <br />
                                    <a href="/">+10 367 826 2567</a>
                                    <br />
                                    <a href="/">contact@travelo.com</a>
                                </p>
                                <div className='socail_links'>
                                    <ul>
                                        <li>
                                            <a href="/">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/">
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i className="fab fa-pinterest-p"></i>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-lg-2 col-md-6">
                            <div>
                                <h3 className='text-light'>Company</h3>
                                <ul className='list-unstyled mt-4 f-link'>
                                    <li><a className='text-decoration-none text-light ' href="/">Price</a></li>
                                    <li><a className='text-decoration-none text-light ' href="/">About</a></li>
                                    <li><a className='text-decoration-none text-light ' href="/">Gallery</a></li>
                                    <li><a className='text-decoration-none text-light ' href="/">Contact</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-lg-3 col-lg-3 col-md-6">
                            <div >
                                <h3 className='text-light'>Popular Destination</h3>
                                <ul className='list-unstyled mt-4 f-link'>
                                    <li><a className='text-decoration-none text-light ' href="/">Australia</a></li>
                                    <li><a className='text-decoration-none text-light ' href="/">Indonesia</a></li>
                                    <li><a className='text-decoration-none text-light ' href="/">India</a></li>
                                    <li><a className='text-decoration-none text-light ' href="/">Bangladesh</a></li>
                                    <li><a className='text-decoration-none text-light ' href="/">Switzerland</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-lg-3 col-md-6">
                            <div>
                                <h3 className='text-light'>Instagram</h3>
                                <div className='mt-4'>
                                    <div className="row row-cols-2 row-cols-md-3 g-2">
                                        <div>
                                            <img src="https://i.ibb.co/3BwsQQj/i1.webp" alt="" />
                                        </div>
                                        <div>
                                            <img src="https://i.ibb.co/RDhGC64/i2.webp" alt="" />
                                        </div>
                                        <div>
                                            <img src="https://i.ibb.co/DVpMcY7/i3.webp" alt="" />
                                        </div>
                                        <div>
                                            <img src="https://i.ibb.co/Q9ct1xr/i6.webp" alt="" />
                                        </div>
                                        <div>
                                            <img src="https://i.ibb.co/Ws9d23C/i5.webp" alt="" />
                                        </div>
                                        <div>
                                            <img src="https://i.ibb.co/r5w6SGw/i4.webp" alt="" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer bottom */}
            <div className='footer-bottom'>
                <div className="container">
                    <hr className='text-light ' />
                    <div className="row">
                        <div className="col-md-12">
                            <p className='text-light text-center'>
                                Copyright &copy;2021 All rights reserved |
                                <i className="far fa-heart mx-2"></i>
                                by
                                <a href="/" className=' ms-1 text-danger text-decoration-none'>travelo</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;