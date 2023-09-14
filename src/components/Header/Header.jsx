import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <Navbar expand="lg">
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
                    <button className="button1">Start Applying</button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
