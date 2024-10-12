import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {blogData} from "../Api/BlogData/blogData.js";
import {routeTypes} from "../urls.jsx";
import {useAuth} from "./Auth/auth.jsx";

function BlogPost(props) {

    const navigate = useNavigate()
    const {slug} = useParams()

    const auth = useAuth()

    const blogPost = blogData.find(post => post.slug === slug)

    const isOwner = auth.user?.username === blogPost.author

    const canDelete = auth.user?.isAdmin || isOwner

    function returnToBlog() {
        navigate(routeTypes.blog)
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

                {canDelete && (
                    <button>Eliminar Post</button>
                )}

            </div>
        </>
    );
}

export {BlogPost};