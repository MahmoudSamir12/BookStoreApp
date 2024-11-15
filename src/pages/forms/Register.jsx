import React, { useState } from 'react'
import './forms.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");


    //Form Submit Handler
    const FormSubmitHandler = (e) => {
        e.preventDefault();

        if(username.trim() === "")  return toast.error("User is required");
        if(email.trim() === "")  return toast.error("Email is required");
        if(password.trim() === "")  return toast.error("Password is required");
    }

    return (
        <div className='form-wrapper'>
            <ToastContainer theme='colored' />
            <h1 className='form-title'>{`Create new account`}</h1>
            <form onSubmit={FormSubmitHandler} className='RegisterForm'>
                <input 
                    value={username}  
                    type='text' 
                    placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)}  
                />

                <input 
                    value={email}  
                    type='email' 
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}  
                />

                <input 
                    value={password} 
                    type='password' 
                    placeholder='Password' 
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className='form-btn'>Register</button>
            </form>
            <div className='form-footer'>
                {`Have an accoun?`} {" "}
                <Link to="/login" className='form-link' >
                    Login
                </Link>
            </div>
        </div>
    )    
}

export default Register
