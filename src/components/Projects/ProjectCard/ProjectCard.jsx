import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({project}) => {
  return (
    <div className="project-card">
      <h2 className="project-name">{project.name}</h2>
      <p className="project-description">
        {project.description}
      </p>
      <a href={project.repoUrl} className="project-repo-url" target="_blank">
        See code
      </a>
      <img className="project-img" src={project.img} alt="" />
    </div>
  );
}

export default ProjectCard;
