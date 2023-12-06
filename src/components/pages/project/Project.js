import React from "react";
import { useNavigate } from "react-router";


export default function Project(props){
    const {project} = props;
    const nav = useNavigate();


    const toPage = id => {
        nav(`${id}`);
    }
    return(
        <div onClick={() => toPage(project.project_id)} 
        className={`project-card`}>
            <div>
                <div className="projDet">
                    <h2 className='project-name'>{project.project_name}</h2>
                    <p className='project-description'>{project.project_description}</p>
                </div>
                <img className='project-img' src={project.project_img} alt='project thumbnail'/>
            </div>

            <div className='languages'>
                <p>Language: {project.categories.language}</p>
            </div>

        </div>
    )
}