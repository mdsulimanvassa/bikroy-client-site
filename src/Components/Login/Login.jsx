import React, { useContext, useState } from 'react';
import './Login.css';
import { useForm } from "react-hook-form";
import { Context } from '../../App';
import { auth } from './Firebase.Config';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const [loggedInUser, setLoggedInUser] = useContext(Context);
    const [info, setInfo] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogle = () => {
        const provider = new GoogleAuthProvider();
        getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signInUser = { name: displayName, email };
                setLoggedInUser(signInUser);
                navigate(from);
            })
            .catch((error) => {
                console.log("Error signing in:", error);
            });
    }
    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const onSubmit = (data) => {
        data.name = info.name;
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: { 
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(idToken => {
            sessionStorage.setItem('token', idToken.token);
            console.log(idToken.token);
        })
        .catch(error => console.error('Error:', error));
        setLoggedInUser(data);
        navigate(from);
    }


    return (
       <div className="middle-aline">
         <section className='login-area'>
            <div className="login-containt">
                <div className="login-pages content">
                    <h2>Login</h2>
                    <div className="button-containt1">
                        {
                            loggedInUser ? <button onClick={handleGoogle} type="button">Sign in with Google</button>
                                : <button onClick={handleGoogle} type="button">Sign up with Google</button>
                        }
                    </div>
                    <div className="shipment-rows">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="">
                                <input onBlur={handleBlur} type='text' name='name' placeholder='Your Name'
                                    {...register('Name', { required: true })} />
                                {errors.Name && <p className='text-danger'>This name is required.</p>}
                            </div>
                            <div className="">
                                <input onBlur={handleBlur} type='email' {...register('email', { required: true })} placeholder='Enter Your Email' />
                                {errors.email && <p className='text-danger'>This email is required.</p>}
                            </div>
                            <div className="">
                                <input onBlur={handleBlur}
                                    type="password" {...register('password', { required: true })} placeholder="Enter Password"/>
                                {errors.password && <p className='text-danger'>This phone number is required.</p>}
                            </div>
                            <div className="">
                                <input type="submit" value="Sign in" />
                            </div>
                        </form >
                    </div>
                </div>
            </div>
        </section>
       </div>
    );
};

export default Login;