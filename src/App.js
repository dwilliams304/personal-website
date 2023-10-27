/* eslint-disable */
import NavBar from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Components/Home';
import ProjectList from './Components/ProjectList';
import ProjectPage from './Components/ProjectPage';
import projectsData from './Helpers/Data';
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
          <Route path='projects' element={<ProjectList projects={projectsData} />} />
          <Route path='projects/:id' element={<ProjectPage openInNewWindow={openInNewWindow} /> } />
        </Routes>
      <Footer openInNewWindow={openInNewWindow} socialLinks={socialLinks}/>
    </>
  );
}

export default App;
