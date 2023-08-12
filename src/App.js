import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Nav';
import Home from './Components/Home';
import ProjectList from './Components/ProjectList';
import Contact from './Components/Contact';
import DummyData from './Helpers/DummyData';

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
      <Home />
      <ProjectList projects={DummyData}/>
      <Contact />
      <footer>
        <h2>Property of Davis Williams.</h2>
        <p>Other stuff.</p>
      </footer>
    </div>
  );
}

export default App;
