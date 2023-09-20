import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import "./JobDetails.css";

const JobDetails = () => {
    const allJobs = useLoaderData(); // Ensure this contains your job data
    const { id } = useParams();
    const [jobDetails, setJobDetails] = useState({});
    const [isApplied, setIsApplied] = useState(false);
    useEffect(() => {
        const jobId = parseInt(id, 10);

        // Find the job details with the matching ID
        const foundJob = allJobs.find((job) => job.id === jobId);

        if (foundJob) {
            setJobDetails(foundJob);
        }
    }, [id, allJobs]);

    useEffect(() => {
        // Check if the job is already applied based on local storage
        const shoppingCart = getShoppingCart();
        setIsApplied(shoppingCart.hasOwnProperty(jobDetails.id));
    }, [jobDetails.id]);

    const handleApplyNow = () => {
        const shoppingCart = getShoppingCart();

        // Check if the jobDetails.id already exists in the cart object
        if (shoppingCart.hasOwnProperty(jobDetails.id)) {
            alert("Already Applied");
        } else {
            // Add the job ID to the cart
            addToDb(jobDetails.id);

            // Update the state to indicate that the job has been applied for
            setIsApplied(true);
        }
    };

    return (
        <>
            <div className="job_details_banner">
                <h2 className="text-center">Job Details</h2>
            </div>
            <div className="job_details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="content_left">
                                <h4 className="mb-3">Title: {jobDetails.title}</h4>
                                <p>
                                    <b>Job Description: </b>
                                    {jobDetails.job_description}
                                </p>
                                <p>
                                    <b>Job Responsibility: </b>
                                    {jobDetails.job_responsibility}
                                </p>
                                <p>
                                    <b>Educational Requirements: </b>
                                    <br />
                                    {jobDetails.educational_requirements}
                                </p>
                                <p>
                                    <b>Experiences: </b>
                                    <br />
                                    {jobDetails.experiences}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="content_right">
                                <div className="job_content">
                                    <h4>Job Details</h4>
                                    <ul>
                                        <li>
                                            <b>Salary: </b>
                                            {jobDetails.salary}
                                        </li>
                                        <li>
                                            <b>Job Title: </b>
                                            {jobDetails.title}
                                        </li>
                                    </ul>
                                </div>
                                <div className="contact_info">
                                    <h4>Contact Information</h4>
                                    <ul>
                                        <li>
                                            <b>Phone: </b>
                                            {jobDetails.phone}
                                        </li>
                                        <li>
                                            <b>Email: </b>
                                            {jobDetails.email}
                                        </li>
                                        <li>
                                            <b>Address: </b>
                                            {jobDetails.location}
                                        </li>
                                    </ul>
                                </div>
                                <button onClick={handleApplyNow} className="button1" disabled={isApplied}>
                                    {isApplied ? "Applied" : "Apply Now"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobDetails;
