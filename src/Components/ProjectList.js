import React, {useState} from "react";
import Project from './Project'
import { Link } from "react-router-dom";



export default function ProjectList(props){
    // const projects = props.projects;
    const [projects, setProjects] = useState(props.projects);
    // const [filters, setFilters] = useState([]);
    const filters = [];

    //wip: 

    
    const addFilter = e => {
        const { checked, value } = e.target;
        console.log(`Is checked ${checked} // Name: ${value}`)
        if(checked) filters.push(value);
        else {
            const i = filters.indexOf(value);
            filters.splice(i, 1);
        }
        console.log(filters);
    }

    return(
        <div>
            <h2 className='project-headers page-title'>Here are some of my projects.</h2>
            <div className='filters'>
            <fieldset>
                <legend>Language Used</legend>
                <label><input type="checkbox" name="filter" value="c#" onChange={addFilter}/>&nbsp;C#</label>
                <label><input type="checkbox" name="filter" value="js" onChange={addFilter}/>&nbsp;JavaScript</label>
                <label><input type="checkbox" name="filter" value="python" onChange={addFilter}/>&nbsp;Python</label>
                </fieldset>
                <fieldset>
                <legend>Project Type</legend>
                <label><input type="checkbox" name="filter" value="website" onChange={addFilter}/>&nbsp;Website</label>
                <label><input type="checkbox" name="filter" value="app" onChange={addFilter}/>&nbsp;App</label>
                <label><input type="checkbox" name="filter" value="game" onChange={addFilter}/>&nbsp;Game</label>
            </fieldset>
        </div>
            <div className='projects-container'>
                {
                    projects.map((proj, idx) => {
                        return (
                            <Project project={proj} key={idx}/>
                        )
                    })
                }

            </div>
        </div>
    )
}