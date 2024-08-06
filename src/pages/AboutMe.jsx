// src/pages/AboutMe.jsx
import React from 'react';
import '../styles/AboutMe.css';

const AboutMe = () => {
    return (
        <section>
            <h2>About Me</h2>
            <p> Hello! I'm a passionate beginner in the world of coding, eager to learn and explore. Recently, I
                took my first steps by creating a simple webpage to showcase my portfolio and document my
                learning journey. As I delve into this exciting field, I'm thrilled to share my progress,
                projects, and newfound knowledge. Whether it's HTML, CSS, or JavaScript, I'm embracing each line
                of code with enthusiasm. Join me on this adventure as I transform from a curious novice to a
                confident developer!</p>

            <p> Here on this page you’ll find links to various projects that I’ll continue to update as I grow. Whether
                it’s a personal website, a fun app, or a coding challenge, I’m committed to honing my skills.
                Let’s connect! Feel free to reach out via email, LinkedIn, or Twitter—I’d love to chat about all
                things code! </p>
            <h3>Resume</h3>
            <p>
                Here’s a brief overview of my skills and experiences. For more detailed information, you can download my resume using the link below.
            </p>
            <a href="/path-to-your-resume.pdf" download>Download Resume</a>
        </section>
    );
};

export default AboutMe;
