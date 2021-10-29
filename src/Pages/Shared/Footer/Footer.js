import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <div>
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