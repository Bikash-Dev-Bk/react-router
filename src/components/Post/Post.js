import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './post.css';

const Post = ({post}) => {
    const {id, title, body} = post;

    const navigate = useNavigate();

    const handlerNavigate = () =>{
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <h3>{title}</h3>
            <p><small>{body}</small></p>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handlerNavigate}>Show Details2</button>
        </div>
    );
};

export default Post;