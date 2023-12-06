import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; 
import { iconMap } from '../../../data/iconmap';


function ProjectPage(props){
    const { id } = useParams();
    const [projectData, setProjectData] = useState(null);
    

    //Destructure from page's data
    const { getSpecificData, openInNewWindow } = props;
    

    useEffect(() => {
        getSpecificData(parseInt(id))
            .then(setProjectData)
    }, [id, getSpecificData])


    if(!projectData) return <h2>Loading data...</h2>
    return(
        <div className="project-page-container">
            <div className="project-page-header-container">
                <img className="project-page-banner" src={projectData.project_img} alt='banner'
                onClick={() => openInNewWindow(projectData.website_link ? projectData.website_link : projectData.github_link)}/>
                <div className="project-page-header">
                    <h2>{projectData.project_name}</h2>
                    <h3>Tech used: {
                        projectData.tech_used.map((tech, i) => {
                            return <span className="tech-icon" key={i}>{iconMap[tech]}</span>
                        })
                    }</h3>
                    <h3>{projectData.project_description}</h3>
                    <h4>Started on: {projectData.date_started}</h4>
                    <h4>Project status: {projectData.status}</h4>
                    <h5>Language(s) used: {projectData.categories.language} </h5>
                    <h5>Project type: {projectData.categories.type}</h5>
                </div>
                <div className="project-page-extlinks">
                    {/* If there is no external website link, show the text */}
                    {
                        projectData.links[0] ? 
                        <button onClick={() => openInNewWindow(projectData.links[0])}><FaExternalLinkAlt /></button> 
                        :
                        <p className="no-link">(no website, sorry.)</p>
                    }
                    {/* If there is no github link, show the text */}
                    {
                        projectData.links[1] ?  
                            <button onClick={() => openInNewWindow(projectData.links[1])}><FaGithub /></button> 
                            :
                            <p className="no-link">(private github, sorry.)</p>
                    }
                </div>
            </div>

            <div className="project-page-details">
                <h2>What's this project about?</h2>
                {
                        projectData.full_description.map((paragraph, i) => {
                            return <p key={i}>{paragraph}</p>
                        })
                }
            </div>
        </div>
    )
}

export default ProjectPage;