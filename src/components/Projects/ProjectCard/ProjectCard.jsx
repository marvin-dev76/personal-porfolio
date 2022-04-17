import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  
  let name = project.name.split("-");
  name = name.join(" ");
  name = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className="project-card">
      <h2 className="project-name">{name}</h2>
      <img className="project-img" src={project.img} alt="" />
      <p className="project-description">{project.description}</p>
      <a
        href={project.repoUrl}
        className="project-repo-url"
        target="_blank"
        rel="noreferrer"
      >
        See code
      </a>
      <a
        href={project.deploy_url}
        className="project-live-url"
        target="_blank"
        rel="noreferrer"
      >
        View Live
      </a>
      <h3 className="technologies-title">Technologies used in the project</h3>
      <div className="icons-container">
        {project.icons.map((icon, key) => (
          <p key={key} className="project-icon">
            <i className={icon}></i>
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
