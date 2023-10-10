import React, {useRef} from "react";
import { FaBars, FaTimes } from 'react-icons/fa'; 


export default function NavBar(props){
    const navRef = useRef();

    const showNav = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    return(
        <header>
            <h3>daviswilliams.portfolio</h3>
            <nav ref={navRef}>
                <a href='/'>Home</a>
                <a href='/projects'>Projects</a>
                <a href='/contact'>Contact</a>
                <button className='nav-btn nav-close-btn' onClick={showNav}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNav}>
                <FaBars />
            </button>
        </header>
    )
}