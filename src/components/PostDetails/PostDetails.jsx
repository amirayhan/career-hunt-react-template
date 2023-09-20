import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./PostDetails.css";

const PostDetails = () => {
    const allPost = useLoaderData();
    const { id } = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {
        const postId = parseInt(id, 10);
        const findPost = allPost.find((post) => post.id === postId);
        setPost(findPost);
    }, []);
    return (
        <>
            <div className="others_banner mb-5">
                <h2 className="text-center">Blog Details</h2>
            </div>
            <div className="post_details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="blog_content">
                                <h3>{post.title}</h3>
                                <img src={post.img} alt={post.post_category} />
                                <ul className="d-flex justify-content-between">
                                    <li>{post.author}</li>
                                    <li>{post.time_and_date}</li>
                                </ul>
                                <p>{post.post_description}</p>
                                <p>{post.more_description}</p>
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

export default PostDetails;
