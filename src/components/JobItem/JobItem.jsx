import React from "react";
import "./JobItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";

const JobItem = ({ jobItem, handleViewDetails }) => {
    const { id, logo_img, title, company, job_type, salary, location } = jobItem;
    return (
        <div className="col-lg-6">
            <div className="job_item">
                <div className="image">
                    <img src={logo_img} alt={company} />
                </div>
                <h3>{title}</h3>
                <h6>{company}</h6>
                <span className="button2">{job_type}</span>
                <ul className="d-flex">
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faLocationDot} />
                        </span>{" "}
                        {location}
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faDollarSign} />
                        </span>{" "}
                        {salary}
                    </li>
                </ul>
                <button onClick={() => handleViewDetails(id)} className="button1">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default JobItem;
