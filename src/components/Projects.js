import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({projects}) => {

    const cards = projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
    ))
    return(
        <div className="projects">
            <h1 className="projects_title">my projects</h1>
            <p>These are some of the projects I've made in the last couple of years. There's more beginner projects on <a href="https://github.com/nikolapivac" >my GitHub page</a> - I didn't include those here because I usually make them 
                with a lot of help from YouTube tutorials. Here, I tried including only projects that
                I made by myself and found challenging. Some of the projects are deployed so there's a live demo.
            </p>
            <div className="projects_container">
                {cards}
            </div>
        </div>
    )
}

export default Projects;