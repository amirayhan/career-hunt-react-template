import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    // const [fix, setfix] = useState(false);

    // const setFixed = () => {
    //     if (window.scrollY >= 140) {
    //         setfix(true);
    //     } else {
    //         setfix(false);
    //     }
    // };

    // window.addEventListener("scroll", setFixed);

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

    return (
        <>
            <div className={fix ? "header fixed" : "header"}>
                <div className="container d-flex justify-content-between align-items-center py-3">
                    <div className="logo">
                        <a href="/">
                            <h3>CareerHunt</h3>
                        </a>
                    </div>
                    <div className="d-none d-md-flex align-items-center gap-5">
                        <ul className="d-md-flex gap-5">
                            <li>
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/statistics" className="nav-link">
                                    Statistics
                                </Link>
                            </li>
                            <li>
                                <Link to="/appliedjobs" className="nav-link">
                                    Applied Jobs
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="nav-link">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                        <a href="#featured_jobs" className="button1">
                            Start Applying
                        </a>
                    </div>
                    <button onClick={handleToggleClick} className="d-md-none">
                        <FontAwesomeIcon icon={toggle ? faXmark : faBars} />
                    </button>
                </div>
                <div className={`${toggle ? "position-absolute" : "d-none"} w-100 m-auto toggle-navbar`}>
                    <ul className="text-center">
                        <li className="mb-3">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="mb-3">
                            <Link to="/statistics" className="nav-link">
                                Statistics
                            </Link>
                        </li>
                        <li className="mb-3">
                            <Link to="/appliedjobs" className="nav-link">
                                Applied Jobs
                            </Link>
                        </li>
                        <li className="mb-3">
                            <Link to="/blog" className="nav-link">
                                Blog
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex justify-content-center">
                        <a href="#featured_jobs" className="button1 m-auto">
                            Start Applying
                        </a>
                    </div>
                </div>
            </div>

            {/* <div className={`${fix ? "navbar fixed" : "navbar"} navbar-light`} expand="lg">
                <Container>
                    <Navbar.Brand href="#home">CareerHunt</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/statistics" className="nav-link">
                                    Statistics
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/appliedjobs" className="nav-link">
                                    Applied Jobs
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog" className="nav-link">
                                    Blog
                                </Link>
                            </li>
                        </Nav>
                        <a href="#featured_jobs" className="button1">
                            Start Applying
                        </a>
                    </Navbar.Collapse>
                </Container>
            </div> */}
        </>
    );
};

export default Header;
