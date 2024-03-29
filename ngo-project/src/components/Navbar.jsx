import React, { useState } from 'react';
// import { Button } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);

    const [color, setColor] = useState(false);
    
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor);


    // const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(!click);

    function handleClick(e) {  
        setClick(!click);     
        closeMobileMenu()
        window.location = `#${e.target.innerText.replaceAll(' ', '')}`

    }


    return (
        <>
            <div className={color ? 'header header-bg' : 'header'}>
                <nav className='navbar'>
                    <div className='navbar-container'>
                        <a href="#Home" className='navbar-logo' onClick={closeMobileMenu}>
                            BEE HERO
                            <i className='fas fa-heart' />

                        </a>
                        <div className='menu-icon' onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={(e) => handleClick(e)}>
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
                                    onClick={(e) => handleClick(e)}
                                >
                                    Donate
                                </Link>
                            </li>

                        </ul>

                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;