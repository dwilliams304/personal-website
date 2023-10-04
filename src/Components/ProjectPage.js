import React, { useEffect, useState } from "react";
import Data from "../Helpers/Data";
import { useParams } from "react-router";


function ProjectPage(){
    const { id } = useParams();
    const [project, setProject] = useState(0);

    

    useEffect(() => {
        for(let i = 0; i < Data.length; i++){
            const current = Data[i];
            if(Data[i].projID === parseInt(id)) {
                setProject(current);
                break;
            }
        }
    }, [id])


    return(
        <div className="project-page-container">
            <h2>{project.projName}</h2>
        </div>
    )
}

export default ProjectPage;