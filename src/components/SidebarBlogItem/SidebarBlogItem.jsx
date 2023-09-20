import React from "react";
import { Link } from "react-router-dom";
import "./SidebarBlogItem.css";

const SidebarBlogItem = ({ post }) => {
    const { id, img, title } = post;
    return (
        <div className="sidebar_blog_item ">
            <div className="image ">
                <img src={img} alt={title} />
            </div>
            <Link to={`/post/${id}`}>
                <h5>{title}</h5>
            </Link>
        </div>
    );
};

export default SidebarBlogItem;
