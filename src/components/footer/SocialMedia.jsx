import React from 'react'

const SocialMedia = () => {
    return (
            <div className='footer-social-media'>
                    <div className='footer-social-media-text'> Follow Us On Social Media </div>
                    <div className='footer-social-media-icons'>

                        <div className='footer-social-media-icon'>
                            <i className='bi bi-instagram'  style={{ color: '#E1306C' }}></i>
                        </div>
                        
                        <div className='footer-social-media-icon'>
                            <i className='bi bi-facebook'  style={{ color: '#3b5998' }}></i>
                        </div>

                        <div className='footer-social-media-icon'>
                            <i className='bi bi-youtube'  style={{ color: '#FF0000' }}></i>
                        </div>

                        <div className='footer-social-media-icon'>
                            <i className='bi bi-twitter'  style={{ color: '#1DA1F2' }}></i>
                        </div>

                        <div className='footer-social-media-icon'>
                            <i className='bi bi-telegram'  style={{ color: '#0088cc' }}></i>
                        </div>

                    </div>
            </div>
    );
}

export default SocialMedia