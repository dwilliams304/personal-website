import React from "react";
import { Navigators } from "../Helpers/Helpers";
import { useNavigate } from "react-router";



export default function NavBar(props){
    const {GitHub, LinkedIn} = props;
    const nav = useNavigate();


    return(
        <nav className='nav-bar'>
            <h2 className='nav-header'>daviswilliams.dev</h2>
            <div className='nav-btns'>
                <button className='nav-btn' onClick={() => nav('/')}>Home</button>
                <button className='nav-btn' onClick={() => nav('/projects')}>Projects</button>
                <button className='nav-btn' onClick={() => nav('/contact')}>Contact</button>
            </div>

        </nav>
    )



}