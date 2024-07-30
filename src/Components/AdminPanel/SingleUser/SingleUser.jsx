import React from 'react';
import './SingleUser.css';

const SingleUser = ({ad}) => {
    console.log(ad);
    return (
        <div>
            <h1>Name: {ad.userName}</h1>
        </div>
    );
};

export default SingleUser;