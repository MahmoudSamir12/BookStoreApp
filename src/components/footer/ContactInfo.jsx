import React from 'react'

const ContactInfo = () => {
    return (
        <div className='footer-links-item'>
            <h3 className='footer-links-item-title'>Contact Information </h3>
            <div className='footer-address-wrapper'>

                <div className='footer-address-item'>
                    <i className='bi bi-geo-alt-fill'></i>
                    Egypt-Cairo-BeniSuif 
                </div>

                <div className='footer-address-item'>
                    <i className='bi bi-telephone-fill'></i>
                    +20 1234567890
                </div>

                <div className='footer-address-item'>
                    <i className='bi bi-envelope-fill'></i>
                    bookStore@gmail.com
                </div>

            </div>
        </div>
    )
}

export default ContactInfo