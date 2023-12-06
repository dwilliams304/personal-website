import React, {useEffect, useState} from "react";
import Project from './Project';

export default function ProjectList(props){
    const initialData = props.projects;
    const [projects, setProjects] = useState(props.projects);
    const [filter, setFilter] = useState('');

    const { projectTypes } = props;

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
        <div className="project-page">
            <h2 className='project-headers page-title'>Here are some of my projects.</h2>
            <p>Clicking on any of these will redirect you to their page giving more description/details.</p>
            <p>You can also select a filter to narrow down the options!</p>
            <div className='filters'>
                <fieldset>
                    <legend>Project Type</legend>
                    <label><input type="radio" name="filter" value="all" onChange={clearFilters}/>&nbsp;All</label>
                    {projectTypes.map((p, i) => {
                        return (
                            <label key={i}>
                                <input type='radio'
                                name='filter'
                                value={p}
                                onChange={switchFilter}
                                />
                            &nbsp;{p}
                            </label>
                        )
                    })}
                </fieldset>
            </div>
            <div className='projects-container'>
                {
                    projects.length === 0 ? 
                    initialData.map((proj, idx) => {
                        return(
                            <Project project={proj} key={idx} />
                        )
                    })
                    : 
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