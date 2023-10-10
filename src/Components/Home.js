import React from "react";
import { useNavigate } from "react-router";



export default function Home(){
    const nav = useNavigate();


    return(
        <div className='home'>
            <h2>Hello</h2>
            <h3>My name is Davis.</h3>
            <p>Welcome to my portfolio.</p>
            <p>Here is some more basic information about me, and who I am.</p>
            <button className='projects-button' onClick={() => nav('/projects')}>Projects //</button>
        </div>
    )
}