/* eslint-disable */
import './App.css';
import NavBar from './Components/Nav';
import Home from './Components/Home';
import ProjectList from './Components/ProjectList';
import ProjectPage from './Components/ProjectPage';
import Contact from './Components/Contact';
import Data from './Helpers/Data';
import {Routes, Route} from 'react-router-dom'

const socialLinks = {
  github: 'https://github.com/dwilliams304',
  linkedin: '',
  twitter: ''
}



function App() {

  const openLink = (link) => {
    window.open(link);
  }

  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='projects' element={<ProjectList projects={Data} />} />
          <Route path='contact' element={<Contact />} />
          <Route path='projects/:id' element={<ProjectPage /> } />
        </Routes>
    </div>
  );
}

export default App;
