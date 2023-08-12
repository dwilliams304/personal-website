import React from "react";
import { Navigators } from "../Helpers/Helpers";
import { useNavigate } from "react-router";



export default function NavBar(props){
    const {GitHub, LinkedIn} = props;
    const nav = useNavigate();
    const toHome = () => {
        nav('/')
    }
    const toProjects = () => {
        nav('/projects')
    }
    
    const toContact = () => {
        nav('/contact')
    }
    
    const toFun = () => {
        nav('/fun')
    }


    return(
        <nav className='container nav-bar'>
            <h2 className='nav-header'>daviswilliams.dev</h2>
            <div className='main-nav'>
                <button className='nav-btn' onClick={toHome}>Home</button>
                <button className='nav-btn' onClick={toProjects}>Projects</button>
                <button className='nav-btn' onClick={toContact}>Contact</button>
                <button className='nav-btn' onClick={toFun}>Fun!</button>
            </div>

        </nav>
    )



}