import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const [fix, setfix] = useState(false);

    const setFixed = () => {
        if (window.scrollY >= 140) {
            setfix(true);
        } else {
            setfix(false);
        }
    };

    window.addEventListener("scroll", setFixed);

    return (
        <div className={`${fix ? "navbar fixed" : "navbar"} navbar-expand-lg navbar-light`} expand="lg">
            <Container>
                <Navbar.Brand href="#home">CareerHunt</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" exact activeClassName="active">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/statistics" className="nav-link" activeClassName="active">
                                Statistics
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/appliedjobs" className="nav-link" activeClassName="active">
                                Applied Jobs
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blog" className="nav-link" activeClassName="active">
                                Blog
                            </Link>
                        </li>
                    </Nav>
                    <button className="button1">Start Applying</button>
                </Navbar.Collapse>
            </Container>
        </div>
    );
};

export default Header;
