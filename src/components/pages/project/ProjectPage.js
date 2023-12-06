import React, { useEffect, useState } from "react";
import ProjectData from "../../../data/ProjectData";
import { useParams } from "react-router";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; 
import { iconMap } from '../../../data/iconmap';


function ProjectPage(props){
    const { id } = useParams();
    const [project, setProject] = useState(0);
    const [pageData, setPageData] = useState({});

    //Destructure from page's data
    const {bannerImg, techUsed, dateStarted, status, websiteLink, githubLink, fullDescription} = pageData;
    const { openInNewWindow } = props;
    

    useEffect(() => {
        for(let i = 0; i < ProjectData.length; i++){
            const current = ProjectData[i];
            //Set data to be the id of the project that matches id in the url
            if(ProjectData[i].projID === parseInt(id)) {
                setProject(current);
                //Set the page's data so it's a bit easier rather than doing:
                //project.pageData.x
                setPageData(current.pageData);
                break;
            }
        }
    }, [id])

    if(!project) return <h2>Loading data...</h2>
    return(
        <div className="project-page-container">
            <div className="project-page-header-container">
                <img className="project-page-banner" src={`/assets/imgs/projects/${bannerImg}`} alt='banner'
                onClick={() => openInNewWindow(`${websiteLink}`)}/>
                <div className="project-page-header">
                    <h2>{project.projName}</h2>
                    <h3>Tech used: {
                        techUsed.map((tech, i) => {
                            return <span className="tech-icon" key={i}>{iconMap[tech]}</span>
                        })
                    }</h3>
                    <h3>{project.projDescription}</h3>
                    <h4>Started on: {dateStarted}</h4>
                    <h4>Project status: {status}</h4>
                    <h5>Language(s) used: {project.categories.language} </h5>
                    <h5>Project type: {project.categories.type}</h5>
                </div>
                <div className="project-page-extlinks">
                    {/* If there is no github link, show the text */}
                    {
                        githubLink ?  
                            <button onClick={() => openInNewWindow(`${githubLink}`)}><FaGithub /></button> 
                            :
                            <p className="no-link">(private github, sorry.)</p>
                    }
                    {/* If there is no external website link, show the text */}
                    {
                        websiteLink ? 
                        <button onClick={() => openInNewWindow(`${websiteLink}`)}><FaExternalLinkAlt /></button> 
                        :
                        <p className="no-link">(no dedicated website, sorry.)</p>
                    }
                </div>
            </div>

                {/* at every '\n' -> split into a new <p> */}
            <div className="project-page-details">
                {
                        fullDescription.split("\n").map((paragraph, i) => {
                            return <p key={i}>{paragraph}</p>
                        })
                }
            </div>
        </div>
    )
}

export default ProjectPage;