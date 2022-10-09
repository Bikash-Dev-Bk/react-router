import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

const Friend = ({friend}) => {
    const {name, id, email, username} = friend;
    return (
        <div className='friend'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>UserName: <Link to={`/friend/${id}`}>{username}</Link></p>
            
        </div>
    );
};

export default Friend;