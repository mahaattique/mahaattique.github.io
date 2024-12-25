import React from 'react';
import '/Users/mahaattique/Documents/GitHub/mahaattique.github.io/portfolio-website/src/styles/Projects.css';

const projects = [
  { title: "Project 1", description: "Description of Project 1", image: "path/to/image1.png" },
  { title: "Project 2", description: "Description of Project 2", image: "path/to/image2.png" }
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
