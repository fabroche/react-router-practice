import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {blogData} from "../../Api/BlogData/blogData.js";

function BlogPage(props) {
    return (
        <>
            <h1>Blog Page</h1>
            <Outlet/>
            <ul>
                {[blogData.map(post => (
                    <BlogLink
                        key={post.slug}
                        post={post}
                    />
                ))]}
            </ul>
        </>
    );
}

function BlogLink({post}) {
    return (
        <li>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
    )
}

export {BlogPage};