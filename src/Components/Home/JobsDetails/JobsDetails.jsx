import React from 'react';
import './JobsDetails.css';
import { Link } from 'react-router-dom';

const JobsDetails = (props) => {
    const {title, name1, name2, name3, name4, name5} = props.jobdetail;
    return (
        <div className='job-containt'>
            <h4>{title}</h4>
            <p> <Link>{name1}</Link> | <Link>{name2}</Link> | <Link>{name3}</Link> |
             <Link> {name4}</Link> | <Link>{name5}</Link></p>
        </div>
    );
};

export default JobsDetails;