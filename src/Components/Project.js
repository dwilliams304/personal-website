import React from "react";


export default function Project(props){
    const project = props.project;

    const toProject = () => {
        window.open(project.extLink);
    }
    return(
        <div onClick={toProject} 
        className={`project-card`}
        style={{backgroundImage:`url(${project.img})`}}>
            <div>
                <h2 className='project-name projDet'>{project.projName}</h2>
                <p className='project-description projDet'>{project.projDescription}</p>
                {/* <img className='project-img' src={`${project.img}`} /> */}
            </div>

            <div className='languages'>
                {/* {
                    project.categories.language.map(lang => {
                        return (<h2>{lang}//&nbsp;</h2>) //eslint-disable-line
                    })
                } */}
                {project.categories.language}
            </div>

        </div>
    )
}