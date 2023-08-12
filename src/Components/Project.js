import React from "react";


export default function Project(props){
    const {project} = props;
    return(
        <div className={`${project.projType} ${project.languages} project-card`}>
            <h2>{project.projName}</h2>
            <p>{project.projDescription}</p>
            <img src={`${project.img}`} />

        </div>
    )
}