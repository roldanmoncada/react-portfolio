import React from "react";
import './style.css';

function Project(props) {
  return (
    <>
      {props.projects.map((project) => (
        <div id="containerProject">
          <div className="card">
            <div className="imgbx">
              <img src={project.image} />
            </div>
            <div className="content">
              <h2>{project.title}</h2>
              <p key={project.id}>{project.description}</p>
              <div className="containerProject1">
                <a href={project.repo} className="link">
                  GitHub Repo Link!
                </a>
                <a href={project.site} className="link">
                  Deployed App Link!
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Project;