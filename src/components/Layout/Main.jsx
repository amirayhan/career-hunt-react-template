import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import BackToTop from "../BackToTop/BackToTop";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Main = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        <div className="main">
            {isLoading ? (
                <span className="preloader">
                    <PropagateLoader color={"#7e90fe"} loading={isLoading} size={20} aria-label="Loading Spinner" data-testid="loader" />
                </span>
            ) : (
                <div>
                    <Header></Header>
                    <Outlet></Outlet>
                    <Footer></Footer>
                    <BackToTop></BackToTop>
                </div>
            )}
        </div>
    );
};

export default Main;
