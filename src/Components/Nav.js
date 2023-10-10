import React, {useRef, useState, useEffect} from "react";
import { FaBars, FaTimes } from 'react-icons/fa'; 


export default function NavBar(props){
    const navRef = useRef();
    const [headerText, setHeaderText] = useState('daviswilliams.portfolio');
    const showNav = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    const changeText = () => {
        setHeaderText('dvaisliwlsima.protfolio');
    }

    return(
        <header>
            <h3 onClick={changeText}>{headerText}</h3>
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