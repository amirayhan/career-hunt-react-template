import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="footer_items">
                            <h3>CareerHunt</h3>
                            <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                            <ul>
                                <li>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#"></a>
                                </li>
                                <li>
                                    <a href="#"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <div className="footer_items">
                            <h4>Company</h4>
                            <ul>
                                <li>
                                    <Link to="/">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/">Work</Link>
                                </li>
                                <li>
                                    <Link to="/">Latest News</Link>
                                </li>
                                <li>
                                    <Link to="/">Careers</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <div className="footer_items">
                            <h4>Product</h4>
                            <ul>
                                <li>
                                    <Link to="/">Prototype</Link>
                                </li>
                                <li>
                                    <Link to="/">Plans & Pricing</Link>
                                </li>
                                <li>
                                    <Link to="/">Customers</Link>
                                </li>
                                <li>
                                    <Link to="/">Integrations</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <div className="footer_items">
                            <h4>Support</h4>
                            <ul>
                                <li>
                                    <Link to="/">Help Desk</Link>
                                </li>
                                <li>
                                    <Link to="/">Sales</Link>
                                </li>
                                <li>
                                    <Link to="/">Become a Partner</Link>
                                </li>
                                <li>
                                    <Link to="/">Developers</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <div className="footer_items">
                            <h4>Contact</h4>
                            <ul>
                                <li>
                                    <Link to="/">524 Broadway , NYC</Link>
                                </li>
                                <li>
                                    <Link to="/">+1 777 - 978 - 5570</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom d-flex justify-content-between">
                    <p>@2023 CareerHub. All Rights Reserved</p>
                    <p>Powered by CareerHub</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
