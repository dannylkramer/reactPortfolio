import React from 'react';
import '../styles/Project.css';

const Project = ({ title, imageSrc, liveLink, repoLink }) => {
  return (
    <div className="project">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <a href={liveLink} target="_blank" rel="noopener noreferrer">View Live</a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">View Repo</a>
    </div>
  );
};

export default Project;
