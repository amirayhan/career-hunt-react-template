import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import "./JobDetails.css";

const JobDetails = () => {
    const allJobs = useLoaderData(); // Ensure this contains your job data
    const { id } = useParams();
    const [jobDetails, setJobDetails] = useState({});

    useEffect(() => {
        const jobId = parseInt(id, 10);

        // Find the job details with the matching ID
        const foundJob = allJobs.find((job) => job.id === jobId);

        if (foundJob) {
            setJobDetails(foundJob);
        }
    }, [id, allJobs]);

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
                                <button onClick={() => handleApplyNow(jobDetails)} className="button1">
                                    Apply Now
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
