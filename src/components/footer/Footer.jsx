import React from 'react'
import './footer.css'
import SocialMedia from './SocialMedia'
import UsefulLinks from './UsefulLinks'
import ContactInfo from './ContactInfo'
import AboutUs from './AboutUs'

const Footer = () => {
    return (
        <div className='footer'>
            <SocialMedia />
            <div className='footer-links-wrapper'>
                <UsefulLinks />
                <ContactInfo />
                <AboutUs />
            </div>
        </div>
    )
}

export default Footer