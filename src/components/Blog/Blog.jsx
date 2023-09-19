import React from "react";
import "./Blog.css";

const Blog = () => {
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
                                <h2>blog Content</h2>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="sidebar">
                                <h2>Sidebar</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
