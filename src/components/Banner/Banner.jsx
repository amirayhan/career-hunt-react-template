import React from "react";
import heroImage from "../../assets/hero.png";
import "./Banner.css";

const Banner = () => {
    return (
        <section id="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="banner_content">
                            <h1>
                                One Step <br /> Closer To Your <br />
                                <span className="color_p">Dream Job</span>
                            </h1>
                            <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                            <button className="button1">Get Started</button>
                        </div>
                    </div>
                    <div className="d-none d-sm-none d-md-none col-lg-6 ">
                        <div className="banner_image">
                            <img src={heroImage} alt="Hero image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
