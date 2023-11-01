/* eslint-disable */
import NavBar from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import ProjectList from './components/pages/projects/ProjectList';
import ProjectPage from './components/pages/projects/ProjectPage';
import ProjectData from './data/ProjectData';
import {Routes, Route} from 'react-router-dom'

const socialLinks = {
  github: 'https://github.com/dwilliams304',
  linkedin: 'https://www.linkedin.com/in/daviswilliams304/',
}

function App() {

  const openInNewWindow = (link) => {
    window.open(link);
  }


  return (
    <>
      <NavBar openLink={openInNewWindow}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='projects' element={<ProjectList projects={ProjectData} />} />
          <Route path='projects/:id' element={<ProjectPage openInNewWindow={openInNewWindow} /> } />
        </Routes>
      <Footer openInNewWindow={openInNewWindow} socialLinks={socialLinks}/>
    </>
  );
}

export default App;
