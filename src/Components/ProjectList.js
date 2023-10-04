import React, {useEffect, useState} from "react";
import Project from './Project'

export default function ProjectList(props){
    const initialData = props.projects;
    const [projects, setProjects] = useState(initialData);
    const [filter, setFilter] = useState('');
    
    useEffect(() => {
        if(filter){
            const projs = [];
            initialData.forEach(proj => {
                if(proj.categories.type === filter) projs.push(proj)
            });
            setProjects(projs);
        }
    }, [filter]) //eslint-disable-line
    
    const switchFilter = e => setFilter(e.target.value);

    const clearFilters = () => {
        setFilter('');
        setProjects(initialData);
    }

    return(
        <div>
            <h2 className='project-headers page-title'>Here are some of my projects.</h2>
            <h4>Clicking on any of these will redirect you to either a dedicated project
                page hosted elsewhere, or the github page.
            </h4>
            <div className='filters'>
            <fieldset>
                <legend>Project Type</legend>
                <label><input type="radio" name="filter" value="all" onChange={clearFilters}/>&nbsp;All</label>
                <label><input type="radio" name="filter" value="website" onChange={switchFilter}/>&nbsp;Website</label>
                <label><input type="radio" name="filter" value="app" onChange={switchFilter}/>&nbsp;App</label>
                <label><input type="radio" name="filter" value="game" onChange={switchFilter}/>&nbsp;Game</label>
            </fieldset>
        </div>
            <div className='projects-container'>
                {
                    projects.length !== 0 ? projects.map((proj, idx) => {
                        return (
                            <Project project={proj} key={idx}/>
                        )
                    }) 
                    : <h2 className="no-projs-header">No projects currently under "{filter}"! (Check back later)</h2>
                }

            </div>
        </div>
    )
}