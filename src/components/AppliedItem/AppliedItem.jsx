import React from "react";
import { Link } from "react-router-dom";
import "./AppliedItem.css";

const AppliedItem = ({ job }) => {
    const { id, logo_img, title, company, job_type, location } = job;
    return (
        <>
            <div className="job_item d-md-flex justify-content-md-between align-items-center">
                <div className="job_item_details d-md-flex flex-column">
                    <div className="logo_image">
                        <img src={logo_img} alt={title} />
                    </div>
                    <div className="job_content">
                        <h4>{title}</h4>
                        <h6>{company}</h6>
                        <button className="button2">{job_type}</button>
                        <p>{location}</p>
                    </div>
                </div>
                <Link to={`/job/${id}`} className="button1">
                    View Details
                </Link>
            </div>
        </>
    );
};

export default AppliedItem;
