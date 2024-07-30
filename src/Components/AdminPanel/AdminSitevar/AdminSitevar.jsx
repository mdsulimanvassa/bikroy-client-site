import React from 'react';
import './AdminSitevar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileContract, faFolder, faGear, faGripHorizontal, faUserGroup, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AdminSitevar = () => {
    const handleLogout = () => {
        sessionStorage.removeItem('token');
        window.location.replace('/');
    };
    return (
        <div className='sitevar-containt'>
        <div className="sitevar-flex">
            <div className="font-icon">
                <FontAwesomeIcon icon={faGripHorizontal} />
                <Link to ="/dashboard">Dashboard</Link>
            </div>
            <div className="font-icon">
                <FontAwesomeIcon icon={faFolder} />
                <Link to="/appointment">Appointments</Link>
            </div>
            <div className="font-icon">
                <FontAwesomeIcon icon={faUserGroup} />
                <Link to="/#">Patients</Link>
            </div>
            <div className="font-icon">
                <FontAwesomeIcon icon={faFileContract} />
                <Link to="/#">Prescriptions</Link>
            </div>
            <div className="font-icon">
                <FontAwesomeIcon icon={faUserPlus} />
                <Link to="/addaDoctors">Add Doctor</Link>
            </div>
            <div className="font-icon">
                <FontAwesomeIcon icon={faGear} />
                <Link onClick={handleLogout} to="/">Logout</Link>
            </div>
        </div>
    </div>
    );
};

export default AdminSitevar;