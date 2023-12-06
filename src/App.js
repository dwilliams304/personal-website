/* eslint-disable */
import React, {useState, useEffect} from 'react';
import NavBar from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import ProjectList from './components/pages/project/ProjectList';
import ProjectPage from './components/pages/project/ProjectPage';
import {Routes, Route} from 'react-router-dom';
import { socialLinks, projectTypes } from './data';
import { supabase } from './supabaseClient';


function App() {
  const [projectsData, setProjectsData] = useState([]);

  const openInNewWindow = (link) => {
    window.open(link);
  }

  useEffect(() => {
    if(projectsData.length === 0){
      getProjectData();
    }
  }, [])

  async function getProjectData(){
    try{
      const { data, error } = await supabase
        .from('projects')
        .select('*');
      
        if(data != null) setProjectsData(data);
    }
    catch(error){
      alert(error.message);
    }
  }

  return (
    <>
      <NavBar openLink={openInNewWindow}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='projects' element={
            <ProjectList 
              projects={projectsData} 
              projectTypes={projectTypes} />
          } />
          <Route path='projects/:id' element={
            <ProjectPage 
              openInNewWindow={openInNewWindow}
              projects={projectsData}
              /> } 
          />
        </Routes>
      <Footer openInNewWindow={openInNewWindow} socialLinks={socialLinks}/>
    </>
  );
}

export default App;
