// src/pages/Portfolio.jsx
import React from 'react';
import Project from '../components/Project';
import projects from '../data/projects.json'; // Import JSON data
import '../styles/Portfolio.css';

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            imageSrc={project.imageSrc}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
