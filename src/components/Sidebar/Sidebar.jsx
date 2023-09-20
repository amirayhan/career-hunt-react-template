import React from "react";
import { useLoaderData } from "react-router-dom";
import SidebarBlogItem from "../SidebarBlogItem/SidebarBlogItem";
import "./Sidebar.css";

const Sidebar = () => {
    const allPost = useLoaderData();
    return (
        <div>
            <h4>Our Latest News</h4>
            {allPost.slice(0, 4).map((post) => (
                <SidebarBlogItem key={post.id} post={post}></SidebarBlogItem>
            ))}
        </div>
    );
};

export default Sidebar;
