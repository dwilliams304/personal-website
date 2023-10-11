import React from "react";
import { useNavigate } from "react-router";


export default function Project(props){
    const {project} = props;
    const nav = useNavigate();


    const toPage = id => {
        nav(`${id}`);
    }
    return(
        <div onClick={() => toPage(project.projID)} 
        className={`project-card`}>
            <div>
                <div className="projDet">
                    <h2 className='project-name'>{project.projName}</h2>
                    <p className='project-description'>{project.projDescription}</p>
                </div>
                <img className='project-img' src={`${project.img}`} alt='project thumbnail'/>
            </div>

            <div className='languages'>
                <p>Language: {project.categories.language}</p>
            </div>

        </div>
    )
}