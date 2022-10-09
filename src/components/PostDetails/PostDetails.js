import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();

    const navigate = useNavigate();
    const handlerNavigate = () => {
        navigate(`/friend/${post.userId}`);
    }
    return (
        <div>
            <h2>Details About: {post.id}</h2>
            <h3>{post.title}</h3>
            <p><small>{post.body}</small></p>
            <button onClick={handlerNavigate}>Get Author</button>
        </div>
    );
};

export default PostDetails;