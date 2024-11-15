import React, { useState } from 'react'
import "./header.css";
import HeaderTop from './HeaderTop';
import HeaderMiddle from './HeaderMiddle';
import HeaderNavBar from './HeaderNavBar';

const Header = () => {

    const[toggle, setToggle] = useState(false);


    return (
        <>
            <header className='header'>
                <HeaderTop  toggle={toggle} setToggle={setToggle} />
                <HeaderMiddle />
                <HeaderNavBar toggle={toggle} setToggle={setToggle} />
            </header>
        </>
    )
}

export default Header