import React, { useState } from 'react'
import './forms.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const[showPassword, setShowPassword] = useState(false);

    //Form Submit Handler
    const FormSubmitHandler = (e) => {
        e.preventDefault();

        if(email.trim() === "")  return toast.error("Email is required");
        if(password.trim() === "")  return toast.error("Password is required");
    }

    //Show Password Handler
    const showPasswordHandler = () => {
        setShowPassword(prev => !prev);
    }

    return (
        <div className='form-wrapper'>
            <ToastContainer theme='colored' />
            <h1 className='form-title'>Login to your account</h1>
            <form onSubmit={FormSubmitHandler} className='LoginForm'>
                <input 
                    value={email}  
                    type='email' 
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}  
                />

                <input 
                    value={password} 
                    //type='password' 
                    type={showPassword ? "text" : "password"}
                    placeholder='Password' 
                    onChange={(e) => setPassword(e.target.value)}
                />
                {
                    showPassword ? 
                    ( <i onClick={showPasswordHandler} className='bi bi-eye-slash-fill  show-password-icon'></i>)
                    : 
                    ( <i onClick={showPasswordHandler} className='bi bi-eye-fill show-password-icon'></i> )
                }

                <button className='form-btn'>Login</button>
            </form>
            <div className='form-footer'>
                {`Don't have an accoun?`} {" "}
                <Link to="/register" className='form-link' >
                    Register
                </Link>
            </div>
        </div>
    )
}

export default Login