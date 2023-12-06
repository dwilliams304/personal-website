import React, {useRef, useState} from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa'; 
import { headers } from '../../data/RandomHeaders';


export default function NavBar(props){
    const navRef = useRef();
    const [headerText, setHeaderText] = useState('daviswilliams');
    const showNav = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    const changeText = () => {
        var randomNumber = Math.floor(Math.random() * headers.length);

        setHeaderText(headers[randomNumber]);
    }

    return(
        <header>
            <h3 onClick={changeText}>{headerText}.portfolio</h3>
            <nav ref={navRef}>
                {/* <a href='/'>Home</a> */}
                <Link className="nav-link" onClick={showNav} to='/'>Home</Link>
                <Link className="nav-link" onClick={showNav} to='/projects'>Projects</Link>
                <span className="nav-link" onClick={() => props.openLink("https://forms.gle/fdhfSxEpDU7rsWFX8")}>Contact</span>
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