import React from "react";
import { useLoaderData } from "react-router-dom";
import BlogItem from "../BlogItem/BlogItem";
import Sidebar from "../Sidebar/Sidebar";
import "./Blog.css";

const Blog = () => {
    const allPost = useLoaderData();

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
                                    {allPost.map((post) => (
                                        <BlogItem key={post.id} post={post}></BlogItem>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <Sidebar></Sidebar>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
