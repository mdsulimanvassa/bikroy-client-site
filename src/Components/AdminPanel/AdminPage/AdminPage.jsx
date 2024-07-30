import React, { useContext, useEffect, useState } from 'react';
import './AdminPage.css';
import AdminSitevar from '../AdminSitevar/AdminSitevar';
import AdminUser from '../AdminUser/AdminUser';
import { adminContext,  } from '../../../App';

const AdminPage = () => {
    const [adminData, setAdminData] = useState([]);
    // const [loggedInUser] = useContext(Context);
    // const [products] = useContext(ProductContext)
    useEffect(() => {
        fetch('http://localhost:5000/api/adminRead')
            .then(res => res.json())
            .then(data => setAdminData(data))
            .catch(error => console.error(error));
    }, [adminData]);
    return (
        <section className='dashboard-containt'>
        <div className="display-containt">
            <div className="">
                <AdminSitevar></AdminSitevar>
            </div>
            <div className="">
                <AdminUser adminData = {adminData}></AdminUser>
            </div>
        </div>
    </section>
    );
};

export default AdminPage;