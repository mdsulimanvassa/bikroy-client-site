import React, { useContext, useState } from 'react';
import './Shipment.css';
import Payment from '../Payment/Payment';
import { useForm } from 'react-hook-form';
import { Context, ProductContext, } from '../../../App';
import { useNavigate } from 'react-router-dom';

const Shipment = () => {
    const navigate = useNavigate();
    const [loggedInUser] = useContext(Context);
    const [products,] = useContext(ProductContext);
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const [payment] = useState(null);
    const [datas, setDatas] = useState({});

    const handleBlur = (e) => {
        const newInfo = { ...datas };
        newInfo[e.target.name] = e.target.value;
        setDatas(newInfo);
    }

    const token = sessionStorage.getItem('token')
    const onSubmit = (data) => {
        // data.name = datas.name;
        console.log(data);
        const userData = { ...data, img: products.img,}
        fetch('http://localhost:5000/api/userAdded', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify( userData),
        })
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                alert(result.msg);
                navigate('/dashboard')
            })
            .catch(error => {
                console.error(error);
            })
    }
   
    return (
        <div className="middle-aline">
            <header className='shipment-containt'>
            <div className="shipment-container">
                <div className="shipment-rows" style={{ display: payment ? 'none' : 'block' }} >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="">
                            <input onBlur={handleBlur} type='text' name='name' placeholder='Your Name'
                                {...register('name', { required: true })} />
                            {errors.name && <p className='text-danger'>This name is required.</p>}
                        </div>
                        <div className="">
                            <input onBlur={handleBlur} type='text' name='email' placeholder='Your email'
                                {...register('email', { required: true })} />
                            {errors.email && <p className='text-danger'>This email is required.</p>}
                        </div>
                        <div className="">
                            <input onBlur={handleBlur} type='text' name='address' {...register('address', { required: true })} placeholder='Enter Your Address' />
                            {errors.address && <p className='text-danger'>This Address is required.</p>}
                        </div>
                        <div className="">
                            <input onBlur={handleBlur}
                                type="tel" name='phone' {...register('phone',  { required: true })} placeholder="Phone Number" pattern="['0-9']{11}" />
                            {errors.phone && <p className='text-danger'>This phone number is required.</p>}
                        </div>
                        <div className="">
                            <input type="submit" value="Submit" />
                        </div>
                    </form >
                </div>
                <div className="" style={{ display: payment ? 'block' : 'none' }} >
                    <Payment></Payment>
                </div>
            </div>
        </header>
        </div>
    );
};

export default Shipment;