import React from "react";
import "./FeaturedJobs.css";

const FeaturedJobs = () => {
    return (
        <div id="featured_jobs">
            <div className="container">
                <div className="section_heading">
                    <h2>Featured Jobs</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className="jobs">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3>job item</h3>
                        </div>
                        <div className="col-lg-6">
                            <h3>job item</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;
