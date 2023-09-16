import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import JobItem from "../JobItem/JobItem";
import "./FeaturedJobs.css";

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    const [showAll, setOpenAll] = useState(false);
    const [jobDetails, setJobDetails] = useState([]);

    useEffect(() => {
        fetch("featuredJobs.json")
            .then((res) => res.json())
            .then((data) => setFeaturedJobs(data));
    }, []);

    const handleToggleClick = () => {
        setOpenAll(!showAll);
    };

    const handleViewDetails = (id) => {
        console.log(id);
        const findedJobs = featuredJobs.find((jobs) => jobs.id === id);
        setJobDetails(findedJobs);
    };
    return (
        <div id="featured_jobs">
            <div className="container">
                <div className="section_heading">
                    <h2>Featured Jobs</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className="jobs">
                    <div className="row">
                        {featuredJobs.slice(0, showAll ? featuredJobs.length : 4).map((jobItem) => (
                            <JobItem key={jobItem.id} jobItem={jobItem} handleViewDetails={handleViewDetails}></JobItem>
                        ))}
                    </div>
                    <div className="d-flex justify-content-center">
                        <button onClick={handleToggleClick} className="button2 inline-block m-auto">
                            {showAll ? "Show Less" : "Show More"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;
