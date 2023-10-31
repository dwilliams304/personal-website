import React, {useRef, useState} from "react";
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
                <a href='/'>Home</a>
                <a href='/projects'>Projects</a>
                <a href='/' onClick={() => props.openLink("https://forms.gle/fdhfSxEpDU7rsWFX8")}>Contact</a>
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