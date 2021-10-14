import React from "react";
import { projects } from "../../utils/Utils";
import "./MyProjects.scss";
const MyProjects = () => {
  return (
    <section id="projects" className="projects__wrapper">
      <h2 className="projects-header">Projects</h2>
      {projects.map((el) => {
        return (
          <div className="projects-content" key={el.id}>
            <article className="projects">
              <div className="projects-text">
                <div className="img">
                  <img src={el.logoimg} alt="logo" />
                </div>
                <div className="projects-container">
                  <h2 className="projects-content-header">{el.header}</h2>
                  <p>{el.paragraph}</p>
                </div>
                <button className="project-btn">
                  <a href={el.url}>View Website</a>
                </button>
              </div>
              <div className="projects-screenshot">
                <img src={el.imgscreenshot} alt="projectScreenshot" />
              </div>
            </article>
          </div>
        );
      })}
    </section>
  );
};

export default MyProjects;
