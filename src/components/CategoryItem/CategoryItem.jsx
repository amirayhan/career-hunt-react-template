import React from "react";
import "./CategoryItem.css";
const CategoryItem = ({ item }) => {
    const { image, category, totalJobs } = item;
    return (
        <div className="col-lg-3 col-md-6">
            <div className="category_item">
                <span>
                    <img src={image} alt={category} />
                </span>
                <h4>{category}</h4>
                <p>{totalJobs}</p>
            </div>
        </div>
    );
};
export default CategoryItem;
