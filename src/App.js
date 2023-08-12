import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Nav';
import Home from './Components/Home';
import ProjectList from './Components/ProjectList';
import Project from './Components/Project';
import Contact from './Components/Contact';
import DummyData from './Helpers/Data';
import {Routes, Route} from 'react-router-dom'

const socialLinks = {
  github: '',
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
          <Route path='projects' element={<ProjectList projects={DummyData} />} />
          <Route path='contact' element={<Contact />} />
          <Route path='projects/:id' element={<Project /> } />
        </Routes>
      <footer>
        <h2>Property of Davis Williams.</h2>
        <p>Other stuff.</p>
      </footer>
    </div>
  );
}

export default App;
