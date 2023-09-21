import React, { useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [fix, setfix] = useState(false);

    const setFixed = () => {
        if (window.scrollY >= 140) {
            setfix(true);
        } else {
            setfix(false);
        }
    };

    window.addEventListener("scroll", setFixed);

    const handleToggleClick = () => setToggle(!toggle);

    const handleMenuItemClick = () => {
        setToggle(false);
    };

    return (
        <>
            <div className={fix ? "header fixed" : "header"}>
                <div className="container d-flex justify-content-between align-items-center py-3">
                    <div className="logo">
                        <a href="/">
                            <h3>
                                Career<span>Hunt</span>
                            </h3>
                        </a>
                    </div>
                    <div className="d-none d-lg-flex align-items-center gap-5">
                        <ul className="d-md-flex gap-5">
                            <li>
                                <NavLink onClick={handleMenuItemClick} to="/" className="nav-link">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={handleMenuItemClick} to="/statistics" className="nav-link">
                                    Statistics
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={handleMenuItemClick} to="/appliedjobs" className="nav-link">
                                    Applied Jobs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={handleMenuItemClick} to="/blog" className="nav-link">
                                    Blog
                                </NavLink>
                            </li>
                        </ul>
                        <a href="#featured_jobs" className="button1">
                            Start Applying
                        </a>
                    </div>
                    <button onClick={handleToggleClick} className="d-lg-none toggle_icon">
                        <FontAwesomeIcon icon={toggle ? faXmark : faBars} />
                    </button>
                </div>
                <div className={`${toggle ? "position-absolute" : "d-none"} w-100 m-auto toggle-navbar`}>
                    <ul className="text-center">
                        <li>
                            <NavLink onClick={handleMenuItemClick} to="/" className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleMenuItemClick} to="/statistics" className="nav-link">
                                Statistics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleMenuItemClick} to="/appliedjobs" className="nav-link">
                                Applied Jobs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleMenuItemClick} to="/blog" className="nav-link">
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                    <div className="d-flex justify-content-center">
                        <a onClick={handleMenuItemClick} href="#featured_jobs" className="button1 m-auto">
                            Start Applying
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
