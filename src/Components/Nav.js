import React from "react";



export default function NavBar(props){
    const {GitHub, LinkedIn} = props;
    return(
        <nav className='container nav-bar'>
            <h2 className='nav-header'>daviswilliams.dev</h2>
            <div className='main-nav'>
                <button className='nav-btn'>Home</button>
                <button className='nav-btn'>Projects</button>
                <button className='nav-btn'>Contact</button>
                <button className='nav-btn'>Fun!</button>
            </div>

        </nav>
    )



}