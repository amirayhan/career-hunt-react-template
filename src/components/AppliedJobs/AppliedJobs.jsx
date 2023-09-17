import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../../utilities/fakedb";
import AppliedItem from "../AppliedItem/AppliedItem";
import "./AppliedJobs.css";

const AppliedJobs = () => {
    const allJobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const storedCart = getShoppingCart();

        // Filter allJobs to get the applied jobs based on their IDs
        const appliedJobsDetails = allJobs.filter((job) => storedCart.hasOwnProperty(job.id));

        setAppliedJobs(appliedJobsDetails);
    }, [allJobs]);

    return (
        <>
            <div className="job_details_banner mb-5">
                <h2 className="text-center">Applied Jobs</h2>
            </div>
            <div className="applied_jobs pt-5">
                <div className="container">
                    <form>
                        <select>
                            <option value="allJobs">All Jobs</option>
                            <option value="allJobs">Part Time</option>
                            <option value="allJobs">Full Time</option>
                        </select>
                    </form>
                    {appliedJobs.map((job) => (
                        <AppliedItem key={job.id} job={job}></AppliedItem>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AppliedJobs;
