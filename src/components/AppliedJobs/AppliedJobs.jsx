import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../../utilities/fakedb";
import AppliedItem from "../AppliedItem/AppliedItem";
import "./AppliedJobs.css";

const AppliedJobs = () => {
    const allJobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [selectedOption, setSelectedOption] = useState("allJobs");

    useEffect(() => {
        const storedCart = getShoppingCart();

        // Filter allJobs to get the applied jobs based on their IDs
        const appliedJobsDetails = allJobs.filter((job) => storedCart.hasOwnProperty(job.id));

        setAppliedJobs(appliedJobsDetails);
    }, [allJobs]);

    // Function to handle the change of the select option
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    // Function to filter appliedJobs based on the selected option
    const filteredAppliedJobs = selectedOption === "allJobs" ? appliedJobs : appliedJobs.filter((job) => job.job_type === selectedOption);

    return (
        <>
            <div className="others_banner mb-5">
                <h2 className="text-center">Applied Jobs</h2>
            </div>
            <div className="applied_jobs pt-5">
                <div className="container">
                    <form>
                        <select onChange={handleSelectChange} value={selectedOption}>
                            <option value="allJobs">All Jobs</option>
                            <option value="Part-Time">Part Time</option>
                            <option value="Full-Time">Full Time</option>
                            <option value="Internship">Internship</option>
                        </select>
                    </form>
                    {filteredAppliedJobs.map((job) => (
                        <AppliedItem key={job.id} job={job}></AppliedItem>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AppliedJobs;
