import React from "react";
import { useNavigate } from "react-router";



export default function Home(){
    const nav = useNavigate();


    return(
        <div className='home'>
            <h2>Hello.</h2>
            <img className="img-coin" src="https://media.licdn.com/dms/image/D5603AQHEj5uIBI3Qdg/profile-displayphoto-shrink_200_200/0/1693500191424?e=1707350400&v=beta&t=i3MSpn-IkIRI_msHHWiBAy8cagf6-05_d4_sZxbaBg0" alt="headshot"/>
            <div className="container ">
                <div className="introduction about-me">
                    <h2>My name is Davis.</h2>
                    <p>Welcome to my portfolio.</p>
                    <p>I'm a Fullstack Web Developer with a strong foundation in customer 
                        service and a passion for creating user-centric web applications. Currently, I am 
                        proficient in using JavaScript, ReactJS, and C#. 
                    </p>
                    <p>This website is designed to show off all projects I've worked on and is also to
                        help showcase some of my skills with designing, programming,  and anything else
                        related to web development!
                    </p>
                    <p> I absolutely love designing and developing things that people can interact with like websites,
                        games, software, anything of the like. If you ever want to collaborate, work with me, or just
                        in general contact me for any reason, feel free to fill out the contact form - I'd love to chat!
                    </p>
                </div>
                <div className="skills about-me">
                    <h3>Here Are Some of My Skills:</h3>
                    <p>JavaScript, C#, ReactJS, Redux, NodeJS, HTML, CSS, REST APIs, Frontend/Backend Development,
                        Game Development, Unity Engine, Unreal Engine</p>
                </div>

            </div>
            <button className='projects-btn' onClick={() => nav('/projects')}>Projects //</button>
        </div>
    )
}