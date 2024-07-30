import React from 'react';
import SingleUser from '../SingleUser/SingleUser';

const AdminUser = ({adminData}) => {
    return (
        <div>
            <h1>{adminData.length}</h1>
            {/* {
                adminData.map(ad => <SingleUser ad = {ad?.usesData} key={ad._id}></SingleUser>)
            } */}
        </div>
    );
};

export default AdminUser;