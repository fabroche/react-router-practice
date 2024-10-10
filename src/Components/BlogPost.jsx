import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {blogData} from "../Api/BlogData/blogData.js";

function BlogPost(props) {

    const navigate = useNavigate()
    const {slug} = useParams()

    const blogPost = blogData.find(post => post.slug === slug)

    function returnToBlog() {
        navigate('/blog')
    }

    return (
        <>
            <div style={{
                maxWidth: "800px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}>
                <div style={
                    {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "24px"
                    }
                }>
                    <h2>{blogPost.title}</h2>
                    <button onClick={returnToBlog}>{'✖'}</button>
                </div>
                <h3>by @{blogPost.author}</h3>
                <p>{blogPost.content}</p>
            </div>
        </>
    );
}

export {BlogPost};