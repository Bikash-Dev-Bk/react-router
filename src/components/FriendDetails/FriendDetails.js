import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    return (
        <div>
            <h2>Details About: {friend.name}</h2>
            <p>Call Him/Her: {friend.phone}</p>
        </div>
    );
};

export default FriendDetails;