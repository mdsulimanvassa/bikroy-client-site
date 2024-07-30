import React, {  } from 'react';
import './BikroyInfo.css';
import JobsDetails from '../JobsDetails/JobsDetails';

const BikroyInfo = () => {
    const jobs = [
        {
            id:1,
            title:"52,259 ads in Electronics",
            name1:"Desktop Computers",
            name2:"Laptops",
            name3:"TVs",
            name4:"Cameras, Camcorders & Accessories",
            name5:"Audio & Sound Systems",
        },
        {
            id:2,
            title:"18,600 ads in Property",
            name1:"Apartments For Sale",
            name2:"Land",
            name3:"Apartment Rentals",
            name4:"Commercial Property Rentals",
            name5:"Room Rentals",
        },
        {
            id:3,
            title:"712 ads in Jobs",
            name1:"Sales Executive",
            name2:"Marketing Executive",
            name3:"Delivery Rider",
            name4:"Customer Service Jobs",
            name5:"Supervisor",
        },
        {
            id:4,
            title:"23,391 ads in Vehicles",
            name1:"Cars",
            name2:"Motorbikes",
            name3:"Bicycles",
            name4:"Trucks",
            name5:"Auto Parts & Accessories",
        },
    ];
return (
    <section>
        <h3>Quick links</h3>
        <div className="jobs-catagories">
            {
                jobs.map(job => <JobsDetails jobdetail = {job} key={job.id}></JobsDetails>)
            }
        </div>
    </section>
);
};

export default BikroyInfo;