import React from "react";
import { Link } from "react-router-dom";
import "./BlogItem.css";

const BlogItem = ({ post }) => {
    const { id, img, post_category, author, time_and_date, title, post_description } = post;
    return (
        <div className="col-lg-6">
            <div className="blog_item shadow-lg rounded-3 overflow-hidden">
                <div className="image">
                    <img src={img} alt={post_category} />
                    <span className="button2">{post_category}</span>
                </div>
                <div className="content">
                    <ul className="d-flex justify-content-between fs-6">
                        <li>{author}</li>
                        <li>{time_and_date}</li>
                    </ul>
                    <h3>{title}</h3>
                    <p>{post_description}</p>
                    <Link to={`/post/${id}`} className="button1">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogItem;
