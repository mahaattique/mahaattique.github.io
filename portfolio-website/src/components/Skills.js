import React from 'react';
import '/Users/mahaattique/Documents/GitHub/mahaattique.github.io/portfolio-website/src/styles/Skills.css';

function Skills() {
  const skills = ["Python", "JavaScript", "React", "Machine Learning"];
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
