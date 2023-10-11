import React, { useEffect, useState } from "react";
import Data from "../Helpers/Data";
import { useParams } from "react-router";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; 


function ProjectPage(){
    const { id } = useParams();
    const [project, setProject] = useState(0);
    const [pageData, setPageData] = useState({});

    const {bannerImg, dateReleased, websiteLink, githubLink, fullDescription} = pageData;
    

    useEffect(() => {
        for(let i = 0; i < Data.length; i++){
            const current = Data[i];
            if(Data[i].projID === parseInt(id)) {
                setProject(current);
                setPageData(current.pageData);
                break;
            }
        }
    }, [id])

    if(!project) return <h2>Loading data...</h2>
    return(
        <div className="project-page-container">
            <div className="project-page-header">
                <img src={bannerImg} alt='banner'/>
                <h2>{project.projName}</h2>
                <h3>{project.projDescription}</h3>
                <h4>{dateReleased}</h4>
                <h5>Language(s) used: {project.categories.language} </h5>
                <h5>Project type: {project.categories.type}</h5>
            </div>

            <div className="project-page-extlinks">
                {
                    githubLink ?  
                        <button> <FaGithub /> </button> :
                        <p>The Github repository is private, sorry!</p>
                }
                <button>
                    <FaExternalLinkAlt />
                </button>
            </div>

            <div className="project-page-details">
                <p>
                    {fullDescription.split("\n").map((paragraph, i) => {
                        return <p key={i}>{paragraph}</p>
                    })}
                </p>
            </div>
        </div>
    )
}

export default ProjectPage;