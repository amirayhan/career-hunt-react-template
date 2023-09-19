import React from "react";
import { Outlet } from "react-router-dom";
import BackToTop from "../BackToTop/BackToTop";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <BackToTop></BackToTop>
        </div>
    );
};

export default Main;
