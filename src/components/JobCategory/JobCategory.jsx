import React, { useEffect, useState } from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import "./JobCategory.css";

const JobCategory = () => {
    const [jobItems, setJobItems] = useState([]);
    useEffect(() => {
        fetch("jobCategory.json")
            .then((res) => res.json())
            .then((data) => setJobItems(data));
    }, []);
    return (
        <div id="job_category">
            <div className="container">
                <div className="section_heading">
                    <h2>Job Category List</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className="job_category_items">
                    <div className="row">
                        {jobItems.map((item) => (
                            <CategoryItem key={item.id} item={item}></CategoryItem>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCategory;
