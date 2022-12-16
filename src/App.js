import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from "./Project"
import projectData from "./project-data";
import React, {useState} from 'react'

// Load project data
projectData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
  item.projectPage = process.env.PUBLIC_URL + "/ProjectPages/" + item.projectPage;
})

// CV link
var cvLink =  process.env.PUBLIC_URL + "/resources/CV_Happy_Sifaka.pdf"

function App() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className = "App">      
      <div className = "title-page" id = "about-me">  
      
        <nav class = "navbar navbar-expand-sm navbar-light">
            <div class="container-fluid">
                <div class = "collapse navbar-collapse sticky justify-content-center">
                    <ul class = "navbar-nav ml-auto">
                        <li class = "navbar-item"><a href = "#title-page" class = "nav-link">About Me</a></li>
                        <li class = "navbar-item"><a href = "#portfolio-page" class = "nav-link">Portfolio</a></li>
                        <li class = "navbar-item"><a href = {cvLink} class = "nav-link">CV</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class = "title-content" id = "title-page">
          <h1 class = "display-1 text-light">Happy Sifika</h1>
          <h2 class = "text-light">I am a first-year computer science PhD student at Brown University working under the supervision of 
            Prof. James Tompkin. 
            Previously, I received my undergraduate degrees at Duke University in computer science (BS) 
            and art history (AB). My research interests include augmented reality (AR) and 
            virtual reality (VR) technologies, digital interface designs using intuitive metaphors, 
            and novel uses of game engines. 
            To learn more about my interdisciplinary projects,
            bridging computer science to art history, social science, 
            and mathematics, please scroll down to see my portfolio below! </h2>
        </div>
      </div>

      <div id = "portfolio-page">
        <h1 class = "display-1 section-title">Portfolio</h1>
        {projectData.map((item, index) => (
          <Project item = {item} updateFunction = {setOpenModal}/>
        ))}
      </div>
     
    </div>
    
  );
}

export default App;
