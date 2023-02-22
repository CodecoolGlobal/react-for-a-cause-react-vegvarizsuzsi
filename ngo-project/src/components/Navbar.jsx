import React, { useState } from 'react';
// import { Button } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);


    //const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    function handleClick(e) {
        closeMobileMenu()
        console.log(e.target.innerText);
        window.location = `#${e.target.innerText}`

    }


    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        BEE HERO
                        <i class='fas fa-heart' />

                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={(e)=> handleClick(e)}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <a
                                href="#about"
                                className='nav-links'
                                onClick={closeMobileMenu}                                
                            >
                                About Us
                            </a>
                                
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/'
                                className='nav-links'
                                onClick={(e)=> handleClick(e)}
                            >
                                Donate
                            </Link>
                        </li>

                    </ul>

                </div>
            </nav>
        </>
    );
}

export default Navbar;