import React, { useState, useEffect } from 'react';
import './Projects.css';
import projectImages from './project-img';
import ProjectCard from './ProjectCard/ProjectCard.jsx';

const Projects = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {

      const res = await fetch('https://api.github.com/users/marvin-dev76/repos');
      const data = await res.json();
      let fullProject = {};
      let projectList = [];

      for (let i in data) {

        fullProject = {
          name: data[i].name,
          description: data[i].description,
          repoUrl: data[i].html_url,
          img: projectImages[i],
        }

        projectList = [...projectList, fullProject];
        setProjects(projectList);
      }
    }

    getProjects();
  }, []);

  console.log(projects)

  return (
    <div className="projects" id="projects">
      <div className="container">
        <h1>Projects</h1>
        <div className="project-row">
          {

            projects === [] ? <p>Loading</p> : projects.map((project, key) => (
              <ProjectCard project={project} key={key} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Projects;
