import React from 'react'
import { Link } from 'react-router-dom';

const UsefulLinks = () => {
    return (
        <div className='footer-links-item'>

            <h3 className='footer-links-item-title'> Useful Links </h3>
            <ul className='footer-links'>
                <Link to="/" className='footer-link' >Home</Link>
                <Link to="/authors" className='footer-link' >Authors</Link>
                <Link to="/about" className='footer-link' >About Us</Link>
                <Link to="/contact" className='footer-link' >Contact Us</Link>
                <Link to="/register" className='footer-link' >Register</Link>
            </ul>
        </div>

    );
}

export default UsefulLinks