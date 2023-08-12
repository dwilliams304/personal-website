import React from "react";
import Project from './Project'
import { Link } from "react-router-dom";

const sampleProject = {
    projName: 'Test Project',
    projDescription: 'This is just a test description',
    img: 'thumb',
    languages: ['JS', 'C#', 'Python'],
    projType: ['Website', 'App', 'Game'],
    extLink: ''
}

export default function ProjectList(props){
    const {projects} = props;
    return(
        <div>
            <h2 className='project-headers page-title'>Here are some of my projects.</h2>
            <div className='filters'>
            <fieldset>
                <legend>Language Used</legend>
                <label><input type="checkbox" name="filter" value="csharp" />&nbsp;C#</label>
                <label><input type="checkbox" name="filter" value="javascript" />&nbsp;JavaScript</label>
                <label><input type="checkbox" name="filter" value="python" />&nbsp;Python</label>
                </fieldset>
                <fieldset>
                <legend>Project Type</legend>
                <label><input type="checkbox" name="filter" value="websites" />&nbsp;Websites</label>
                <label><input type="checkbox" name="filter" value="apps" />&nbsp;Apps</label>
                <label><input type="checkbox" name="filter" value="games" />&nbsp;Games</label>
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