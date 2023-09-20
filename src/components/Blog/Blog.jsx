import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BlogItem from "../BlogItem/BlogItem";
import Sidebar from "../Sidebar/Sidebar";
import "./Blog.css";

const Blog = () => {
    const allPost = useLoaderData();
    const [openAll, setOpenAll] = useState(false);

    const handleShowToggle = () => {
        setOpenAll(!openAll);
    };
    return (
        <>
            <div className="others_banner mb-5">
                <h2 className="text-center">Our Blog</h2>
            </div>
            <div className="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="blog_content">
                                <div className="row">
                                    {allPost.slice(0, openAll ? allPost.length : 4).map((post) => (
                                        <BlogItem key={post.id} post={post}></BlogItem>
                                    ))}
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button onClick={() => handleShowToggle()} className="button2">
                                        {openAll ? "Show Less" : "Show More"}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <Sidebar allPost={allPost}></Sidebar>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
