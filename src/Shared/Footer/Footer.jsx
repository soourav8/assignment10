import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="page-footer font-small blue mt-5 pt-4">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5  style={{"color": "#146C94"}}  className="fs-2 text fw-bold ">The Italian Dishes</h5>
                            <p>Here you can use rows and columns to organize your footer content.</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0" />

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Useful Links</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                
                            </ul>
                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Important Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!">Home</a></li>
                                <li><a href="#!">Blog</a></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3">© 2023 Copyright:
                    <a href=""> The Italian Dishes</a>
                </div>

            </footer>
        </div>
    );
};

export default Footer;