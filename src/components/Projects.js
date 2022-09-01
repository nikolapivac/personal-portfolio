import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({projects}) => {

    const cards = projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
    ))
    return(
        <div className="projects">
            <h1 className="projects_title">my projects</h1>
            <div className="projects_container">
                {cards}
            </div>
        </div>
    )
}

export default Projects;