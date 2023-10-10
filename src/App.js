/* eslint-disable */
import NavBar from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Components/Home';
import ProjectList from './Components/ProjectList';
import ProjectPage from './Components/ProjectPage';
import Contact from './Components/Contact';
import projectsData from './Helpers/Data';
import {Routes, Route} from 'react-router-dom'

const socialLinks = {
  github: 'https://github.com/dwilliams304',
  linkedin: 'https://www.linkedin.com/in/davis-williams4/',
}

function App() {

  const openInNewWindow = (link) => {
    window.open(link);
  }

  const specialAction = () => {
    
  }

  return (
    <div>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='projects' element={<ProjectList projects={projectsData} />} />
          <Route path='contact' element={<Contact />} />
          <Route path='projects/:id' element={<ProjectPage /> } />
        </Routes>
      <Footer openInNewWindow={openInNewWindow} socialLinks={socialLinks}/>
    </div>
  );
}

export default App;
