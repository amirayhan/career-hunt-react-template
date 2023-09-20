import React from "react";
import "./BlogItem.css";

const BlogItem = ({ post }) => {
    const { img, post_category, author, time_and_date, title, post_description } = post;
    return (
        <div className="col-lg-6">
            <div className="blog_item shadow-lg rounded-3 overflow-hidden">
                <div className="image">
                    <img src={img} alt={post_category} />
                </div>
                <div className="content">
                    <ul className="d-flex justify-content-between fs-6">
                        <li>{author}</li>
                        <li>{time_and_date}</li>
                    </ul>
                    <h3>{title}</h3>
                    <p>{post_description}</p>
                    <button className="button1">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default BlogItem;
